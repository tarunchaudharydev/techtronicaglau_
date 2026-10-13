# Project guide for new contributors

This guide explains how to navigate the Techtronica website code. The repository has grown over time, so use the active imports as the source of truth: comments and unused files do not always describe what the running page does.

## How a page is assembled

A typical request follows this path:

```text
URL → app route → page component → reusable components → content and assets
```

For example, a club detail URL such as `/clubs/gizmo` matches `app/clubs/[slug]/page.tsx`. The route reads the `slug`, finds the matching club record in `lib/config/clubs.ts`, and passes that record to components in `components/club/`. Images and videos referenced by paths such as `/clubs/gizmo/...` are served from `public/clubs/gizmo/`.

The `[slug]` folder is a dynamic route segment. The folder name in parentheses, such as `(public)`, is a route group and is omitted from the URL.

## Main folders

- `app/` defines routes, layouts, and API route handlers. A `page.tsx` file creates a page; a `route.ts` file defines an HTTP endpoint.
- `components/` holds UI pieces reused by pages. Feature folders such as `club/`, `events/`, and `home/` keep related components together.
- `lib/` contains application data, configuration, hooks, and utility functions.
- `types/` contains shared TypeScript data shapes.
- `public/` contains static files. A file at `public/notes/example.pdf` is available at `/notes/example.pdf`.

## Routes to explore

| URL pattern | Route file | What to inspect next |
| --- | --- | --- |
| `/` | `app/page.tsx` | `components/home/`, `lib/data/home-data.ts` |
| `/clubs` | `app/clubs/page.tsx` | Club list defined in the page |
| `/clubs/[slug]` | `app/clubs/[slug]/page.tsx` | `lib/config/clubs.ts`, `components/club/` |
| `/events` | `app/events/page.tsx` | `lib/data/upcomingEvents.ts`, `components/events/` |
| `/events/[id]` | `app/events/[id]/page.tsx` | Event lookup and detail component |
| `/academics` | `app/academics/page.tsx` | `lib/data/notes.ts`, `public/notes/` |
| `/projects` | `app/projects/page.tsx` | `components/Projects.tsx` |
| `/library` | `app/library/page.tsx` | `components/library/LibrarySection.tsx` |

The repository currently has two files that resolve to `/`: `app/page.tsx` and `app/(public)/page.tsx`. Since route groups do not add a URL segment, this is a duplicate route to resolve before changing or building the home page.

## Where current page content comes from

Content is not managed through one shared backend in this code snapshot. Follow each page's imports:

- The club directory's cards are declared in `app/clubs/page.tsx`; club detail records are in `lib/config/clubs.ts` and are imported by the detail route.
- The events page imports event records from `lib/data/upcomingEvents.ts`.
- The academics page imports resources from `lib/data/notes.ts`; the linked documents live under `public/notes/`.
- Home page copy can come from `lib/data/home-data.ts`, depending on which home page is active. Other sections and labels may be written directly in components.

Some of these data files contain comments saying they are no longer used, while active pages still import them. Verify by following imports before moving or deleting content. Similarly, the handlers in `app/api/contact/`, `app/api/club-contact/`, and `app/api/gallery/` currently contain comments saying they are unused; do not assume they power the visible forms or gallery.

## A practical way to make a change

To update a club detail page:

1. Open `app/clubs/[slug]/page.tsx` and see how it selects a club.
2. Find that club's record in `lib/config/clubs.ts`.
3. Check the type near the top of that file to see the required fields.
4. Update or add the referenced asset under `public/clubs/<club>/`.
5. Check the components in `components/club/` that render the field you changed.

Use the same tracing method for other features: start at the URL, follow imports, then update the content and assets used by that route. When adding a new club, remember the directory cards and detail records are maintained in separate places.

## Useful development commands

```bash
npm ci
npm run dev
npm run lint
npm run build
```

`npm run start` serves the production build after `npm run build` succeeds. The app uses Next.js and client-side libraries, so check the browser console and terminal output when a page behaves differently from its source code.
