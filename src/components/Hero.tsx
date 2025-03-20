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
        const speed = 0.2 + index * 0.05;
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
  return <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gray-900 text-white">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="grid grid-cols-5 gap-8 w-full h-full">
          {Array.from({
          length: 25
        }).map((_, index) => <div key={index} className="aspect-square border border-white/20 rounded-full"></div>)}
        </div>
      </div>
      
      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-5xl">
            <div className="flex flex-col gap-3 mb-8">
              {/* Removed "Lead Product Designer" text from here */}
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-none animate-fade-in" style={{
              animationDelay: '0.5s'
            }}>
                <span className="parallax-title whitespace-nowrap">
                  <span className="font-normal text-white/80">Hey! I'm</span> Manish Kumar 👋🏼
                </span>
              </h1>
            </div>
            
            <div className="grid md:grid-cols-1 gap-8 md:gap-12">
              <div className="animate-fade-up" style={{
              animationDelay: '0.7s'
            }}>
                <p className="text-sm md:text-base text-gray-400 parallax-subtitle">
                  Lead Product Designer based in Gurgaon with 10+ years of experience in UX strategy, research, and interaction design.
                </p>
              </div>
            </div>
            
            <div className="mt-16 animate-fade-up" style={{
            animationDelay: '0.9s'
          }}>
              <h3 className="text-sm font-medium text-gray-300 mb-3">Companies I have worked with</h3>
              <div className="flex justify-start">
                <div className="p-4 rounded-lg bg-transparent">
                  <img src="/lovable-uploads/a234ee64-2794-4ac2-a5d3-3098745d836c.png" alt="Companies I worked with" className="w-full max-w-md object-contain" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center animate-fade-in" style={{
          animationDelay: '1s'
        }}>
            <div className="relative">
              <div className="absolute -top-8 -left-12 w-16 h-16 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-8 w-20 h-20 bg-red-500/30 rounded-full blur-xl animate-[pulse_3s_ease-in-out_infinite]"></div>
              <div className="absolute top-1/2 -left-16 w-12 h-12 bg-blue-500/30 rounded-full blur-xl animate-[pulse_4s_ease-in-out_infinite]"></div>
              
              <div className="absolute -top-4 -right-8 w-12 h-12 border-2 border-white/20 rounded-full"></div>
              <div className="absolute -bottom-8 -left-12 w-16 h-16 border border-white/30 rounded-lg rotate-12"></div>
              <div className="absolute top-1/3 -right-14 w-8 h-8 border border-red-500/40 rounded-sm rotate-45"></div>
              
              <div className="absolute top-1/4 -left-20 w-10 h-10 bg-yellow-400/20 rounded-md rotate-12"></div>
              <div className="absolute -bottom-12 -right-14 w-14 h-14 bg-blue-400/10 rounded-lg rotate-45"></div>
              <div className="absolute -top-12 left-10 w-6 h-6 bg-green-400/20 rounded-full"></div>
              
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-red-600">
                <img src="/lovable-uploads/c7797f97-6bc9-4cda-baa7-6d79f72b454d.png" alt="Manish Kumar" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-1 rounded-full border border-white/20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-fade-down"></div>
        </div>
      </div>
    </section>;
};
export default Hero;