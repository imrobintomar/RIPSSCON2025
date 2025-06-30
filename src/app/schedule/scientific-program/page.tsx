import Link from 'next/link';

const ScientificProgramPage = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <div className="inner-header flex">
          <h1>Scientific Program</h1>
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-6">
          The latest updates by world-renowned experts in the field of pediatric infectious diseases.
        </h1>
        <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
          The International Scientific Committee has planned a diverse and interesting RIPSSCON 2025 scientific program for you. As part of the program, we will have a scale of different educational and scientific sessions addressing your needs as a professional in pediatric infectious diseases that will provide you with take-home value.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Link href="#" className="bg-cyan-600 hover:bg-cyan-900 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200">
            Interactive Program
          </Link>
          <Link href="#" className="bg-cyan-600 hover:bg-cyan-900 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200">
            Program at a Glance
          </Link>
        </div>
        <p className="text-gray-600 text-sm italic">
          *Please note that the program is subject to change.
        </p>
      </div>
    </div>
  );
};

export default ScientificProgramPage;