
import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const featuredProjects = [
    {
      title: "Air India – Enhancing Crew Experience & Operational Efficiency",
      description: "Led the design for Air India's Employee Portal, enhancing workflow efficiency for pilots, crew, and managers.",
      number: "01"
    },
    {
      title: "ESG Compass – Driving Sustainable Change",
      description: "Designed an interactive dashboard to help organizations track carbon emissions and ESG metrics, resolving compliance issues.",
      number: "02"
    },
    {
      title: "ICICI Campus Power & IDFC FIRST Bank",
      description: "Created fintech solutions for ICICI Campus Power & IDFC FIRST Bank, simplifying financial decision-making.",
      number: "03"
    },
    {
      title: "E-commerce & Marketplace Experiences",
      description: "Developed user experiences for platforms like Amazon, Flipkart, and Meesho, focusing on conversion optimization.",
      number: "04"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-28 bg-black text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="badge bg-white/20 text-white mb-3">Featured Projects</span>
          <h2 className="section-title mb-6">Design Case Studies</h2>
          <p className="text-gray-400">Solving complex problems through user-centered design</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className="reveal-on-scroll group bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-bold text-white/40">{project.number}</span>
                <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
