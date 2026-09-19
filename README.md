# Techtronica GLAU Website

> The first version of the official website for Techtronica GLAU, built with Next.js and TypeScript. This repository is kept as a reference for understanding the early architecture and development approach.

![GitHub License](https://img.shields.io/github/license/tarunchaudharydev/techtronicaglau)
![GitHub Stars](https://img.shields.io/github/stars/tarunchaudharydev/techtronicaglau)
![GitHub Forks](https://img.shields.io/github/forks/tarunchaudharydev/techtronicaglau)
![GitHub Issues](https://img.shields.io/github/issues/tarunchaudharydev/techtronicaglau)
![GitHub Last Commit](https://img.shields.io/github/last-commit/tarunchaudharydev/techtronicaglau)

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)

---

## 📌 About

This repository contains the **first basic version of the Techtronica GLAU website**.

It is no longer the production version of the website. The project has since been updated and evolved, but this repository is preserved as a reference for juniors and contributors who want to understand how the website was initially structured and developed.
---

## Why This Repository Exists

This repository is not meant to represent the final or ideal architecture of the Techtronica website.

It represents the stage where we were learning, experimenting, building features, and gradually figuring out how a larger society website should be organized.

For juniors, this repository is useful because you can see a real project rather than a perfectly clean tutorial project.

You will find both:

* Good architectural decisions that are still useful today
* Decisions that worked at the beginning but do not scale well

That is intentional.

A real project rarely starts with a perfect architecture. Usually, someone starts building, requirements change, features get added, and suddenly there are 17 folders where there used to be three. Software engineering, apparently, is partly the art of preventing that from becoming 170.

---

# What Was Used Initially?

The first version relied heavily on **static data**.

Information such as:

* Clubs
* Team members
* Alumni
* Events
* Projects
* Home page content
* Tracks
* Notes

was stored inside the project itself.

For example, the repository contains data files such as:

```text
lib/data/
├── alumni.ts
├── home-data.ts
├── homeSlider.js
├── notes.ts
├── projects.ts
├── teamData.ts
└── upcomingEvents.ts
```

and configuration files such as:

```text
lib/config/
├── clubs.ts
└── tracks.ts
```

This approach was suitable for the early version because the website was relatively simple and the content did not require a complete content-management system.

### But this is no longer how we want to manage the website.

As the website grew, static data became harder to maintain.

For example, updating an event could require changing source code and deploying the application again.

A more scalable architecture is to keep dynamic information in a backend/database or another content-management system and let the website fetch the information when required.

So the evolution is roughly:

```text
FIRST VERSION

Website
   │
   ├── React/Next.js
   ├── Static data
   └── Static assets


CURRENT DIRECTION

Website
   │
   ├── Frontend
   ├── Backend/API
   ├── Database / dynamic data
   └── Static assets
```

This separation makes it possible to update content without treating every content change as a code change.

---

# Getting the Project on Your Computer

## Prerequisites

You should have:

* Git
* Node.js
* npm

Check your installation:

```bash
git --version
node --version
npm --version
```

---

## Clone the Repository

```bash
git clone https://github.com/tarunchaudharydev/techtronicaglau_
```

Enter the project:

```bash
cd techtronicaglau_
```

---

## Install Dependencies

```bash
npm install
```

This reads `package.json` and installs the project's dependencies.

---

## Run the Development Server

```bash
npm run dev
```

Open the local URL shown in your terminal.

Usually:

```text
http://localhost:3000
```

---

# Project Structure

The main structure of this version is:

```text
techtronicaglau_/
│
├── app/
│   ├── academics/
│   ├── api/
│   ├── clubs/
│   ├── code-of-conduct/
│   ├── events/
│   ├── faq/
│   ├── library/
│   ├── patents/
│   ├── privacy-policy/
│   ├── projects/
│   ├── research/
│   ├── terms/
│   ├── (public)/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   └── types/
│
├── components/
│   ├── about/
│   ├── club/
│   ├── events/
│   ├── features/
│   ├── home/
│   ├── library/
│   ├── patents/
│   ├── policy/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
│
├── lib/
│   ├── config/
│   ├── data/
│   ├── hooks/
│   ├── utils/
│   └── firebase.ts
│
├── public/
│   ├── clubs/
│   ├── homeImages/
│   ├── notes/
│   ├── ourTeam/
│   ├── sponsors/
│   └── ...
│
├── types/
│   └── event.ts
│
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
├── firebase.json
└── README.md
```

## This is based on the actual repository structure, with the large asset collections shortened so that the README remains readable.

# Understanding the Architecture

At a high level, the website works like this:

```text
                    USER
                      │
                      ▼
                  NEXT.JS
                      │
                      ▼
                  APP ROUTES
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
      PAGE.TSX              API ROUTES
          │                       │
          ▼                       ▼
    UI COMPONENTS            SERVER LOGIC
          │
          ├──────────────┐
          ▼              ▼
       DATA            ASSETS
     lib/data/         public/
```

The important concept is that a page should generally not contain everything itself.

Instead:

```text
Page
 │
 ├── Component
 │    ├── Component
 │    └── Component
 │
 └── Data
```

This makes the UI easier to reuse and maintain.

---

# 1. `app/`

The `app` directory contains the Next.js App Router structure.

This is where routes and pages are defined.

For example:

```text
app/
├── academics/
├── clubs/
├── events/
├── library/
├── projects/
└── research/
```

Each route can contain its own `page.tsx`.

For example:

```text
app/clubs/page.tsx
```

represents the clubs page.

Dynamic routes are also used.

For example:

```text
app/clubs/[slug]/page.tsx
```

means that the club page can be generated based on a dynamic `slug`.

Similarly:

```text
app/events/[id]/page.tsx
```

uses an event ID to determine which event should be displayed.

This is a good architectural decision because adding another club or event does not require creating a completely different route structure.

---

# 2. `app/api/`

The project also contains API routes:

```text
app/api/
├── club-contact/
│   └── route.ts
├── contact/
│   └── route.ts
└── gallery/
    └── route.ts
```

These routes provide server-side endpoints for specific functionality.

For example:

```text
/api/contact
```

can handle contact-related requests.

The important concept is:

```text
Frontend
   │
   │ HTTP Request
   ▼
API Route
   │
   ▼
Server-side logic
```

This is different from simply displaying static information on a page.

---

# 3. Dynamic Routes

One important concept for juniors to understand is dynamic routing.

For example:

```text
app/clubs/[slug]/page.tsx
```

The `[slug]` is a dynamic parameter.

A URL such as:

```text
/clubs/gizmo
```

could provide:

```text
slug = gizmo
```

while:

```text
/clubs/technovation
```

could provide:

```text
slug = technovation
```

This allows one page implementation to represent multiple clubs.

The same concept is used for events:

```text
/events/[id]
```

## where the ID identifies the event.

# 4. `components/`

The `components` directory contains reusable UI components.

The components are partially organized by feature:

```text
components/
├── about/
├── club/
├── events/
├── features/
├── home/
├── library/
└── policy/
```

For example, the events section contains:

```text
components/events/
├── BackButton.tsx
├── EmptyState.tsx
├── EventCard.tsx
├── EventCountdown.tsx
├── EventGallery.tsx
├── EventsShowcase.tsx
├── RegisterButton.tsx
├── SectionHeader.tsx
└── UpcomingEventsSection.tsx
```

This is one of the stronger parts of the original structure.

Instead of creating one giant event component, functionality was split into smaller pieces.

For example:

```text
EventCard
```

can be responsible for displaying one event.

```text
EventCountdown
```

can handle countdown-related UI.

```text
EventGallery
```

can handle event images.

This follows the principle:

> One component should ideally have one clear responsibility.

---

# 5. `components/home/`

The home page is also broken into smaller sections:

```text
components/home/
├── ClubsOverview.tsx
├── CoreTeamCTA.tsx
├── FeatureSection.tsx
├── HomeHero.tsx
├── HowToGetInvolved.tsx
├── SponsorsMarquee.tsx
└── StatsGrid.tsx
```

This makes the home page easier to understand.

Instead of:

```text
HomePage.tsx
    1500 lines
```

you can have:

```text
HomePage
 ├── HomeHero
 ├── FeatureSection
 ├── ClubsOverview
 ├── StatsGrid
 ├── SponsorsMarquee
 └── CoreTeamCTA
```

That is much easier to maintain.

---

# 6. `lib/`

The `lib` directory contains supporting application logic.

In this project it contains:

```text
lib/
├── config/
├── data/
├── hooks/
├── utils/
└── firebase.ts
```

This is useful because not everything belongs inside `app` or `components`.

---

# 7. `lib/data/`

This is where much of the original static data lived:

```text
lib/data/
├── alumni.ts
├── home-data.ts
├── homeSlider.js
├── notes.ts
├── projects.ts
├── teamData.ts
└── upcomingEvents.ts
```

This was one of the main architectural limitations of the first version.

The approach was essentially:

```text
Data
 ↓
TypeScript file
 ↓
Component
 ↓
Page
```

It works.

But as the website grows, it becomes difficult to maintain.

A better long-term approach is:

```text
Database / CMS
       ↓
     API
       ↓
   Next.js
       ↓
   Components
       ↓
      UI
```

The old static-data approach should therefore be understood as a **starting point**, not the architecture we want to continue indefinitely.

---

# 8. `lib/config/`

Configuration is separated from general data:

```text
lib/config/
├── clubs.ts
└── tracks.ts
```

This is a good distinction.

Conceptually:

```text
config = how the application is configured

data = information displayed by the application
```

Keeping these concepts separate is useful as a project grows.

---

# 9. `lib/hooks/`

The project contains custom React hooks:

```text
lib/hooks/
└── useCountdown.ts
```

A custom hook allows reusable stateful logic to be extracted from components.

Instead of implementing countdown logic repeatedly:

```text
Component A → countdown logic
Component B → countdown logic
Component C → countdown logic
```

you can have:

```text
useCountdown()
     │
 ┌───┼───┐
 ▼   ▼   ▼
 A   B   C
```

This is a scalable idea.

---

# 10. `lib/utils/`

Utility functions are kept here:

```text
lib/utils/
├── eventUtils.ts
├── isBirthdayToday.ts
└── time.ts
```

These functions are generally reusable pieces of logic that do not belong to one particular UI component.

For example:

```text
isBirthdayToday()
```

can answer a specific logical question without being responsible for rendering UI.

---

# 11. `types/`

The project also contains TypeScript types:

```text
types/
└── event.ts
```

and another type definition inside:

```text
app/types/
└── club.ts
```

Types describe the expected structure of data.

For example, conceptually:

```ts
type Event = {
    id: string;
    title: string;
    date: string;
};
```

This helps prevent incorrect data from being passed around the application.

---

# 12. `public/`

The `public` directory contains the project's static assets.

This version contains a large number of assets, including:

```text
public/
├── clubs/
├── homeImages/
├── notes/
├── ourTeam/
├── sponsors/
├── logo.png
├── team.jpg
└── ...
```

The club assets are further separated by club:

```text
public/clubs/
├── code-e-phobia/
├── gizmo/
├── mindbogglers/
├── technovation/
└── unnati/
```

Each club can then have:

```text
images/
events/
team/
logo
```

This organization is understandable and makes assets relatively easy to find.

---

# 13. The Asset Structure: What Could Be Better?

The biggest problem with the `public` directory is its size and naming consistency.

There are many files with names such as:

```text
robort1.jpg
robort2.jpg
robort3.jpg
team.jpg
one.JPG
other.JPG
completeTeam.JPG
```

and a very large collection of numbered images.

This works for a small project, but it becomes difficult to maintain when hundreds of assets exist.

A more scalable approach would use:

```text
public/
└── clubs/
    └── gizmo/
        ├── logo/
        ├── events/
        ├── gallery/
        └── team/
```

and meaningful filenames such as:

```text
robotics-workshop-2025.jpg
team-gizmo-2025.jpg
pcb-workshop.jpg
```

instead of names whose meaning exists only inside the developer's memory.

The current structure is usable, but the naming and asset-management strategy is not particularly scalable.

---



# 14. Mixed Naming Conventions

The project contains a mixture of:

```text
home-data.ts
homeSlider.js
teamData.ts
ClientEventDetails.tsx
useCountdown.ts
```

There are also asset names with spaces, uppercase letters, numbers, and inconsistent spelling.

This isn't a functional problem, but consistency matters in larger projects.

A modern project should establish naming rules such as:

```text
Components → PascalCase

HomeHero.tsx
EventCard.tsx

Hooks → camelCase with use prefix

useCountdown.ts

Utilities → camelCase

eventUtils.ts

Data → consistent naming

homeData.ts
teamData.ts
upcomingEvents.ts
```

The old project did not consistently follow one convention.

That is something we would improve in a newer version.

---

# 16. Route Organization

The repository uses both normal routes and a route group:

```text
app/
└── (public)/
    ├── about/
    ├── alumni/
    ├── contact/
    ├── gallery/
    └── page.tsx
```

The `(public)` directory is a **route group**.

Route groups are useful because the folder can organize related routes without necessarily changing the URL structure.

This is a good Next.js concept to learn.

However, the project also has routes outside this group:

```text
app/
├── academics/
├── clubs/
├── events/
├── library/
├── projects/
└── research/
```

This means the route organization is not completely consistent.

As the project grew, pages were added in different places.

A newer version should define a clearer routing strategy before adding many features.

---

# 17. Files Created for Future Work

You may notice files in this repository that appear unrelated to the currently used functionality.

This is intentional.

During development, I sometimes created files, placeholders, configuration files, or experimental structures for features that were planned for future implementation.

Some of these ideas were never integrated into the final version.

Therefore:

> **Do not assume every file in this repository is currently used by the website.**

If you find a file that seems unrelated, first check whether it is imported or referenced anywhere.

If it is not being used, it may simply be a leftover experiment or a reminder for a future feature.

This repository is a snapshot of development, not a perfectly cleaned final codebase.

---

# 18. Is This Architecture Scalable?

### Short answer:

**Partially.**

The project contains several scalable ideas, but the overall architecture was not designed to scale indefinitely.

## What was good?

### Component-based architecture

The website was broken into reusable components.

```text
Page
 ├── Section
 │   ├── Component
 │   └── Component
 └── Section
```

This is good and should continue.

### Feature-based component organization

Components were grouped into areas such as:

```text
about/
club/
events/
home/
library/
policy/
```

This is much better than putting every component into one enormous folder.

### Dynamic routes

Routes such as:

```text
clubs/[slug]
events/[id]
```

allow one implementation to handle multiple entities.

This is a scalable concept.

### Reusable hooks and utilities

The presence of:

```text
hooks/
utils/
```

shows an attempt to separate reusable logic from UI.

That is also good.

---

# 19. What Was Not Scalable?

### Static data

This is the biggest limitation.

```text
lib/data/
```

contains large amounts of website content.

For a small website:

```text
Static data → Fine
```

For a growing society website:

```text
Static data → Increasing maintenance problem
```

A database/API-based system is more suitable for dynamic information.

---

### Large static asset directory

The `public` directory contains a very large number of images and documents.

As the number of events, members, and galleries increases, managing everything directly inside the repository becomes increasingly difficult.

A proper media-storage solution can become useful at larger scale.

---

### Duplicate components

Duplicate or similarly named components make maintenance harder.

They increase the chance that two parts of the application behave differently when they should behave the same.

---

### Mixed conventions

Inconsistent naming makes onboarding harder.

A junior developer should be able to predict where a file belongs without asking someone every time.

---

### Some responsibilities are mixed

Some components and directories evolved organically rather than following one strict architectural rule.

That is understandable for the first version, but it becomes harder to maintain as features increase.

---

# 20. What Would We Change Today?

If rebuilding this project from scratch today, we would aim for something closer to:

```text
techtronica/
│
├── app/
│   ├── (public)/
│   ├── clubs/
│   ├── events/
│   ├── projects/
│   └── api/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── clubs/
│   ├── events/
│   └── home/
│
├── lib/
│   ├── api/
│   ├── config/
│   ├── hooks/
│   ├── utils/
│   └── validations/
│
├── types/
│
├── public/
│
└── ...
```

And the data flow would preferably become:

```text
                    DATABASE
                       │
                       ▼
                     API
                       │
                       ▼
                 NEXT.JS SERVER
                       │
                       ▼
                  PAGE / SERVER
                       │
                       ▼
                 UI COMPONENTS
                       │
                       ▼
                    USER
```

Instead of:

```text
TypeScript files
      │
      ▼
Components
      │
      ▼
Pages
      │
      ▼
User
```

This would make content management, event management, team management, and future features easier to scale.

---

# 21. What You Should Learn From This Repository

Do not just learn how to copy the code.

Try to understand why the code was structured this way.

When exploring a feature, follow this path:

```text
URL
 ↓
Route
 ↓
Page
 ↓
Component
 ↓
Data
 ↓
Asset
```

For example, for a club:

```text
/clubs/gizmo
      ↓
app/clubs/[slug]/page.tsx
      ↓
ClubPage
      ↓
ClubTeam / ClubTracks / ClubSessions
      ↓
club configuration/data
      ↓
public/clubs/gizmo/
```

Once you understand this flow, you can understand most of the website.

---

# 22. Recommended Way to Explore the Code

If you are a junior developer, follow this order:

### 1. Start with

```text
package.json
```

Understand the technologies being used.

### 2. Open

```text
app/page.tsx
```

Understand how the home page starts.

### 3. Explore

```text
components/home/
```

See how the page is divided into reusable sections.

### 4. Explore

```text
app/clubs/
```

Understand dynamic routing.

### 5. Explore

```text
components/club/
```

Understand reusable club components.

### 6. Explore

```text
lib/data/
```

Understand how static data was connected to the UI.

### 7. Explore

```text
lib/hooks/
lib/utils/
```

Understand how reusable logic was extracted.

### 8. Explore

```text
public/
```

Understand how assets are organized and referenced.

---

# 23. The Most Important Lesson

This repository should not teach you:

> "This is the perfect way to structure a Next.js project."

It should teach you:

> "This is how a real project can start, evolve, accumulate technical debt, and then be improved."

The first version was useful because it allowed us to build and learn quickly.

But as the requirements increased, some decisions stopped being suitable for the project's scale.

That is normal software development.

The goal of the next version is not to pretend the first version was bad.

The goal is to understand:

```text
What worked?
    ↓
What stopped working?
    ↓
Why?
    ↓
What should change?
    ↓
How can the next version be better?
```

That process is a much more valuable lesson than memorizing a "perfect" folder structure from a tutorial.

---

# 🛠️ Useful Commands

Clone:

```bash
git clone https://github.com/tarunchaudharydev/techtronicaglau_
```

Enter the project:

```bash
cd techtronicaglau_
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Check Git status:

```bash
git status
```

Create a branch:

```bash
git checkout -b feature/your-feature
```

Stage changes:

```bash
git add .
```

Commit:

```bash
git commit -m "Describe your changes"
```

Push:

```bash
git push
```

View the project structure:

```bash
tree -L 4 -I "node_modules|.next|.git"
```

---

# 📌 Current Status

**Status:** Archived / Educational

**Purpose:** Learning, reference, and understanding the early development of the Techtronica GLAU website.

**Production:** No longer used in production.

**Architecture:** Early-stage Next.js application with static data and locally stored assets.

**Future direction:** More scalable architecture with better separation between frontend, backend, dynamic data, and content management.

---

# 👥 Techtronica GLAU

Techtronica GLAU is a student technical society at GLA University.

The society includes clubs working across different areas:

* **Technovation** - Projects & Innovation
* **Gizmo** - Robotics & Electronics
* **Code-E-Phobia** - Coding & Programming
* **Unnati** - Cultural & Events
* **Mindblogger**

This repository is maintained as a reference for members who want to understand how the website was built and how the architecture can be improved over time.

---

## Final Note

If you are a junior reading this repository, don't worry if the structure initially looks confusing.

Start with one feature.

For example:

```text
Club
 ↓
Route
 ↓
Page
 ↓
Component
 ↓
Data
 ↓
Image
```

Trace that feature from beginning to end.

Then pick another feature.

After doing this a few times, the entire project becomes much easier to understand.

And remember: **the codebase is a snapshot of a learning process, not a perfect engineering.**

## 📄 License

This project is licensed under the [MIT License](LICENSE).

You are free to use, copy, modify, merge, publish, distribute, sublicense, and sell copies of this software, subject to the conditions of the MIT License.

See the [LICENSE](LICENSE) file for the complete license text.
