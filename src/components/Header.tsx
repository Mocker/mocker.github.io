import React from 'react';
import Link from 'next/link';

const Header = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-4xl">
        <Link href="/" className="text-lg font-bold tracking-tight hover:text-primary-600 transition-colors">
          Ryan Guthrie
        </Link>
        
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button could go here */}
      </div>
    </header>
  );
};

export default Header;
