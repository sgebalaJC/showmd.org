import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const { email, practice } = body as { email?: unknown; practice?: unknown };

  if (typeof email !== "string" || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (practice != null && (typeof practice !== "string" || practice.length > 200)) {
    return NextResponse.json({ error: "Invalid practice name" }, { status: 400 });
  }

  const userAgent = (req.headers.get("user-agent") || "").slice(0, 500);

  try {
    await db.collection("waitlist").add({
      email,
      practice: typeof practice === "string" ? practice : null,
      source: "showmd.org",
      userAgent,
      createdAt: FieldValue.serverTimestamp(),
    });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("waitlist write failed", err);
    return NextResponse.json(
      { error: "Could not save signup. Please email hello@showmd.org." },
      { status: 500 },
    );
  }
}
