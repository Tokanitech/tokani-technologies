const recipient = "desmond@tokani.com.fj";
const fallbackFrom = "Tokani Technologies <askme@tokani.com.fj>";
const replyTo = "askme@tokani.com.fj";

function clean(value: unknown, maximum = 2000) {
  return String(value ?? "").trim().slice(0, maximum);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character);
}

function confirmationHtml({
  name,
  business,
  service,
  contact,
}: {
  name: string;
  business: string;
  service: string;
  contact: string;
}) {
  const safeName = escapeHtml(name);
  const safeBusiness = escapeHtml(business || "Not provided");
  const safeService = escapeHtml(service);
  const safeContact = escapeHtml(contact);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tokani enquiry received</title>
  </head>
  <body style="margin:0;background:#F2F2F2;font-family:Arial,Helvetica,sans-serif;color:#2B2B2B;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#F2F2F2;">
      <tr>
        <td align="center" style="padding-top:32px;padding-right:16px;padding-bottom:32px;padding-left:16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#FFFFFF;border-collapse:collapse;">
            <tr>
              <td bgcolor="#111111" style="background-color:#111111;padding-top:26px;padding-right:30px;padding-bottom:24px;padding-left:30px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:18px;font-weight:700;color:#4DB6E2;letter-spacing:1px;text-transform:uppercase;">TOKANI TECHNOLOGIES</p>
                <p style="margin-top:8px;margin-right:0;margin-bottom:0;margin-left:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;color:#D9B493;">Your friend in technology.</p>
              </td>
            </tr>
            <tr>
              <td style="padding-top:34px;padding-right:30px;padding-bottom:8px;padding-left:30px;">
                <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:35px;font-weight:700;color:#111111;">Vinaka, ${safeName}.</h1>
              </td>
            </tr>
            <tr>
              <td style="padding-top:8px;padding-right:30px;padding-bottom:8px;padding-left:30px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:25px;color:#2B2B2B;">We’ve received your enquiry and will review it before getting back to you. We normally respond within one business day.</p>
              </td>
            </tr>
            <tr>
              <td style="padding-top:22px;padding-right:30px;padding-bottom:8px;padding-left:30px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;border-top:1px solid #E4E4E4;">
                  <tr>
                    <td style="padding-top:18px;padding-right:0;padding-bottom:8px;padding-left:0;">
                      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;font-weight:700;color:#1782C6;text-transform:uppercase;letter-spacing:.6px;">Enquiry summary</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top:0;padding-right:0;padding-bottom:4px;padding-left:0;">
                      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:22px;color:#2B2B2B;"><strong>Business:</strong> ${safeBusiness}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top:0;padding-right:0;padding-bottom:4px;padding-left:0;">
                      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:22px;color:#2B2B2B;"><strong>What you need:</strong> ${safeService}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:22px;color:#2B2B2B;"><strong>Preferred contact:</strong> ${safeContact}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding-top:24px;padding-right:30px;padding-bottom:34px;padding-left:30px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:22px;color:#555555;">If you need to add anything before we reply, just respond to this email.</p>
              </td>
            </tr>
            <tr>
              <td bgcolor="#F7F3EE" style="background-color:#F7F3EE;padding-top:20px;padding-right:30px;padding-bottom:20px;padding-left:30px;border-top:1px solid #E8DED3;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:19px;color:#5D5146;">Built in Fiji. Built for the way we do business.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function confirmationText({
  name,
  business,
  service,
  contact,
}: {
  name: string;
  business: string;
  service: string;
  contact: string;
}) {
  return [
    `Vinaka, ${name}.`,
    "",
    "We’ve received your Tokani enquiry and will review it before getting back to you. We normally respond within one business day.",
    "",
    "Enquiry summary",
    `Business: ${business || "Not provided"}`,
    `What you need: ${service}`,
    `Preferred contact: ${contact}`,
    "",
    "If you need to add anything before we reply, just respond to this email.",
    "",
    "Tokani Technologies",
    "Your friend in technology.",
    "Built in Fiji. Built for the way we do business.",
  ].join("\n");
}

async function sendEmail(apiKey: string, body: Record<string, unknown>) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid enquiry." }, { status: 400 });
  }

  if (clean(payload.website)) return Response.json({ ok: true });
  const name = clean(payload.name, 120);
  const business = clean(payload.business, 160);
  const email = clean(payload.email, 254);
  const phone = clean(payload.phone, 80);
  const service = clean(payload.service, 120);
  const contact = clean(payload.contact, 80);
  const details = clean(payload.details, 4000);
  if (!name || !email || !phone || !service || !contact || !details || !/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ error: "Email delivery is not configured.", fallback: true }, { status: 503 });

  const from = process.env.CONTACT_FROM_EMAIL || fallbackFrom;
  const safe = Object.fromEntries(Object.entries({ name, business: business || "Not provided", email, phone, service, contact, details }).map(([key, value]) => [key, escapeHtml(value)]));

  const notification = await sendEmail(apiKey, {
    from,
    to: [recipient],
    reply_to: email,
    subject: `New Tokani enquiry — ${business || name} — ${service}`,
    text: [
      "New Tokani website enquiry",
      "",
      `Name: ${name}`,
      `Business: ${business || "Not provided"}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone}`,
      `Service: ${service}`,
      `Preferred contact: ${contact}`,
      "",
      "Project details:",
      details,
    ].join("\n"),
    html: `<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;color:#222"><h1 style="font-size:24px">New Tokani website enquiry</h1><p><strong>Name:</strong> ${safe.name}</p><p><strong>Business:</strong> ${safe.business}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Phone / WhatsApp:</strong> ${safe.phone}</p><p><strong>Service:</strong> ${safe.service}</p><p><strong>Preferred contact:</strong> ${safe.contact}</p><hr style="border:0;border-top:1px solid #ddd"><h2 style="font-size:18px">Project details</h2><p style="white-space:pre-wrap">${safe.details}</p></div>`,
  });

  if (!notification.ok) {
    console.error("Tokani enquiry notification failed", notification.status, await notification.text());
    return Response.json({ error: "Email delivery failed." }, { status: 502 });
  }

  const confirmation = await sendEmail(apiKey, {
    from,
    to: [email],
    reply_to: replyTo,
    subject: "Vinaka — we’ve received your Tokani enquiry",
    text: confirmationText({ name, business, service, contact }),
    html: confirmationHtml({ name, business, service, contact }),
  });

  if (!confirmation.ok) {
    console.error("Tokani enquiry confirmation failed", confirmation.status, await confirmation.text());
    return Response.json({ ok: true, confirmationSent: false });
  }

  return Response.json({ ok: true, confirmationSent: true });
}
