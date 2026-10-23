import nodemailer from "nodemailer";
import { countries } from "../../lib/countries";
import { phoneDigits, validateLead, type DemoLead } from "../../lib/demo-lead";

// Lead emails go out over SMTP. Settings come from environment variables (see env.example).
const recentByIp = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const hits = (recentByIp.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  hits.push(now);
  recentByIp.set(ip, hits);
  return hits.length > MAX_PER_WINDOW;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);
}

function field(body: Record<string, unknown>, key: string) {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden "website" field; pretend success so they move on.
  if (field(body, "website")) {
    return Response.json({ ok: true });
  }

  const lead: DemoLead = {
    name: field(body, "name"),
    company: field(body, "company"),
    email: field(body, "email"),
    country: field(body, "country"),
    phone: field(body, "phone"),
    note: field(body, "note"),
    product: field(body, "product"),
  };

  const errors = validateLead(lead);
  if (Object.keys(errors).length > 0) {
    return Response.json({ error: "Please check the highlighted fields.", errors }, { status: 422 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (isRateLimited(ip)) {
    return Response.json({ error: "Too many requests. Please try again in a few minutes." }, { status: 429 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Demo form: SMTP settings are missing, lead not sent.");
    return Response.json({ error: "Booking is temporarily unavailable. Please email info.benoft@gmail.com." }, { status: 503 });
  }

  const port = Number(SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const country = countries.find((item) => item.iso === lead.country)!;
  const phone = `${country.dial} ${phoneDigits(lead.phone)}`;
  const product = lead.product || "Not specified";
  const rows: Array<[string, string]> = [
    ["Name", lead.name],
    ["Company", lead.company],
    ["Email", lead.email],
    ["Phone", `${phone} (${country.name})`],
    ["Product", product],
    ["Note", lead.note || "-"],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#071642">
      <h2 style="margin:0 0 16px;color:#062abf">New demo request</h2>
      <table cellpadding="8" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="border-bottom:1px solid #dfe7f4;font-weight:bold;vertical-align:top">${label}</td><td style="border-bottom:1px solid #dfe7f4;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="margin-top:18px;color:#64748b;font-size:12px">Sent from the Book a demo form on the BENOFT website. Reply to this email to contact the lead.</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"BENOFT Website" <${process.env.LEAD_FROM_EMAIL || SMTP_USER}>`,
      to: process.env.LEAD_TO_EMAIL || "info.benoft@gmail.com",
      replyTo: { name: lead.name, address: lead.email },
      subject: `New demo request: ${lead.company} (${product})`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
      html,
    });
  } catch (error) {
    console.error("Demo form: sending failed.", error);
    return Response.json({ error: "We couldn't send your request. Please try again or email info.benoft@gmail.com." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
