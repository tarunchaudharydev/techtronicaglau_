# Techtronica GLAU

Techtronica is a student technical society at GLA University. This repository contains its website: a Next.js application for presenting the society, its clubs, events, projects, academic resources, and related information.

This guide is for someone opening the codebase for the first time. For a walkthrough of how routes, components, content, and assets fit together, see [the project guide](docs/project-guide.md).

## Get started

### Requirements

- Git
- Node.js and npm

### Run locally

```bash
git clone https://github.com/tarunchaudharydev/techtronicaglau_.git
cd techtronicaglau_
npm ci
npm run dev
```

Open the local address printed by Next.js (usually <http://localhost:3000>). Stop the server with `Ctrl+C`.

Useful scripts from `package.json`:

```bash
npm run dev    # start the development server
npm run lint   # run ESLint
npm run build  # create a production build
npm run start  # serve a production build
```

There is no `.env.example` in the repository. Before adding or changing a server integration, inspect its implementation and document any required environment variables alongside that change.

## What the app uses

The site uses the Next.js App Router, React, and TypeScript. Tailwind CSS provides styling. The codebase also uses animation and UI libraries such as GSAP, Framer Motion, Swiper, and Lottie. Firebase App Hosting configuration is present in `firebase.json` and `apphosting.yaml`.

A dependency being installed does not mean a feature is active. In particular, several files under `app/api/` are marked as unused, and `lib/firebase.ts` is only a placeholder. Check imports and current route code before relying on an integration.

## Where to look first

| If you want to understand… | Start here |
| --- | --- |
| Shared site shell, navigation, footer, fonts | `app/layout.tsx`, `components/Navbar.tsx`, `components/Footer.tsx` |
| Home page | `app/page.tsx`, `components/home/` |
| Club directory and club detail pages | `app/clubs/page.tsx`, `app/clubs/[slug]/page.tsx`, `lib/config/clubs.ts`, `components/club/` |
| Events and event detail pages | `app/events/`, `lib/data/upcomingEvents.ts`, `components/events/`, `types/event.ts` |
| Academic resources | `app/academics/`, `lib/data/notes.ts`, `public/notes/` |
| Projects and library | `app/projects/`, `app/library/`, `components/Projects.tsx`, `components/library/` |
| Shared helpers and types | `lib/hooks/`, `lib/utils/`, `types/` |
| Images, PDFs, animations, and other static files | `public/` |

### Content is currently mixed

Several pages use content stored directly in TypeScript files. For example, club detail pages read `lib/config/clubs.ts`, events read `lib/data/upcomingEvents.ts`, and academic resources read `lib/data/notes.ts`. Some files describe themselves as legacy or reference data, so follow the imports from the page you are changing to find the data it actually uses. See the [project guide](docs/project-guide.md) for examples.

## One routing detail to know

Next.js route groups in parentheses do not appear in the URL. Both `app/page.tsx` and `app/(public)/page.tsx` therefore map to `/`. If you change the home page or add another root route, first confirm which page is intended and resolve this duplicate route.

## Before opening a pull request

1. Trace the page to its component, content source, and assets.
2. Keep changes focused and follow nearby naming and formatting conventions.
3. Run `npm run lint` and `npm run build` when your change is ready.
4. Include screenshots for visible UI changes and explain any content or behavior changes.

For details on the route flow, active data sources, and a practical way to explore a feature, read [docs/project-guide.md](docs/project-guide.md).
