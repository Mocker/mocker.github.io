---
tags:
  - portfolio
  - project-inventory
  - intake
project: AstroPortfolio
status: collecting
last_updated: 2026-07-18
---

# Portfolio Project Intake

## Purpose

This is the rolling intake record for project ideas that are complete, partially complete, historical, exploratory, or still being recovered from Ryan's Obsidian vault and local directories.

This document is an inventory, not approved public copy. No entry is automatically selected as a case study, featured project, or portfolio mention.

## First-iteration publishing strategy

- Favor a professional resume-oriented website with several concise project mentions.
- Do not require complete case studies for the first release.
- Add deeper case studies later in isolated feature branches as source material and artifacts are recovered.
- Keep resume entries and portfolio entries distinct: the resume can summarize employment responsibilities, while the personal portfolio must not republish proprietary work performed under employee agreements.
- Employment-related work should default to a brief, high-level mention unless Ryan explicitly confirms that a deeper public treatment is safe.
- Personal projects can receive deeper technical treatment when sufficient implementation evidence is available.

## Source and privacy rules

### Employment history

The current LinkedIn profile and `docs/LinkedIn-Profile.pdf` are authoritative when older employment material conflicts. The PDF was generated on July 18, 2026 and has been visually reviewed as a three-page LinkedIn resume export.

Priority for employment facts:

1. Ryan's direct correction.
2. Current LinkedIn profile / July 18, 2026 PDF export.
3. Structured site resume data.
4. Older documentation.

Official company names, official job titles, and dates must not be embellished or silently changed.

#### LinkedIn employment snapshot confirmed

The July 18 PDF lists the following official sequence:

| Company | Official title | Period |
| --- | --- | --- |
| Earnest | Senior Software Engineer | June 2021 - January 2024 |
| Wizeline | Senior Software Engineer | December 2019 - June 2021 |
| ryanguthrie.com | Consultant/Programmer | March 2008 - April 2021 |
| Paybook | Senior Software Architect | January 2013 - December 2019 |
| New World Brands, INC | Programmer | April 2008 - March 2009 |
| TouchSupport | Linux System Admin | October 2005 - March 2008 |

The structured site resume currently matches these company/title/date records apart from punctuation and spacing. Some structured highlights use stronger language than the LinkedIn export - for example, "high-throughput," "significant operational costs," and other inferred impact phrasing. Those expansions remain unverified until Ryan confirms them and should not be treated as LinkedIn-sourced facts.

### Employee-agreement boundary

For work performed as an employee or contractor:

- Record private technical detail in this intake only when useful for evaluation.
- Publish only high-level facts already public or explicitly approved by Ryan.
- Do not publish employer code, internal documents, confidential diagrams, proprietary algorithms, customer identities, private metrics, or implementation details.
- Prefer role, problem domain, scope of responsibility, general technology categories, and non-confidential outcomes.
- If disclosure safety is uncertain, classify the item as resume-only or a brief employment mention.

### Repository privacy

The LinkedIn PDF contains personal contact information. It should remain untracked until Ryan explicitly decides whether it belongs in the public repository. This intake intentionally does not reproduce the phone number.

## Intake status categories

- **Idea:** Known concept, little or no recovered implementation.
- **Partial:** Some implementation or artifacts exist, but the project is incomplete.
- **Operational:** The system reached real use or production.
- **Complete:** Intended scope was completed and can be demonstrated.
- **Historical/recovery:** Work existed, but source or artifacts are still being located.
- **Unknown:** More information is required.

## Publication treatment categories

- **Featured case study:** Homepage-level story with strong evidence and safe detail.
- **Supporting case study:** A deeper project page supporting a specific capability.
- **Brief portfolio mention:** Concise proof of breadth or experience.
- **Resume/employment mention:** High-level employment evidence with no proprietary detail.
- **Private inventory only:** Useful for positioning decisions but unsafe or too incomplete to publish.

## Received project notes

### Paybook financial data aggregation backbone / Paybook Sync

**Intake state:** Operational; historical employment work  
**Company:** Paybook  
**Official role:** Senior Software Architect  
**Employment dates:** January 2013 - December 2019  
**Default publication treatment:** Resume/employment mention or brief portfolio mention, not a personal-project case study  
**Disclosure status:** High-level information only unless Ryan approves specific additional details

#### Ryan's clarified contribution

- Joined the startup while the team was small.
- Was the first person to begin work on the financial data aggregation backbone that later became Paybook Sync.
- Brought the backbone to a fully operational state before additional team members were added.
- Designed and implemented the architecture, scaling model, and processing pipeline.
- Built supporting DevOps tools and cloud infrastructure.
- Contributed user-facing components and database schemas in addition to backend work.
- Implemented synchronization functionality for financial institutions across Mexico, Colombia, Brazil, the United States, and Europe.
- Created tools and operational workflows that let a small team - usually Ryan alone - respond to integration breakage and deploy updates quickly with minimal user impact.

#### Important accuracy correction

The older portfolio copy says "designed and built solo." The current, more precise account is:

- Ryan was the first engineer on the aggregation backbone.
- It was operational before the team expanded.
- Ryan had primary end-to-end ownership across architecture, implementation, scaling, infrastructure, schemas, tooling, and some user-facing work.
- Later work occurred with additional team members, although the active maintenance/response team was often very small and usually just Ryan.

Future copy must preserve this nuance and must not turn "primary ownership" into an absolute claim that no one else contributed.

#### Potential senior-level signals

