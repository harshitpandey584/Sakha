import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/FlowLine.css';

const FlowLine = () => {
  const pathRef = useRef(null);
  const [dashOffset, setDashOffset] = useState(300);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      const newOffset = 300 - progress * 300;
      setDashOffset(newOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flow-container">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="flow-line">
        <path
          ref={pathRef}
          d="M0,0 C50,100 50,0 100,100"
          style={{
            strokeDasharray: 300,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
    </div>
  );
};

export default FlowLine;
