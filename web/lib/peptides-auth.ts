import crypto from "node:crypto";
import { cookies } from "next/headers";

export const PEPTIDES_COOKIE_NAME = "peptides_access";
export const PEPTIDES_COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

// Cookie value = sha256(PEPTIDES_PASSWORD). Rotating the password
// auto-invalidates every previously-issued cookie.
export function getExpectedCookieValue(): string | null {
  const pw = process.env.PEPTIDES_PASSWORD;
  if (!pw) return null;
  return crypto.createHash("sha256").update(pw).digest("hex");
}

export async function hasPeptidesAccess(): Promise<boolean> {
  const expected = getExpectedCookieValue();
  if (!expected) return false;
  const jar = await cookies();
  const got = jar.get(PEPTIDES_COOKIE_NAME)?.value;
  if (!got || got.length !== expected.length) return false;
  try {
    return crypto.timingSafeEqual(
      Buffer.from(got, "hex"),
      Buffer.from(expected, "hex"),
    );
  } catch {
    return false;
  }
}
