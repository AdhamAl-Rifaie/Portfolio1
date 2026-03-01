import React, { useEffect, useRef } from 'react';

const ScrollAnimatedLine = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      // Direct reference using useRef
      if (lineRef.current) {
        lineRef.current.style.width = `${Math.min(scrollPercent, 100)}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="line-separator-container">
      <div ref={lineRef} className="animated-line"></div>
    </div>
  );
};

export default ScrollAnimatedLine;
