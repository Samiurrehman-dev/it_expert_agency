const BRAND = {
  navy: "#0f2742",
  orange: "#f97316",
  text: "#334155",
  websiteUrl: "https://itexpertsagency.com",
};

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character]!,
  );
}

export function passwordResetText({
  name,
  resetUrl,
}: {
  name: string;
  resetUrl: string;
}) {
  return `Hello ${name},\n\nUse this link to reset your IT Experts Agency password. It expires in one hour:\n${resetUrl}\n\nIf you did not request this, you can ignore this email.`;
}

export function passwordResetHtml({
  name,
  resetUrl,
}: {
  name: string;
  resetUrl: string;
}) {
  const safeName = escapeHtml(name);
  const safeUrl = escapeHtml(resetUrl);
  return `<!doctype html><html><body style="margin:0;background:#f8fafc;font-family:Arial,sans-serif;color:${BRAND.text}"><table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr><td align="center" style="padding:32px 16px"><table role="presentation" width="100%" style="max-width:600px;background:#fff;border-radius:16px;overflow:hidden"><tr><td style="background:${BRAND.navy};padding:28px;color:#fff"><h1 style="margin:0;font-size:24px">Reset your password</h1></td></tr><tr><td style="padding:32px"><p>Hello ${safeName},</p><p>We received a request to reset your IT Experts Agency password. This secure link expires in one hour.</p><p style="margin:28px 0"><a href="${safeUrl}" style="display:inline-block;background:${BRAND.orange};color:#fff;text-decoration:none;font-weight:bold;padding:13px 22px;border-radius:8px">Reset password</a></p><p>If you did not request this, you can safely ignore this email.</p><p style="font-size:12px;color:#64748b">${BRAND.websiteUrl}</p></td></tr></table></td></tr></table></body></html>`;
}
