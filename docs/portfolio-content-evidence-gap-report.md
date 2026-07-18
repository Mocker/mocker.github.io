---
tags:
  - portfolio
  - content-audit
  - evidence
project: AstroPortfolio
status: awaiting-project-inventory
last_updated: 2026-07-18
---

# Portfolio Content and Evidence Gap Report

## Purpose and decision gate

This report inventories the restored portfolio foundation without choosing the final projects or rewriting any public portfolio page.

**Decision gate:** Do not rewrite the homepage, resume page, or project case studies until Ryan provides the expanded project list and the candidate projects have been evaluated together.

The next content decision is not "how should the current six projects be rewritten?" It is "which projects best prove senior software engineering and architecture scope, impact, judgment, collaboration, and current hands-on ability?"

## Restored technical foundation

- Restoration branch: `codex/restore-portfolio`
- Source branch restored: `feature/astro-rewrite` at `dab97ad`
- Framework: Astro 7 with strict TypeScript and build-time content collections
- Current generated routes: homepage, resume, and six project detail pages
- Resume PDF restored at `public/assets/Ryan_Guthrie_Resume.pdf`
- Verification build: successful, eight static routes generated
- Build observation: Mermaid currently produces a large client bundle and should be loaded only for pages that contain diagrams during the later performance pass

This foundation is suitable for the next phase. It should be treated as a working content system, not as approved final copy.

## Current content sources

| Source | Current role | Status / risk |
| --- | --- | --- |
| `docs/LinkedIn-Profile.pdf` and the current LinkedIn profile | Authoritative employment-history snapshot | Primary source for conflicts with older employment material; contains personal contact information and should not be committed without an explicit publication decision |
| `src/content/resume/experience.json` | Structured resume and skills data used by the site | Public-facing source; official employer titles must remain exact |
| `src/content/projects/*.md` | Six current project entries | Mostly descriptive; evidence depth varies significantly |
| `docs/Ryan_Guthrie_Profile_&_Resume.md` | Broad career-history reference | Duplicates resume data and can drift from the structured source |
| `docs/Architecture & Planning Spec.md` | Intended architecture and workflow | Mixes completed behavior, older assumptions, and future plans |
| `docs/Astro_5_Refactor_&_Voice_Overhaul_Report.md` | Historical record of the richer branch | Useful provenance, but not a current product specification |
| Resume PDF | Recruiter-facing downloadable artifact | Must be checked against the structured resume before publication |

Source precedence is now established:

1. Ryan's direct corrections and project-specific notes.
2. The current LinkedIn profile and the July 18, 2026 LinkedIn PDF export for employment titles, companies, dates, and conflicts with older career material.
3. `src/content/resume/experience.json` as the site's structured working copy.
4. Older planning and profile documents as historical context only.

The structured JSON must be reconciled to the LinkedIn source before the public resume is rewritten. Project-specific notes may add context, but may not alter official company names, job titles, or employment dates.

## Current project inventory

### Paybook Financial Aggregator

**Current strengths**

- Directly supports an architect-level narrative.
- Establishes long-term ownership, financial-domain complexity, horizontal scaling, fault tolerance, integrations, infrastructure, and product breadth.
- Connects to an official role and a seven-year period in the resume.

**Evidence still needed**

- Approximate system scale: institutions/integrations, synchronization volume, users, accounts, jobs, nodes, or geographic coverage.
- Team context over time: what "built solo" covers, when other engineers joined, and what Ryan continued to own.
- Specific architectural constraints and trade-offs.
- Reliability, latency, throughput, recovery, or deployment evidence.
- Verified business/customer outcomes.
- What can be disclosed publicly without exposing proprietary implementation details.
- Sanitized architecture diagram or representative artifact.

**Claims requiring explicit confirmation or qualification**

- "First" horizontal-scaling financial aggregation platform.
- Avoid an unqualified "built solo" claim. Current intake clarifies that Ryan was the first engineer working on the aggregation backbone, brought it to an operational state before the team expanded, and continued working in a very small team that was usually just Ryan.
- Comparisons such as "like Plaid before there was Plaid."

### Locale Planner

**Selection status:** Deferred. Do not use as a first-iteration case study or public project page because there is not yet enough implemented or showable material.

**Current strengths**

