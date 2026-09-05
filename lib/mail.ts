import nodemailer from "nodemailer";

export type MailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  to: string;
  from: string;
};

export function getMailConfig(): MailConfig {
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
  if (missingKeys.length)
    throw new Error(`Missing mail configuration: ${missingKeys.join(", ")}`);
  const port = Number(process.env.SMTP_PORT);
  const secureValue = process.env.SMTP_SECURE?.toLowerCase();
  if (!Number.isInteger(port) || port < 1 || port > 65_535)
    throw new Error("SMTP_PORT must be a valid port number.");
  if (secureValue !== "true" && secureValue !== "false")
    throw new Error('SMTP_SECURE must be either "true" or "false".');
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

export function createMailTransport() {
  const config = getMailConfig();
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    requireTLS: !config.secure,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    auth: { user: config.user, pass: config.pass },
  });
  return { config, transporter };
}
