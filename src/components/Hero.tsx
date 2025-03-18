
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
  
  const companies = [
    { name: "Air India", logo: "/lovable-uploads/b0aed015-7aea-474a-9d1b-d9f64532d901.png" },
    { name: "EY", logo: "/lovable-uploads/ff840849-8cc1-4e91-a28c-c575b485eaea.png" },
    { name: "IDFC First Bank", logo: "/lovable-uploads/ed2533d5-42be-48eb-8033-9a71e2d39f12.png" },
    { name: "ICICI Bank", logo: "/lovable-uploads/e9cbca5a-56f3-49c4-a00e-c276c96a8038.png" },
    { name: "Qualitest", logo: "/lovable-uploads/3d511f04-96bf-4935-8d1c-61cc117a0497.png" },
    { name: "Website Toolbox", logo: "/lovable-uploads/fbea0886-dee2-47fe-8747-f8649bc9763c.png" },
    { name: "Shimply", logo: "/lovable-uploads/d093b5ac-4d5d-4427-84eb-e242b3dd7588.png" },
  ];
  
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
              <span className="inline-flex items-center text-sm font-medium text-gray-800 animate-fade-down" style={{ animationDelay: '0.3s' }}>
                Lead Product Designer
              </span>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-none animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <span className="parallax-title">Manish Kumar</span>
              </h1>
            </div>
            
            <div className="grid md:grid-cols-1 gap-8 md:gap-12">
              <div className="animate-fade-up" style={{ animationDelay: '0.7s' }}>
                <p className="text-xl md:text-2xl text-gray-600 parallax-subtitle">
                  Crafting user-centric digital experiences with 8+ years of expertise in UX strategy, research, and interaction design.
                </p>
              </div>
            </div>
            
            <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.9s' }}>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Companies I have worked with</h3>
              <div className="flex flex-wrap gap-6 items-center">
                {companies.map((company, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="relative">
              <div className="absolute -top-8 -left-12 w-16 h-16 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-8 w-20 h-20 bg-red-500/30 rounded-full blur-xl animate-[pulse_3s_ease-in-out_infinite]"></div>
              <div className="absolute top-1/2 -left-16 w-12 h-12 bg-blue-500/30 rounded-full blur-xl animate-[pulse_4s_ease-in-out_infinite]"></div>
              
              <div className="absolute -top-4 -right-8 w-12 h-12 border-2 border-gray-800/20 rounded-full"></div>
              <div className="absolute -bottom-8 -left-12 w-16 h-16 border border-gray-800/30 rounded-lg rotate-12"></div>
              <div className="absolute top-1/3 -right-14 w-8 h-8 border border-red-500/40 rounded-sm rotate-45"></div>
              
              <div className="absolute top-1/4 -left-20 w-10 h-10 bg-yellow-400/20 rounded-md rotate-12"></div>
              <div className="absolute -bottom-12 -right-14 w-14 h-14 bg-blue-400/10 rounded-lg rotate-45"></div>
              <div className="absolute -top-12 left-10 w-6 h-6 bg-green-400/20 rounded-full"></div>
              
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
