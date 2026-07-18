import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    // Core Metadata
    title: z.string(),
    summary: z.string(), // Short elevator pitch for project cards
    description: z.string().optional(), // Longer hero subtitle for detail page
    publishDate: z.date().or(z.string().transform((str) => new Date(str))),
    featured: z.boolean().default(false),
    visibility: z.enum(['featured', 'mention', 'hidden']).default('hidden'),
    kind: z.string().default('Project'),
    status: z.string().default('In development'),
    order: z.number().default(99),
    detailPage: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(), // e.g., "Cloud & DevOps", "Decentralized & Edge", "Game Dev & Canvas"

    // Role & Historical Context (Crucial for standalone items without active Brain projects)
    role: z.string().optional(), // e.g., "Lead Architect & Solo Developer"
    clientOrCompany: z.string().optional(), // e.g., "Paybook", "Earnest", "Wizeline", "Personal Project"
    timeframe: z.string().optional(), // e.g., "2013 – 2019", "2024"

    // Interactive & Demo Capabilities (For Canvas widgets, WebGL, or embeds)
    demoType: z.enum(["canvas", "iframe", "video", "none"]).default("none"),
    demoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    hasInteractiveWidget: z.boolean().optional(),

    // Brain Sync & Export Customization (For active projects in g:\Brain\Do The Things\10_Projects)
    brainSource: z.object({
      workspacePath: z.string().optional(), // e.g., "g:/Brain/Do The Things/10_Projects/Nostril"
      exportNotes: z.string().optional(), // e.g., "Curated architectural export from Architecture & Planning Spec.md"
      lastSynced: z.string().optional(),
    }).optional(),
  }),
});

const resume = defineCollection({
  loader: glob({ pattern: 'experience.json', base: './src/content/resume' }),
  // CRITICAL NOTE: Never alter or embellish official company job titles (role) in experience.json. 
  // Those are historical HR records from the employers and must remain exact.
  schema: z.object({
    summary: z.string(),
    yearsOfExperience: z.number().optional(),
    philosophy: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    skills: z.object({
      featured: z.array(z.string()).optional(),
      core: z.array(z.string()),
      languages: z.array(z.string()),
      webAndEdge: z.array(z.string()),
      cloudAndDevOps: z.array(z.string()),
    }),
    experience: z.array(
      z.object({
        role: z.string(),
        company: z.string(),
        period: z.string(),
        location: z.string().optional(),
        highlights: z.array(z.string()),
      })
    ),
    education: z.array(
      z.object({
        degree: z.string(),
        institution: z.string(),
        year: z.string(),
      })
    ).optional().default([]),
    languages: z.array(
      z.object({
        name: z.string(),
        proficiency: z.string(),
      })
    ).optional().default([]),
  }),
});

export const collections = { projects, resume };
