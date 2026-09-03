
/// emails
type SenderEmailProps = {
  firstName: string;
  message: string;
};
type AdminEmailProps = {
  fullName: string;
  email: string;
  message: string;
};
export function senderEmail({
  firstName, message,
}: SenderEmailProps) {
  return {
    text: `
Hello ${firstName},

Thank you for your message. I have received it and will reply as soon as I can.

Your message:

${message}

Best,
Bach and Physics
bachphysics.com
    `.trim(),

    html: emailLayout(`
      <p>Hello ${escapeHtml(firstName)},</p>

      <p>
        Thank you for your message. I have received it and will reply
        as soon as I can.
      </p>

      ${messageBlock("Your message", message)}

      <p>
        Best,<br />
        Bach and Physics
      </p>
    `),
  };
}

export function adminEmail({
  fullName, email, message,
}: AdminEmailProps) {
  return {
    text: `
New contact message

Name: ${fullName}
Email: ${email}

${message}
    `.trim(),

    html: emailLayout(`
      <p>
        <strong>Name:</strong> ${escapeHtml(fullName)}<br />
        <strong>Email:</strong> ${escapeHtml(email)}
      </p>

      ${messageBlock("Message", message)}
    `),
  };
}
/// layouts
function emailLayout(content: string) {
  return `
    <div style="
      font-family: Georgia, 'Times New Roman', serif;
      max-width: 640px;
      margin: 0 auto;
      padding: 32px;
      color: #1f1f1f;
      line-height: 1.65;
    ">
      <h2 style="
        margin: 0 0 24px;
        font-size: 24px;
        font-weight: 500;
      ">
        Bach and Physics
      </h2>

      ${content}

      <p style="
        margin-top: 32px;
        font-size: 13px;
        color: #777;
      ">
        bachphysics.com
      </p>
    </div>
  `;
}
function messageBlock(title: string, message: string) {
  return `
    <div style="
      margin: 28px 0;
      padding: 20px 24px;
      border-left: 3px solid #b9a67a;
      background: #f7f5f0;
    ">
      <div style="
        margin-bottom: 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #777;
      ">
        ${escapeHtml(title)}
      </div>

      <div style="white-space: pre-wrap;">
        ${escapeHtml(message)}
      </div>
    </div>
  `;
}
function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
