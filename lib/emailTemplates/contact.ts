const BRAND = {
  name: "IT Experts Agency",
  websiteUrl: "https://itexpertsagency.com",
  logoUrl: "https://itexpertsagency.com/images/it-experts-logo-on-light.png",
  phoneDisplay: "0323-3959043",
  phoneUrl: "tel:+923233959043",
  address: "Bahria Town, Karachi",
  orange: "#e57a25",
  orangeDark: "#d56f1d",
  charcoal: "#363839",
  text: "#333333",
  muted: "#747474",
  border: "#e0dede",
  warmBackground: "#fff8f1",
  pageBackground: "#f6f6f6",
} as const;

const EMAIL_FONT = "'Manrope', 'Segoe UI', Helvetica, Arial, sans-serif";

export type ContactAutoReplyTemplateParams = {
  name: string;
};

export type ContactNotificationTemplateParams = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  submittedAt?: Date;
};

type EmailDocumentParams = {
  preheader: string;
  content: string;
  footerNote: string;
};

/** Escapes all user-controlled values before they are inserted into HTML. */
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });
}

function preserveLineBreaks(value: string): string {
  return escapeHtml(value).replace(/\r\n|\r|\n/g, "<br />");
}

function formatSubmissionTime(date: Date): string {
  const formattedDate = new Intl.DateTimeFormat("en-PK", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Karachi",
  }).format(date);

  return `${formattedDate} PKT`;
}

function renderFooter(note: string): string {
  const year = new Date().getFullYear();

  return `
    <tr>
      <td style="padding: 22px 32px; border-top: 1px solid ${BRAND.border}; background-color: ${BRAND.warmBackground}; text-align: center; font-family: ${EMAIL_FONT};">
        <p style="margin: 0 0 6px; color: ${BRAND.muted}; font-size: 12px; line-height: 18px;">
          &copy; ${year} ${BRAND.name}. All rights reserved.
        </p>
        <p style="margin: 0; color: ${BRAND.muted}; font-size: 12px; line-height: 18px;">
          ${escapeHtml(note)}
        </p>
      </td>
    </tr>`;
}

function renderEmailDocument({
  preheader,
  content,
  footerNote,
}: EmailDocumentParams): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no" />
    <title>${BRAND.name}</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: ${BRAND.pageBackground}; font-family: ${EMAIL_FONT}; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <div style="display: none; max-height: 0; overflow: hidden; opacity: 0; color: transparent; line-height: 1px; font-size: 1px;">
      ${escapeHtml(preheader)}
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width: 100%; border-collapse: collapse; background-color: ${BRAND.pageBackground};">
      <tr>
        <td align="center" style="padding: 32px 12px;">
          <!--[if mso]><table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0"><tr><td><![endif]-->
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width: 100%; max-width: 600px; border-collapse: separate; border-spacing: 0; overflow: hidden; background-color: #ffffff; border: 1px solid ${BRAND.border}; border-radius: 16px; box-shadow: 0 12px 36px rgba(54, 56, 57, 0.10);">
            <tr>
              <td height="6" style="height: 6px; background-color: ${BRAND.orange}; font-size: 0; line-height: 0;">&nbsp;</td>
            </tr>
            <tr>
              <td align="center" style="padding: 28px 32px 24px; background-color: #ffffff;">
                <a href="${BRAND.websiteUrl}" target="_blank" style="text-decoration: none;">
                  <img src="${BRAND.logoUrl}" width="190" alt="${BRAND.name}" style="display: block; width: 190px; max-width: 100%; height: auto; border: 0; outline: none; text-decoration: none;" />
                </a>
              </td>
            </tr>
            ${content}
            ${renderFooter(footerNote)}
          </table>
          <!--[if mso]></td></tr></table><![endif]-->
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/** Returns the branded HTML confirmation sent to the contact form submitter. */
export function contactAutoReplyHtml({
  name,
}: ContactAutoReplyTemplateParams): string {
  const safeName = escapeHtml(name);

  return renderEmailDocument({
    preheader:
      "We received your message and an IT Experts Agency team member will be in touch soon.",
    footerNote:
      "This is an automated message, please do not reply directly to this email.",
    content: `
      <tr>
        <td style="padding: 4px 40px 36px; background-color: #ffffff; font-family: ${EMAIL_FONT}; color: ${BRAND.text};">
          <h1 style="margin: 0 0 20px; color: ${BRAND.charcoal}; font-family: ${EMAIL_FONT}; font-size: 20px; font-weight: 700; line-height: 28px;">
            Hi ${safeName},
          </h1>
          <p style="margin: 0 0 16px; color: ${BRAND.text}; font-family: ${EMAIL_FONT}; font-size: 15px; line-height: 24px;">
            Thank you for contacting ${BRAND.name}. We have received your message, and a member of our team will be in touch soon.
          </p>
          <p style="margin: 0 0 26px; color: ${BRAND.text}; font-family: ${EMAIL_FONT}; font-size: 15px; line-height: 24px;">
            We typically respond within 24 hours during business days.
          </p>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="border-collapse: separate;">
            <tr>
              <td align="center" bgcolor="${BRAND.orange}" style="border-radius: 8px; background-color: ${BRAND.orange};">
                <a href="${BRAND.websiteUrl}" target="_blank" style="display: inline-block; padding: 13px 22px; border: 1px solid ${BRAND.orange}; border-radius: 8px; color: #ffffff; font-family: ${EMAIL_FONT}; font-size: 14px; font-weight: 700; line-height: 18px; text-decoration: none;">
                  Visit our website
                </a>
              </td>
            </tr>
          </table>
          <div style="height: 1px; margin: 30px 0 24px; background-color: ${BRAND.border}; font-size: 0; line-height: 0;">&nbsp;</div>
          <p style="margin: 0 0 10px; color: ${BRAND.text}; font-family: ${EMAIL_FONT}; font-size: 13px; line-height: 20px;">
            Best regards,
          </p>
          <p style="margin: 0 0 8px; color: ${BRAND.orangeDark}; font-family: ${EMAIL_FONT}; font-size: 14px; font-weight: 700; line-height: 20px;">
            IT Experts Agency Team
          </p>
          <p style="margin: 0; color: ${BRAND.muted}; font-family: ${EMAIL_FONT}; font-size: 13px; line-height: 21px;">
            <a href="${BRAND.websiteUrl}" target="_blank" style="color: ${BRAND.orangeDark}; text-decoration: underline;">itexpertsagency.com</a><br />
            <a href="${BRAND.phoneUrl}" style="color: ${BRAND.text}; text-decoration: none;">${BRAND.phoneDisplay}</a><br />
            ${BRAND.address}
          </p>
        </td>
      </tr>`,
  });
}

