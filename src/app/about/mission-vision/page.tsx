import React from 'react';
import WaveScrollEffect from '../../components/WaveScrollEffect';

const MissionVisionPage = () => {
  return (
    <div>
      {/* Header Section - Similar to other pages */}
      <div className="header">
        <div className="inner-header flex">
          <h1>Mission & Vision</h1>
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

      {/* Mission, Core Purpose, Core Values Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Three-column grid */}
          {/* Mission Column */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">MISSION</h2> {/* Styled heading */}
            <div className="prose max-w-none text-gray-700"> {/* Using prose for text styling */}
              <p>To empower pediatric surgeons across India and beyond through education, innovation, and collaboration by providing a platform that bridges groundbreaking research, clinical excellence, and future-ready genomic and surgical advancements — ensuring better surgical outcomes for every child.</p> {/* Content from image */}
            </div>
          </div>
          {/* Core Purpose Column */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">CORE PURPOSE</h2> {/* Styled heading */}
            <div className="prose max-w-none text-gray-700"> {/* Using prose for text styling */}
              <p>To advance the field of pediatric surgery by fostering a culture of scientific inquiry, technical skill-building, and interdisciplinary collaboration, equipping surgeons with the tools and insights needed to address complex congenital challenges and lead the future of personalized pediatric surgical care.</p> {/* Content from image */}
            </div>
          </div>
          {/* Core Values Column */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">CORE VALUES</h2> {/* Styled heading */}
            <div className="prose max-w-none text-gray-700"> {/* Using prose for text styling */}
              <p><strong>Innovation</strong>Embracing new technologies and ideas to redefine pediatric surgical practice.</p> {/* Content from image */}
              <p><strong>Excellence</strong>Upholding the highest standards of clinical care, education, and research.</p> {/* Content from image */}
              <p><strong>Collaboration</strong>Building a nationwide community of pediatric surgical professionals and thought leaders.</p> {/* Content from image */}
              <p><strong>Integrity</strong> Ensuring transparency, ethics, and academic honesty in all endeavors.</p> {/* Content from image */}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container mx-auto px-4 py-8 bg-gray-100 text-center"> {/* Styled section */}
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">VISION</h2> {/* Styled heading */}
        <div className="prose max-w-prose mx-auto text-gray-700"> {/* Using prose for text styling, centered */}
          <p>To be the foremost catalyst for transforming pediatric surgery in India by integrating genomic science, surgical innovation, and academic excellence into a unified force that shapes a healthier, more hopeful future for children everywhere.</p> {/* Content from image */}
        </div>
      </section>

      {/* Vivid Description Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">VIVID DESCRIPTION</h2> {/* Styled heading, centered */}
        <div className="prose max-w-prose mx-auto text-gray-700"> {/* Using prose for text styling, centered */}
          <p>Imagine a space where the sharpest minds in pediatric surgery converge not only to share knowledge but to shape the next decade of child surgical care.</p> {/* Content from image */}
          <p>RIPSSCON2025 at All India Institute of medical Science, New Delhi is not just another conference it’s a celebration of a decade-long journey, a launchpad for genomic integration into clinical workflows, and a hub of transformative training for every level of practitioner.</p> {/* Content from image */}
          <p>Picture hands-on workshops in genetic diagnostics, vibrant debates on surgical controversies, research showcases that light up the national stage, and corridors buzzing with young minds being mentored by masters.</p> {/* Content from image */}
          <p>With Delhi's heritage as the backdrop, RIPSSCON2025 promises not only academic advancement but also unforgettable memories for you and your family.</p> {/* Content from image */}
          <p>This is where science meets purpose, and the future begins together.</p> {/* Content from image */}
        </div>
      </section>
    <WaveScrollEffect />
    </div>
  );
};

export default MissionVisionPage;