// https://cruip.com/create-an-image-accordion-with-tailwind/
import Image from 'next/image';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

// Define interface for a single item in the list
interface ProfileItem {
  id: string;
  url: string;
  title: string;
  description: string;
  tags?: string[]; // Optional tags
  linkedinId?: string; // Added optional linkedinId
}

// Define interface for the component's props
interface ProfileCardProps {
  items: ProfileItem[];
}

// Renamed from index to ProfileCard and updated to accept items prop
const ProfileCard: React.FC<ProfileCardProps> = ({ items }) => { // Destructure items from props
  return (
    <>
      <div className='group flex max-md:flex-col justify-center items-center gap-2 mb-10 mt-3'>
        {items.map((item) => {
          return (
            <article key={item.id} className='group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300 flex flex-col items-end'>
              {item.linkedinId && (
                <a
                  href={`https://www.linkedin.com/in/${item.linkedinId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 z-20 opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300" // Position at bottom right, higher z-index, and hover/focus effects
                >
                  <FaLinkedin className="text-blue-400 text-3xl" /> {/* Using FaLinkedin icon, maybe slightly larger */}
                </a>
              )}
              <Image
                className='object-contain h-72 md:h-[420px] w-full'
                src={item?.url}
                width={960}
                height={480}
                alt={item?.title || 'Profile image'} // Use title for alt text
              />
              <div className='p-3 text-center opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300'> {/* Added padding, centered text, and hover/focus effects */}
                <h1 className='text-3xl font-bold text-[#002060]'>
                  {item?.title}
                </h1>
                <span className='text-xl font-bold text-[#002060]'>
                  {item?.description}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default ProfileCard;