"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const RegisterPage = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const renderCollapsibleSection = (id: string, title: string, content: React.ReactNode) => (
    <React.Fragment>
      <button
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-blue-700 hover:text-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-600"
        onClick={() => toggleSection(id)}
        aria-expanded={openSection === id}
        aria-controls={`content-${id}`}
      >
        {title}
        <span>{openSection === id ? '▲' : '▼'}</span>
      </button>
      {openSection === id && (
        <div id={`content-${id}`} className="pb-4 text-gray-700">
          {content}
        </div>
      )}
    </React.Fragment>
  );

  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <div className="inner-header flex">
          <h1>Registration</h1>
        </div>

        {/* Waves */}
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 dark:bg-gray-800 dark:text-white">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-cyan-600 mb-6">
          Registration Fees
        </h2>
        <p className="text-center text-gray-700 text-lg mb-8">
          Registration fees (in INR) apply to payments received prior to the indicated deadlines.
          GST Excludes
        </p>

        {/* Registration Fees Table */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-sm">
            <thead>
              <tr className="bg-cyan-700 text-white">
                <th className="py-3 px-4 text-center">Category</th>
                <th className="py-3 px-4 text-center">Early Rate<br />Until Sep 3, 2025</th>
                <th className="py-3 px-4 text-center">Regular Rate<br />Sep 4 - Oct 14, 2025</th>
                
              </tr>
            </thead>
            <tbody>
              {/* Dynamically render rows for better scalability */}
              {[
                { category: "Faculty Registration", early: 25000 +"+ GST", regular: 25000 + "+GST" },
                { category: "Students/Fellows/Nurses", early: 10000 + "+ GST", regular: 10000 + "+GST"},
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="py-2 px-4 border-b border-gray-200 font-semibold">{row.category}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-center">INR {row.early}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-center">INR {row.regular}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Collapsible Sections */}
        <div className="mb-8">
          {renderCollapsibleSection('fees-includes', 'WHAT FEES INCLUDES', (
            <>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Attendance in all scientific sessions</li>
                <li>Congress material</li>
                <li>Access to the Exhibition Area</li>
                <li>Refreshments during coffee breaks as indicated in the program</li>
              </ul>
            </>
          ))}
          {renderCollapsibleSection('payment-methods', 'PAYMENT METHODS', (
            <>
              <p className="text-gray-700 mb-4">Payment methods:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Credit/Debit Card: Visa, MasterCard, American Express</li>
                <li>Bank Transfer (Additional $30 handling fee)</li>
              </ul>
            </>
          ))}
        </div>

        {/* Sticky REGISTER Button */}
        <div className="text-center mt-8 sticky bottom-4">
          <Link href="/register" className="group relative overflow-hidden bg-cyan-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-900 transition-all duration-200 text-lg shadow-lg">
            <span className="absolute inset-0 bg-cyan-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            REGISTER HERE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
