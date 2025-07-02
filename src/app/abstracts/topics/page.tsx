import React from 'react';

const AbstractTopicsPage = () => {
  const topics = [
    "Infection Control",
    "Antimicrobials and Stewardship",
    "Bacterial Infections:",
    "Tropical and Global Child Health",
    "Diagnostic Microbiology",
    "Emerging and Zoonotic Infections",
    "Fungal Infections",
    "Infections in the Immunocompromised Host",
    "Public Health, epidemiology and pandemic preparedness and response",
    "Immunization, vaccine policy and advocacy",
    "Viral Infections",
    "Parasitic infections",
    "HIV/blood born virus/STD",
    "Other"
  ];

  return (
    <div>
      {/* Header Section - Same as Welcome Letter Page */}
      <div className="header">
        <div className="inner-header flex">
          <h1>Abstract Topics</h1>
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#002060] mb-8">
          Abstract Topics
        </h2>
        <ul className="list-disc list-inside text-gray-700 max-w-prose mx-auto">
          {topics.map((topic, index) => (
            <li key={index} className="mb-2">{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AbstractTopicsPage;