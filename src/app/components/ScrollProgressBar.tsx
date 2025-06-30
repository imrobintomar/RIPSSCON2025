'use client';

import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if (totalHeight > 0) {
        setScrollProgress((scrolled / totalHeight) * 100);
      } else {
        setScrollProgress(0);
      }
      // console.log('Scrolled:', scrolled, 'Total Height:', totalHeight, 'Scroll Progress:', scrollProgress); // Commented out console log
      const progressBarElement = document.querySelector('.scroll-progress-bar') as HTMLElement | null;
      if (progressBarElement) {
        progressBarElement.style.setProperty('--scroll-progress-width', `${scrollProgress}%`);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-progress-bar" />
  );
};

export default ScrollProgressBar;