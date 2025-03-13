
import React, { useEffect, useRef } from 'react';

const About = () => {
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
  
  const philosophyPoints = [
    {
      title: "User-Centered Approach",
      description: "Prioritizing users' needs through research, testing, and iterative design."
    },
    {
      title: "Scalability & Consistency",
      description: "Ensuring brand coherence through structured design systems."
    },
    {
      title: "Collaboration-Driven",
      description: "Working closely with stakeholders, developers, and product teams to deliver impactful solutions."
    }
  ];
  
  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-white text-black">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="reveal-on-scroll mb-16">
            <span className="badge bg-black/10 text-black mb-3">About Me</span>
            <h2 className="section-title mb-8">My Design Journey</h2>
          </div>
          
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5 reveal-on-scroll">
              <p className="text-lg mb-6 text-gray-700">
                I am a Lead Product Designer with over 8 years of experience in crafting intuitive and scalable user experiences. My expertise lies in design strategy, UX research, interaction design, and enterprise solutions across multiple industries, including aviation, finance, e-commerce, and healthcare.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                I specialize in solving complex business challenges by aligning user needs with business goals, ensuring seamless experiences across web and mobile platforms.
              </p>
              <p className="text-lg text-gray-700">
                Passionate about mentoring designers, building scalable design systems, and leveraging data-driven insights, I thrive in dynamic, fast-paced environments.
              </p>
            </div>
            
            <div className="md:col-span-7">
              <div className="space-y-6">
                {philosophyPoints.map((point, index) => (
                  <div 
                    key={index} 
                    className="reveal-on-scroll bg-gray-50 p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
                        0{index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold mb-2 text-gray-800">{point.title}</h3>
                        <p className="text-gray-600">{point.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center reveal-on-scroll">
            <div className="max-w-md text-center p-6 bg-gray-100 rounded-2xl">
              <h3 className="text-xl font-display font-semibold mb-3 text-gray-800">What Drives Me?</h3>
              <p className="text-gray-700">
                I am passionate about mentoring designers, creating design systems, and building user-centric products that drive business success. Constantly exploring the latest in AI, UX trends, and emerging tech, I aim to elevate user experiences across industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
