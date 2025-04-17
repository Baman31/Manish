
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary/30 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70 text-sm">
              &copy; {currentYear} Manish Sharma. All rights reserved.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center text-sm font-medium hover:text-accent transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={16} className="ml-2 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
