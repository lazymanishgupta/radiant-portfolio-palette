
import React, { useRef, useEffect } from 'react';
import { Briefcase, Calendar, Check } from 'lucide-react';

const WorkExperience = () => {
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

  const experiences = [
    {
      company: "Air India",
      position: "Lead Product Designer",
      period: "Nov 2023 - Present",
      challenge: "Air India's internal operations lacked digital cohesion, leading to inefficiencies in crew scheduling, approvals, and benefits access.",
      solution: "Led the UX strategy and product design for internal platforms, focusing on crew experience, operational ease, and employee engagement.",
      contributions: [
        "ACM & eACM Systems: Designed platforms for pilots and engineers to manage flight privileges efficiently.",
        "Lifestyle Bidding: Enabled cabin crew to set personalized leave preferences, improving work-life balance.",
        "Roster Management: Developed an intuitive system to optimize crew scheduling, reducing conflicts.",
        "Approval Workflows: Streamlined leave, appraisal, and training approvals, improving process efficiency.",
        "Enterprise Design System: Established scalable UI/UX frameworks for seamless brand consistency."
      ],
      impact: "Reduced manual inefficiencies by 40%, improved employee engagement, and enhanced workflow automation."
    },
    {
      company: "Ernst & Young",
      position: "Sr. Product Designer",
      period: "June 2022 - Present",
      challenge: "Large enterprises needed digital transformation to improve customer experience and operational efficiency.",
      solution: "Worked on large-scale projects, including Air India, ESG Compass, IDFC FIRST Bank, and ICICI Bank Campus Power, focusing on digital transformation and innovation.",
      contributions: [
        "ESG Compass: Designed an analytics dashboard to track carbon footprint & sustainability metrics.",
        "IDFC FIRST Bank: Revamped digital investment journeys, boosting customer engagement & conversions.",
        "ICICI Campus Power: Conducted heuristic analysis and redesigned banking experiences for students."
      ],
      impact: "Improved digital engagement, streamlined user journeys, and enhanced conversion rates across multiple platforms."
    },
    {
      company: "QA InfoTech",
      position: "Product Designer",
      period: "April 2020 - June 2022"
    },
    {
      company: "Website Toolbox",
      position: "Web Designer",
      period: "July 2016 - March 2020"
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-28 bg-[#F5F7FA] text-gray-800">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="badge bg-gray-800/20 text-gray-800 mb-3">Work Experience</span>
          <h2 className="section-title mb-6">Professional Journey</h2>
          <p className="text-gray-600">Building innovative design solutions across various industries</p>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {index < experiences.length - 1 && (
                <div className="absolute left-[28px] top-[70px] bottom-0 w-0.5 h-[calc(100%_-_50px)] bg-gray-800/10"></div>
              )}
              
              <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start reveal-on-scroll">
                <div className="md:col-span-4 relative z-10">
                  <div className="bg-white shadow-sm border border-gray-200/50 text-gray-800 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Briefcase className="mr-2" size={18} />
                      <h3 className="font-bold">{exp.position}</h3>
                    </div>
                    <h4 className="text-xl font-bold mb-2">{exp.company}</h4>
                    <div className="flex items-center text-sm opacity-90">
                      <Calendar className="mr-1" size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                {index < 2 && (
                  <div className="md:col-span-8 bg-white shadow-sm border border-gray-200/50 p-6 rounded-xl">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{exp.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Solution:</h4>
                      <p className="text-gray-600">{exp.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Contributions:</h4>
                      <ul className="space-y-2">
                        {exp.contributions?.map((contribution, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-gray-600 mr-2 mt-0.5">
                              <Check size={12} />
                            </span>
                            <span className="text-gray-600">{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Impact:</h4>
                      <p className="text-gray-600">{exp.impact}</p>
                    </div>
                  </div>
                )}
                
                {index >= 2 && (
                  <div className="md:col-span-8 bg-white shadow-sm border border-gray-200/50 p-6 rounded-xl">
                    <div className="text-center py-4">
                      <p className="text-gray-600">View more details about my work at {exp.company}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