- Demonstrates recent product thinking, UI systems, prototyping, and modern TypeScript/React work.
- Can show how design exploration becomes an implemented product.

**Evidence still needed**

- Current product status and actual implemented scope.
- Repository, demo, screenshots, or a short walkthrough.
- The user problem, constraints, and non-visual architecture.
- Which features are implemented versus planned.
- Results from real use, testing, or iteration.

The current entry emphasizes aesthetics and tools more than engineering decisions or outcomes.

### Lustre

**Selection status:** Retain as a brief, clearly labeled first-iteration research/design mention. Lustre is not completed functionality and has not been proven; do not use it as a case study or describe it as an implemented system.

**Current strengths**

- Potential evidence for protocol design, cryptographic identity, decentralization, TypeScript, and emerging Rust work.
- Contains the only current architecture diagram.

**Evidence still needed before any future case-study treatment**

- Define a bounded research question and distinguish investigation from implementation.
- Repository or demonstrable artifact.
- Implemented Nostr event types, relay behavior, key handling, and security model.
- Specific Rust components that exist today.
- Testing, interoperability, or performance evidence.

The current copy risks presenting architectural intent as completed functionality.

### Liaison

**Selection status:** Strong featured-case-study candidate pending completion of project intake and later repository verification.

**Current strengths**

- Bounded product problem connecting client intent, product discovery, and engineering decisions.
- Clear human-in-the-loop publication and approval model.
- Separation of private engineering reasoning from shared client communication.
- Deterministic, versioned, zero-secret browser demo that can be evaluated reliably.
- Production design spanning Astro/React, Supabase Auth/Postgres/Realtime/RLS, Cloudflare Workers, typed model contracts, transactional writes, and provider-neutral OpenAI/Gemini adapters.
- Strong evidence of product strategy, full-stack architecture, interaction design, authorization thinking, and AI safety boundaries.

**Verification deferred until selection**

- Confirm which production-path components are implemented versus designed.
- Verify the demo, screenshots, public URL, representative tests, RLS policies, provider contract, and conflict-handling behavior.
- Confirm the four-day alpha timeline and hackathon context if retained in public copy.

The curated source is `docs/portfolio-entry-liaison.md`. It is sufficient for candidate evaluation without accessing Liaison's repository during this intake phase.

### Ryan-OS Pipeline Tools

**Selection status:** Retain as a brief first-iteration portfolio mention. Ryan-OS is an active personal and reusable platform that drives Ryan's independent products; it should not be characterized as merely a script collection.

**Current strengths**

- Demonstrates developer tooling, automation, Windows/Linux fluency, CI/CD, and current hands-on work.
- Could support a strong internal-platform or developer-productivity story.

**Evidence deferred until a deeper case-study pass**

- Clear boundary: product, personal environment, script collection, or reusable platform.
- Concrete commands/workflows implemented today.
- Before/after workflow evidence such as reduced setup time, fewer manual steps, or improved reproducibility.
- Architecture, repository visibility, portability, test strategy, and security model.
- Remove or generalize private filesystem/workspace details before publication.

For the initial site, depth is intentionally unnecessary. A concise mention should focus on reusable platform leverage, rapid iteration, testing, reliability, and delivery across independent products. Additional architectural evidence can be collected later from Ryan's related repositories.

### SereneNews Aggregator

**Selection status:** Deferred. Do not use as a first-iteration case study or public project page because there is not yet enough implemented or showable material.

**Current strengths**

- Potential example of Astro, edge delivery, scheduled ingestion, and performance-conscious frontend work.

**Evidence still needed**

- Confirm whether the application and scheduled ingestion worker exist and are deployed.
- Live URL, repository, screenshots, and architecture.
- Data sources, caching strategy, update frequency, failure handling, and bookmark implementation.
- A saved Lighthouse report if the `100/100` claim is retained.

The current copy combines SSG, SSR, edge hydration, and scheduled workers without enough implementation evidence to explain the actual system.

### Worm Compost Match-3 Prototype

**Selection status:** Deferred. Do not use as a first-iteration case study or public project page because there is not yet enough implemented or showable material.

**Current strengths**

- Adds creative breadth and can provide an immediate interactive demonstration.
- Potential evidence for rendering loops, procedural generation, game-state design, and performance work.

