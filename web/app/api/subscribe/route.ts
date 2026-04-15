import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { db } from "@/lib/firebase-admin";
import { resend, escapeHtml, MAIL_FROM, MAIL_TO, MAIL_CC } from "@/lib/resend";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  email?: unknown;
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

  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const userAgent = (req.headers.get("user-agent") || "").slice(0, 500);

  try {
    await db.collection("subscribers").add({
      email,
      source: "showmd.org",
      userAgent,
      createdAt: FieldValue.serverTimestamp(),
    });
  } catch (err) {
    console.error("subscribe: firestore write failed", err);
    return NextResponse.json(
      { error: "Could not save your email. Please try again." },
      { status: 500 },
    );
  }

  if (resend) {
    const subject = `ShowMD newsletter signup: ${email}`;
    const html = `
      <div style="font-family:Inter,Arial,sans-serif;color:#0f172a;line-height:1.5">
        <h2 style="margin:0 0 12px 0">New newsletter signup</h2>
        <p>A visitor subscribed on showmd.org.</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      </div>
    `;
    const text = `New newsletter signup on showmd.org\n\nEmail: ${email}\n`;

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
      console.error("subscribe: email send failed", err);
    }
  } else {
    console.warn("subscribe: RESEND_API_KEY not set — email not sent");
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
