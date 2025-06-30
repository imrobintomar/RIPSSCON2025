import WaveScrollEffect from '../components/WaveScrollEffect';
import ContactForm from './ContactForm';
import React from 'react';

const ContactPage = () => {
  return (
    <div>
      {/* Header Section - Similar to other pages */}
      <div className="header">
        <div className="inner-header flex">
          <h1>Contact Us</h1>
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

      {/* Main Content Section */}
      <section className="container mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900">Get In Touch</h1>

        {/* Contact Details Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-cyan-700 pb-2">Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Our Location</h3>
              <p className="text-gray-700">
                Department of Paediatric Surgery,All India Institute Of Medical Sciences<br />
                Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East,<br />
                New Delhi, 110029<br />
                India
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Contact Information</h3>
              <p className="text-gray-700">
                Email: <a href="mailto:[test@gmail.com]" className="text-blue-600">[drprabudhgoel@gmail.com]</a><br />
                Phone: <a href="tel:[+9190000000]" className="text-blue-600">[+919999944511]</a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-cyan-700 pb-2">Send us a Message</h2>
          <p className="text-gray-700 mb-8">
            Have questions or feedback? Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>

        {/* Google Maps Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-cyan-700 pb-2">Find Us on the Map</h2>
          <div className="aspect-w-16 aspect-h-9">
            {/* Replace the iframe src with your Google Maps embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.139025505162!2d77.20730802870736!3d28.56545342393437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26f903969d7%3A0x8367180c6de2ecc2!2sAll%20India%20Institute%20Of%20Medical%20Sciences%20Delhi!5e0!3m2!1sen!2sin!4v1747128012438!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of AIIMS New Delhi" // Added for accessibility
            ></iframe>
          </div>
        </div>
      </section>
      <WaveScrollEffect /> {/* Add WaveScrollEffect */}
    </div>
  );
};

export default ContactPage;