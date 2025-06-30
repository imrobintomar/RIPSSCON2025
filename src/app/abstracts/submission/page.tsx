import Link from 'next/link';
import React from 'react';

const AbstractSubmissionPage = () => {
  return (
    <div>
      {/* Header Section - Same as Welcome Letter Page */}
      <div className="header">
        <div className="inner-header flex">
          <h1>Abstract Submission</h1>
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
        <h2 className="text-center text-2xl md:text-3xl font-bold text-pink-600 mb-2">
          ABSTRACT SUBMISSION IS NOW OPEN!
        </h2>
        <p className="text-center text-lg font-semibold text-pink-600 mb-8">
          Abstract Submission Deadline: Tuesday, 20 October 2025 - 23:59 CET
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <Link href="/abstracts/topics" className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200">
            Abstract Topics
          </Link>
          <Link href="#" className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200">
            Submit Here
          </Link>
        </div>

        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-4">KEY DATES</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-sm">
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200 font-semibold">Abstract Submission Opens</td>
                  <td className="py-2 px-4 border-b border-gray-200">28 January, 2025</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200 font-semibold">Abstract Submission Deadline</td>
                  <td className="py-2 px-4 border-b border-gray-200">20 May, 2025</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200 font-semibold">Abstract Notifications Sent Out</td>
                  <td className="py-2 px-4 border-b border-gray-200">Mid-July, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm italic mt-4">
            *Note all efforts are made to send notification by the planned date. Should there be any delays with the selection process, revised date will be posted here
          </p>
        </div>

        <div className="mb-8">
           <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-4">YOUR ABSTRACT PREFERENCE</h3>
           {/* Content from image */}
        </div>

         <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-4">Type Preference</h3>
          <p className="text-gray-700 mb-4">
            In the abstract submission system, you choose one of the forms below which best describes the nature of your abstract. The selection of type will affect the information you are asked to provide within your abstract.
          </p>
          <ul className="list-none text-gray-700">
            <li className="flex items-start mb-2">
              <span className="mr-2 text-green-500">✔️</span>
              Type 1: Regular Abstract
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✔️</span>
              Type 2: Case Report/Case Series
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="border-b-2 border-pink-600 mb-4">
             <span className="inline-block py-2 px-4 text-pink-600 font-semibold">RULES FOR SUBMISSION</span>
             {/* Add other tabs here if needed */}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-4">RULES FOR SUBMISSION</h3>
          <p className="text-gray-700 mb-4">
            Please read the submission rules before submitting an abstract.
          </p>
          <ul className="list-none text-gray-700">
            <li className="flex items-start mb-2">
              <span className="mr-2 text-green-500">✔️</span>
              Abstracts must be submitted online via the website only.
            </li>
             <li className="flex items-start mb-2">
              <span className="mr-2 text-red-600 font-bold">ABSTRACTS SUBMITTED BY E-MAIL WILL NOT BE ACCEPTED.</span>
            </li>
            <li className="flex items-start mb-2">
              <span className="mr-2 text-green-500">✔️</span>
              Presentation Type: Abstracts may be submitted for Oral or E-Poster Presentations.
            </li>
             <li className="flex items-start mb-2">
              <span className="mr-2 text-green-500">✔️</span>
              Scientific Committee will determine whether the abstract will be accepted for presentation, with consideration given to the author’s preference.
            </li>
             <li className="flex items-start mb-2">
              <span className="mr-2 text-green-500">✔️</span>
              Abstracts must be received by the announced deadline. Abstracts received after the deadline will not be considered.
            </li>
          </ul>
        </div>

         <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-4">Limitations:</h3>
           <ul className="list-none text-gray-700">
            <li className="flex items-start mb-2">
              <span className="mr-2 text-green-500">✔️</span>
              The same person may submit up to 5 abstracts regardless of presenting author.
            </li>
             <li className="flex items-start mb-2">
              <span className="mr-2 text-green-500">✔️</span>
              The same person may serve as presenting author on up to 5 abstracts.
            </li>
             <li className="flex items-start mb-2">
              <span className="mr-2 text-green-500">✔️</span>
              Presenting authors must be registered participants. Only abstracts of authors who have paid their registration fees by the requested deadline will be scheduled for presentation and included for publication.
            </li>
             <li className="flex items-start mb-2">
              <span className="mr-2 text-green-500">✔️</span>
              Submission of an abstract acknowledges your acceptance for the abstract to be published in the official Congress publications (e.g. Congress website, programs, other promotions, etc.).
            </li>
             <li className="flex items-start mb-2">
              <span className="mr-2 text-green-500">✔️</span>
              The presenting author is required to ensure that all co-authors are aware of the content of the abstract and agree to its submission, before submitting the abstract.
            </li>
             <li className="flex items-start mb-2">
              <span className="mr-2 text-green-500">✔️</span>
              Abstracts must be original and must not have been published or presented at any other meeting prior to the 14th World Congress of the World Society for Pediatric Infectious Diseases (WSPID 2025)
            </li>
             <li className="flex items-start mb-2">
              <span className="mr-2 text-green-500">✔️</span>
              All abstracts should be submitted and presented in clear English with accurate grammar and spelling of a quality suitable for publication.
            </li>
             <li className="flex items-start mb-2">
              <span className="mr-2 text-green-500">✔️</span>
              Disclosure of Conflicts of Interest: Abstract submitters will be required to disclose any conflict of interest in the submission form.
            </li>
             <li className="flex items-start mb-2">
              <span className="mr-2 text-green-500">✔️</span>
              Instructions for preparation of presentations will be made available on the Congress website.
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default AbstractSubmissionPage;