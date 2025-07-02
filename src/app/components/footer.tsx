import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { toast } from 'react-toastify'; // npm install react-toastify
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'; // Import Image component

const SocialIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl focus:outline-none focus:ring-2 focus:ring-cyan-600">
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
    <footer className="bg-blue-800 text-white mt-auto">
      <div className="w-full py-8 md:py-12"> {/* Added w-full, Removed px-4 and md:px-6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4 md:px-6"> {/* Added padding back to the grid for content spacing */}
          {/* Left Column: Logo */}
          <div>
            <Image
              src="/ripsscon_logo.png"
              alt="Logo 3"
              width={180} // Adjust width as needed
              height={180} // Adjust height as needed
              className="mb-6" // Add margin below logo
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
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-sm text-cyan-300 font-medium">
              Department of Paediatric Surgery <br />
              All India Institute of Medical Science, New Delhi 110029
            </p>
            <p className="text-sm text-cyan-300 font-medium">
              📞 <a href="tel:+919999944511" className="hover:underline text-cyan-300">+91 99999444511</a>
            </p>
            <p className="text-sm text-cyan-300 font-medium">
              ✉️ <a href="mailto:drprabudhgoel@gmail.com" className="hover:underline text-cyan-300">drprabudhgoel@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="text-center border-t border-cyan-700 pt-6 text-white ">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} RIPSSCON2025. Department of Paediatric Surgery All india institute of medical science  New Delhi |{' '}
            <Link href="/privacy-policy" className="hover:underline text-white">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
