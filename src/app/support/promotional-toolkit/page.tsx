import Link from 'next/link';
import React from 'react';

const PromotionalToolkitPage = () => {
  const toolkitItems = [
    {
      title: "Promotional Toolkit",
      description: "Download the promotional toolkit to help promote your participation in WSPID 2025.",
      link: "#" // Replace with actual download link
    },
    {
      title: "Web Banners",
      description: "Download web banners in various sizes to use on your website or in email signatures.",
      link: "#" // Replace with actual download link
    },
    {
      title: "Email Signature Banner",
      description: "Add a WSPID 2025 banner to your email signature.",
      link: "#" // Replace with actual download link
    },
    {
      title: "Presentation Template",
      description: "Download the official WSPID 2025 presentation template.",
      link: "#" // Replace with actual download link
    },
    {
      title: "Official Invitation Letter",
      description: "Download the official invitation letter for WSPID 2025.",
      link: "#" // Replace with actual download link
    },
     {
      title: "Social Media Graphics",
      description: "Download graphics to share on social media platforms.",
      link: "#" // Replace with actual download link
    },
     {
      title: "WSPID 2025 Logo",
      description: "Download the official WSPID 2025 logo in various formats.",
      link: "#" // Replace with actual download link
    }
  ];

  return (
    <div>
      {/* Header Section - Same as Welcome Letter Page */}
      <div className="header">
        <div className="inner-header flex">
          <h1>Promotional Toolkit for Supporters & Exhibitors</h1>
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
          Promotional Toolkit for Supporters & Exhibitors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolkitItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <Link href={item.link} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200">
                Download
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionalToolkitPage;