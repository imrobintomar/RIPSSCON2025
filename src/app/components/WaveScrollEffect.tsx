'use client';

import { useEffect } from 'react';

const WaveScrollEffect = () => {
  useEffect(() => {
    const root = document.documentElement;
    const section1 = document.querySelector('.header'); // Assuming .header is the element to watch for scroll

    const handleScroll = () => {
      const y = 1 + (window.scrollY || window.pageYOffset);
      root.style.setProperty('--gradient-percent', y * 4 + "px");
      console.log(y); // Keep console.log for now, can be removed later
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return null; // This component doesn't render anything itself
};

export default WaveScrollEffect;