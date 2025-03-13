
import React, { useEffect, useRef } from 'react';

const Achievements = () => {
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
  
  const achievements = [
    {
      title: "Air India's Employee Portal",
      description: "Led the design of Air India's Employee Portal, enhancing workflow efficiency for pilots, crew, and managers.",
      category: "Aviation"
    },
    {
      title: "ICICI Campus Power & IDFC FIRST Bank",
      description: "Designed fintech solutions for ICICI Campus Power & IDFC FIRST Bank, simplifying financial decision-making.",
      category: "Finance"
    },
    {
      title: "E-commerce & Marketplace Experiences",
      description: "Developed e-commerce and marketplace experiences for platforms like Amazon, Flipkart, and Meesho.",
      category: "E-commerce"
    },
    {
      title: "UI/UX Design Course",
      description: "Created a structured UI/UX course on uiuxdesignschool.com to empower aspiring designers.",
      category: "Education"
    }
  ];
  
  return (
    <section id="achievements" ref={sectionRef} className="py-20 md:py-28 bg-white text-black">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="badge bg-black/10 text-black mb-3">Key Achievements</span>
            <h2 className="section-title mb-5">Impact & Contributions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Throughout my career, I've had the opportunity to work on impactful projects across various industries, 
              helping businesses achieve their goals through thoughtful design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="reveal-on-scroll p-6 border-t border-black/30 transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="mb-2 text-xs font-medium text-gray-600">
                  {achievement.category}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center reveal-on-scroll border-t border-black/10 pt-12">
            <h3 className="text-xl font-display font-semibold mb-3">Commitment to Excellence</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Each project represents my commitment to delivering exceptional user experiences. 
              By understanding user needs and business objectives, I create designs that are both beautiful and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
