import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

export const resend = apiKey ? new Resend(apiKey) : null;

export const MAIL_FROM = process.env.MAIL_FROM || "ShowMD <notifications@showmd.org>";
export const MAIL_TO = (process.env.MAIL_TO || "barb@showmd.org")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
export const MAIL_CC = (process.env.MAIL_CC || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
