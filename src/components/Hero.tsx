
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-blue-300/30 blur-3xl animate-pulse"></div>
          <div className="absolute top-[40%] right-[10%] w-72 h-72 rounded-full bg-purple-300/30 blur-3xl animate-pulse" style={{ animationDuration: '7s' }}></div>
          <div className="absolute bottom-[20%] left-[20%] w-56 h-56 rounded-full bg-pink-300/30 blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-[60%] right-[25%] w-40 h-40 rounded-full bg-indigo-300/20 blur-2xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        </div>
      </div>
      
      <div className="container-custom relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 py-12 items-center">
        <div className="order-2 md:order-1">
          <div 
            className="mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold backdrop-blur-md" 
            style={{ 
              background: "rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "white"
            }}
          >
            Lead Product Designer
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 leading-tight text-white">
            <span className="block parallax-title">Manish</span>
            <span className="block parallax-title gradient-text bg-gradient-to-r from-yellow-200 to-yellow-50">Kumar</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mb-10 parallax-subtitle text-white/90">
            Crafting user-centric digital experiences with 8+ years of expertise in UX strategy, research, and interaction design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            <a 
              href="#about" 
              className="px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1 duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:shadow-lg w-full sm:w-auto text-center"
              style={{
                background: "linear-gradient(90deg, #FF9A9E 0%, #FAD0C4 100%)",
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
              className="px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1 duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:shadow-lg backdrop-blur-md w-full sm:w-auto text-center"
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
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 blur-lg opacity-70 animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <img 
                src="/manish-kumar.jpg" 
                alt="Manish Kumar" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
                }}
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 px-3 py-2 rounded-full text-xs font-semibold bg-white shadow-lg text-purple-900">
              UX Strategy
            </div>
            <div className="absolute -bottom-4 -left-4 px-3 py-2 rounded-full text-xs font-semibold bg-white shadow-lg text-purple-900">
              Design Systems
            </div>
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 px-3 py-2 rounded-full text-xs font-semibold bg-white shadow-lg text-purple-900">
              Prototyping
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated mouse scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/70 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white/80 animate-fade-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
