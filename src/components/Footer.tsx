
import React from 'react';
import { Linkedin, Mail, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-black text-white border-t border-white/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">MK.</span>
            <span className="text-sm text-gray-400">
              © {currentYear} Manish Kumar
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            {["About", "Experience", "Education", "Projects", "Skills", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/LazyMarkin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:Designermanishk@gmail.com" className="hover:text-gray-300 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://behance.net/LazyMarkin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <FileText size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