**Evidence still needed**

- Working demo, video, screenshots, or repository.
- Confirm whether the renderer is Canvas, WebGL, or both.
- Explain the board-generation and solvability algorithm.
- Measured frame-rate/device evidence if `60fps` remains in the copy.
- Replace the future-widget placeholder with evidence of current behavior or mark the project clearly as exploratory.

## Career evidence not represented by current case studies

The structured resume contains several potentially stronger senior-level stories that do not yet have project entries:

- **Earnest:** cross-functional initiative leadership, AWS Lambda/API Gateway systems, referral tracking, Next.js SSG/ISR, production delivery, stakeholder alignment, mentoring, and CI/CD improvement.
- **Wizeline:** secure, high-throughput financial backend services using Node.js, AWS, Docker, Jenkins, PostgreSQL, and GraphQL.
- **Consulting:** Linux security, AWS scaling APIs, database migrations, web/mobile delivery, interactive systems, and long-term independent client ownership.
- **New World Brands:** international VoIP automation, monitoring, smart recharging, dynamic routing, and operational cost reduction.
- **TouchSupport:** Linux kernel hardening, security response, hosting infrastructure, and performance diagnosis.

These may become case studies, grouped career stories, smaller portfolio mentions, or resume-only evidence. No selection should be made until the expanded project inventory is available.

## Coverage gaps for a senior engineer / architect portfolio

The current six project pages overrepresent personal/recent experiments and underrepresent professional delivery. The final set should collectively prove:

1. Large or complex system architecture.
2. Business or customer impact.
3. Production delivery and operational responsibility.
4. Cross-functional leadership and communication.
5. Technical trade-off judgment under real constraints.
6. Mentorship, enablement, or team leverage.
7. Current hands-on implementation ability.
8. Breadth across backend, infrastructure, data, and user-facing systems without appearing unfocused.

## Claims and language requiring verification

The following claims should not be strengthened or repeated until supported:

- First, only, unique, or industry-comparison claims.
- Exact performance scores, frame rates, throughput, uptime, latency, user counts, or cost savings.
- "High-throughput," "fault-redundant," "production," and similar terms without a concrete example.
- Technologies listed as featured strengths without a project or employment example that demonstrates depth.
- Planned capabilities written in present tense.
- Role labels on project pages that could be mistaken for official employer titles.

Official company names, official job titles, and employment dates must remain unchanged unless Ryan supplies corrected source records.

## Evidence requested for each additional project

Ryan can provide rough notes; polished prose is not necessary. For each candidate project, capture:

```text
Project name:
Company/client or personal project:
Dates or timeframe:
Official role at the time:
Your project responsibilities:
Team size and collaborators:
Problem or opportunity:
Users/customers/stakeholders:
Constraints:
Key architecture and technologies:
Important decisions and alternatives considered:
Production/operational responsibility:
Outcome or impact:
Metrics that can be published:
What you personally implemented:
Leadership, mentoring, or cross-team work:
Artifacts available (screenshots, diagrams, code, demo, documents):
Confidentiality limits:
What you would do differently today:
Why this project matters for the roles you want:
```

Incomplete information is acceptable. Unknown or confidential fields can be marked explicitly rather than inferred.

## Selection framework for the next phase

After the expanded project list is provided, score each candidate from 0–3 on:

- Relevance to target roles.
- Strength of verifiable impact.
- Architectural depth.
- Leadership/collaboration evidence.
- Hands-on technical evidence.
- Recency.
- Available artifacts.
- Safe public disclosure.
- Distinctiveness from the other selected projects.

The output should divide projects into:

- **Featured case studies:** the strongest three homepage stories.
- **Additional case studies:** deeper supporting evidence.
- **Portfolio mentions:** valuable breadth that does not need a full case study.
- **Resume only/private:** important career history that cannot or should not be expanded publicly.

## Work intentionally deferred

Until the project inventory and selection review are complete, do not:

- Rewrite homepage positioning or project summaries.
- Change which projects are featured.
- Add new public claims or metrics.
- Redesign case-study layouts around the current six entries.
- Update the downloadable resume PDF.
- Treat placeholder or planned features as completed work.

Safe independent work after this report is limited to technical correctness, deployment configuration, accessibility defects, and non-content-specific performance improvements.
