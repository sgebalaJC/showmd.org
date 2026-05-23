import { NextResponse } from "next/server";
import {
  PEPTIDES_COOKIE_NAME,
  PEPTIDES_COOKIE_MAX_AGE,
  getExpectedCookieValue,
} from "@/lib/peptides-auth";

export const runtime = "nodejs";

type Payload = { password?: unknown; website?: unknown };

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const submitted = typeof body.password === "string" ? body.password : "";
  const expectedPw = process.env.PEPTIDES_PASSWORD;
  const cookieValue = getExpectedCookieValue();

  if (!expectedPw || !cookieValue) {
    console.error("peptides: PEPTIDES_PASSWORD env not set");
    return NextResponse.json(
      { error: "Server not configured. Please email barb@showmd.org." },
      { status: 500 },
    );
  }

  if (submitted.length !== expectedPw.length || submitted !== expectedPw) {
    return NextResponse.json({ error: "Incorrect access code." }, {
      status: 401,
    });
  }

  const res = NextResponse.json({ ok: true }, { status: 200 });
  res.cookies.set({
    name: PEPTIDES_COOKIE_NAME,
    value: cookieValue,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: PEPTIDES_COOKIE_MAX_AGE,
  });
  return res;
}
