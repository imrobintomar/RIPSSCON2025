import React from 'react';

const CMEAccreditationPage = () => {
  return (
    <div>
      {/* Header Section - Same as Welcome Letter Page */}
      <div className="header">
        <div className="inner-header flex">
          <h1>CME Accreditation</h1>
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
              <use xlinkHref="#gentra-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        {/*Waves end*/}
      </div>

      <div className="content flex">
        {/* Content goes here */}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Placeholder content for CME Accreditation */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#002060] mb-8">
          CME Accreditation Information
        </h2>
        <p className="text-gray-700 text-center">
          Information regarding CME accreditation will be provided here soon. Please check back later for updates.
        </p>
      </div>
    </div>
  );
};

export default CMEAccreditationPage;