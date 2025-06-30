import React from 'react';
import Image from 'next/image';
import WaveScrollEffect from '../../components/WaveScrollEffect';

export default function PmasPage() {
  return (
    <div>
      {/* Header Section with Waves */}
      <div className="header">
        <div className="inner-header flex">
          <h1>PMAS-2025</h1>
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

      <div className="content flex">
        {/* Content goes here */}
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* The main content of the PMAS page */}
        <div className="flex justify-center mx-auto max-w-full  overflow-hidden"> {/* Centering, full width, rounded border, and overflow hidden */}
          <Image
            src="/PMAS.jpg"
            alt="PMAS"
            width={5000} // Provide a default width for aspect ratio
            height={5000} // Provide a default height for aspect ratio
            className="w-full h-auto object-cover" // Responsive and object-cover
          />
        </div>
      </div>

      <WaveScrollEffect />
    </div>
  );
}
