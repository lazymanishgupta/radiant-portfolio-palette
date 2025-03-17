
import React, { useEffect, useRef } from 'react';

const LogoMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const marqueeAnimation = () => {
      if (!marqueeRef.current) return;
      const marqueeContent = marqueeRef.current;
      const marqueeWidth = marqueeContent.scrollWidth;
      
      let position = 0;
      const speed = 0.5; // pixels per frame
      
      const animate = () => {
        position -= speed;
        
        // Reset position once we've scrolled the full width
        if (position <= -marqueeWidth / 2) {
          position = 0;
        }
        
        if (marqueeContent) {
          marqueeContent.style.transform = `translateX(${position}px)`;
        }
        
        requestAnimationFrame(animate);
      };
      
      animate();
    };
    
    marqueeAnimation();
  }, []);
  
  const companies = [
    { name: "Air India", logo: "/lovable-uploads/c283c289-28a2-4957-95ce-65e5592b1eeb.png" },
    { name: "EY", logo: "/lovable-uploads/eec3e346-0d75-44b8-8c22-9f0a152af6b5.png" },
    { name: "IDFC First Bank", logo: "/lovable-uploads/cde829da-d74c-42cf-b1ae-55c0078c636d.png" },
    { name: "ICICI Bank", logo: "/lovable-uploads/15853a10-2345-4142-8828-1ed684b666d4.png" },
    { name: "Qualitest", logo: "/lovable-uploads/4a3509f8-ac23-43c1-b278-f67a9fd5d416.png" },
    { name: "Website Toolbox", logo: "/lovable-uploads/1d46c1f0-272d-4f43-94c0-7acc4efec7e6.png" },
    { name: "Shimply", logo: "/lovable-uploads/c283c289-28a2-4957-95ce-65e5592b1eeb.png" }, // Reusing first image as placeholder
  ];
  
  // Duplicate the array to create a seamless loop
  const allCompanies = [...companies, ...companies];
  
  return (
    <section className="bg-black py-8 overflow-hidden">
      <div className="container-custom mb-2">
        <h3 className="text-white text-base md:text-lg text-center opacity-70">TRUSTED BY LEADING COMPANIES</h3>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center" ref={marqueeRef}>
          {allCompanies.map((company, index) => (
            <div key={index} className="flex-shrink-0 mx-8 my-4">
              <img 
                src={company.logo} 
                alt={`${company.name} logo`} 
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
