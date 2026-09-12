# Astro Portfolio Refactor & Voice Overhaul: Historical Architecture Report
**Date:** July 2026  
**Project Workspace:** `g:\Dev\10_Projects\AstroPortfolio`  
**Brain Reference:** `g:\Brain\Do The Things\10_Projects\AstroPortfolio`  
**Author / Architect:** Ryan Guthrie (with AI Pair Programmer)

---

## 1. Executive Summary & Why We Refactored
The goal of this initiative was to modernize Ryan Guthrie's portfolio site from a legacy static prototype into a high-performance, content-driven architecture built on **Astro 5/6 Content Layer**, while elevating the tone and positioning to reflect a **Staff Software Architect & Engineering Lead** with 20+ years of professional experience.

### Key Drivers:
* **Schema Modernization:** The codebase was experiencing build failures (`InvalidContentEntryDataError`) due to a mismatch between legacy content configurations and the new Astro Content Layer (`glob()` loaders in `src/content.config.ts`).
* **Voice & Positioning Elevation:** Previous copy positioned Ryan as a generic "Senior Developer" or generalist, which undervalued his 20+ year trajectory of planning, architecting, and leading cross-functional engineering initiatives across organizations.
* **Skill Bloat Elimination:** The primary pages suffered from tag clutter (35+ tags displayed simultaneously, including older maintenance technologies like ActionScript, Perl, and PHP).
* **Decoupling Brain vs. Public Showcase:** Need for a structured protocol allowing active projects in Ryan's private Brain (`g:\Brain\Do The Things\10_Projects`) to export curated architectural summaries to Astro without exposing internal scratchpads or TODOs.

---

## 2. Core Architectural Upgrades

### A. High-Performance Content Layer (`src/content.config.ts`)
We replaced legacy content configs with Astro's explicit `glob` loader API and established strict Zod validation schemas:
* **`projects` Collection:**
  * Configured with rich metadata tailored for both **historical standalone projects** (`role`, `clientOrCompany`, `timeframe`, `category`) and **active Brain projects** (`brainSource`).
  * Added native support for interactive embeds and canvas demos: `demoType: z.enum(["canvas", "iframe", "video", "none"])`, `demoUrl`, and `hasInteractiveWidget: z.boolean().optional()`.
* **`resume` Collection:**
  * Configured to load `src/content/resume/experience.json`.
  * Added an explicit `featured` skills tier to cleanly separate primary architectural strengths from extended historical capabilities.

### B. Master Project Detail Template (`src/pages/projects/[...slug].astro`)
We upgraded the dynamic project rendering route into a comprehensive architectural showcase:
* **Historical & Organization Context Bar:** Automatically displays `Role` (*e.g., Lead Architect & Solo Developer*) and `Client / Organization` (*e.g., Paybook, Earnest*) at the top of the case study.
* **Conditional Interactive Canvas Stage:** When a project specifies `demoType: "canvas"`, the template automatically mounts an isolated, responsive DOM stage (`#canvas-stage-<id>`) ready for HTML5 Canvas, Phaser, or WebGL scripts to attach to.
* **Brain Sync Badge:** Displays a prominent `"🧠 Synced from Brain Workspace"` indicator when an item is exported from an active Brain project folder.
* **Client-Side Mermaid Diagram Rendering:**
  * Added an automated script that detects ```` ```mermaid ```` code blocks on DOMContentLoaded.
  * Configured with a custom **Glassmorphism Dark Theme** (vibrant `#13c8ec` cyan borders, `#8a2be2` purple connection arrows, clean white text, transparent backgrounds).
  * Dynamically renders responsive, interactive SVGs without build-time SSR headaches.

### C. Primary Pages & UI Cleanups (`src/pages/`)
* **Homepage (`index.astro`) & Resume (`resume/index.astro`):**
  * Replaced the cluttered 35+ tag wall with a curated **10-skill Featured Arsenal** (*Solution Architecture, Engineering Leadership, Cloud/Edge Infrastructure, TypeScript, Golang Backend Systems, AI Agentic Workflows, Linux Server Security, PostgreSQL/Supabase, Horizontal Scaling, Zero-Bloat Web*).
  * On the resume page, the Featured Arsenal is showcased prominently in a top highlight box, followed by the complete **20-Year Extended Technical Vault** below it.
* **Semantic HTML Formatting:** Replaced raw markdown asterisks (`**text**`) inside HTML paragraphs with semantic `<strong>` and `<em>` tags styled via dedicated CSS classes (`.text-highlight`, `.text-white`, `.text-cyan`).

---

## 3. Staff Architect Voice & Narrative Arc

### Positioning & Tone
We shifted the narrative from an individual contributor generalist to a **Staff Software Architect & Engineering Lead** who combines high-level solution architecture with hands-on technical execution:
* **Core Differentiator:** The ability to **plan, architect, and lead complex multi-team engineering initiatives** across organizations without ego.
* **Key Career Milestones Highlighted:**
  * **Paybook (7 years):** Designed and built solo the first horizontal-scaling backend platform aggregating financial data across banks in LatAm and US (*"like Plaid before there was Plaid"*).
  * **Earnest & Wizeline:** Leading cross-functional engineering execution, AWS cloud/edge infrastructure, and developer mentoring.
  * **TouchSupport & New World Brands:** Deep Linux kernel hardening, security auditing, and VoIP network automation.
* **Nuanced Tech Stack Positioning:** Framed **Golang** front-and-center for high-throughput backend systems, while framing **Rust** authentically as a recent/exploring pivot (e.g., in the Lustre project).

### Critical HR Rule Established
* **Official Job Titles:** Established a strict rule across `.agents/AGENTS.md` and `src/content.config.ts` prohibiting the modification or embellishment of official company job titles (`role`) in `experience.json`. Historical HR titles (*Senior Software Engineer, Consultant / Programmer, Linux System Admin, Programmer*) remain exact.

---

## 4. Verification & Build Performance
* **Automated Build:** `npm run build` consistently compiled all 8 static routes (`/`, `/resume`, and 6 project case studies including `/projects/lustre-project`) in **~1.3 to 1.4 seconds** with zero TypeScript or Zod schema validation errors.
* **Live Development:** Local dev server verified running cleanly in background mode at `http://localhost:4321`.

---

## 5. Future Maintenance & Brain Sync
To maintain this architecture, any future active project in Ryan's Brain can follow the **Astro Portfolio Export Protocol** (documented in `g:\Brain\System\PORTFOLIO_EXPORT_PROTOCOL.md`) to generate and push curated markdown case studies directly into `src/content/projects/`.
