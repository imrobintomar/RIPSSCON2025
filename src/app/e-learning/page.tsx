'use client';

import React from 'react';
import WaveScrollEffect from '../components/WaveScrollEffect';

const ELearningPage = () => {
  return (
    <div className="relative">
      {/* Header Section */}
      <div className="header">
        <div className="inner-header flex">
          <h1>E-Learning</h1>
        </div>
        {/*Waves Container*/}
        <div>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        {/*Waves end*/}
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Coming Soon</h2>
        <p className="text-lg text-gray-600 mt-4">
          We are working hard to bring you exciting e-learning content. Please check back later!
        </p>
      </main>
      <WaveScrollEffect />
    </div>
  );
};

export default ELearningPage;