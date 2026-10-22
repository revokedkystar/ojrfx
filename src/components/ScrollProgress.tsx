'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, scrollPercent)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent pointer-events-none">
      {/* Golden progress scrub bar */}
      <div 
        className="h-full bg-gradient-to-r from-[#8C6E2D] via-[#C5A059] to-[#DFC793] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(197,160,89,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
