import React from 'react';
import ProfileCard from '../../components/ProfileCard';
import WaveScrollEffect from '../../components/WaveScrollEffect'; // Import WaveScrollEffect

const boardMembersData = [
  { name: 'M Sriniwas', department: 'Patron', linkedinId: 'M Sriniwas', profileImageUrl: '/board_com_pic/M_Sriniwas_director-221.jpg' },
  { name: 'S. Agarwala', department: 'Chairperson', linkedinId: 'S Aggrawala', profileImageUrl: '/board_com_pic/s_aggrawala.jpg' },
  { name: 'Dr. Prabudh Goyal', department: 'Organizing Secretary', linkedinId: 'prabudh-goel-163272151/?originalSubdomain=in', profileImageUrl: '/board_com_pic/PG_pic.jpg' },
  { name: 'Anjan Kr Dhua', department: 'Organizing Secretary', linkedinId: 'dr-anjan-dhua-0a354941/?originalSubdomain=in', profileImageUrl: '/board_com_pic/Dr_Anjan_Dhua.jpg' },
  { name: 'Devendra Kr Yadav', department: 'Organizing Secretary', linkedinId: 'Devendra Kr Yadav', profileImageUrl: '/board_com_pic/Dr_Devendra_Yadav.jpg' },
  { name: 'Vishesh Jain', department: 'Organizing Secretary', linkedinId: 'vishesh-jain-a84947188/?originalSubdomain=in', profileImageUrl: '/board_com_pic/Dr_Vishesh_Jain.jpg' },
  { name: 'Gali Divya', department: 'Joint Organizing Secretary', linkedinId: 'gali-divya-a45941265/?originalSubdomain=in', profileImageUrl: '/board_com_pic/gali_divya.jpg' },
];

// Transform boardMembersData to match the ProfileCard component's expected items structure
const profileCardItems = boardMembersData.map((member, index) => ({
  id: member.linkedinId || index.toString(), // Use linkedinId as id, fallback to index
  url: member.profileImageUrl || '/placeholder-speaker.png', // Use profileImageUrl as url
  title: member.name, // Use name as title
  description: member.department, // Use department as description
  // tags are optional in ProfileCardProps, so we don't need to include them here unless needed
  linkedinId: member.linkedinId, // Include linkedinId for the ProfileCard component
}));

const BoardCommitteesPage: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <div className="inner-header flex">
          <h1>Board Committees</h1> {/* Updated title */}
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

      {/* Main Content Section */}
      <section className="container mx-auto px-4 py-8">
        {/* Pass the transformed data as the items prop */}
        <ProfileCard items={profileCardItems} />
      </section>
      <WaveScrollEffect /> {/* Add WaveScrollEffect */}
    </div>
  );
};

export default BoardCommitteesPage;