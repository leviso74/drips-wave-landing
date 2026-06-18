# Drips Wave Landing Site — Wave Sprint Plan

## Project Overview
A Vite + React + React Router landing and documentation site for the Drips Wave developer tool suite. Presents the Reputation Indexer API and Soroban AMM Pool with polished marketing copy, interactive API docs, and build/usage guides.

## Wave Sprint Structure
Sprints run on a 7-day cadence. Content and docs issues are typically lower-complexity but high-impact. Points redeemable for on-chain rewards.

## Issue Types & Point Matrix

### Bug Fixes (100–150 pts)
- **Broken anchor scrolling** (100 pts) — Deep links to doc sections (`/docs/amm-pool#formula`) do not scroll to the heading. Implement smooth-scroll intersection observer on mount.
- **404 on SPA route refresh** (150 pts) — Deployed to static hosting, direct navigation to `/docs/reputation-api` returns 404. Add `_redirects` or static `404.html` fallback per hosting provider.
- **Code block overflow on mobile** (100 pts) — Pre blocks in docs overflow the viewport on narrow screens. Add horizontal scroll with `overflow-x: auto` and visible scrollbar hint.
- **External link security** (100 pts) — All external links need `rel="noopener noreferrer"` and should open in a new tab with visual indicator.

### New Features (150–200 pts)
- **Live API playground** (200 pts) — Embedded interactive console on the Reputation API docs page where users enter a GitHub handle and see a live scorecard response rendered below the curl example.
- **Search** (150 pts) — Fuse.js client-side search across all doc pages, with keyboard shortcut (`Cmd+K`) activation and results rendered in a modal overlay.
- **Smart contract explorer** (200 pts) — Interactive ABI explorer that renders all Soroban contract functions as collapsible cards with parameter tables and copy-paste-able transaction builders.
- **Changelog feed** (100 pts) — Markdown-rendered changelog page sourced from `CHANGELOG.md` in each project repo, fetched at build time and displayed chronologically.
- **SEO metadata** (100 pts) — Per-page `<title>`, `<meta description>`, and Open Graph tags for social preview cards on Twitter and Discord.

### Documentation (50–100 pts)
- **Quickstart tutorial** (100 pts) — End-to-end tutorial: clone repos, start the API with Docker Compose, open the dashboard, search a contributor, and observe a webhook being processed.
- **Architecture diagram** (100 pts) — Mermaid.js-based system diagram showing how the API, Redis, Postgres, dashboard, and AMM contract connect, with deploy instructions for each component.
- **Troubleshooting FAQ** (50 pts) — Curated list of common setup errors (Postgres auth failures, Redis port conflicts, Rust target missing) with copy-paste-able fixes.
- **Wave program onboarding** (50 pts) — Explain how contributors earn points, link KYC requirements, and list past wave winners to motivate participation.

### Testing (50–100 pts)
- **Link checker CI** (100 pts) — GitHub Action that crawls the built site and reports broken internal and external links before deployment.
- **Visual regression suite** (100 pts) — Playwright snapshot tests for every page at desktop (1440px) and mobile (375px) viewports.
- **Content spell-check** (50 pts) — `cspell` integration in CI that flags typos in markdown content and code comments across all doc pages.

## Acceptance Criteria
- Zero broken internal links
- Perfect Lighthouse scores (Performance ≥ 90, Accessibility ≥ 95, SEO = 100)
- All external links open in new tabs with `rel="noopener noreferrer"`
- Offline-capable via service worker for docs browsing
