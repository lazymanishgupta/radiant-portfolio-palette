
import React, { useEffect, useRef } from 'react';
import { Mail, Linkedin, Globe } from 'lucide-react';

const Contact = () => {
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
  
  const contactLinks = [
    {
      type: "Email",
      value: "hello@manishkumar.design",
      icon: Mail,
      href: "mailto:hello@manishkumar.design"
    },
    {
      type: "LinkedIn",
      value: "Manish Kumar",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lazymarkin/"
    },
    {
      type: "Portfolio",
      value: "manishkumar.design",
      icon: Globe,
      href: "https://manishkumar.design"
    }
  ];
  
  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-[#FDE1D3] text-gray-800">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="badge bg-gray-800/20 text-gray-800 mb-3">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-5">Let's Connect!</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-on-scroll bg-white/80 border border-gray-300/30 p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:bg-white hover:shadow-lg"
              >
                <div className="h-12 w-12 rounded-full bg-gray-800/10 flex items-center justify-center mb-4">
                  <link.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{link.type}</h3>
                <p className="text-gray-600">{link.value}</p>
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-center reveal-on-scroll">
            <p className="text-gray-600 mb-6">
              Looking for a passionate designer to help bring your vision to life? I'd love to hear from you.
            </p>
            <a 
              href="mailto:hello@manishkumar.design"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-gray-800/20 text-gray-800 font-medium transition-all hover:bg-gray-800 hover:text-white duration-300"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
