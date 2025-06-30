"use client"; // Needed for useState and interactive components
import React, { useState } from 'react'; // Import useState
import WaveScrollEffect from '../../components/WaveScrollEffect';

const GeneralInfoPage = () => {
  const [expandedBlock, setExpandedBlock] = useState<string | null>(null); // State to track expanded block

  const toggleBlock = (blockId: string) => {
    setExpandedBlock(expandedBlock === blockId ? null : blockId); // Toggle expanded state
  };

  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <div className="inner-header flex">
          <h1>General Information</h1>
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

      {/* Main Content Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* CONGRESS VENUE */}
            <div className="bg-cyan-600 text-white rounded-md overflow-hidden"> {/* Added overflow-hidden */}
              <div
                className="p-4 flex items-center cursor-pointer" // Made header clickable
                onClick={() => toggleBlock('congress-venue')} // Added onClick handler
              >
                {/* Icon Placeholder */}
                <span className="mr-4 text-2xl">ℹ️</span> {/* Placeholder icon */}
                <span className="font-semibold">CONFERENCE VENUE</span>
              </div>
              {/* Collapsible Content */}
             {expandedBlock === 'congress-venue' && ( // Conditionally render content
               <div className="bg-white text-gray-800 p-4"> {/* Styled content area */}
                 {/* Add actual content for Congress Venue here */}
                 <p>
                   {/* Replace with actual address */}
                   <strong>All India Institute Of Medical Sciences<br />
                   Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East,<br />
                   New Delhi , 110029<br />
                   India </strong>
                 </p>
                 {/* Google Maps Embed Placeholder */}
                 {/* Replace the iframe src with your actual Google Maps embed code */}
                 <div className="mt-4">
                   <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.139025505162!2d77.20730802870736!3d28.56545342393437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26f903969d7%3A0x8367180c6de2ecc2!2sAll%20India%20Institute%20Of%20Medical%20Sciences%20Delhi!5e0!3m2!1sen!2sin!4v1747128012438!5m2!1sen!2sin"
                     width="100%"
                     height="300"
                     allowFullScreen={true}
                     referrerPolicy="no-referrer-when-downgrade"
                     title="Congress Venue Location"
                   ></iframe>
                 </div>
               </div>
             )}
            </div>
            {/* CONGRESS TIME ZONE */}
            {/* Apply the same structure and logic as above for other blocks */}
            <div className="bg-cyan-600 text-white rounded-md overflow-hidden">
              <div
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleBlock('congress-time-zone')}
              >
                 {/* Icon Placeholder */}
                <span className="mr-4 text-2xl">⏰</span> {/* Placeholder icon */}
                <span className="font-semibold">CONFERENCE TIME ZONE</span>
              </div>
               {/* Collapsible Content */}
              {expandedBlock === 'congress-time-zone' && (
                <div className="bg-white text-gray-800 p-4">
                  {/* Add actual content for Congress Time Zone here */}
                  <p><strong>The time zone in India is Indian Standard Time (IST), which is GMT+5:30.</strong></p>
                </div>
              )}
            </div>
            {/* LANGUAGE */}
             <div className="bg-cyan-600 text-white rounded-md overflow-hidden">
              <div
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleBlock('language')}
              >
               {/* Icon Placeholder */}
              <span className="mr-4 text-2xl">🗣️</span> {/* Placeholder icon */}
              <span className="font-semibold">LANGUAGE</span>
              </div>
               {/* Collapsible Content */}
              {expandedBlock === 'language' && (
                <div className="bg-white text-gray-800 p-4">
                  {/* Add actual content for Language here */}
                  <p><strong>The official language of the RIPSSCON 2025 Conference will be English.</strong></p>
                </div>
              )}
            </div>
            {/* DRESS CODE */}
             <div className="bg-cyan-600 text-white rounded-md overflow-hidden">
              <div
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleBlock('dress-code')}
              >
               {/* Icon Placeholder */}
              <span className="mr-4 text-2xl">👔</span> {/* Placeholder icon */}
              <span className="font-semibold">DRESS CODE</span>
              </div>
               {/* Collapsible Content */}
              {expandedBlock === 'dress-code' && (
                <div className="bg-white text-gray-800 p-4">
                  {/* Add actual content for Dress Code here */}
                  <p><strong>Participants are advised to wear business casual for all Conference functions and programs.</strong></p>
                </div>
              )}
            </div>
            {/* CLIMATE */}
             <div className="bg-cyan-600 text-white rounded-md overflow-hidden">
              <div
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleBlock('climate')}
              >
               {/* Icon Placeholder */}
              <span className="mr-4 text-2xl">☀️</span> {/* Placeholder icon */}
              <span className="font-semibold">CLIMATE</span>
              </div>
               {/* Collapsible Content */}
              {expandedBlock === 'climate' && (
                <div className="bg-white text-gray-800 p-4">
                  {/* Add actual content for Climate here */}
                  <p><strong>During December, the temperatures in New Delhi, India range from around 8°C (46°F) during the early mornings and nights to approximately 20°C (68°F) during the daytime. December marks the beginning of winter in Delhi, characterized by cool, crisp air and occasional fog. While daytime temperatures are generally mild and pleasant, evenings and early mornings can get quite chilly, especially with the presence of cold winds from the north. Warm clothing is recommended, particularly during nighttime and early hours.
                  </strong> </p>
                </div>
              )}
            </div>
            {/* CURRENCY */}
             <div className="bg-cyan-600 text-white rounded-md overflow-hidden">
              <div
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleBlock('currency')}
              >
               {/* Icon Placeholder */}
              <span className="mr-4 text-2xl">💲</span> {/* Placeholder icon */}
              <span className="font-semibold">CURRENCY</span>
              </div>
               {/* Collapsible Content */}
              {expandedBlock === 'currency' && (
                <div className="bg-white text-gray-800 p-4">
                  {/* Add actual content for Currency here */}
                   <p><strong>The currency used is the Indian Rupees  (INR).</strong></p>
                   <p><strong>You can compare your local currency to the  INDIAN RUPEES (INR) </strong><a href="https://wise.com/in/currency-converter/" className="underline">HERE</a> </p> {/* Placeholder link */}
                   </div>
              )}
            </div>
            {/* CONGRESS FORMAT */}
             <div className="bg-cyan-600 text-white rounded-md overflow-hidden">
              <div
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleBlock('congress-format')}
              >
               {/* Icon Placeholder */}
              <span className="mr-4 text-2xl">📋</span> {/* Placeholder icon */}
              <span className="font-semibold">CONGRESS FORMAT</span>
              </div>
               {/* Collapsible Content */}
              {expandedBlock === 'congress-format' && (
                <div className="bg-white text-gray-800 p-4">
                  {/* Add actual content for Congress Format here */}
                  <p><strong>RIPSCCON 2025 is a Conference  that will take place on 5-7 December 2025 in New Delhi, India. Detailed information to come.</strong></p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* CME ACCREDITATION */}
             <div className="bg-cyan-600 text-white rounded-md overflow-hidden">
              <div
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleBlock('cme-accreditation')}
              >
               {/* Icon Placeholder */}
              <span className="mr-4 text-2xl">🎓</span> {/* Placeholder icon */}
              <span className="font-semibold">CME ACCREDITATION</span>
              </div>
               {/* Collapsible Content */}
              {expandedBlock === 'cme-accreditation' && (
                <div className="bg-white text-gray-800 p-4">
                  {/* Add actual content for CME Accreditation here */}
                  <p><strong>Participants will receive an email after the conference,
                     where the CME certificate will be available after completing the online evaluation and credit-claiming procedure. 
                     Kindly note that the RIPSCCON 2025 online evaluation will be active on the last day of the Conference.
                      You will then be able to access it and claim your CME certificate.</strong></p>
                </div>
              )}
            
            </div>
            {/* PRESCRIBER / NON-PRESCRIBER */}
             <div className="bg-cyan-600 text-white rounded-md overflow-hidden">
              <div
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleBlock('prescriber-non-prescriber')}
              >
               {/* Icon Placeholder */}
              <span className="mr-4 text-2xl">✏️</span> {/* Placeholder icon */}
              <span className="font-semibold">PRESCRIBER / NON-PRESCRIBER</span>
              </div>
               {/* Collapsible Content */}
              {expandedBlock === 'prescriber-non-prescriber' && (
                <div className="bg-white text-gray-800 p-4">
                  {/* Add actual content for Prescriber / Non-Prescriber here */}
                  <p><strong>Content for Prescriber / Non-Prescriber will be added here.</strong></p>
                </div>
              )}
            </div>
            {/* VISA */}
             <div className="bg-cyan-600 text-white rounded-md overflow-hidden">
              <div
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleBlock('visa')}
              >
               {/* Icon Placeholder */}
              <span className="mr-4 text-2xl">🛂</span> {/* Placeholder icon */}
              <span className="font-semibold">VISA</span>
              </div>
               {/* Collapsible Content */}
              {expandedBlock === 'visa' && (
                <div className="bg-white text-gray-800 p-4">
                  {/* Add actual content for Visa here */}
                  <p><strong>Nationals of several countries are eligible for  <strong>visa exemption or visa-on-arrival</strong> for short visits to <strong>India</strong> for tourism, business engagements, or medical purposes, typically for up to 60 days. However, the duration and eligibility depend on your nationality and the type of visit. It is recommended to double-check visa requirements with your local <strong>Indian Embassy</strong> or visit the <strong>Official Indian E-Visa Portal (https://indianvisaonline.gov.in/evisa/tvoa.html)</strong> for detailed information and to apply for an e-Visa if required.
                  .</strong> </p>
                </div>
              )}
            </div>
            {/* LETTER OF INVITATION */}
             <div className="bg-cyan-600 text-white rounded-md overflow-hidden">
              <div
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleBlock('letter-of-invitation')}
              >
               {/* Icon Placeholder */}
              <span className="mr-4 text-2xl">✉️</span> {/* Placeholder icon */}
              <span className="font-semibold">LETTER OF INVITATION</span>
              </div>
               {/* Collapsible Content */}
              {expandedBlock === 'letter-of-invitation' && (
                <div className="bg-white text-gray-800 p-4">
                  {/* Add actual content for Letter of Invitation here */}
                  <p><strong>An official personalized letter of invitation will be provided to registered participants as part of the registration procedure. This invitation is prepared solely for the purpose of visa applications and is not a commitment on the part of the organizers to provide any financial support or confirmation of inclusion in the Scientific Program. Invitation letters can be provided electronically (PDF) or as a hard copy if required.  Hard copies will be mailed via regular post free of charge. In case of a special delivery (courier) request, the participant will be responsible for all charges.</strong></p>
                </div>
              )}
            </div>
            {/* GUEST ATTENDANCE POLICY */}
             <div className="bg-cyan-600 text-white rounded-md overflow-hidden">
              <div
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleBlock('guest-attendance-policy')}
              >
               {/* Icon Placeholder */}
              <span className="mr-4 text-2xl">🤝</span> {/* Placeholder icon */}
              <span className="font-semibold">GUEST ATTENDANCE POLICY</span>
              </div>
               {/* Collapsible Content */}
              {expandedBlock === 'guest-attendance-policy' && (
                <div className="bg-white text-gray-800 p-4">
                  {/* Add actual content for Guest Attendance Policy here */}
                  <p><strong>All event activities (including educational sessions, meal functions, exhibit hall, etc.) are exclusively reserved for registered attendees. Non-registered guests (including children, family members, colleagues, etc.) are not allowed in any of the event areas. Badges provided at registration are required for entrance into all functions and will be strictly enforced.</strong></p>
                </div>
              )}
            </div>
            {/* LIABILITY & INSURANCE */}
             <div className="bg-cyan-600 text-white rounded-md overflow-hidden">
              <div
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleBlock('liability-insurance')}
              >
               {/* Icon Placeholder */}
              <span className="mr-4 text-2xl">🛡️</span> {/* Placeholder icon */}
              <span className="font-semibold">LIABILITY & INSURANCE</span>
              </div>
               {/* Collapsible Content */}
              {expandedBlock === 'liability-insurance' && (
                <div className="bg-white text-gray-800 p-4">
                  {/* Add actual content for Liability & Insurance here */}
                  <p><strong>

Please do not leave bags or suitcases unattended at any time, whether inside or outside the session halls. Hotels strongly recommend that you use their safety deposit boxes for your valuables.
<br></br><br></br>
The Conference Secretariat and Organisers cannot accept liability for personal accidents or loss of or damage to private property of participants. Participants are advised to take out their own personal travel and health insurance for their trip.
</strong></p>
                </div>
              )}
            </div>
            {/* EXHIBITORS */}
             <div className="bg-cyan-600 text-white rounded-md overflow-hidden">
              <div
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleBlock('exhibitors')}
              >
               {/* Icon Placeholder */}
              <span className="mr-4 text-2xl">🛍️</span> {/* Placeholder icon */}
              <span className="font-semibold">EXHIBITORS</span>
              </div>
               {/* Collapsible Content */}
              {expandedBlock === 'exhibitors' && (
                <div className="bg-white text-gray-800 p-4">
                  {/* Add actual content for Exhibitors here */}
                  <p><strong>Within the event platform, all exhibitors (booth admins) will be recognized with a letter E (Exhibitor) indicated after their names.</strong></p>
                </div>
              )}
            </div>
            {/* CONTACT US */}
             <div className="bg-cyan-600 text-white rounded-md overflow-hidden">
              <div
                className="p-4 flex items-center cursor-pointer"
                onClick={() => toggleBlock('contact-us')}
              >
               {/* Icon Placeholder */}
              <span className="mr-4 text-2xl">📞</span> {/* Placeholder icon */}
              <span className="font-semibold">CONTACT US</span>
              </div>
               {/* Collapsible Content */}
              {expandedBlock === 'contact-us' && (
                <div className="bg-white text-gray-800 p-4">
                  {/* Add actual content for Contact Us here */}
                  <p>If you have any questions, please visit the Contact Us section of the website.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    <WaveScrollEffect />
    </div>
  );
};

export default GeneralInfoPage;