export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string; // For full content if needed later
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Building Static Sites with Next.js",
    date: "November 15, 2023",
    excerpt: "Why I chose Next.js for my portfolio and how to configure it for GitHub Pages."
  },
  {
    id: "2",
    title: "The Power of Tailwind CSS",
    date: "October 28, 2023",
    excerpt: "Exploring the utility-first approach and how it speeds up development."
  },
  {
    id: "3",
    title: "Modern State Management",
    date: "September 10, 2023",
    excerpt: "A look at the current landscape of state management in React applications."
  }
];
