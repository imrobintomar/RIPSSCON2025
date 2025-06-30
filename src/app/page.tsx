"use client"; 
import Link from 'next/link';
import { useEffect, useRef } from 'react'; 



import { cn } from "./lib/utils"; 
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

function FeaturesSectionDemo() {
  const features = [
    {
      title: "Why Attend the Workshop?",
      description:
        "Gain insights into the latest research and innovations in paediatric surgical care.",
      icon: <IconTerminal2 />, 
    },
    {
      title: "Enhance Your Skills",
      description:
        "Participate in high-fidelity simulations and workshops to improve your surgical techniques.",
      icon: <IconEaseInOut />, 
    },
    {
      title: "Network with Experts",
      description:
        "Connect with leading surgeons, researchers, and healthcare professionals from around the world.",
      icon: <IconCloud />, 
    },
    {
      title: "Stay Updated",
      description:
        "Learn about evidence-based practices and safety-driven healthcare delivery.",
      icon: <IconCurrencyDollar />, 
    },
    {
      title: "Contribute to the Future",
      description:
        "Engage in discussions that will shape the future of paediatric surgery.",
      icon: <IconRouteAltLeft />, 
    },
    {
      title: "Access Valuable Resources",
      description:
        "Get access to presentations, research papers, and other valuable materials.",
      icon: <IconHelp />, 
    },
    {
      title: "Collaborate on Research",
      description:
        "Find opportunities to collaborate on groundbreaking research projects.",
      icon: <IconAdjustmentsBolt />, 
    },
    {
      title: "Experience Delhi",
      description: "Enjoy the vibrant culture and hospitality of New Delhi.",
      icon: <IconHeart />, 
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const parallaxBgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxBgRef.current) {
        const scrollY = window.scrollY;
        
        parallaxBgRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden px-4" // Adjusted height and added horizontal padding
      >
        {/* Carousel Container */}
        {/* You will likely need a carousel library or custom implementation here */}
        <div className="relative w-full h-full">
          {/* Slide 1: Registration */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            {/* Background Image for Slide 1 */}
            <img src="/hero1.jpg" alt="Hero Background" className="absolute inset-0 z-0 w-full h-full object-cover" /> {/* Added hero image */}

            {/* Content for Slide 1 */}
            <div className="relative z-10">
              {/* "Register Now!" Title - Needs a script-like font */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white"> {/* Adjusted font size for smaller screens */}
                Register Now!
              </h2>
              <p className=" sm:text-lg mb-8 max-w-4xl mx-auto px-4 text-white font-bold"> {/* Adjusted text color, max-width, and added horizontal padding */}
                LET'S COME TOGETHER AT RIPSSCON2025 TO ADVANCE CHILD CARE GLOBALLY, THROUGH RESEARCH, EDUCATION & COLLABORATION.
              </p>

              {/* Register Here Button */}
              <Link href="/register" className="inline-block bg-cyan-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-cyan-700 transition-colors duration-200 text-base sm:text-lg shadow-lg"> {/* Adjusted padding and text size for smaller screens */}
                Register Here
              </Link>
            </div>
          </div>

          {/* Slide 2: Submit Abstract */}
          {/* This slide would typically be hidden and controlled by carousel logic */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 opacity-0"> {/* Initially hidden */}
             {/* Background Image for Slide 2 - Placeholder */}
            {/* Add your background image for the abstract slide here */}
            <div className="absolute inset-0 z-0 bg-gray-400"></div> {/* Placeholder background */}

            {/* Content for Slide 2 */}
            <div className="relative z-10">
              {/* Title for Slide 2 */}
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 text-blue-800"> {/* Placeholder color and font size */}
                Submit Your Abstract
              </h2>
               <p className="text-lg sm:text-xl mb-8 text-gray-800 max-w-4xl mx-auto"> {/* Adjusted text color and max-width */}
                Share your groundbreaking research with the community.
              </p>

              {/* Submit Abstract Button */}
              <Link href="/submit-abstract" className="inline-block bg-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors duration-200 text-lg shadow-lg"> {/* Styled button */}
                Submit Abstract
              </Link>
            </div>
          </div>

          {/* Carousel Navigation/Indicators - You will need to add these */}
          {/* Example: <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">...</div> */}

        </div>
      </section>

      {/* Welcome Letter and Video Section */}
      <section className="container mx-auto px-4 py-12"> {/* Increased vertical padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Increased gap, removed items-center */}
          {/* Left Column: Welcome Letter Text */}
          <div className="h-full"> {/* Added h-full */}
            {/* Title */}      <h2 className="text-4xl font-bold text-cyan-600 mb-6">Join Us at RIPSSCON 2025: Advancing the Frontiers of Pediatric Surgery and Genomic Innovation
</h2> {/* Increased font size and margin-bottom */}
            {/* Welcome Letter Snippet */}
            <div className="prose max-w-none text-gray-700 text-sm sm:text-base"> {/* Using prose for basic text styling, adjusted text color and size */}
              <p>We are thrilled to welcome you to the<strong>10th Annual Conference of the Research and Innovation Pediatric Surgery Society (RIPSSCON 2025)</strong>, taking place from December 6–7, 2025 at the JL Auditorium, All India Institute of Medical Sciences (AIIMS), New Delhi, India.</p>
              <p>This landmark conference marks a decade of innovation in pediatric surgery and sets the stage for the future.</p>
              <p>With a renewed focus on genomic medicine, controversial clinical debates, real-world applications of research, and cross-sector collaboration, RIPSSCON 2025 is a not-to-miss convergence of science, surgery, and forward-thinking care.</p>
              <p>So, we invite you to mark your calendars, contribute your knowledge, share your expertise and join our global community in New Delhi for RIPSSCON 2025!</p>
              {/* Add more welcome letter text or a link to the full letter page */}
      
            </div>
             {/* Welcome Letter Button */}
            <div className="mt-8"> {/* Increased margin-top */}
              <Link href="/about/welcome-letter" className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-cyan-900 transition-colors duration-200 text-base md:text-lg"> {/* Adjusted padding and text size */}
                Welcome Letter
              </Link>
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="h-full flex items-center justify-center"> {/* Added h-full and centering */}
            <img src="/hero2.jpg" alt="Welcome Image" className="w-full h-auto rounded-lg shadow-md" /> {/* Added image with responsive classes */}
          </div>

        </div>
      </section>

      {/* Four Colored Blocks Section */}
      <section className="container mx-auto px-4 py-8"> {/* Added padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4"> {/* Responsive grid, added horizontal padding */}
          {/* Block 1: About WSPID (Blue) */}
          <div className="bg-cyan-600 text-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center"> {/* Styled block, adjusted padding */}
            {/* Icon Placeholder */}
            <span className="text-4xl mb-4">🔬</span> {/* Placeholder icon */}
            <h3 className="text-lg sm:text-xl font-semibold mb-2">About<br />RIPSCCON2025</h3> {/* Title with line break, adjusted font size */}
            <Link href="/about" className="text-sm underline">Read More</Link> {/* Read More link */}
          </div>
          {/* Block 2: General Information (Pink/Magenta) */}
          <div className="bg-pink-600 text-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center"> {/* Styled block, adjusted padding */}
            {/* Icon Placeholder */}
            <span className="text-4xl mb-4">💡</span> {/* Placeholder icon */}
            <h3 className="text-lg sm:text-xl font-semibold mb-2">General<br />Information</h3> {/* Title with line break, adjusted font size */}
            <Link href="/about/general-info" className="text-sm underline">Read More</Link> {/* Read More link */}
          </div>
          {/* Block 3: Promotional Toolkit (Orange) */}
          <div className="bg-orange-500 text-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center"> {/* Styled block, adjusted padding */}
            {/* Icon Placeholder */}
            <span className="text-4xl mb-4">📄🔍</span> {/* Placeholder icon */}
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Abstract<br />Topic</h3> {/* Title with line break, adjusted font size */}
            <Link href="/abstracts/topics" className="text-sm underline">Read More</Link> {/* Read More link */}
          </div>
          {/* Block 4: Support Us (Yellow) */}
          <div className="bg-yellow-500 text-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center"> {/* Styled block, adjusted padding */}
            {/* Icon Placeholder */}
            <span className="text-4xl mb-4">🤝</span> {/* Placeholder icon */}
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Support<br />Us</h3> {/* Title with line break, adjusted font size */}
            <Link href="/contact" className="text-sm underline">Read More</Link> {/* Read More link */}
          </div>
        </div>
      </section>

      <FeaturesSectionDemo />
    </>
  );
}