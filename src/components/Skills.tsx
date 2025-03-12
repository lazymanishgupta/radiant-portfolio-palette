
import React, { useEffect, useRef } from 'react';

const Skills = () => {
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
  
  const skillCategories = [
    {
      title: "Design & Prototyping",
      skills: ["Figma", "Adobe XD", "Sketch"]
    },
    {
      title: "User Research & Analytics",
      skills: ["Hotjar", "Maze", "Google Analytics"]
    },
    {
      title: "Frontend Knowledge",
      skills: ["HTML", "CSS", "LESS", "SASS"]
    },
    {
      title: "Collaboration & Handoff",
      skills: ["Zeplin", "InVision", "Jira"]
    }
  ];
  
  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="badge mb-3">Tools & Technologies</span>
            <h2 className="section-title mb-5">My Toolkit</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I leverage a versatile set of tools and technologies to bring designs to life, 
              ensuring seamless collaboration and efficient workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="reveal-on-scroll">
                <h3 className="text-xl font-display font-semibold mb-6 flex items-center">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white text-sm mr-3">
                    {categoryIndex + 1}
                  </span>
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center p-4 rounded-lg border border-border bg-secondary/30 transition-all duration-300 hover:bg-secondary/50"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 reveal-on-scroll">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/10">
              <h3 className="text-xl font-display font-semibold mb-4 text-center">Design Process</h3>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10">
                {["Research", "Strategy", "Wireframing", "Prototyping", "Testing", "Implementation"].map((stage, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center shadow-sm mb-3">
                      <span className="text-xl font-semibold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-sm font-medium">{stage}</span>
                    
                    {index < 5 && (
                      <div className="hidden md:block h-0.5 w-8 bg-border mt-10 rotate-90 ml-[72px] -translate-y-10"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
