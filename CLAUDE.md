# ShowMD — Marketing Site (showmd.org)

Marketing website for **ShowMD**.

Domain: `showmd.org`
Firebase project: `showmd-org` (billing: Blasko)
Product repo: `/Users/stan/Projects/BLASKO/patient-showmd`
Sibling marketing site (reference only): `/Users/stan/Projects/aureliamd.com`

## Status

Scaffold cloned from `aureliamd.com`. Page content awaits a Replit-generated
HTML/CSS hand-off to be ported into `web/app/page.tsx` + `web/components/sections`.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**.
- **Tailwind 3** (config in `web/tailwind.config.ts`).
- **Firebase App Hosting** (`web/apphosting.yaml`) — Node 20, min 0 / max 2 instances.
- **Firestore** for `waitlist` and `contact` submissions (Admin SDK, server-only).
  Client-side reads/writes are denied by `firestore.rules`.

## Layout

```
web/
  app/
    api/waitlist/route.ts   POST — writes to Firestore `waitlist`
    api/contact/route.ts    POST — writes to Firestore `contact`
    layout.tsx              Root layout + metadata
    page.tsx                Home (stub — replit content pending)
    privacy/, terms/        Legal pages (branding updated, copy still mostly aureliamd boilerplate — rewrite before launch)
    globals.css
  components/
    forms/                  Waitlist + contact forms (client)
    sections/               Empty — land replit-derived sections here
    site/                   Nav, Footer
    ui/                     Button, Container primitives
  lib/
    firebase-admin.ts       Server-only Admin SDK singleton
    cn.ts                   classnames helper
  public/images/            Empty — add logo/OG assets
```

## Not yet done

- Port replit HTML/CSS into Next/Tailwind components.
- Logo + OG assets in `public/images/`.
- Real privacy + terms copy (current text is near-verbatim from aureliamd with names swapped).
- Firestore indexes (none needed yet — `firestore.indexes.json` is empty).
- DNS for `showmd.org` → App Hosting backend (needs backend created first: `firebase apphosting:backends:create`).
- Git init + first commit.

## Conventions

- Conventional commits (`feat:`, `fix:`, `copy:`).
- Keep components small; prefer server components unless a form/client hook is needed.
- Don't commit `.env*`, `.firebase/`, `node_modules/`.
