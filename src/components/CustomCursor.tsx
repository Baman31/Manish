
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const mMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mDown = () => {
      setClicked(true);
    };

    const mUp = () => {
      setClicked(false);
    };

    // Add listeners for interactive elements
    const addLinkHoverListeners = () => {
      const links = document.querySelectorAll('a, button');
      links.forEach(link => {
        link.addEventListener('mouseenter', () => setLinkHovered(true));
        link.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    // Don't show custom cursor on mobile devices
    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', mMove);
      window.addEventListener('mouseenter', mMove);
      window.addEventListener('mouseleave', mLeave);
      window.addEventListener('mousedown', mDown);
      window.addEventListener('mouseup', mUp);
      
      // Call once after first render
      addLinkHoverListeners();
      
      // Set up a mutation observer to handle dynamically added links
      const observer = new MutationObserver(addLinkHoverListeners);
      observer.observe(document.body, { childList: true, subtree: true });
      
      return () => {
        window.removeEventListener('mousemove', mMove);
        window.removeEventListener('mouseenter', mMove);
        window.removeEventListener('mouseleave', mLeave);
        window.removeEventListener('mousedown', mDown);
        window.removeEventListener('mouseup', mUp);
        observer.disconnect();
      };
    }
  }, []);

  if (window.innerWidth <= 768) {
    return null; // Don't render on mobile/touch devices
  }

  return (
    <>
      <div
        className={`cursor-dot ${hidden ? 'opacity-0' : 'opacity-100'} ${
          clicked ? 'scale-75' : ''
        } ${linkHovered ? 'scale-150' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-outline ${hidden ? 'opacity-0' : 'opacity-100'} ${
          clicked ? 'scale-75' : ''
        } ${linkHovered ? 'scale-150' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default CustomCursor;
