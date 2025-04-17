
import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.min((scrollTop / documentHeight) * 100, 100);
      
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
      <div 
        className="h-full bg-accent transition-all duration-100 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
