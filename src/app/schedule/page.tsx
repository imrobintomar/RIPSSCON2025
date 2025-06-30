import React from 'react';

const SchedulePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Conference Schedule</h1>
      {/* Schedule Section */}
      <section id="schedule" className="mb-12 p-4 md:p-6 bg-white rounded-lg shadow-md scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan-700 mb-4 border-b pb-2">Conference Schedule</h2>
        <p className="text-base md:text-lg text-gray-700">
          The detailed conference schedule is being finalized and will be available soon. Stay tuned for updates on sessions, workshops, and keynote presentations.
        </p>
        <p className="text-base md:text-lg text-gray-700">
         For Contact us  
        </p>

        {/* Placeholder for schedule details */}
      </section>
    </div>
  );
};

export default SchedulePage;