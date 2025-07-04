"use client"; 
import Link from 'next/link';
import { useEffect, useRef } from 'react'; 



import HeroPage from './hero/page';


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
      <HeroPage />

      {/* Welcome Letter and Video Section */}
      <section className="container mx-auto px-4 py-12"> {/* Increased vertical padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Increased gap, removed items-center */}
          {/* Left Column: Welcome Letter Text */}
          <div className="h-full"> {/* Added h-full */}
            {/* Title */}      <h2 className="text-4xl font-bold text-[#002060] mb-6">Join Us at RIPSSCON 2025: Advancing the Frontiers of Pediatric Surgery and Genomic Innovation
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
              <Link href="/about/welcome-letter" className="inline-block bg-[#002060] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#002060] transition-colors duration-200 text-base md:text-lg"> {/* Adjusted padding and text size */}
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
          <div className="bg-[#002060] text-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center"> {/* Styled block, adjusted padding */}
            {/* Icon Placeholder */}
            <span className="text-4xl mb-4">🔬</span> {/* Placeholder icon */}
            <h3 className="text-lg sm:text-xl font-semibold mb-2">About<br />RIPSSCON 2025</h3> {/* Title with line break, adjusted font size */}
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

      {/* Discover Delhi Section */}
      <section className="py-20 px-4 discover-delhi-bg"> {/* Removed background class, kept padding */}
        <div className="container mx-auto"> {/* Kept container */}
          <div className="bg-[#002060] text-white p-8 md:p-12 rounded-lg max-w-md md:max-w-lg lg:max-w-xl ml-4 md:ml-8"> {/* Added blue background, padding, rounded corners, max-width, and left margin */}
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">GET READY FOR DELHI</h2> {/* Changed heading text and color */}
            <p className="text-lg mb-8 text-white !important"> {/* Ensured text is white */}
              Explore the rich history, vibrant culture, and stunning architecture of Delhi. Whether you're wandering along bustling markets, visiting world-class monuments, or enjoying the lively street food scene, there's something for everyone in this enchanting city. In Delhi, you can effortlessly transition from the engaging RIPSSCON2025 congress to exploring vibrant neighborhoods, ensuring a perfect balance of work and leisure.
            </p>
            <Link href="/discover-delhi" className="inline-block bg-white text-[#002060] px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200 text-base sm:text-lg shadow-lg"> {/* Changed button style to match hero */}
              Discover Delhi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}