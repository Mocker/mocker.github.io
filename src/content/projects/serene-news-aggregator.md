---
title: "SereneNews Aggregator"
summary: "High-performance static news feed engineered with real-time edge hydration, clean typography, and curated dark mode aesthetics."
description: "A demonstration of zero-JS static generation combined with selective edge hydration via Cloudflare Pages for instant news aggregation."
tags: ["Astro SSR", "Cloudflare Pages", "Vanilla CSS Tokens", "Edge Computing"]
featured: false
publishDate: 2025-08-01
role: "Full-Stack Engineer"
hasInteractiveWidget: false
---

# 📰 SereneNews Aggregator

**SereneNews Aggregator** is a high-performance web application engineered to deliver real-time news aggregation without the bloat of traditional Single Page Application (SPA) frameworks.

## ⚡ Blazing Fast by Default
Built on Astro and deployed to Cloudflare Pages, SereneNews achieves 100/100 Lighthouse performance scores by leveraging:

- **Static Generation + Edge Hydration:** Core news layouts and typography are rendered statically at build time. Dynamic feed updates and bookmarks are hydrated selectively at the edge.
- **Curated Dark Mode Aesthetics:** Designed with a soothing, high-contrast dark palette (`#0f1115` base) and Outfit/Inter typography to provide comfortable readability during extended reading sessions.
- **Low-Energy Maintenance:** Zero database administration required; news ingestion runs via lightweight background scheduled workers.

## 🛠️ Technical Stack
- **Framework:** Astro (Hybrid SSG/SSR Mode)
- **Deployment:** Cloudflare Pages, Cloudflare Workers, Wrangler CLI
- **Styling:** Vanilla CSS Custom Properties (Design Tokens)
