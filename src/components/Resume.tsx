import React from 'react';
import { experience, education, skills } from '@/data/resume';

const Resume = () => {
  return (
    <div className="space-y-12">
      {/* Experience */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Experience</h3>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 border-l border-slate-200 dark:border-slate-800">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-950" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h4 className="text-lg font-medium text-slate-900 dark:text-white">{job.role}</h4>
                <span className="text-sm text-slate-500 dark:text-slate-400">{job.period}</span>
              </div>
              <div className="text-slate-700 dark:text-slate-300 font-medium mb-2">{job.company}</div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 dark:text-slate-400">
                {job.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h4 className="font-medium text-slate-900 dark:text-white mb-3">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Education</h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="text-lg font-medium text-slate-900 dark:text-white">{edu.institution}</h4>
                <span className="text-sm text-slate-500 dark:text-slate-400">{edu.year}</span>
              </div>
              <div className="text-slate-600 dark:text-slate-400">{edu.degree}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
