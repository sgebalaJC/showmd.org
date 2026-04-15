import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { db } from "@/lib/firebase-admin";
import { resend, escapeHtml, MAIL_FROM, MAIL_TO, MAIL_CC } from "@/lib/resend";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  show?: unknown;
  message?: unknown;
  website?: unknown;
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const show = typeof body.show === "string" ? body.show.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (phone.length > 40) {
    return NextResponse.json({ error: "Phone is too long." }, { status: 400 });
  }
  if (show.length > 200) {
    return NextResponse.json({ error: "Show/location is too long." }, { status: 400 });
  }
  if (!message || message.length > 5000) {
    return NextResponse.json({ error: "Please include a message." }, { status: 400 });
  }

  const userAgent = (req.headers.get("user-agent") || "").slice(0, 500);

  try {
    await db.collection("contact").add({
      name,
      email,
      phone: phone || null,
      show: show || null,
      message,
      source: "showmd.org",
      userAgent,
      createdAt: FieldValue.serverTimestamp(),
    });
  } catch (err) {
    console.error("contact: firestore write failed", err);
    return NextResponse.json(
      { error: "Could not save your message. Please email barb@showmd.org." },
      { status: 500 },
    );
  }

  if (resend) {
    const subject = `ShowMD contact form: ${name}`;
    const html = `
      <div style="font-family:Inter,Arial,sans-serif;color:#0f172a;line-height:1.5">
        <h2 style="margin:0 0 12px 0">New message from showmd.org</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        ${show ? `<p><strong>Show / location:</strong> ${escapeHtml(show)}</p>` : ""}
        <p style="margin-top:16px"><strong>Message</strong></p>
        <p style="white-space:pre-wrap;border-left:3px solid #b3261e;padding-left:12px">${escapeHtml(message)}</p>
      </div>
    `;
    const text = [
      `New message from showmd.org`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      show ? `Show / location: ${show}` : null,
      ``,
      `Message:`,
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    try {
      await resend.emails.send({
        from: MAIL_FROM,
        to: MAIL_TO,
        cc: MAIL_CC,
        replyTo: email,
        subject,
        html,
        text,
      });
    } catch (err) {
      console.error("contact: email send failed", err);
    }
  } else {
    console.warn("contact: RESEND_API_KEY not set — email not sent");
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
