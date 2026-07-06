# Ryan Guthrie — Personal Website & Portfolio (`ryanguthrie.com`)

A high-performance, zero-bloat personal web portfolio and interactive resume built from first principles. Engineered to showcase 20+ years of software architecture, cross-functional engineering leadership, and cloud/edge infrastructure.

---

## ⚡ Architectural Philosophy & First Principles

- **Zero-Bloat Web Architecture:** Built on [Astro](https://astro.build) in hybrid static/server mode to deliver blazing-fast performance (100/100 Lighthouse scores) without the heavy client-side JavaScript bundle of traditional Single Page Application (SPA) frameworks.
- **Low-Energy Maintenance:** Content is managed cleanly via Markdown project case studies and structured JSON data schemas (`src/content/`), eliminating database administration and backend server maintenance overhead.
- **Automated Edge Deployment:** Continuous integration and continuous deployment (CI/CD) is automated via GitHub Actions ([`deploy.yml`](file:///g:/Dev/10_Projects/AstroPortfolio/.github/workflows/deploy.yml)) directly to **Cloudflare Pages**, ensuring global edge caching and instant hydration.
- **Curated Aesthetics & Design Tokens:** Designed with custom vanilla CSS design tokens, responsive typography, and soothing dark-mode palettes tailored for comfortable readability during deep reading sessions.

---

## 🏗️ Project Structure

```text
/
├── .github/workflows/
│   └── deploy.yml       # Automated GitHub -> Cloudflare Pages CI/CD pipeline
├── public/              # Static assets (favicons, images, robots.txt)
├── src/
│   ├── components/      # Reusable Astro and UI design system components
│   ├── content/         # Content collections (Projects & Resume experience)
│   │   ├── projects/    # Markdown project case studies & architecture notes
│   │   └── resume/      # Official HR records and career history JSON
│   ├── layouts/         # Base HTML wrappers, SEO meta tags, and navigation
│   └── pages/           # File-based routing (index, resume, project pages)
└── package.json         # Project manifests & dependency definitions
```

---

## ⚙️ Development & Local Workflow

When developing locally or starting the development server, use the background execution mode:

```bash
# Start the local dev server in background mode
astro dev --background

# Manage background server state
astro dev status
astro dev logs
astro dev stop
```

### Standard CLI Commands

| Command           | Action                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Installs project dependencies                       |
| `npm run dev`     | Starts local development server at `localhost:4321` |
| `npm run build`   | Builds production bundle to `./dist/`               |
| `npm run preview` | Previews local production build before deploying    |

---

## 🤝 Version Control & Repository Rules

- **Git Flow Workflow:** All development follows the Git Flow branching model. New features and architectural updates should be developed in feature branches and merged into the `develop` or `main` branch upon review.

---

## 🌐 Live Site & Connect

- **Live Portfolio:** [ryanguthrie.com](http://www.ryanguthrie.com)
- **GitHub Profile:** [@Mocker](https://github.com/Mocker)
- **LinkedIn:** [/in/ryanguthrie](https://www.linkedin.com/in/ryanguthrie/)
