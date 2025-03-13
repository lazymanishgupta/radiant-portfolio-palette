
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-8",
        isScrolled ? "bg-white text-black" : "bg-transparent text-white"
      )}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <a 
          href="#hero"
          className="text-xl font-display font-bold tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          MK.
        </a>
        
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className={cn(
              "w-6 h-0.5 transition-all duration-300 ease-in-out",
              isScrolled ? "bg-black" : "bg-white",
              isMobileMenuOpen && "rotate-45 translate-y-[5px]"
            )}></div>
            <div className={cn(
              "w-6 h-0.5 my-1.5 transition-all duration-300 ease-in-out",
              isScrolled ? "bg-black" : "bg-white",
              isMobileMenuOpen && "opacity-0"
            )}></div>
            <div className={cn(
              "w-6 h-0.5 transition-all duration-300 ease-in-out",
              isScrolled ? "bg-black" : "bg-white",
              isMobileMenuOpen && "-rotate-45 -translate-y-[5px]"
            )}></div>
          </button>
        </div>
        
        <nav className={cn(
          "fixed md:static md:flex top-[60px] left-0 w-full md:w-auto bg-white md:bg-transparent md:backdrop-blur-none transition-all duration-300 ease-in-out",
          "flex-col md:flex-row items-center gap-6 md:gap-8 py-6 md:py-0 shadow-sm md:shadow-none",
          "text-black md:text-inherit",
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full md:translate-y-0 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto"
        )}>
          {["about", "experience", "education", "projects", "achievements", "skills", "contact"].map((section) => (
            <a 
              key={section}
              href={`#${section}`}
              className="capitalize text-sm font-medium transition-colors duration-200 hover:opacity-70"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
            >
              {section}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
