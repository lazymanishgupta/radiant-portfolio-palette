
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <section 
      id="hero" 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "#234F33" // Dark green background from the inspiration
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-yellow-400/20 blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 rounded-full bg-yellow-400/20 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 py-12 items-center">
        <div className="order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-yellow-400 text-green-900"
          >
            Lead Product Designer
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 leading-tight"
          >
            <span className="block text-white">I'm</span>
            <span className="block text-yellow-400">Manish Kumar</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl mb-10 text-white/90"
          >
            Crafting user-centric digital experiences with 8+ years of expertise in UX strategy, research, and interaction design.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-4"
          >
            <a 
              href="#about" 
              className="px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1 duration-300 focus:outline-none bg-yellow-400 text-green-900 hover:shadow-lg w-full sm:w-auto text-center"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn more
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1 duration-300 focus:outline-none bg-transparent border-2 border-yellow-400 text-yellow-400 hover:shadow-lg w-full sm:w-auto text-center"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in touch
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center md:justify-end items-center"
        >
          <div className="relative">
            {/* Yellow circle behind the image */}
            <div className="absolute inset-0 -left-4 -top-4 w-[calc(100%+32px)] h-[calc(100%+32px)] rounded-full bg-yellow-400"></div>
            
            {/* Circular image container */}
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-8 border-white">
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
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 px-3 py-2 rounded-full text-xs font-semibold bg-white shadow-lg text-green-900"
            >
              UX Strategy
            </motion.div>
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-4 -right-4 px-3 py-2 rounded-full text-xs font-semibold bg-white shadow-lg text-green-900"
            >
              Design Systems
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute top-1/2 -right-8 transform -translate-y-1/2 px-3 py-2 rounded-full text-xs font-semibold bg-white shadow-lg text-green-900"
            >
              Prototyping
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Arrow down indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#234F33" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
