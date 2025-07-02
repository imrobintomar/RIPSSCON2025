import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { toast } from 'react-toastify'; // npm install react-toastify
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'; // Import Image component

const SocialIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity text-2xl focus:outline-none focus:ring-2 focus:ring-[#002060]">
    {icon}
  </a>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success('Subscription successful! Please check your email for a verification link.');
        setEmail('');
      } else {
        const errorData = await response.json();
        toast.error(`Failed to subscribe: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      toast.error('An error occurred while subscribing.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer-bg-override text-white mt-auto">
      <div className="w-full py-8 md:py-12"> {/* Added w-full, Removed px-4 and md:px-6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4 md:px-6"> {/* Added padding back to the grid for content spacing */}
          {/* Left Column: Logo */}
          <div>
            <Image
              src="/ripsscon_logo.png"
              alt="Logo 3"
              width={180} // Adjust width as needed
              height={180} // Adjust height as needed
              className="mb-6 white-logo-filter" // Add margin below logo and filter class
            />
          </div>

          {/* Middle Column: Connect and Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
            <div className="flex space-x-5">
              <SocialIcon href="https://twitter.com/" icon={<FaTwitter />} />
              <SocialIcon href="https://facebook.com/" icon={<FaFacebook />} />
              <SocialIcon href="https://linkedin.com/" icon={<FaLinkedin />} />
              <SocialIcon href="https://instagram.com/" icon={<FaInstagram />} />
            </div>
            
          </div>

          {/* Right Column: Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <p className="footer-text-override text-sm text-white font-medium mb-4">
              Department of Paediatric Surgery <br />
              All India Institute of Medical Science, New Delhi 110029<br/>
            </p>
            <p className="footer-text-override text-sm  border-t  text-white font-bold">
              Dr. Prabudh Goel
            </p>
            <p className="footer-text-override text-sm text-white font-bold">
              📞 <a href="tel:+919999944511" className="footer-text-override hover:underline text-white font-bold">+91 99999444511</a>
            </p>
            <p className="footer-text-override text-sm text-white font-bold">
              ✉️ <a href="mailto:drprabudhgoel@gmail.com" className="footer-text-override hover:underline text-white font-bold">drprabudhgoel@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="text-center border-t border-[#002060] pt-6 text-white ">
          <p className="footer-text-override text-sm text-white font-medium">
            &copy; {new Date().getFullYear()} RIPSSCON2025. Department of Paediatric Surgery All india institute of medical science  New Delhi |{' '}
            <Link href="/privacy-policy" className="footer-text-override hover:underline text-white">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
