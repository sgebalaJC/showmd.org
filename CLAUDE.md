# ShowMD — Marketing Site (showmd.org)

Marketing website for **ShowMD** — onsite urgent care & concierge medical for
the equestrian community.

Domain: `showmd.org` (prod), `marketing.showmd.vip` (test/staging)
Firebase project: `showmd-org` (billing: Blasko)
GitHub: `github.com/sgebalaJC/showmd.org`
App Hosting test URL: `https://showmd-org--showmd-org.us-central1.hosted.app`
Product repo: `/Users/stan/Projects/BLASKO/patient-showmd`
Sibling marketing site (reference only): `/Users/stan/Projects/aureliamd.com`

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**.
- **Tailwind 3** — theme tokens (`primary`, `accent`, `secondary`, `muted`, `card`)
  are HSL CSS variables defined in `web/app/globals.css` and mapped in
  `web/tailwind.config.ts`. Brand: `--primary: 0 65% 32%` (deep red) /
  `--accent: 40 76% 48%` (gold).
- **Fonts**: Inter (sans), Playfair Display (serif) — both via `next/font/google`.
- **Firebase App Hosting** (`web/apphosting.yaml`) — Node 20, min 0 / max 2 instances.
- **Firestore** for form submissions (Admin SDK, server-only). Client reads/writes
  denied by `firestore.rules`.
- **Resend** for transactional email from the two forms. Configured via
  `RESEND_API_KEY` secret + `MAIL_FROM/TO/CC` env.

## Layout

```
web/
  app/
    api/
      contact/route.ts      POST — writes contact/; sends email to CONTACT_MAIL_TO cc MAIL_CC
      subscribe/route.ts    POST — writes subscribers/; sends notification to MAIL_TO cc MAIL_CC
    layout.tsx              Root layout + metadata + Inter/Playfair fonts
    page.tsx                Home — imports 10 sections + Nav + Footer
    privacy/page.tsx        Privacy policy
    globals.css             Tailwind + CSS var theme tokens
  components/
    forms/
      contact-form.tsx      Client; name/email/phone/show/message + honeypot
      subscription-form.tsx Client; email + honeypot; lives in footer
    sections/
      hero.tsx, video.tsx (YouTube A7SGjHWAa0o), services.tsx, about.tsx,
      story.tsx, invest.tsx, reviews.tsx, locations.tsx,
      faqs.tsx (client — accordion), contact.tsx
    site/
      nav.tsx               Client — mobile menu toggle
      footer.tsx            Server — includes SubscriptionForm
    ui/
      container.tsx
  lib/
    firebase-admin.ts       Server-only Admin SDK singleton
    resend.ts               Resend client + MAIL_* constants + escapeHtml
  public/images/
    showmd-hero.jpg         177 KB (was 1.5 MB PNG)
    showmd-equestrian.jpg   246 KB (was 1.8 MB PNG)
    showmd-doctor.jpg       345 KB (was 365 KB PNG)
    showmd-logo.png          27 KB (64-color palette PNG)
```

## Environment

- `web/.env.local` (gitignored) — dev values: `RESEND_API_KEY`, `MAIL_FROM`,
  `MAIL_TO`, `CONTACT_MAIL_TO`, `MAIL_CC`.
- `web/.env.example` — template.
- **Production**: `apphosting.yaml` declares `MAIL_FROM/TO/CONTACT_MAIL_TO/CC` as plain env and
  `RESEND_API_KEY` as a Secret Manager reference. The secret is stored in
  `projects/showmd-org/secrets/RESEND_API_KEY` and granted to the backend
  service account.
- Rotate the Resend key with `firebase apphosting:secrets:set RESEND_API_KEY`
  (the API key currently in use was shared in a Claude Code transcript — rotate
  before public launch).

## Peptides gate

Patient-only `/peptides` page (reconstitution video). Gated by a shared access
code:

- `PEPTIDES_PASSWORD` env (Secret Manager in prod, `web/.env.local` in dev).
- POST `/api/peptides/auth` validates the submitted code and sets an HttpOnly
  `peptides_access` cookie (value = `sha256(PEPTIDES_PASSWORD)`, 30-day maxAge,
  `Secure` in prod, `SameSite=Lax`).
- `web/app/peptides/page.tsx` is `force-dynamic`, calls `hasPeptidesAccess()`
  (`web/lib/peptides-auth.ts`) and renders either the password form
  (`web/components/peptides/password-form.tsx`) or the gated content.
- Page is `robots: noindex,nofollow` and intentionally not in the sitemap.
- Rotating the password auto-invalidates every existing cookie (the SHA changes).
  Rotate with `firebase apphosting:secrets:set PEPTIDES_PASSWORD`.
- Homepage entry point: `components/sections/peptides.tsx` (after `<Services />`).

This is a **soft gate** — protects the page, not the YouTube embed URL itself.
If a stronger video gate is needed later, swap the YouTube embed for Vimeo
(private + domain restriction) or signed Mux URLs.

## Forms

| Form | Fields | Firestore collection | Email to | Subject |
|---|---|---|---|---|
| Contact | name, email, phone?, show?, message | `contact` | kaitlyn@showmd.org, reply-to submitter | `ShowMD contact form: {name}` |
| Subscribe | email | `subscribers` | barb@showmd.org, reply-to submitter | `ShowMD newsletter signup: {email}` |

Both have a `website` honeypot. Validation returns 400 with `{ error }`; success
returns 201 `{ ok: true }`. Firestore write failures fail the request; Resend
failures are logged but don't fail the request (the submission is still
captured).

## Outstanding

- **GitHub → App Hosting connection**: connect `sgebalaJC/showmd.org` (branch
  `main`, root `/web`) in the Firebase Console
  (https://console.firebase.google.com/project/showmd-org/apphosting). Enables
  auto-deploy on push to main. CLI can't do this step.
- **Custom domain `marketing.showmd.vip`**: add in Console → Domains, then add
  TXT+A records at GoDaddy (showmd.vip is on GoDaddy nameservers).
- **Resend domain verification for `showmd.org`**: add SPF/DKIM records at
  GoDaddy. Until verified, `notifications@showmd.org` mail fails (writes still
  succeed, email-send is logged and swallowed).
- **FAQ answers**: `components/sections/faqs.tsx` has placeholder answer text —
  replit export only had the question headers. Fill in real answers.
- **Privacy copy**: `app/privacy/page.tsx` was ported from the replit export;
  review for accuracy before launch.
- **Image dimensions**: section `<Image>` components use estimated dimensions;
  verify against actual asset sizes to avoid CLS.

## Conventions

- Conventional commits (`feat:`, `fix:`, `copy:`, `chore:`).
- Server components by default; `"use client"` only when needed (nav menu
  toggle, accordion, forms).
- Don't commit `.env*`, `.firebase/`, `node_modules/`, `.next/`.
- When editing form fields, update (a) the API route validation, (b) the form
  component, (c) the Firestore schema expectation, and (d) the email template
  in one commit.
