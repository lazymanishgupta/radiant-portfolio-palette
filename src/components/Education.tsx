
import React, { useRef, useEffect } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
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

  const educationItems = [
    {
      institution: "Punjab Technical University",
      degree: "Bachelor of Science in Computer Science",
      period: "2012 - 2016",
      description: "Focused on computer science fundamentals, programming, and web technologies.",
      achievements: [
        "Graduated with First Class Honors",
        "Specialized in User Interface Design",
        "Led student design projects"
      ],
      icon: GraduationCap
    },
    {
      institution: "UI/UX Design Specialization",
      degree: "Certification Course",
      period: "2017",
      description: "Comprehensive program covering user research, wireframing, prototyping, and usability testing.",
      achievements: [
        "Completed multiple case studies",
        "Created design system documentation",
        "Received recognition for innovative solutions"
      ],
      icon: Award
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 md:py-28 bg-white text-black">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="badge bg-black/10 text-black mb-3">Education</span>
          <h2 className="section-title mb-6">Academic Background</h2>
          <p className="text-gray-600">Building a strong foundation through education and continuous learning</p>
        </div>

        <div className="space-y-16 max-w-4xl mx-auto">
          {educationItems.map((edu, index) => (
            <div key={index} className="relative">
              {index < educationItems.length - 1 && (
                <div className="absolute left-[28px] top-[70px] bottom-0 w-0.5 h-[calc(100%_-_50px)] bg-black/10"></div>
              )}
              
              <div className="reveal-on-scroll grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                <div className="md:col-span-5 relative z-10">
                  <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <edu.icon className="mr-2" size={18} />
                      <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-black">{edu.institution}</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1" size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-7 bg-gray-50 border border-gray-200 p-6 rounded-xl">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-black mb-2">Overview</h4>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2">Achievements</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black text-white mr-2 mt-0.5 flex-shrink-0 text-xs">
                            0{i+1}
                          </span>
                          <span className="text-gray-600">{achievement}</span>
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

export default Education;
