import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Building digital experiences with purpose.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            I&apos;m Ryan Guthrie, a Full Stack Developer based in San Francisco. I specialize in building accessible, performant, and scalable web applications.
          </p>
          <div className="flex gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
