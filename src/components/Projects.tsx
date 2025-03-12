
import React, { useRef, useEffect } from 'react';
import { Lightbulb, Target, CheckCircle } from 'lucide-react';

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
      problem: "The existing crew management system had fragmented workflows, leading to poor user experience and inefficiencies.",
      approach: [
        "Conducted stakeholder interviews & user research with pilots, crew members, and engineers to identify pain points.",
        "Created personas & journey maps to align the crew experience with business goals.",
        "Iterated on low-fidelity to high-fidelity wireframes, ensuring a seamless workflow.",
        "Designed an Enterprise Design Language to ensure a consistent UI/UX framework."
      ],
      outcomes: [
        "Reduced manual inefficiencies by 40%.",
        "Increased crew satisfaction with an intuitive self-service platform.",
        "Enabled scalable UI frameworks, enhancing Air India's digital transformation."
      ],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "ESG Compass – Driving Sustainable Change",
      problem: "Organizations struggled to track carbon emissions and ESG metrics, leading to compliance issues.",
      approach: [
        "Led user research and data analysis to define ESG goals.",
        "Designed an interactive dashboard to track sustainability metrics.",
        "Collaborated with engineers to ensure seamless data integration."
      ],
      outcomes: [
        "Enabled companies to track & report sustainability impact effortlessly.",
        "Improved compliance adherence with real-time insights."
      ],
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="badge bg-teal-100 text-teal-700 mb-3">Featured Projects</span>
          <h2 className="section-title mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Design Case Studies</h2>
          <p className="text-gray-600">Solving complex problems through user-centered design</p>
        </div>

        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="reveal-on-scroll bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-display font-bold mb-6 text-gray-800">{project.title}</h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                        <Lightbulb size={20} className="text-red-600" />
                      </div>
                      <h4 className="font-semibold text-gray-800">Problem Statement</h4>
                    </div>
                    <p className="text-gray-600">{project.problem}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Target size={20} className="text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-800">Design Approach</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.approach.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <span className="text-blue-500 mr-2">📌</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <CheckCircle size={20} className="text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-800">Outcome</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <span className="text-green-500 mr-2">✔️</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
