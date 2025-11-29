import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 mt-12">
      <div className="container mx-auto px-4 max-w-4xl text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Ryan Guthrie. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">
            LinkedIn
          </a>
          <a href="mailto:hello@ryanguthrie.com" className="hover:text-primary-600 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
