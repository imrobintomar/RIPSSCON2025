import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyBookThroughUsPage = () => {
  const features = [
    {
      title: "Best Rates, Guaranteed",
      description: "Enjoy competitive prices on a curated selection of hotels, all conveniently located near the congress venue. Stay close to the heart of the action and make the most of your time at RIPSSCON 2025!"
    },
    {
      title: "Networking Opportunities",
      description: "Staying in official congress hotels boosts your chances of networking with fellow colleagues and industry experts, making your RIPSSCON 2025 experience even more valuable."
    },
    {
      title: "Personalized Support",
      description: "Get dedicated assistance from our team before and during the conference, ensuring all your accommodation needs are met. We're here to help with any requests or concerns."
    },
    {
      title: "Effortless Booking",
      description: "Our secure online reservation system makes it easy to find and book the perfect hotel for your stay, as well as flexible cancellation options, saving you time and effort."
    }
  ];

  return (
    <div>
      {/* Header Section - Same as Welcome Letter Page */}
      <div className="header">
        <div className="inner-header flex">
          <h1>Why book through us?</h1>
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
        {/* Hero Section with Background Image */}
        <div className="relative h-96 mb-8 rounded-md overflow-hidden">
          <Image
            src="/dummy-delhi-image.jpeg" // Replace with actual dummy Delhi image path
            alt="Delhi Skyline"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Overlay */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your Perfect Stay for RIPSSCON 2025 in Delhi! {/* Updated location */}
            </h2>
            <p className="text-lg">
              Attending the 10th World Conference of the Research and Innovation Pediatric Surgical Society in the vibrant city of Delhi is an exciting opportunity, but finding the perfect accommodation shouldn't be a hassle. Book your accommodation through our secure booking system and enjoy: {/* Updated conference name and location */}
            </p>
          </div>
        </div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"> {/* Adjusted grid for small screens */}
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center"> {/* Styled block as card */}
              <h3 className="text-xl font-semibold text-[#002060] mb-2">{feature.title}</h3> {/* Cyan heading */}
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Text */}
        <p className="text-gray-700 text-center mb-8">
          We know plans could change, but you can rely on us and enjoy peace of mind with flexible cancellation policies that allow you to modify your reservation without worry.
        </p>
        <p className="text-gray-700 text-center font-semibold mb-4">
          Our onsite Hotel representative is available for you at the Conference. We are always here to help!
        </p>
         <p className="text-gray-700 text-center font-semibold mb-4">
          Traveling with colleagues or a group? Benefit from special rates for bookings of five rooms or more, ensuring an affordable and comfortable stay for everyone.
        </p>
         <p className="text-gray-700 text-center font-semibold mb-8">
          Our online reservation system will soon be available for you to explore
        </p>


        {/* Need Help Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#002060] mb-4">Need Help?</h3>
          <p className="text-gray-700 mb-2">
            For any questions or requests regarding hotel accommodations, please contact our hotel sales representative:
          </p>
          <p className="text-gray-700 font-semibold">
            TEST<br />
            Hotel Sales Expert<br />
            <a href="mailto:#" className="text-blue-600 hover:underline">TESTHOTELSALES@GMAIL.COM</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default WhyBookThroughUsPage;