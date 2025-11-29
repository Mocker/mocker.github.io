export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce solution with real-time inventory management and secure payment processing.",
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates and team features.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com"
  },
  {
    title: "Weather Dashboard",
    description: "A clean and simple weather dashboard using the OpenWeatherMap API.",
    techStack: ["Vue.js", "Chart.js", "API Integration"],
    link: "https://example.com"
  }
];
