
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
      skills: [
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Adobe XD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
        { name: "Sketch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" }
      ]
    },
    {
      title: "User Research & Analytics",
      skills: [
        { name: "Hotjar", logo: "https://www.vectorlogo.zone/logos/hotjar/hotjar-icon.svg" },
        { name: "Maze", logo: "https://www.mazemap.com/images/no-webp/apple-icon.png" },
        { name: "Google Analytics", logo: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg" }
      ]
    },
    {
      title: "Frontend Knowledge",
      skills: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "LESS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg" },
        { name: "SASS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" }
      ]
    },
    {
      title: "Collaboration & Handoff",
      skills: [
        { name: "Zeplin", logo: "https://cdn.zeplin.io/img/favicon/favicon-96x96.png" },
        { name: "InVision", logo: "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg" },
        { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" }
      ]
    }
  ];
  
  const designProcess = [
    {
      stage: "Research",
      description: "Understand user needs and business goals through interviews and data analysis",
      icon: "📊"
    },
    {
      stage: "Strategy",
      description: "Define clear objectives and plan the design approach based on research insights",
      icon: "🧠"
    },
    {
      stage: "Wireframing",
      description: "Create low-fidelity layouts to establish content hierarchy and user flows",
      icon: "✏️"
    },
    {
      stage: "Prototyping",
      description: "Build interactive models to test functionality and user experience",
      icon: "🔄"
    },
    {
      stage: "Testing",
      description: "Validate designs with real users and collect feedback for improvements",
      icon: "🧪"
    },
    {
      stage: "Implementation",
      description: "Collaborate with developers to ensure design fidelity and successful delivery",
      icon: "🚀"
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
                      className="flex items-center px-4 py-2 rounded-full border border-gray-200 bg-gray-50 transition-all duration-300 hover:bg-gray-100 hover:shadow-sm"
                    >
                      <img src={skill.logo} alt={skill.name} className="w-5 h-5 mr-2" />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 reveal-on-scroll">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-display font-semibold mb-8 text-center">Design Process</h3>
              
              <div className="relative">
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                  {designProcess.map((stage, index) => (
                    <div key={index} className="flex flex-col items-center relative">
                      <div className="h-16 w-16 rounded-full bg-white shadow-md border border-gray-100 text-3xl flex items-center justify-center mb-4 z-10">
                        {stage.icon}
                      </div>
                      <span className="text-md font-semibold text-center mb-2">{stage.stage}</span>
                      <p className="text-xs text-gray-600 text-center">{stage.description}</p>
                      <span className="hidden md:block absolute top-[32px] right-[-18px] text-xl text-gray-300 z-20">→</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
