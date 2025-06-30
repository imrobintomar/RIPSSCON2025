'use client';

import { useEffect, useState } from 'react';

const ScrollCircleIndicator = () => {

  useEffect(() => {
    const progressCircleBar = document.querySelector('.progress-circle-bar') as SVGElement | null;
    const scrollToTopElement = document.querySelector('.scroll-to-top') as HTMLElement | null;

    const updateProgressCircle = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = window.pageYOffset;
      let progress = (scrolled / totalHeight) * 283;
      progress = Math.min(progress, 283);

      if (progressCircleBar) {
        progressCircleBar.style.setProperty('--stroke-dashoffset', (283 - progress).toString());
      }

      if (scrollToTopElement) {
        if (window.innerHeight + scrolled >= document.body.offsetHeight) {
          scrollToTopElement.style.setProperty('--scroll-to-top-opacity', '1');
        } else {
          scrollToTopElement.style.setProperty('--scroll-to-top-opacity', '0');
        }
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (scrollToTopElement) {
      scrollToTopElement.addEventListener('click', scrollToTop);
    }

    updateProgressCircle();
    window.addEventListener('scroll', updateProgressCircle);
    window.addEventListener('resize', updateProgressCircle);

    return () => {
      window.removeEventListener('scroll', updateProgressCircle);
      window.removeEventListener('resize', updateProgressCircle);
       if (scrollToTopElement) {
        scrollToTopElement.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  return (
    <div className="progress-circle-container">
      <svg className="progress-circle" viewBox="0 0 100 100">
        <circle className="progress-background" cx="50" cy="50" r="45"></circle>
        <circle
          className="progress-circle-bar"
          cx="50"
          cy="50"
          r="45"
        ></circle>
      </svg>
      <div
        className="scroll-to-top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>
    </div>
  );
};

export default ScrollCircleIndicator;