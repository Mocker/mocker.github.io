import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Resume from "@/components/Resume";
import ProjectCard from "@/components/ProjectCard";
import NewsFeed from "@/components/NewsFeed";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <>
      <Hero />
      
      <Section id="about" title="About Me" className="bg-slate-50 dark:bg-slate-900/50">
        <Resume />
      </Section>

      <Section id="projects" title="Selected Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>

      <Section id="news" title="Latest Updates" className="bg-slate-50 dark:bg-slate-900/50">
        <NewsFeed posts={posts} />
      </Section>

      <Section id="contact" title="Get in Touch">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <a 
            href="mailto:hello@ryanguthrie.com" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
          >
            Say Hello
          </a>
        </div>
      </Section>
    </>
  );
}
