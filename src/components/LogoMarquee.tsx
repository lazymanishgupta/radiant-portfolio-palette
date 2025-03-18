
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
    { name: "Air India", logo: "/lovable-uploads/b0aed015-7aea-474a-9d1b-d9f64532d901.png" },
    { name: "EY", logo: "/lovable-uploads/ff840849-8cc1-4e91-a28c-c575b485eaea.png" },
    { name: "IDFC First Bank", logo: "/lovable-uploads/ed2533d5-42be-48eb-8033-9a71e2d39f12.png" },
    { name: "ICICI Bank", logo: "/lovable-uploads/e9cbca5a-56f3-49c4-a00e-c276c96a8038.png" },
    { name: "Qualitest", logo: "/lovable-uploads/3d511f04-96bf-4935-8d1c-61cc117a0497.png" },
    { name: "Website Toolbox", logo: "/lovable-uploads/fbea0886-dee2-47fe-8747-f8649bc9763c.png" },
    { name: "Shimply", logo: "/lovable-uploads/d093b5ac-4d5d-4427-84eb-e242b3dd7588.png" },
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
                className="h-12 md:h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
