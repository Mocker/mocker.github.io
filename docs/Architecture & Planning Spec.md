---
tags:
  - architecture
  - specification
  - astro
project: AstroPortfolio
status: final-draft
---
# 🏗️ AstroPortfolio: Architecture & Planning Spec

**Date:** July 2026
**Project Manifest:** [[AstroPortfolio/_MANIFEST]]
**Target Hands Directory:** `G:\Dev\10_Projects\AstroPortfolio`

---

## 1. Executive Summary & First-Principles Goals
The objective of this project is to replace the legacy SPA/dynamic `Portfolio` with a **blazing fast, statically generated personal website and portfolio** built using **Astro**.

### Why Astro? (First Principles)
1. **Zero JS by Default:** Traditional SPA frameworks ship massive JavaScript bundles just to render static content (bio, project descriptions, resume). Astro renders HTML/CSS at build time, resulting in near-instant page loads and 100/100 Lighthouse performance scores.
2. **Islands Architecture:** When interactive components *are* needed (e.g., procedural generation game dev demonstrations, dev jokes, live theme toggles), Astro allows selective hydration of isolated UI "Islands" using React, Svelte, or Vanilla JS without degrading the rest of the page.
3. **Low Energy Maintenance:** Content is driven by structured Markdown/MDX files (`src/content/`). Adding a new project or blog post requires zero UI code modifications—just dropping a `.md` file into the folder.

---

## 2. Technical Stack & Engineering Specifications

### Core Framework
- **Engine:** Astro v4+ (Static Site Generation mode by default).
- **Languages:** TypeScript (strict mode) for site logic, Markdown/MDX for content.
- **Styling:** Vanilla CSS with scoped style blocks inside `.astro` components + CSS custom properties (Design Tokens for sleek dark/light mode and vibrant aesthetics).

### Content Collections (`src/content/`)
We use Astro's native Content Collections with strict Zod schema validation:
- **`projects/`**: Portfolio showcase items (game dev prototypes, engineering pipelines, Ryan-OS tools).
  ```ts
  const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      tags: z.array(z.string()),
      featured: z.boolean().default(false),
      liveUrl: z.string().url().optional(),
      githubUrl: z.string().url().optional(),
      publishDate: z.date(),
    })
  });
  ```
- **`resume/`**: Structured experience, skills, and certifications stored as Markdown or JSON, rendered dynamically at build time.

### Interactive Islands
- **Interactive Game Dev Showcase:** Lightweight HTML5 Canvas / WebGL widget running inside `client:visible` Astro Island.
- **Micro-animations & Aesthetics:** Smooth CSS hover transitions, glassmorphism card layouts, and curated dark palette (`#0f1115` base with neon cyan/purple accents).

### UI/UX Design Process & Branding (Google Stitch MCP)
- **Google Stitch Integration:** We actively use the connected **Google Stitch MCP server** during the design process to generate text-to-UI layouts, explore design systems, and iterate on responsive screens and variants before implementing `.astro` components.
- **Visual Identity & Logo:** The brand logo is a modern variation of the **Pisces symbol** (`♓` / see `old_ideas/mockup/modern_pisces_logo.png`).
- **Design Philosophy:** Prioritize **comfortable readability** with sophisticated color accents. Reference existing concepts in `old_ideas/mockup/` and `old_ideas/old-site/` while elevating the UI to feel premium, polished, and modern.

---

## 3. Directory Layout (Hands Workspace: `G:\Dev\10_Projects\AstroPortfolio`)

```text
G:\Dev\10_Projects\AstroPortfolio/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   └── interactive/       <-- Client-hydrated Islands (client:visible)
│   │       └── GameDemo.tsx
│   ├── content/
│   │   ├── config.ts          <-- Zod Collection Schemas
│   │   ├── projects/          <-- Markdown project notes
│   │   └── resume/            <-- Resume content
│   ├── layouts/
│   │   └── BaseLayout.astro   <-- SEO, meta tags, font imports
│   ├── pages/
│   │   ├── index.astro        <-- Stunning hero + featured projects
│   │   ├── projects/[...slug].astro <-- Static project detail pages
│   │   └── resume.astro       <-- Clean, printable static resume
│   └── styles/
│       └── global.css         <-- Design tokens & reset
├── public/
│   └── assets/                <-- Screenshots, resume PDF export
├── astro.config.mjs
└── package.json
```

---

## 4. Phased Implementation Roadmap

### Phase 1: Workspace & Core Scaffold (Next Step when entering Code mode)
1. In `G:\Dev\10_Projects\AstroPortfolio`, run:
   ```bash
   npx -y create-astro@latest ./ --template minimal --typescript strict --no-install
   npm install
   ```
2. Set up `global.css` design system with rich dark mode variables and typography (Outfit / Inter).

### Phase 2: Content Collections & Schema Definition
1. Define `src/content/config.ts`.
2. Migrate existing project write-ups from the old `Portfolio` directory into `src/content/projects/`.

### Phase 3: Page Assembly & Interactive Islands
1. Build `index.astro` hero section.
2. Build interactive project showcase cards and project detail routing.

### Phase 4: CI/CD & Cloudflare Pages Deployment
1. **GitHub Actions Workflow:** We use GitHub Actions to build the static Astro site and deploy directly to Cloudflare Pages via Wrangler.
   - **Workflow File:** `.github/workflows/deploy.yml`
   ```yaml
   name: Deploy Portfolio to Cloudflare Pages

   on:
     push:
       branches: [ main ]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout repository
           uses: actions/checkout@v4

         - name: Install Node.js
           uses: actions/setup-node@v4
           with:
             node-level: '20'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build static site
           run: npm run build

         - name: Publish to Cloudflare Pages
           uses: cloudflare/wrangler-action@v3
           with:
             apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
             accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
             # Astro outputs to 'dist' by default. 
             # Change 'your-portfolio-name' to match your Cloudflare Pages project.
             command: pages deploy dist --project-name=your-portfolio-name --branch=main
   ```
2. **Cloudflare & Wrangler Tooling:** Wrangler CLI and Cloudflare tools are pre-authorized for various projects. The assistant agent has permission to configure workers or resources needed via Wrangler, but will **prompt for confirmation** before creating new resources or modifying account-level configs.
