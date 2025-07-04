"use client";

import Link from 'next/link';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroPage() {
  const imageContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end start'],
  });

  const redfortY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const lotusY = useTransform(scrollYProgress, [0, 1], [0, -80]); 

  return (
    <section
      id="hero"
      className="relative bg-white overflow-hidden"
      aria-label="Hero section for RIPSSCON2025"
    >
      <div
        className="container mx-auto px-4 py-12 md:py-20 lg:py-24 relative overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-between gap-8"
      >
        
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 bg-cover bg-center hero-left-bg"
        >
          
          <div className="absolute inset-0 bg-blue-800 opacity-70 mix-blend-overlay"></div>
        </div>

        
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center hero-right-bg"
        >
          
          <div className="absolute inset-0 bg-blue-800 opacity-70 mix-blend-overlay"></div>
        </div>
        <FadeInWhenVisible direction="left">
          <div className="md:w-1/2 text-left relative z-10 bg-blue-200 bg-opacity-80 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              REGISTER EARLY & SAVE!
            </h1>
            <p className="text-xl text-white mb-2">
              Early-Bird Deadline: <span className="font-semibold">September 15, 2025</span>
            </p>
            <p className="text-lg text-white mb-6">
              Join the community at <strong>RIPSSCON 2025</strong> in AIIMS , New Delhi,India!
            </p>

            <FadeInWhenVisible direction="up" delay={0.4}>
              <Link
                href="/register"
                className="inline-flex items-center px-6 py-3 bg-[#002060] text-white rounded-full font-semibold hover:bg-blue-900 transition duration-300 text-base shadow-md"
              >
                REGISTER
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </FadeInWhenVisible>
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Bottom - Host Logos + Kids Drawing */}
      <FadeInWhenVisible direction="up">
        <div className="relative flex flex-col items-center justify-center py-6 border-t border-gray-200 gap-2 px-4 text-sm text-blue-600 overflow-hidden">
          <img
            src="/home_bg/child.png"
            alt="Children holding hands"
            className="h-12 sm:h-16"
          />
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-blue-800 opacity-70 mix-blend-overlay z-20"></div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