- Zero-to-operational platform ownership.
- Architecture spanning application, data, infrastructure, DevOps, and user-facing layers.
- Horizontal scaling and fault-response design.
- International financial-institution integration breadth.
- Tooling that increased the leverage of a very small team.
- Operational responsiveness and minimization of user impact.
- Long-term stewardship as the system and team evolved.

These are evaluation notes, not approved marketing language.

#### Evidence and clarification still useful

- Which details about Paybook Sync are already publicly documented by Paybook.
- Approximate number or range of supported institutions/integrations that can safely be disclosed.
- Safe scale indicators: users, accounts, synchronization jobs, nodes, or regions.
- Examples of failure modes the tooling detected or shortened, without exposing proprietary mechanisms.
- Whether "first" refers to Paybook's first aggregation backbone, an industry-first claim, or both. Default to the narrower internal meaning unless external evidence supports more.
- Which user-facing components are safe to mention.
- Whether architecture diagrams can be recreated at a deliberately abstract level.
- Any public URLs, press, product pages, screenshots, talks, or archived materials that corroborate the product history.

#### First-iteration recommendation

Use Paybook as a high-value employment mention demonstrating end-to-end architecture and long-term ownership. Do not require a full public case study for the initial site. Retain the deeper notes for a possible future, carefully sanitized case study.

### Ryan-OS reusable product and delivery platform

- **Intake state:** Active and operational
- **Ownership:** Personal platform
- **Project type:** Reusable platform supporting independent products
- **Default publication treatment:** Brief portfolio mention for the first iteration
- **Deeper-source status:** Additional information exists in Ryan's other project repositories; defer that review until a dedicated case-study pass is useful

#### Ryan's clarified purpose

- Ryan-OS is both a personal platform and a reusable platform.
- It drives Ryan's independent products rather than existing only as a loose collection of scripts.
- It supports rapid iteration from an idea through delivery.
- Its delivery pipeline is designed to preserve reliability and testing while increasing iteration speed.
- It provides common infrastructure and workflow leverage across multiple independent products.

#### Potential senior-level signals

- Platform thinking applied across a portfolio of products.
- Reusable delivery infrastructure rather than one-off project setup.
- Developer-experience and iteration-speed improvements balanced with testing and reliability.
- A repeatable path from exploration to delivered software.
- Current hands-on ownership spanning product development, automation, quality controls, and delivery.

These are intake-level signals, not approved public claims or a complete case study.

#### First-iteration recommendation

Use a concise mention that identifies Ryan-OS as the reusable platform behind Ryan's independent products and emphasizes rapid, reliable, tested delivery. Do not attempt to explain its full architecture yet. Avoid reducing it to "pipeline tools" if that wording obscures its platform role.

#### Deferred evidence review

When deeper treatment becomes useful, review the related project repositories for:

- Platform boundaries and shared components.
- The product lifecycle and delivery pipeline.
- Test gates, validation, rollback, and reliability mechanisms.
- Examples of multiple products using the platform.
- Evidence of reduced setup or delivery time.
- Reusable interfaces, configuration, and extension points.
- Safe diagrams, screenshots, commands, or demonstrations.

## Known candidates awaiting expanded intake

These names come from the restored site and prior career material. Their presence here does not imply selection:

- Earnest initiatives.
- Wizeline financial-platform backend work.
- Ryan's consulting projects.
- New World Brands VoIP automation and monitoring.
- TouchSupport Linux security and operations work.

Additional personal, consulting, open-source, game, mobile, backend, infrastructure, automation, and experimental projects should be added as they are recovered.

## Deferred from the first iteration

The following projects remain in the private inventory but are not candidates for first-iteration case studies or public project pages:

| Project | Decision | Reason | Future reconsideration |
| --- | --- | --- | --- |
| Locale Planner | Deferred | Not enough implemented or showable material for a credible case study | Reconsider when a demonstrable product, artifacts, and engineering outcomes exist |
| Lustre | Deferred research | Research project only; functionality is incomplete, unproven, and must not be represented as an implemented protocol or working system | Reconsider only after implementation and validation; optionally mention later as a clearly labeled research interest |
| SereneNews Aggregator | Deferred | Not enough implemented or showable material for a credible case study | Reconsider when the deployed system, ingestion architecture, and performance evidence can be demonstrated |
| Worm Compost Match-3 Prototype | Deferred | Not enough implemented or showable material for a credible case study | Reconsider when a working demo, source, video, or substantive implementation can be shown |

Their restored source entries should remain untouched while intake is in progress. Once the first-iteration project list is approved, remove them from the public content collection/build in one deliberate implementation pass. Do not delete historical notes or recovered artifacts.

### Lustre accuracy boundary

- Classification: research project.
- Current state: incomplete functionality.
- Validation state: unproven.
- Not appropriate for a first-iteration case study or for claims of implemented decentralized identity, cryptographic verification, relay behavior, security, interoperability, or performance.
- Any future mention must use research-oriented language such as "exploring" or "investigating," never production or implementation language unless the project later earns that description.

## Intake template for additional projects

Rough notes are sufficient. Use whichever fields are known:

```text
Project name or working title:
Personal, consulting, open source, or employment-related:
Status (idea, partial, operational, complete, historical/recovery):
Timeframe:
Problem or goal:
What was actually implemented:
Your responsibilities:
Other people or teams involved:
Architecture and technologies:
Users or audience:
Outcome or current state:
Evidence/artifacts available:
What is safe to publish:
What must remain private:
Why it may be relevant to senior engineer / architect roles:
```

Missing fields should remain unknown rather than being inferred.
