import React from 'react';
import SpeakersSection from '@/app/components/SpeakersSection';

const SpeakersPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Speakers</h1>
      {/* Speakers Section */}
      <SpeakersSection />
    </div>
  );
};

export default SpeakersPage;