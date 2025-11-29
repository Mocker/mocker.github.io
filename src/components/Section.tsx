import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {title && (
          <h2 className="text-3xl font-bold mb-8 md:mb-12 text-slate-900 dark:text-white tracking-tight">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
