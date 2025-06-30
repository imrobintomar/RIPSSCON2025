import Link from 'next/link';

const ResearchWorkshopPage = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <div className="inner-header flex">
          <h1>RIPSCCON Research Workshop</h1>
        </div>

        {/* Waves Container */}
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
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 text-left max-w-prose">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-600 mb-8">
          Application is Open
        </h2>

        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-cyan-700 mb-4">GENERAL</h3>
          <p className="text-gray-700 mb-4">
            The World Society for Pediatric Infectious Diseases (WSPID) will be hosting a Research Workshop on <strong>28 October 2025</strong> from <strong>08:00-15:00</strong>, prior to the start of the main WSPID Congress. The workshop will be conducted in English.
          </p>
          <p className="text-gray-700 mb-2"><strong>The workshop will consist of two components:</strong></p>
          <ol className="list-decimal ml-5 text-gray-700">
            <li>Short practical lectures by leading researchers on aspects of research, with a focus on pediatric infectious diseases.</li>
            <li>Oral presentations by 4 selected Research Workshop Presenters.</li>
          </ol>
        </div>

        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-cyan-700 mb-4">AIMS</h3>
          <ul className="list-none text-gray-700 mb-4 ml-5">
            <li className="flex items-start mb-2">
              <span className="mr-2 text-cyan-800">✔</span>
              To assist early career researchers with the design, conduct, and presentation of pediatric infectious disease research in resource-challenged and resource-advantaged settings.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-cyan-800">✔</span>
              To facilitate interaction between early career and established researchers in an informal, collegial setting.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-cyan-700 mb-4">PARTICIPANTS</h3>
          <ul className="list-none text-gray-700 ml-5">
            {[
              "Participants will be selected among the applicants to attend the Research Workshop. These selected participants will have their 2025 WSPID Congress registration fee waived.",
              "4 applicants will be invited to participate in the workshop as oral Research Workshop Presenters.",
              "These four presenters will be assigned one or more mentors from the WSPID Education Committee/WSPID Research Workshop Faculty, who will assist with developing their presentation prior to the workshop.",
              "Each of these selected Research Workshop Presenters will deliver a 10-minute oral presentation of their WSPID 2025 submitted abstract to the audience of the Research Workshop participants and faculty.",
              "Research Workshop participants and the faculty will offer constructive comments and suggestions following each presentation.",
              "In addition to subsidizing the 2025 WSPID Congress registration fee, these four presenters will receive reimbursement to subsidize travel and accommodations associated with the 2025 WSPID Congress; the total support for WSPID 2025 attendance and participation will be determined by the Congress organizers.",
              "Subsidized Research Workshop participants/presenters who do not attend or who do not fulfill requirements of preparation and presentation will be asked to reimburse the WSPID subsidies in full."
            ].map((item, index) => (
              <li key={index} className="flex items-start mb-2">
                <span className="mr-2 text-blue-800">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-cyan-700 mb-4">HOW TO APPLY</h3>
          <ul className="list-none text-gray-700 ml-5">
            <li className="flex items-start mb-2 text-left ">
              <span className="mr-2 text-blue-800">✔</span>
              Complete the Application Form and upload it during abstract submission.
            </li>
            <li className="flex items-start mb-2">
              <span className="mr-2 text-blue-800">✔</span>
              Submit your Abstract via the Congress website and indicate that you want to be considered for the WSPID Research Workshop.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-800">✔</span>
              Incomplete applications will not be considered.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResearchWorkshopPage;
