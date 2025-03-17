
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#F1F0FB] text-gray-800"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="grid grid-cols-5 gap-8 w-full h-full">
          {Array.from({ length: 25 }).map((_, index) => (
            <div key={index} className="aspect-square border border-gray-800/20 rounded-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-5xl">
            <div className="flex flex-col gap-3 mb-8">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-800/10 text-gray-800 animate-fade-down" style={{ animationDelay: '0.3s' }}>
                Lead Product Designer
              </span>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-tight animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <span className="parallax-title whitespace-nowrap">Manish Kumar</span>
              </h1>
            </div>
            
            <div className="grid md:grid-cols-1 gap-8 md:gap-12">
              <div className="animate-fade-up" style={{ animationDelay: '0.7s' }}>
                <p className="text-xl md:text-2xl text-gray-600 parallax-subtitle">
                  Crafting user-centric digital experiences with 8+ years of expertise in UX strategy, research, and interaction design.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-up" style={{ animationDelay: '0.9s' }}>
                <a 
                  href="#about" 
                  className="group inline-flex items-center text-gray-800 hover:text-gray-600 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="mr-2">Learn more</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                
                <a 
                  href="#contact" 
                  className="px-6 py-3 border border-gray-800/20 rounded-lg text-gray-800 font-medium transition-all hover:bg-gray-800 hover:text-white duration-300"
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
          
          <div className="hidden md:flex justify-center items-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="relative">
              {/* Floating UI/UX design elements */}
              <div className="absolute -top-8 -left-12 w-16 h-16 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-8 w-20 h-20 bg-red-500/30 rounded-full blur-xl animate-[pulse_3s_ease-in-out_infinite]"></div>
              <div className="absolute top-1/2 -left-16 w-12 h-12 bg-blue-500/30 rounded-full blur-xl animate-[pulse_4s_ease-in-out_infinite]"></div>
              
              {/* Design elements */}
              <div className="absolute -top-4 -right-8 w-12 h-12 border-2 border-gray-800/20 rounded-full"></div>
              <div className="absolute -bottom-8 -left-12 w-16 h-16 border border-gray-800/30 rounded-lg rotate-12"></div>
              <div className="absolute top-1/3 -right-14 w-8 h-8 border border-red-500/40 rounded-sm rotate-45"></div>
              
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-red-600">
                <img 
                  src="/lovable-uploads/c7797f97-6bc9-4cda-baa7-6d79f72b454d.png" 
                  alt="Manish Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 rounded-full border border-gray-800/20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-800/50 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-800/50 animate-fade-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
