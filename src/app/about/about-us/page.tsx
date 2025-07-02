'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {Link} from 'react-scroll';
import WaveScrollEffect from '../../components/WaveScrollEffect'; // Import WaveScrollEffect

const AboutPage = () => {
  return (
    <div className="relative">
      {/* Header Section - Similar to General Info */}
      <div className="header">
        <div className="inner-header flex">
          <h1>About Us</h1> {/* Updated title */}
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        {/* About Section with Scroll Animation */}
        <motion.section
          id="about"
          className="mb-12 p-4 md:p-6 bg-white rounded-lg shadow-md scroll-mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          

          {/* Pediatric Image */}
          <div className="w-full mb-6">
            <img
              src="/about.jpg"
              alt="Pediatric Care"
              className="w-full h-[430px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <p className="text-base md:text-lg text-gray-700">
          <strong>RIPSSCON2025</strong> is the flagship research event organized by the Department of Paediatric Surgery, All India Institite of Medical Science  New Delhi.
            Rooted in a legacy of clinical excellence and academic leadership, RIPSSCON2025 serves as a multidisciplinary platform
            that brings together surgeons, healthcare professionals, educators, researchers, and technologists to explore
            groundbreaking advances in pediatric surgical care.
            <br /><br />
            With a strong emphasis on innovation, evidence-based practice, and safety-driven healthcare delivery, <strong> RIPSSCON2025 </strong>
            provides a dynamic space for dialogue, collaboration, and skill enhancement. From high-fidelity simulations and
            surgical innovation showcases to workshops and patient safety forums, the conference is designed to foster
            transformative learning and real-world impact.
            <br /><br />
            Join us in shaping the future of pediatric surgery, <strong>where research meets responsibility, and innovation drives better outcomes.</strong>
          </p>
        </motion.section>

        {/* Placeholder for Other Sections */}
        <motion.section
          id="events"
          className="mb-12 p-4 md:p-6 bg-white rounded-lg shadow-md scroll-mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#002060] mb-4 border-b pb-2">

          </h2>
          <p></p>
        </motion.section>

        <motion.section
          id="contact"
          className="mb-12 p-4 md:p-6 bg-white rounded-lg shadow-md scroll-mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#002060] mb-4 border-b pb-2">

          </h2>
          <p></p>
        </motion.section>
      </main>
      <WaveScrollEffect /> {/* Add WaveScrollEffect */}
    </div>
  );
};


export default AboutPage;
