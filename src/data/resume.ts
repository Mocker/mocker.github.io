export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const experience: Experience[] = [
  {
    company: "Tech Innovations Inc.",
    role: "Senior Full Stack Developer",
    period: "2021 - Present",
    description: [
      "Led the migration of a legacy monolith to a microservices architecture using Node.js and Kubernetes.",
      "Improved application performance by 40% through code optimization and caching strategies.",
      "Mentored junior developers and established code quality standards."
    ]
  },
  {
    company: "Creative Solutions Agency",
    role: "Web Developer",
    period: "2018 - 2021",
    description: [
      "Developed responsive websites and web applications for diverse clients using React and TypeScript.",
      "Collaborated with designers to implement pixel-perfect UIs.",
      "Integrated third-party APIs and payment gateways."
    ]
  }
];

export const education: Education[] = [
  {
    institution: "University of Technology",
    degree: "B.S. Computer Science",
    year: "2018"
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "GraphQL", "Python"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "AWS", "CI/CD", "Jest"]
  }
];
