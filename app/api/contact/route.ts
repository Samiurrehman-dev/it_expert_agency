import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import {
  contactAutoReplyHtml,
  contactAutoReplyText,
  contactNotificationHtml,
  contactNotificationText,
} from "@/lib/emailTemplates/contact";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = {
  name: 100,
  email: 254,
  phone: 30,
  subject: 150,
  message: 5_000,
} as const;

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  contact_check?: unknown;
};

type MailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  to: string;
  from: string;
};

type SmtpError = Error & {
  code?: string;
  responseCode?: number;
};

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function getMailConfig(): MailConfig {
  const requiredKeys = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_SECURE",
    "SMTP_USER",
    "SMTP_PASS",
    "MAIL_TO",
    "MAIL_FROM",
  ] as const;
  const missingKeys = requiredKeys.filter((key) => !process.env[key]?.trim());

  if (missingKeys.length > 0) {
    throw new Error(`Missing mail configuration: ${missingKeys.join(", ")}`);
  }

  const port = Number(process.env.SMTP_PORT);
  const secureValue = process.env.SMTP_SECURE?.toLowerCase();

  if (!Number.isInteger(port) || port < 1 || port > 65_535) {
    throw new Error("SMTP_PORT must be a valid port number.");
  }

  if (secureValue !== "true" && secureValue !== "false") {
    throw new Error('SMTP_SECURE must be either "true" or "false".');
  }

  return {
    host: process.env.SMTP_HOST!,
    port,
    secure: secureValue === "true",
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
    to: process.env.MAIL_TO!,
    from: process.env.MAIL_FROM!,
  };
}

function getPublicMailError(error: unknown): string {
  if (!(error instanceof Error)) {
    return "We couldn’t send your message. Please try again later.";
  }

  const smtpError = error as SmtpError;

  if (error.message.startsWith("Missing mail configuration")) {
    return "The email service is not configured correctly.";
  }

  if (smtpError.code === "EAUTH" || smtpError.responseCode === 535) {
    return "SMTP authentication failed. Please check the SMTP username and password.";
  }

  if (smtpError.code === "EDNS") {
    return "The SMTP server address could not be resolved.";
  }

  if (smtpError.code === "ECONNECTION" || smtpError.code === "ETIMEDOUT") {
    return "Could not reach the SMTP server on port 587. Check network and endpoint access.";
  }

  if (smtpError.code === "ESOCKET") {
    return "The SMTP STARTTLS handshake failed.";
  }

  if (
    smtpError.code === "EENVELOPE" ||
    smtpError.responseCode === 550 ||
    smtpError.responseCode === 553 ||
    smtpError.responseCode === 554
  ) {
    return "The SMTP server rejected the sender or recipient address.";
  }

  return "The SMTP server rejected the message. Please check the server logs.";
}

export async function POST(request: Request) {
  try {
    let body: ContactRequest;

    try {
      body = (await request.json()) as ContactRequest;
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 },
      );
    }

    if (getString(body.contact_check)) {
      return NextResponse.json(
        { error: "Unable to process this request." },
        { status: 400 },
      );
    }

    const name = getString(body.name);
    const email = getString(body.email).toLowerCase();
    const phone = getString(body.phone);
    const subject = getString(body.subject);
    const message = getString(body.message);

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 },
      );
    }

    if (!EMAIL_PATTERN.test(email) || email.length > MAX_LENGTHS.email) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (/[\r\n]/.test(subject)) {
      return NextResponse.json(
        { error: "Please provide a valid subject." },
        { status: 400 },
      );
    }

    const exceedsLengthLimit =
      name.length > MAX_LENGTHS.name ||
      phone.length > MAX_LENGTHS.phone ||
      subject.length > MAX_LENGTHS.subject ||
      message.length > MAX_LENGTHS.message;

    if (exceedsLengthLimit) {
      return NextResponse.json(
        { error: "One or more fields exceed the allowed length." },
        { status: 400 },
      );
    }

    const config = getMailConfig();
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      requireTLS: !config.secure,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });

    const submittedAt = new Date();
    const templateData = {
      name,
      email,
      phone,
      subject,
      message,
      submittedAt,
    };

    await transporter.sendMail({
      from: config.from,
      to: config.to,
      replyTo: email,
      subject: `Website contact: ${subject}`,
      text: contactNotificationText(templateData),
      html: contactNotificationHtml(templateData),
    });

    try {
      await transporter.sendMail({
        from: config.from,
        to: email,
        subject: "Thank you for contacting IT Experts Agency",
        text: contactAutoReplyText({ name }),
        html: contactAutoReplyHtml({ name }),
      });
    } catch (error) {
      // The business notification was delivered, so an auto-reply failure should
      // not encourage the user to resubmit the same enquiry.
      console.error("Contact form auto-reply failed:", error);
    }

    return NextResponse.json(
      { message: "Thank you for contacting us. We’ll be in touch soon." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      { error: getPublicMailError(error) },
      { status: 500 },
    );
  }
}