/** Returns the plain-text fallback for the contact form submitter. */
export function contactAutoReplyText({
  name,
}: ContactAutoReplyTemplateParams): string {
  return [
    `Hi ${name},`,
    "",
    `Thank you for contacting ${BRAND.name}. We have received your message, and a member of our team will be in touch soon.`,
    "",
    "We typically respond within 24 hours during business days.",
    "",
    `Visit our website: ${BRAND.websiteUrl}`,
    "",
    "Best regards,",
    "IT Experts Agency Team",
    BRAND.websiteUrl,
    BRAND.phoneDisplay,
    BRAND.address,
    "",
    "This is an automated message, please do not reply directly to this email.",
  ].join("\n");
}

function renderDataRow(label: string, value: string): string {
  return `
    <tr>
      <th scope="row" valign="top" width="120" style="width: 120px; padding: 13px 14px; border-bottom: 1px solid ${BRAND.border}; background-color: ${BRAND.warmBackground}; color: ${BRAND.muted}; font-family: ${EMAIL_FONT}; font-size: 13px; font-weight: 700; line-height: 20px; text-align: left;">
        ${label}
      </th>
      <td valign="top" style="padding: 13px 14px; border-bottom: 1px solid ${BRAND.border}; color: ${BRAND.text}; font-family: ${EMAIL_FONT}; font-size: 14px; line-height: 21px; overflow-wrap: anywhere; word-break: break-word;">
        ${value}
      </td>
    </tr>`;
}

/** Returns the branded HTML summary delivered to the internal team. */
export function contactNotificationHtml({
  name,
  email,
  phone,
  subject,
  message,
  submittedAt = new Date(),
}: ContactNotificationTemplateParams): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeSubject = escapeHtml(subject);
  const safeMessage = preserveLineBreaks(message);
  const safeSubmittedAt = escapeHtml(formatSubmissionTime(submittedAt));

  return renderEmailDocument({
    preheader: `New website contact request from ${name}.`,
    footerNote:
      "This notification was generated automatically from the website contact form.",
    content: `
      <tr>
        <td style="padding: 4px 32px 36px; background-color: #ffffff; font-family: ${EMAIL_FONT}; color: ${BRAND.text};">
          <h1 style="margin: 0 0 10px; color: ${BRAND.charcoal}; font-family: ${EMAIL_FONT}; font-size: 20px; font-weight: 700; line-height: 28px;">
            New website contact request
          </h1>
          <p style="margin: 0 0 24px; color: ${BRAND.muted}; font-family: ${EMAIL_FONT}; font-size: 14px; line-height: 22px;">
            A new enquiry was submitted through the IT Experts Agency contact form. Replying to this email will respond directly to the sender.
          </p>
          <table width="100%" cellspacing="0" cellpadding="0" border="0" style="width: 100%; border-collapse: separate; border-spacing: 0; overflow: hidden; border: 1px solid ${BRAND.border}; border-radius: 10px;">
            ${renderDataRow("Name", safeName)}
            ${renderDataRow(
              "Email",
              `<a href="mailto:${safeEmail}" style="color: ${BRAND.orangeDark}; text-decoration: underline;">${safeEmail}</a>`,
            )}
            ${renderDataRow("Phone", safePhone)}
            ${renderDataRow("Subject", safeSubject)}
            ${renderDataRow("Submitted", safeSubmittedAt)}
            <tr>
              <th scope="col" colspan="2" style="padding: 13px 14px 6px; background-color: ${BRAND.warmBackground}; color: ${BRAND.muted}; font-family: ${EMAIL_FONT}; font-size: 13px; font-weight: 700; line-height: 20px; text-align: left;">
                Message
              </th>
            </tr>
            <tr>
              <td colspan="2" style="padding: 8px 14px 16px; background-color: ${BRAND.warmBackground}; color: ${BRAND.text}; font-family: ${EMAIL_FONT}; font-size: 14px; line-height: 22px; overflow-wrap: anywhere; word-break: break-word;">
                ${safeMessage}
              </td>
            </tr>
          </table>
        </td>
      </tr>`,
  });
}

/** Returns the plain-text fallback for the internal contact notification. */
export function contactNotificationText({
  name,
  email,
  phone,
  subject,
  message,
  submittedAt = new Date(),
}: ContactNotificationTemplateParams): string {
  return [
    "New website contact request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Subject: ${subject}`,
    `Submitted: ${formatSubmissionTime(submittedAt)}`,
    "",
    "Message:",
    message,
  ].join("\n");
}
