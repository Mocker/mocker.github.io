---
title: "Anna"
summary: "A persistent memory and goal-tracking layer for AI assistants. Anna connects via MCP to Claude, Gemini, Cursor, and ChatGPT, so memory, goals, and learnings carry across models instead of resetting each session. Each user's data is isolated in their own Cloudflare pod."
description: "Persistent memory and goal tracking that carries across AI models via MCP."
tags: ["AI agents", "Model Context Protocol (MCP)", "Cloudflare Workers", "TypeScript", "Zero-Trust architecture"]
featured: true
visibility: featured
kind: "Independent product"
status: "Private beta"
order: 1
detailPage: false
publishDate: 2026-09-29
role: "Founder, Architect & Solo Developer"
clientOrCompany: "Independent work"
timeframe: "2025–2026"
liveUrl: "https://anna.gup.io"
demoImage: "/assets/anna-status.gif"
demoImageAlt: "Terminal session querying Anna's live daemon status and searching her vault through the MCP portal"
---

# Anna

Anna is a sovereign cognitive companion: a persistent memory, goal-tracking, and personalization layer that sits beside large language models instead of competing with them. Where the model is the language center, Anna is the brain behind it — she continuously organizes goals, crystallizes learnings, and carries context across sessions so nothing has to be re-explained.

She connects to Claude Desktop, Gemini, Cursor, and ChatGPT through a single standard MCP link, sharing projects, constraints, and decisions across every model. Each subscriber gets an isolated pod — a dedicated Cloudflare D1 database and R2 markdown vault — so memories are never mixed between users or used for model training.

Anna is live in private beta at [anna.gup.io](https://anna.gup.io), with managed Personal and Executive pods, a 3-minute setup wizard, and a built-in web assistant powered by Cloudflare Workers AI.
