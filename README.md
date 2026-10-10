# Seo Dental Academy

A dental learning platform with a terracotta/cream design, dark mode, course catalogs for Beginner, Intermediate, and Advanced learners, video lessons, a resource guide, local lesson notes, bookmarks, and learning progress.

**Hosted private preview:** https://seo-dental-academy.hohunganh33.chatgpt.site

## Current behavior

- Visitors can browse course previews and suggested learning paths.
- Videos, lesson text, quizzes, resource links, and My learning are behind the academy sign-in screen.
- Learning materials are stored in server modules, not public JavaScript. `GET /api/materials` validates the learner's token against Supabase Auth before returning content.
- Missing, expired, unverified, and anonymous identities are rejected. A provider outage fails closed. Protected responses use `Cache-Control: private, no-store`.
- Google/email account services have **not yet been configured**. Until configured, materials remain locked, and the UI explains why account creation is unavailable.
- The resource guide currently matches questions to catalog previews; a generative AI service is not connected.
- Notes and progress are stored on the current device under a user-specific key. Cross-device sync is not implemented.
- Three collections contain links to existing CDC videos; three other courses are explicitly labeled as planned outlines. Original clinical lessons are still needed. No CE credit or clinical credential is issued by this app.

## Run locally

Requirements: Node.js 22.13+ and pnpm (the project pins its package manager).

```bash
pnpm install --frozen-lockfile
pnpm dev
```

The app uses Vinext/Vite and the Cloudflare Workers runtime. On a fresh machine, the default portable development profile is used. Follow the local URL printed in the terminal.

```bash
pnpm test
pnpm build
pnpm start
```

`pnpm start` runs the built Worker locally through Wrangler. Do not serve the `public/` folder alone: the server routes enforce access and supply runtime configuration.

## Connect Google and email accounts

Create a Supabase project, enable email/password with email confirmation, configure your production email sender, and enable the Google OAuth provider using credentials from your Google Cloud project. Configure allowed redirect URLs and the Site URL to match your deployment.

Set these runtime values in the hosting service:

| Variable | Purpose |
| --- | --- |
| `SUPABASE_URL` | HTTPS origin of your Supabase project |
| `SUPABASE_PUBLISHABLE_KEY` | Public/publishable project key (or legacy anon key) |
| `GUIDE_ENDPOINT` | Optional authenticated HTTPS AI backend; leave unset for catalog matching |

For local Worker development, use an untracked `.dev.vars` file. Do not commit credentials. The Supabase URL and publishable key are intentionally provided to the browser by `/api/config`; Google client secrets, service-role keys, and AI API keys must never be placed there or in frontend code.

Sign-in uses the Supabase JS client with PKCE. The backend verifies each materials request via `/auth/v1/user`, requires a confirmed non-anonymous account, and never trusts a browser-provided user ID. After sign-in, the learner returns to the course they were trying to open. Signing out immediately removes loaded materials from the current interface.

Hosted Sites platform access remains a separate boundary: this preview is still owner-private. Connecting Supabase does not make the Site public. Test confirmation emails, Google OAuth, sign-in, sign-out, and private content access before opening enrollment. Password recovery and account administration are not implemented yet.

Official provider setup: https://supabase.com/docs/guides/auth/social-login/auth-google

## Source layout

- `app/route.ts` — serves the existing academy interface.
- `app/api/config/route.ts` — exposes only public integration settings.
- `app/api/materials/route.ts` — protected materials API.
- `server/auth.js` — server-side learner verification.
- `server/materials-handler.js` — protected response handling.
- `server/materials.js` — curated lessons, video links, quizzes, and resource references.
- `server/shell.js` — HTML shell.
- `public/academy.js` — navigation, login gate, optional account adapter, and learning interactions.
- `public/previews.js` — safe public course metadata only.
- `public/styles.css`, `public/art.js` — responsive themes and decorative dental illustrations.
- `tests/` — content integrity and access-control tests.
- `build/`, `scripts/`, `lib/`, `vendor/` — framework and hosting support.

When changing curriculum, keep the public catalog limited to marketing metadata, learning outcomes, and lesson titles. Put videos, lesson notes, quiz content, and resource links in server modules. The current external CDC videos and their publisher pages are publicly available independently; the app's login protects access through the academy. Future private videos should use an authenticated media provider and short-lived playback URLs, not public file links or source-code URLs.

## AI resource guide

The optional `GUIDE_ENDPOINT` receives `POST {message, catalog}` and returns `{message: string, courseIds: string[]}`. Only public catalog metadata is sent. The browser includes a Supabase bearer token when available. The AI server must validate that token, enforce request limits, and keep model keys in server secrets. Model text is rendered as text, and returned IDs must exist in the catalog.

## Verification

15 automated checks cover catalog consistency, progress, video references, public-asset separation, rejected anonymous/invalid sessions, provider outages, unverified users, and successful verified access using a mocked identity provider. The production build succeeds. Real OAuth and browser-based visual/playback tests remain unverified until services and a supported browser environment are available.
