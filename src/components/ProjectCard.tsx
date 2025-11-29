import React from 'react';
import { Project } from '@/data/projects';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group p-6 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/5 transition-all bg-white dark:bg-slate-900/50">
      <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech, index) => (
          <span 
            key={index}
            className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-900 dark:text-white hover:underline decoration-primary-500 underline-offset-4"
          >
            Visit Site
          </a>
        )}
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
