
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)"
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-6 gap-8 w-full h-full">
          {Array.from({ length: 36 }).map((_, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-full animate-pulse" 
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(5px)",
                animationDuration: `${3 + (index % 5)}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Colorful geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-pink-400/30 blur-xl"></div>
        <div className="absolute top-[60%] left-[80%] w-40 h-40 rounded-full bg-purple-500/30 blur-xl"></div>
        <div className="absolute top-[40%] left-[60%] w-24 h-24 rounded-full bg-indigo-400/30 blur-xl"></div>
        <div className="absolute top-[10%] left-[70%] w-36 h-36 rounded-full bg-blue-400/30 blur-xl"></div>
        <div className="absolute top-[70%] left-[20%] w-28 h-28 rounded-full bg-violet-400/30 blur-xl"></div>
      </div>
      
      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div 
            className="mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-md animate-fade-down" 
            style={{ 
              background: "linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%)",
              color: "white",
              animationDelay: '0.3s' 
            }}
          >
            Lead Product Designer
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 leading-tight animate-fade-in text-white" style={{ animationDelay: '0.5s' }}>
            <span className="block parallax-title gradient-text bg-gradient-to-r from-white to-pink-100">Manish Kumar</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 parallax-subtitle animate-fade-up text-white/90" style={{ animationDelay: '0.7s' }}>
            Crafting user-centric digital experiences with 8+ years of expertise in UX strategy, research, and interaction design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.9s' }}>
            <a 
              href="#about" 
              className="px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1 duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:shadow-lg"
              style={{
                background: "linear-gradient(90deg, hsla(339, 100%, 76%, 1) 0%, hsla(24, 100%, 77%, 1) 100%)",
                color: "white"
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn more
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1 duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:shadow-lg backdrop-blur-md"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}
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
      
      {/* Animated mouse scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/70 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white/80 animate-fade-down"></div>
        </div>
      </div>

      {/* Floating icons representing skills */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[15%] p-3 rounded-full bg-white/10 backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 12C17.5 12.663 17.3747 13.3189 17.1336 13.9239C16.8924 14.5288 16.5404 15.0686 16.0962 15.5128C15.6521 15.957 15.1122 16.309 14.5073 16.5501C13.9023 16.7913 13.2464 16.9166 12.5834 16.9166C11.9204 16.9166 11.2646 16.7913 10.6596 16.5501C10.0546 16.309 9.51476 15.957 9.07062 15.5128C8.62648 15.0686 8.27444 14.5288 8.03329 13.9239C7.79214 13.3189 7.66675 12.663 7.66675 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.8333 9.16667L12.5 11.5M12.5 11.5L10.1667 9.16667M12.5 11.5V4.66667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.66675 14.6667L4.66675 17C4.66675 17.9205 5.41294 18.6667 6.33341 18.6667L18.6667 18.6667C19.5872 18.6667 20.3334 17.9205 20.3334 17L20.3334 14.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="absolute top-[65%] left-[10%] p-3 rounded-full bg-white/10 backdrop-blur-sm animate-float" style={{ animationDelay: '0.5s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 21V5C4 4.46957 4.21071 3.96086 4.58579 3.58579C4.96086 3.21071 5.46957 3 6 3H18C18.5304 3 19.0391 3.21071 19.4142 3.58579C19.7893 3.96086 20 4.46957 20 5V21L17 19L15 21L12 19L9 21L7 19L4 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 10H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 14H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="absolute top-[30%] left-[25%] p-3 rounded-full bg-white/10 backdrop-blur-sm animate-float" style={{ animationDelay: '1.5s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3.99994L10.459 8.58527L5.50023 9.16661L8.96023 12.5026L8.13156 17.4333L12 14.9999L15.8684 17.4333L15.0398 12.5026L18.4998 9.16661L13.541 8.58527L12 3.99994Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
