"use client";
import React, { useState } from "react";
import WaveScrollEffect from "../../components/WaveScrollEffect";

type InfoBlockProps = {
  id: string;
  icon: string;
  title: string;
  children: React.ReactNode;
  expandedBlock: string | null;
  toggleBlock: (blockId: string) => void;
};

const InfoBlock = ({ id, icon, title, children, expandedBlock, toggleBlock }: InfoBlockProps) => {
  const isExpanded = expandedBlock === id;

  return (
    <div className="w-full">
      {/* Clickable Header */}
      <div
        className="bg-cyan-600 text-white rounded-t-md p-4 flex items-left cursor-pointer"
        onClick={() => toggleBlock(id)}
      >
        <span className="mr-4 text-2xl">{icon}</span>
        <span className="font-semibold">{title}</span>
      </div>

      {/* Collapsible Section */}
      {isExpanded && (
        <div className="bg-white text-gray-800 p-4 border border-t-0 border-cyan-600 rounded-b-md transition-all duration-300 ease-in-out">
          {children}
        </div>
      )}
    </div>
  );
};

const GeneralInfoPage = () => {
  const [expandedBlock, setExpandedBlock] = useState<string | null>(null);

  const toggleBlock = (blockId: string) => {
    setExpandedBlock(expandedBlock === blockId ? null : blockId);
  };

  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="inner-header flex">
          <h1>General Information</h1>
        </div>
        <div>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
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
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <InfoBlock
              id="congress-venue"
              icon="ℹ️"
              title="CONFERENCE VENUE"
              expandedBlock={expandedBlock}
              toggleBlock={toggleBlock}
            >
              <p>
                <strong>
                  JL Auditorium, All India Institute Of Medical Sciences,<br />
                  Sri Aurobindo Marg, Ansari Nagar East, New Delhi, 110029, India
                </strong>
              </p>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.139025505162!2d77.20730802870736!3d28.56545342393437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26f903969d7%3A0x8367180c6de2ecc2!2sAll%20India%20Institute%20Of%20Medical%20Sciences%20Delhi!5e0!3m2!1sen!2sin!4v1747128012438!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  allowFullScreen
                  title="Congress Venue Location"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </InfoBlock>

            <InfoBlock
              id="congress-time-zone"
              icon="⏰"
              title="CONFERENCE TIME ZONE"
              expandedBlock={expandedBlock}
              toggleBlock={toggleBlock}
            >
              <p><strong>The time zone in India is Indian Standard Time (IST), which is GMT+5:30.</strong></p>
            </InfoBlock>

            <InfoBlock
              id="climate"
              icon="☀️"
              title="CLIMATE"
              expandedBlock={expandedBlock}
              toggleBlock={toggleBlock}
            >
              <p><strong>During December, temperatures in New Delhi range from 8°C (46°F) at night to 20°C (68°F) during the day. Expect cool air, mild afternoons, and occasional fog. Warm clothing is recommended.</strong></p>
            </InfoBlock>

            <InfoBlock
              id="contact-us"
              icon="📞"
              title="CONTACT US"
              expandedBlock={expandedBlock}
              toggleBlock={toggleBlock}
            >
              <p>
                Department of Paediatric Surgery<br />
                AIIMS, New Delhi 110029<br />
              </p>
              <p className="mt-4">
                <strong>Dr. Prabudh Goel</strong><br />
                📞 +91 9999944511<br />
                ✉️ drprabudhgoel@gmail.com
              </p>
            </InfoBlock>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <InfoBlock
              id="cme-accreditation"
              icon="🎓"
              title="CME ACCREDITATION"
              expandedBlock={expandedBlock}
              toggleBlock={toggleBlock}
            >
              <p><strong>Participants will receive an email after the conference to access CME certificates upon completing the evaluation. Evaluation opens on the last day of RIPSCCON 2025.</strong></p>
            </InfoBlock>

            <InfoBlock
              id="visa"
              icon="🛂"
              title="VISA"
              expandedBlock={expandedBlock}
              toggleBlock={toggleBlock}
            >
              <p>
                <strong>
                  Check your eligibility for visa-free travel or e-Visa to India. Visit{" "}
                  <a
                    className="text-blue-600 underline"
                    href="https://indianvisaonline.gov.in/evisa/tvoa.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    the official portal
                  </a>{" "}
                  for details and application.
                </strong>
              </p>
            </InfoBlock>

            <InfoBlock
              id="letter-of-invitation"
              icon="✉️"
              title="LETTER OF INVITATION"
              expandedBlock={expandedBlock}
              toggleBlock={toggleBlock}
            >
              <p><strong>Invitation letters will be provided for visa purposes to registered participants. PDF copies are free; courier requests will incur charges.</strong></p>
            </InfoBlock>

            <InfoBlock
              id="exhibitors"
              icon="🛍️"
              title="EXHIBITORS"
              expandedBlock={expandedBlock}
              toggleBlock={toggleBlock}
            >
              <p><strong>All booth admins will be marked with "E" for Exhibitor inside the event platform.</strong></p>
            </InfoBlock>
          </div>
        </div>
      </section>

      <WaveScrollEffect />
    </div>
  );
};

export default GeneralInfoPage;
