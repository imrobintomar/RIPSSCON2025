import React from 'react';
import Image from 'next/image';

const AbstractTipsPage = () => {
  const tips = [
    {
      number: 1,
      title: "Every Story Has Value",
      description: "No research is too minor if it answers a meaningful question. Whether it’s a unique case, a novel insight, or a pilot study—your contribution can spark new conversations. Believe in the value of your work and let that confidence reflect in your writing."
    },
    {
      number: 2,
      title: "Start Early, Think Deeply",
      description: "The best abstracts are rarely written in a single sitting. Begin drafting early to allow time for reflection, revision, and refinement. Give your ideas space to evolve and mature."
    },
    {
      number: 3,
      title: "Master the Submission Guidelines",
      description: "Before writing a word, read the submission instructions carefully. Formatting rules, word limits, structure requirements, and criteria for acceptance vary—understanding them upfront saves time and reduces revisions later."
    },
    {
      number: 4,
      title: "Highlight What’s Unique",
      description: "Don’t just summarize what’s already known. Emphasize what makes your work different—a new method, a surprising outcome, an understudied population. Innovation can lie in the question, not just the result."
    },
    {
      number: 5,
      title: "Make Your Message Crystal Clear",
      description: "Ask yourself: What is the central question or insight? Then structure your abstract to lead the reader to that conclusion. Avoid clutter. Clarity and focus are essential—reviewers should know exactly what your work contributes in just one read."
    },
    {
      number: 6,
      title: "Tell the Research Journey",
      description: "A great abstract flows like a micro-narrative:\n\n    What was the problem?\n\n    What did you set out to do?\n\n    How did you approach it?\n\n    What did you find?\n\n    What does it mean?\n\nStick to facts—avoid overhyping results. Use precise, objective language to build credibility."
    },
    {
      number: 7,
      title: "Make the Impact Visible",
      description: "Why should your work matter to the field, to practitioners, or to patients? Link your findings to broader implications, whether clinical, scientific, or societal. Show how your work fills a gap, challenges a norm, or points to future directions."
    },
    {
      number: 8,
      title: "Craft a Memorable Title",
      description: "Your title is the first impression—make it count. Use active, specific language and include key findings or the core problem. Avoid generic phrases. Aim for titles that are both informative and engaging."
    },
    {
      number: 9,
      title: "Seek Constructive Feedback",
      description: "A second pair of eyes can reveal ambiguities or errors you might miss. Ask a mentor, colleague, or someone outside your immediate field for input. They’ll help you judge how accessible and compelling your abstract really is."
    },
    {
      number: 10,
      title: "Choose the Right Category and Keywords",
      description: "Accurate categorization ensures your abstract reaches the right reviewers and audience. Choose topics and keywords that reflect your content and purpose—don’t just select the most popular category. Strategic classification enhances visibility and relevance."
    }
  ];

  return (
    <div>
      
      <div className="header">
        <div className="inner-header flex">
          <h1>Abstract Tips</h1>
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
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#002060] mb-4">
          What Makes a Good Abstract Great?
        </h2>
        <p className="text-center text-lg font-semibold text-[#002060] mb-8">
          A great abstract isn’t just a summary—it’s your first opportunity to communicate the relevance, originality, and impact of your work to peers, reviewers, and decision-makers. Whether you're submitting to a global conference or a high-impact journal, your abstract sets the tone. Here are our top 10 tips for crafting a standout abstract that resonates and delivers:
        </p>
        <p className="text-center text-lg font-semibold text-[#002060] mb-8">
          Bonus Tip: Think Beyond Acceptance

A great abstract doesn't just get accepted—it sparks discussions, citations, and collaborations. It should be a launching pad for your research visibility and professional growth. Take the time to craft it thoughtfully—your future audience is already reading.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Tips */}
          <div>
            {tips.map((tip) => (
              <div key={tip.number} className="mb-6">
                <h3 className="text-xl font-bold text-[#002060] mb-2">
                  {tip.number}. {tip.title}
                </h3>
                <p className="text-gray-700">{tip.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Images and Videos */}
          <div className="flex flex-col gap-4">
            {/* Dummy Image 1 */}
            <div className="relative w-full h-48 bg-gray-300 rounded-md overflow-hidden">
              <Image
                src="/abstract_tips/tips1.jpg" 
                alt="Image 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* Dummy Image 2 */}
            <div className="relative w-full h-48 bg-gray-300 rounded-md overflow-hidden">
               <Image
                src="/abstract_tips/tips2.jpg" 
                alt="Image 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
             {/* Dummy Image 3 */}
            <div className="relative w-full h-48 bg-gray-300 rounded-md overflow-hidden">
               <Image
                src="/abstract_tips/tips3.jpg" 
                alt="Image 3"
                layout="fill"
                objectFit="cover"
              />
            </div>
             {/* Dummy Image 4 */}
            <div className="relative w-full h-48 bg-gray-300 rounded-md overflow-hidden">
               <Image
                src="/abstract_tips/tips4.jpg" 
                alt="Image 4"
                layout="fill"
                objectFit="cover"
              />
            </div>
             {/* Dummy Image 5 */}
            <div className="relative w-full h-48 bg-gray-300 rounded-md overflow-hidden">
               <Image
                src="/abstract_tips/tips7.jpg" 
                alt="Image 5"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AbstractTipsPage;