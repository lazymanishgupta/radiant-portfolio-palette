
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const titles = heroRef.current.querySelectorAll('.parallax-title');
      const subtitle = heroRef.current.querySelector('.parallax-subtitle');
      
      titles.forEach((title, index) => {
        const speed = 0.2 + (index * 0.05);
        const element = title as HTMLElement;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
      
      if (subtitle) {
        const element = subtitle as HTMLElement;
        element.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);
  
  return (
    <section 
      id="hero" 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black text-white"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="grid grid-cols-5 gap-8 w-full h-full">
          {Array.from({ length: 25 }).map((_, index) => (
            <div key={index} className="aspect-square border border-white/20 rounded-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-white text-black animate-fade-down" style={{ animationDelay: '0.3s' }}>
            Lead Product Designer
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <span className="block parallax-title">Manish Kumar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 parallax-subtitle animate-fade-up" style={{ animationDelay: '0.7s' }}>
            Crafting user-centric digital experiences with 8+ years of expertise in UX strategy, research, and interaction design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.9s' }}>
            <a 
              href="#about" 
              className="px-6 py-3 rounded-full bg-white text-black font-medium transition-all hover:bg-gray-200 hover:-translate-y-0.5 duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn more
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-gray-800 text-white font-medium transition-all hover:bg-gray-700 hover:-translate-y-0.5 duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-black"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-fade-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
