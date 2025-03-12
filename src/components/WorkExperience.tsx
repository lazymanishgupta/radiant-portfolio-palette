
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
      impact: "Reduced manual inefficiencies by 40%, improved employee engagement, and enhanced workflow automation.",
      color: "from-blue-500 to-indigo-600"
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
      impact: "Improved digital engagement, streamlined user journeys, and enhanced conversion rates across multiple platforms.",
      color: "from-yellow-500 to-amber-600"
    },
    {
      company: "QA InfoTech",
      position: "Product Designer",
      period: "April 2020 - June 2022",
      challenge: "Various clients needed improved user experiences across healthcare, entertainment, and verification platforms.",
      solution: "Designed user experiences for All Scripts (Healthcare), Phando & Phunflix (OTT), and Validate ME (Verification Platform).",
      contributions: [
        "All Scripts: Improved EHR workflows, ensuring HIPAA compliance.",
        "Phando & Phunflix: Enhanced content discovery & video streaming experiences.",
        "Validate ME: Optimized background verification processes for recruiters."
      ],
      impact: "Delivered user-centric solutions that improved workflow efficiency and user satisfaction.",
      color: "from-green-500 to-emerald-600"
    },
    {
      company: "Website Toolbox",
      position: "Web Designer",
      period: "July 2016 - March 2020",
      challenge: "Online communities needed engaging and functional forum interfaces.",
      solution: "Designed forums, landing pages, and community experiences using HTML, LESS, and SASS.",
      contributions: [
        "Conducted user research and prototyping, ensuring scalable web solutions.",
        "Created responsive designs for community platforms.",
        "Developed and maintained front-end code using HTML, CSS preprocessors (LESS, SASS)."
      ],
      impact: "Built engaging community platforms that fostered user interaction and growth.",
      color: "from-rose-500 to-pink-600"
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-b from-purple-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="badge bg-blue-100 text-blue-700 mb-3">Work Experience</span>
          <h2 className="section-title mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Professional Journey</h2>
          <p className="text-gray-600">Building innovative design solutions across various industries</p>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {index < experiences.length - 1 && (
                <div className="absolute left-[28px] top-[70px] bottom-0 w-0.5 h-[calc(100%_-_50px)] bg-gradient-to-b from-indigo-200 to-transparent"></div>
              )}
              
              <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start reveal-on-scroll">
                <div className="md:col-span-4 relative z-10">
                  <div className={`bg-gradient-to-r ${exp.color} text-white p-5 rounded-xl shadow-md`}>
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
                
                <div className="md:col-span-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
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
                      {exp.contributions.map((contribution, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2 mt-0.5">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
