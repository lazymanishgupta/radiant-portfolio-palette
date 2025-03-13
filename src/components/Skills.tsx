
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
    <section id="skills" ref={sectionRef} className="py-20 md:py-28 bg-white text-black">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="badge bg-black/10 text-black mb-3">Tools & Technologies</span>
            <h2 className="section-title mb-5">My Toolkit</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I leverage a versatile set of tools and technologies to bring designs to life, 
              ensuring seamless collaboration and efficient workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="reveal-on-scroll">
                <h3 className="text-xl font-display font-semibold mb-6 flex items-center">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-black text-white text-sm mr-3">
                    0{categoryIndex + 1}
                  </span>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="px-4 py-2 rounded-full border border-gray-200 bg-gray-50 transition-all duration-300 hover:bg-gray-100"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 reveal-on-scroll">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-display font-semibold mb-8 text-center">Design Process</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                {["Research", "Strategy", "Wireframing", "Prototyping", "Testing", "Implementation"].map((stage, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-black text-white flex items-center justify-center mb-3">
                      <span className="text-lg font-semibold">0{index + 1}</span>
                    </div>
                    <span className="text-sm font-medium text-center">{stage}</span>
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
