"use client"; // Needed for useState

import Link from 'next/link';
// Removed Geist font import as it's not available on Google Fonts
import { useState } from 'react';
import Footer from '@/app/components/footer';
import "./global.css";
import ScrollCircleIndicator from '@/app/components/ScrollCircleIndicator';

// Removed Geist font usage. Consider using next/font/local if you have the font files,
// or replace with a Google Font like Inter or Roboto.
// const geistSans = Geist({
//   variable: "--font-geist-sans",
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
// });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en" data-theme="light">
      <body
        className={`antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="bg-white text-gray-800  z-20 shadow-md"> {/* Changed background to white, removed padding */}
            <div className="container mx-auto flex flex-wrap items-center py-4 px-3 md:px-4"> {/* Corrected class names for layout */}
               {/* Logos and Event Info */}
              {/* Logos and Event Info */}
<div className="flex flex-col md:flex-row items-center flex-shrink-0 mr-auto">
  {/* Container for logos */}
  <div className="flex flex-row items-center gap-2">
  <img src="/ripsscon_logo.png" alt="Ripsscon2025" className="h-12 md:h-32" />
    <img src="/logo1.png" alt="Logo 1" className="h-12 md:h-31" />
    <img src="/logo2.jpeg" alt="Logo 2" className="h-12 md:h-29" />
    <img src="/logo3.jpeg" alt="Logo 3" className="h-12 md:h-29" />
  </div> {/* End container for logos */}

                <div className="flex flex-col justify-center text-center md:text-left"> {/* Center text on small screens */}
                  <Link href="/" className="text-base md:text-lg font-bold block">10th Annual Workshop Cum Conference on</Link>
                  <Link href="/"  className="text-base md:text-lg font-bold block">Translational Research and Innovation in Paediatric Surgery</Link>
                  <Link href="/"  className="text-xxs md:text-xs text-pink-600 font-bold block">06-07 DECEMBER 2025 | AIIMS, NEW DELHI</Link>
                </div>
              </div>
              {/* Hamburger Button */}
              <button
               onClick={toggleMenu}
               className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
               aria-label="Toggle navigation menu"
               aria-expanded="false"
               aria-controls="mobile-menu" // Add this if your menu has an ID
               >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
               </svg>
               </button>
               <nav id="mobile-menu">
               {/* Menu Items Here */}
               </nav>

              {/* Navigation Links and Register Button */}
              <div className={`w-full md:w-auto md:flex md:items-center transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} md:block`}> {/* Consistent class names and vertical centering, ensure visible on md screens */}
                <nav className="flex flex-col md:flex-row items-center justify-center text-sm md:text-base py-4 md:py-0 md:flex-grow w-full md:w-auto"> {/* Consistent class names and vertical centering, added width */}
                  <ul className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-2 mb-2 md:mb-0 w-full md:w-auto"> {/* Consistent class names and vertical centering, added width */}
                    {/* About Dropdown */}
                    {/* About Dropdown - Using provided structure */}
                    <li className="relative group"> {/* Added relative and group classes for dropdown */}
                      <Link href="" onClick={toggleMenu} className="block px-4 py-2 md:p-0 hover:underline font-semibold flex items-center cursor-pointer"> {/* Added cursor-pointer */}
                        About <span className="ml-1 text-xs">▼</span>
                      </Link>
                      {/* Dropdown Menu */}
                      {/* Add JS for click/toggle and accessibility */}
                      <div id="dropdownHover" className="z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute"> {/* Added absolute */}
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="dropdownHoverButton">
                            <li>
                              <Link href="/about/general-info" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">General Information</Link> {/* Adapted link */}
                            </li>
                            <li>
                              <Link href="/about/welcome-letter" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Welcome Letter</Link> {/* Adapted link */}
                            </li>
                            <li>
                              <Link href="/about/board-committees" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Organizing  Committees</Link> {/* Adapted link */}
                            </li>
                            <li>
                              <Link href="/about/about-us" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">About RIPSSCON2025 </Link> {/* Adapted link */}
                            </li>
                             <li>
                              <Link href="/about/mission-vision" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Mission & Vision</Link> {/* Adapted link */}
                            </li>
                             <li>
                              <Link href="/contact" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Contact Us</Link> {/* Adapted link */}
                            </li>
                          </ul>
                      </div>
                    </li>
                    {/* Program Dropdown */}
                    <li className="relative group"> {/* Added relative and group classes for dropdown */}
                      <Link href="/schedule" onClick={toggleMenu} className="block px-4 py-2 md:p-0 hover:underline font-semibold flex items-center cursor-pointer"> {/* Added cursor-pointer */}
                        Program <span className="ml-1 text-xs">▼</span>
                      </Link>
                      {/* Dropdown Menu */}
                      {/* Add JS for click/toggle and accessibility */}
                      {/* Replace placeholder links with actual program links */}
                      <div id="programDropdown" className="z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute"> {/* Styled dropdown */}
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="programDropdownButton">
                            <li>
                              <Link href="/schedule/scientific-program" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Scientific Program</Link> {/* Placeholder link */}
                            </li>
                            <li>
                              <Link href="/schedule/research-workshop" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">RIPSCCON Research Workshop</Link> {/* Added link to Research Workshop page */}
                            </li>
                            <li>
                              <Link href="/schedule/cme-accreditation" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">CME Accreditation</Link> {/* Added link to CME Accreditation page */}
                            </li>
                            {/* Add more program items here */}
                          </ul>
                      </div>
                    </li>
                    {/* Abstracts Dropdown */}
                    <li className="relative group"> {/* Added relative and group classes for dropdown */}
                      <Link href="/speakers" onClick={toggleMenu} className="block px-4 py-2 md:p-0 hover:underline font-semibold flex items-center cursor-pointer"> {/* Added cursor-pointer */}
                        Abstracts <span className="ml-1 text-xs">▼</span>
                      </Link>
                      {/* Dropdown Menu */}
                      {/* Add JS for click/toggle and accessibility */}
                      <div id="abstractsDropdown" className="z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute"> {/* Styled dropdown */}
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="abstractsDropdownButton">
                            <li>
                              <Link href="/abstracts/submission" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Abstract Submission</Link> {/* Added link to Abstract Submission page */}
                            </li>
                            <li>
                              <Link href="/abstracts/topics" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Abstract Topics</Link> {/* Added link to Abstract Topics page */}
                            </li>
                            <li>
                              <Link href="/abstracts/tips" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Abstract Tips</Link> {/* Added link to Abstract Tips page */}
                            </li>
                          </ul>
                      </div>
                    </li>
                    {/* Registration Dropdown */}
                    <li className="relative group"> {/* Added relative and group classes for dropdown */}
                      <Link href="/register" onClick={toggleMenu} className="block px-4 py-2 md:p-0 hover:underline font-semibold flex items-center cursor-pointer"> {/* Added cursor-pointer */}
                        Registration <span className="ml-1 text-xs">▼</span>
                      </Link>
                      {/* Dropdown Menu */}
                      {/* Add JS for click/toggle and accessibility */}
                      <div id="registrationDropdown" className="z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute"> {/* Styled dropdown */}
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="registrationDropdownButton">
                            <li>
                              <Link href="/register" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Register</Link> {/* Placeholder link */}
                            </li>
                            {/* Add more registration items if needed */}
                          </ul>
                      </div>
                    </li>
                    {/* Support Dropdown */}
                    <li className="relative group"> {/* Added relative and group classes for dropdown */}
                      <Link href="/contact" onClick={toggleMenu} className="block px-4 py-2 md:p-0 hover:underline font-semibold flex items-center cursor-pointer"> {/* Added cursor-pointer */}
                        Support <span className="ml-1 text-xs">▼</span>
                      </Link>
                      {/* Dropdown Menu */}
                      {/* Add JS for click/toggle and accessibility */}
                      <div id="supportDropdown" className="z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute"> {/* Styled dropdown */}
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="supportDropdownButton">
                            <li>
                              <Link href="/support/prospectus" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Prospectus</Link> {/* Placeholder link */}
                            </li>
                            <li>
                              <Link href="/support/exhibition" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Exhibition</Link> {/* Placeholder link */}
                            </li>
                            <li>
                              <Link href="/support/promotional-toolkit" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Promotional Toolkit for Supporters & Exhibitors</Link> {/* Added link to Promotional Toolkit page */}
                            </li>
                             <li>
                              <Link href="/contact" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Contact Us</Link> {/* Placeholder link */}
                            </li>
                          </ul>
                      </div>
                    </li>
                    {/* Hotels Dropdown */}
                    <li className="relative group"> {/* Added relative and group classes for dropdown */}
                      <Link href="/contact" onClick={toggleMenu} className="block px-4 py-2 md:p-0 hover:underline font-semibold flex items-center cursor-pointer"> {/* Added cursor-pointer */}
                        Hotels <span className="ml-1 text-xs">▼</span>
                      </Link>
                      {/* Dropdown Menu */}
                      {/* Add JS for click/toggle and accessibility */}
                      <div id="hotelsDropdown" className="z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute"> {/* Styled dropdown */}
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="hotelsDropdownButton">
                            <li>
                              <Link href="/hotels/book" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Book Your Hotel</Link> {/* Placeholder link */}
                            </li>
                            <li>
                              <Link href="/hotels/why-book-through-us" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Why book through us?</Link> {/* Added link to Why book through us? page */}
                            </li>
                          </ul>
                      </div>
                    </li>
                    {/* Resources Dropdown */}
                    <li className="relative group"> {/* Added relative and group classes for dropdown */}
                      <Link href="/contact" onClick={toggleMenu} className="block px-4 py-2 md:p-0 hover:underline font-semibold flex items-center cursor-pointer"> {/* Added cursor-pointer */}
                        Resources <span className="ml-1 text-xs">▼</span>
                      </Link>
                      {/* Dropdown Menu */}
                      {/* Add JS for click/toggle and accessibility */}
                      <div id="resourcesDropdown" className="z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute"> {/* Styled dropdown */}
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="resourcesDropdownButton">
                            <li>
                              <Link href="/resources/promotional-toolkit" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Promotional Toolkit</Link> {/* Placeholder link */}
                            </li>
                            <li>
                              <Link href="/resources/related-events" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Related Events & Societies</Link> {/* Placeholder link */}
                            </li>
                          </ul>
                      </div>
                    </li>
                    {/* Previous ventures Dropdown */}
                    <li className="relative group"> {/* Added relative and group classes for dropdown */}
                      <Link href="#" onClick={toggleMenu} className="block px-4 py-2 md:p-0 hover:underline font-semibold flex items-center cursor-pointer"> {/* Added cursor-pointer */}
                        Previous ventures <span className="ml-1 text-xs">▼</span>
                      </Link>
                      {/* Dropdown Menu */}
                      {/* Add JS for click/toggle and accessibility */}
                      <div id="previousVenturesDropdown" className="z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute"> {/* Styled dropdown */}
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="previousVenturesDropdownButton">
                            <li>
                              <Link href="/previous-ventures/grant-writing" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">Grant Writing</Link> {/* Placeholder link */}
                            </li>
                            <li>
                              <Link href="/previous-ventures/pmas" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#002060] hover:text-white">PMAS</Link> {/* Placeholder link */}
                            </li>
                          </ul>
                      </div>
                    </li>
                  </ul>
                  {/* E-Learning Portal Link */}
                  <Link href="/e-learning" onClick={toggleMenu} className="block px-4 py-2 md:p-0 hover:underline text-pink-600 font-semibold text-xs md:ml-6">E-LEARNING PORTAL</Link> {/* Added E-Learning link */}
                </nav>
                {/* Register Button */}
                <Link href="/register" className="inline-block bg-[#002060] text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-900 transition-colors duration-200 text-sm md:text-base text-center w-full md:w-auto mt-4 md:mt-0 md:ml-auto"> {/* Consistent class names and push to the right, added responsive width and margin */}
                  REGISTER
                </Link>
              </div>
            </div>
          </header>

          {/* Main Content - children will be rendered here */}
          <main className="flex-grow container mx-auto px-4 py-6 md:px-6 md:py-8">
            {children}
          </main>

        </div>
        {/* Footer */}
        <Footer />
        <ScrollCircleIndicator />
      </body>
    </html>
  );
}

