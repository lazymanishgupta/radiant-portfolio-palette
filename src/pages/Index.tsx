
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';

const Index = () => {
  useEffect(() => {
    // Add intersection observer to reveal elements on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });
    
    // Update title and meta description
    document.title = "Manish Kumar - Lead Product Designer";
    
    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Education />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
