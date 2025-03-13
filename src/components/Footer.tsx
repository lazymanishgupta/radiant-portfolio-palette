
import React from 'react';
import { Linkedin, Mail, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 md:py-12 bg-black text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Manish Kumar</h3>
            <p className="text-gray-400 mb-4">Lead Product Designer crafting user-centric experiences across multiple industries</p>
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
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-2">Designermanishk@gmail.com</p>
            <p className="text-gray-400">LinkedIn: LazyMarkin</p>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                © {currentYear} Manish Kumar. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              {["Privacy", "Terms", "Sitemap"].map((item) => (
                <a 
                  key={item} 
                  href="#"
                  className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
