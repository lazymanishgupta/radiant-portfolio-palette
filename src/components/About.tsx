
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
      title: "User Research & Testing",
      description: "Conducting in-depth research, usability testing, and behavioral analysis."
    },
    {
      title: "Information Architecture & UX Strategy",
      description: "Structuring products for seamless navigation and interaction."
    },
    {
      title: "Wireframing & Prototyping",
      description: "Rapid iteration using Figma, Adobe XD, and Sketch."
    },
    {
      title: "Design Systems & UI Components",
      description: "Ensuring consistency across digital ecosystems."
    },
    {
      title: "Collaboration with Developers & Stakeholders",
      description: "Bridging the gap between design and engineering."
    }
  ];
  
  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="reveal-on-scroll">
            <span className="badge mb-3">About Me</span>
            <h2 className="section-title mb-8">My Design Philosophy</h2>
          </div>
          
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5 reveal-on-scroll">
              <p className="text-lg mb-6 text-muted-foreground">
                I am a Lead Product Designer with 8+ years of experience in crafting user-centric digital experiences. My expertise lies in UX strategy, research, and interaction design, creating scalable and seamless experiences across aviation, finance, e-commerce, healthcare, and OTT domains.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                With a strong foundation in design thinking, I thrive in solving complex business problems through intuitive and visually compelling designs.
              </p>
              <p className="text-lg text-muted-foreground">
                I believe in data-driven design, balancing business goals with user needs to deliver impactful solutions.
              </p>
            </div>
            
            <div className="md:col-span-7">
              <div className="space-y-8">
                {philosophyPoints.map((point, index) => (
                  <div 
                    key={index} 
                    className="reveal-on-scroll bg-secondary/50 p-5 md:p-6 rounded-xl border border-secondary/70 transition-all duration-300 hover:border-secondary hover:bg-secondary/70"
                  >
                    <h3 className="text-xl font-display font-semibold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center reveal-on-scroll">
            <div className="max-w-md text-center">
              <h3 className="text-xl font-display font-semibold mb-3">What Drives Me?</h3>
              <p className="text-muted-foreground">
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
