import { google } from "googleapis";

export const MAIL_FROM = process.env.MAIL_FROM || "ShowMD Forms <barb@showmd.org>";
export const MAIL_TO = (process.env.MAIL_TO || "barb@showmd.org")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
export const MAIL_CC = (process.env.MAIL_CC || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const MAIL_SEND_AS = process.env.MAIL_SEND_AS || "barb@showmd.org";

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Reject CR/LF in any value that will be interpolated into a MIME header —
// without this guard a crafted value could inject extra headers (e.g. Bcc:).
function assertHeaderSafe(field: string, value: string): string {
  if (/[\r\n]/.test(value)) {
    throw new Error(`Invalid characters in ${field}`);
  }
  return value;
}

export type SendMailArgs = {
  to: string[];
  cc?: string[];
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
};

let _gmail: ReturnType<typeof google.gmail> | null = null;

function getGmail() {
  if (_gmail) return _gmail;
  const saKeyJson = process.env.GOOGLE_SA_KEY;
  if (!saKeyJson) return null;
  const key = JSON.parse(saKeyJson);
  const jwt = new google.auth.JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: ["https://www.googleapis.com/auth/gmail.send"],
    subject: MAIL_SEND_AS,
  });
  _gmail = google.gmail({ version: "v1", auth: jwt });
  return _gmail;
}

export const isMailConfigured = !!process.env.GOOGLE_SA_KEY;

export async function sendMail(args: SendMailArgs): Promise<void> {
  const gmail = getGmail();
  if (!gmail) throw new Error("GOOGLE_SA_KEY not configured");

  const safeFrom = assertHeaderSafe("from", MAIL_FROM);
  const safeTo = args.to.map((t, i) => assertHeaderSafe(`to[${i}]`, t)).join(", ");
  const safeCc = (args.cc || []).map((c, i) => assertHeaderSafe(`cc[${i}]`, c));
  const safeReplyTo = args.replyTo ? assertHeaderSafe("replyTo", args.replyTo) : "";
  const safeSubject = assertHeaderSafe("subject", args.subject);

  const boundary = `showmd_${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}`;
  const headers = [
    `From: ${safeFrom}`,
    `To: ${safeTo}`,
    safeCc.length ? `Cc: ${safeCc.join(", ")}` : "",
    safeReplyTo ? `Reply-To: ${safeReplyTo}` : "",
    `Subject: ${safeSubject}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
  ].filter(Boolean);

  const mime = [
    ...headers,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=utf-8",
    "Content-Transfer-Encoding: 7bit",
    "",
    args.text,
    "",
    `--${boundary}`,
    "Content-Type: text/html; charset=utf-8",
    "Content-Transfer-Encoding: 7bit",
    "",
    args.html,
    "",
    `--${boundary}--`,
  ].join("\r\n");

  const raw = Buffer.from(mime, "utf-8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  await gmail.users.messages.send({
    userId: "me",
    requestBody: { raw },
  });
}
