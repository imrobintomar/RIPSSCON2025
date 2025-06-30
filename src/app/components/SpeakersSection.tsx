import React from 'react';
import Image from 'next/image'; // Import Image component

// Placeholder speaker data
const speakers = [
  {
    id: 1,
    name: "Dr. Evelyn Reed",
    title: "Chief of Pediatric Innovation, AIIMS Delhi",
    bio: "Pioneering new approaches in pediatric surgical simulation and patient safety protocols.",
    imageUrl: "/placeholder-speaker.png" // Use local placeholder image
  },
  {
    id: 2,
    name: "Prof. Kenji Tanaka",
    title: "Director of Surgical Robotics, Kyoto University",
    bio: "Expert in minimally invasive techniques and robotic-assisted surgery in complex pediatric cases.",
    imageUrl: "/placeholder-speaker.png" // Use local placeholder image
  },
  {
    id: 3,
    name: "Dr. Anya Sharma",
    title: "Lead Researcher, Global Patient Safety Initiative",
    bio: "Focused on implementing large-scale patient safety measures in diverse healthcare settings.",
    imageUrl: "/placeholder-speaker.png" // Use local placeholder image
  },
  // Add more speakers as needed
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="mb-12 p-4 md:p-6 bg-white rounded-lg shadow-md scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-cyan-700 mb-6 border-b pb-2">Featured Speakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg text-center transition-all duration-300 transform hover:scale-105">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-300 shadow-sm"> {/* Refined image border */}
              <Image
                src={speaker.imageUrl}
                alt={`Photo of ${speaker.name}`}
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{speaker.name}</h3>
            <p className="text-sm text-cyan-600 font-medium mb-2">{speaker.title}</p>
            <p className="text-sm text-gray-600">{speaker.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpeakersSection;