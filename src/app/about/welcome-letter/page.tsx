import React from 'react';
import Image from 'next/image'; // Import Image component
import WaveScrollEffect from '../../components/WaveScrollEffect';

// Placeholder speakers data - Replace with your actual speakers data
const speakers = [

  {

    id: 1,
    name: 'Dr. M Srinivas',
    title: 'Patron',
    imageUrl: '/board_com_pic/M_Sriniwas_director-221.jpg', // Replace with actual image path
    bio: 'Dr. M Srinivas, Director of the All India Institute of Medical Sciences (AIIMS), New Delhi, brings over three decades of distinguished experience in academic medicine, administration, and pediatric surgery to his leadership role. An exceptional scholar with numerous gold medals and awards, Dr. Srinivas has authored around 200 research papers and trained thousands of medical students. He holds fellowships from 15 professional organizations, including the prestigious Childrens Research Center, Dublin, Ireland. Dr. Srinivas is recognized as one of India most eminent medical luminaries, admired throughout the medical fraternity for his multifaceted expertise and visionary leadership.', // Placeholder bio
  },
  {
    id: 2,
    name: 'Dr.  Sandeep Agarwala',
    title: 'Organizing  Chairman',
    imageUrl: '/board_com_pic/s_aggrawala.png', // Replace with actual image path
    bio: 'Prof. Sandeep Agarwala serves as Professor and Head of the Department of Paediatric Surgery at AIIMS New Delhi, bringing over three decades of exemplary leadership in paediatric surgical care, education, and research to RIPSSCON. With more than 200 PubMed publications and an h-index of 21, Prof. Agarwala is internationally recognized for his pioneering contributions to paediatric oncology, congenital anomalies management, and surgical innovation. His visionary leadership has shaped countless surgical careers and advanced paediatric surgical practice across India and beyond. ', // Placeholder bio
  },

  {
    id: 3,
    name: 'Dr. Prabudh Goel',
    title: 'Organizing Secretary',
    imageUrl: '/board_com_pic/PG_pic.jpg', // Replace with actual image path
    bio: 'Dr. Prabudh Goel is Professor of Paediatric Surgery at the AIIMS, New Delhi, and a distinguished paediatric and neonatal surgeon, paediatric urologist, and hypospadiologist with over two decades of clinical excellence. With more than 180 publications, 8,000+ citations, and multiple patented innovations, he stands as one of Indias most prolific researchers in paediatric surgery. Dr. Goel remarkable contributions include groundbreaking research projects worth over 20 crores and prestigious awards including the UC Chakraborty Award and Paediatric Urologist of the Year Award (2021). ', // Placeholder bio
  },
  {
    id: 4,
    name: 'Dr. Vishesh Jain',
    title: 'Organizing Secretary',
    imageUrl: '/board_com_pic/Dr_Vishesh_Jain.jpg', // Replace with actual image path
    bio: 'Dr. Vishesh Jain is Professor of Paediatric Surgery at the AIIMS, New Delhi, and brings over 15 years of distinguished clinical and academic experience to RIPSSCON. A gold medallist in both MBBS and MCh (Paediatric Surgery), Prof. Jain has established himself as a prolific researcher with 137 scientific publications and 50 book chapters to his credit. His expertise spans paediatric surgery, neonatal surgery, and paediatric urology, with significant contributions to Wilms tumor research and urological reconstructive procedures.', // Placeholder bio
  },
  {
    id: 5,
    name: 'Dr. Anjan Dhua',
    title: 'Organizing Secretary',
    imageUrl: '/board_com_pic/Dr_Anjan_Dhua.jpg', // Replace with actual image path
    bio: 'Dr. Anjan Kumar Dhua serves as Professor of Pediatric Surgery at AIIMS Delhi, bringing exceptional expertise in paediatric surgery, laparoscopic procedures, and robotic surgery to RIPSSCON. A distinguished Fellow of multiple prestigious academies including the American College of Surgeons (FACS) and the International College of Robotic Surgeons (FICRS), Prof. Dhua has contributed significantly to paediatric surgical literature with over 90 PubMed publications and an h-index of 12. His research excellence encompasses innovative surgical techniques, particularly in minimally invasive approaches and pediatric oncology.', // Placeholder bio
  },
  {

    id: 6,
    name: 'Dr. Devendra Yadav',
    title: 'Organizing Secretary',
    imageUrl: '/board_com_pic/Dr_Devendra_Yadav.jpg', // Replace with actual image path
    bio: 'Dr. Devendra Kumar Yadav is a Professor of Paediatric Surgery at AIIMS New Delhi, renowned for his expertise as a paediatric and neonatal surgeon, paediatric urologist, and hypospadiologist. With over 85 PubMed publications and extensive experience in clinical research, Prof. Yadav has made significant contributions to paediatric urology and surgical outcomes research. His scholarly work encompasses systematic reviews, meta-analyses, and innovative surgical techniques, particularly in hypospadias repair and urological reconstructive procedures.', // Placeholder bio
  },

  {

    id: 7,
    name: 'Dr. Gali Divya ',
    title: 'Joint Organizing Secretary',
    imageUrl: '/board_com_pic/gali_divya.jpg', // Replace with actual image path
    bio: 'Dr. Gali Divya is Assistant Professor of Pediatric Surgery at AIIMS New Delhi, bringing fresh perspectives and dynamic energy to RIPSSCON as an emerging leader in paediatric surgery. A gold medallist in MS General Surgery and MCh Pediatric Surgery, Dr. Divya has quickly established herself as a rising star with significant research contributions in paediatric trauma, neonatal surgery, and congenital anomalies. Her impressive portfolio includes multiple award-winning presentations, peer-reviewed publications, and active involvement in cutting-edge research projects.', // Placeholder bio
  },
  // Add more speakers as needed
];

// Provided SpeakersSection component code
const SpeakersSection = () => {
  return (
    <section id="speakers" className="mb-12 p-4 md:p-6 bg-white rounded-lg shadow-md scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#002060] mb-6 border-b pb-2"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="bg-white border border-blue-800 p-4 rounded-lg shadow-md hover:shadow-lg text-center transition-all duration-300 transform hover:scale-105">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-300 shadow-sm"> {/* Refined image border */}
              <Image
                src={speaker.imageUrl}
                alt={`Photo of ${speaker.name}`}
                fill={true}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{speaker.name}</h3>
            <p className="text-sm text-[#002060] font-medium mb-2">{speaker.title}</p>
            <p className="text-sm text-gray-600">{speaker.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const WelcomeLetterPage = () => {
  return (
    <div>
      {/* Header Section - Similar to General Info Page */}
      <div className="header">
        <div className="inner-header flex">
          <h1>Welcome Letter</h1>
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

      {/* Welcome Letter Content */}
      <section className="container mx-auto px-4 py-8 mb-8"> {/* Added mb-8 */}
        <div className="prose max-w-prose mx-auto"> {/* Using prose for basic text styling, added max-w-prose and mx-auto for A4-like width and centering */}
          <h2 className="text-center text-2xl font-bold mb-8">Welcome Letter</h2>

          <div className="text-left mb-8">
            <p className="mb-2">10th Annual Conference – Research and Innovation Pediatric Surgery Society</p>
            <p className="mb-2">Mark your dates: <span className="font-semibold text-red-600">December 06–07, 2025</span></p>
            <p className="mb-0">Venue: <span className="font-semibold text-red-600">JL Auditorium, All India Institute of Medical Sciences, New Delhi</span></p>
          </div>

          <div className="text-left">
            <p className="mb-4">Dear Esteemed Colleagues and Fellow Pediatric Surgeons,</p>

            <p className="mb-4">Namaste and a warm welcome to the future of paediatric surgery in India!</p>

            <p className="mb-4">It gives us immense pleasure to invite you to the 10th Annual Conference of the Research and Innovation Pediatric Surgery Society – RIPSSCON 2025 - a milestone celebration of a decade dedicated to advancing paediatric surgical care across our nation.</p>

            <p className="text-xl font-semibold text-red-600 mb-4">A Decade of Innovation, A Future of Possibilities</p>
            <p className="mb-4">As we stand at the threshold of this landmark 10th edition, we reflect on the incredible journey that has brought us here. From humble beginnings to becoming one of India’s premier platforms for paediatric surgical excellence, IAPS and now RIPSS have been consistently pushing the boundaries of what’s possible in our field.</p>

            <p className="mb-4">This year, we’re embarking on an extraordinary journey that bridges cutting-edge genomic discoveries like:</p>
            <ul className="list-disc list-inside mb-4">
              <li><span className="font-semibold text-red-600">Exploring the role of exome sequencing and other genetic techniques in favour of our children affected with anatomic congenital malformations.</span></li>
              <li><span className="font-semibold text-red-600">Their applications in real-world clinical practice beyond academia while focussing on our resident trainee and private practitioner alike.</span></li>
              <li><span className="font-semibold text-red-600">Tackling the most controversial debates in our field. Professional innovations and intellectual property rights.</span></li>
              <li><span className="font-semibold text-red-600">Creativity and celebrating the diverse landscape of paediatric surgery – from academic institutions to private practice excellence.</span></li>
            </ul>

            <p className="text-xl font-semibold text-red-600 mb-4">Why this Conference will Transform your Practice</p>
            <p className="mb-4">In an era where paediatric surgery is rapidly evolving with cutting-edge technologies and revolutionary treatment approaches, staying ahead isn’t just an advantage it’s essential. RIPSSCON2025 has been meticulously designed to equip you with the knowledge, skills, and connections that will define the future of paediatric surgery.</p>

            <p className="text-xl font-semibold text-red-600 mb-4">🔬 Dive Deep into Research Excellence</p>
            <p className="mb-4">Explore our comprehensive Potpourri of Research and Biostatistical Concepts – specially curated sessions that will enhance your research methodology and statistical analysis skills, empowering you to contribute meaningfully to the global body of paediatric surgical knowledge.</p>

            <p className="text-xl font-semibold text-red-600 mb-4">🧬 Hands-On Innovation Workshops</p>
            <p className="mb-4">Step into the future with our exclusive workshops on <span className="font-semibold">Practical Genomic Medicine for Pediatric Surgeons and the Genetic Basis of Anatomical Malformations</span>. Learn how to confidently interpret genomic reports, effectively communicate complex genetic information to parents, and seamlessly integrate these powerful diagnostic tools into your daily practice – keeping you at the forefront of personalized paediatric surgical care.</p>

            <p className="text-xl font-semibold text-red-600 mb-4">💡 Engage in Meaningful Discourse</p>
            <p className="mb-4">Participate in thought-provoking symposiums and debates on the most controversial and challenging topics in paediatric surgery. These sessions are designed to challenge conventional thinking and inspire innovative solutions to complex clinical problems.</p>

            <p className="text-xl font-semibold text-red-600 mb-4">🏆 Your Platform for Recognition and Growth</p>
            <p className="mb-4">Our Free Papers Session provides an unparalleled opportunity to present your research, share your innovations, and gain recognition from leading experts in the field. With attractive awards awaiting outstanding presentations, this is your chance to shine on a national stage.</p>

            <p className="text-xl font-semibold text-red-600 mb-4">🤝 Fellowship Opportunities</p>
            <p className="mb-4">Take the next step in your professional journey by exploring Fellowship opportunities that can open doors to specialized training and career advancement.</p>

            <p className="text-xl font-semibold text-red-600 mb-4">💰 Earn Valuable CME Credits</p>
            <p className="mb-4">Enhance your continuing medical education portfolio with valuable CME credit points while staying updated with the latest advances in paediatric surgery.</p>

            <p className="text-xl font-semibold text-red-600 mb-4">Beyond Medicine: Experience the Heart of India</p>
            <p className="mb-4">While you’re enhancing your medical expertise, why not turn this into a memorable family getaway? December’s crisp, pleasant weather makes it the perfect time to explore Delhi with your spouse and children. Imagine strolling through history at the iconic India Gate – a tribute to 84,000 Indian soldiers, or marvelling at the Red Fort where Mughal emperors once held court for over 200 years. Let your family discover the towering Qutub Minar – the world’s tallest brick minaret, the exquisite Alai Darwaza with its stunning Indo-Islamic architecture, and the serene Safdarjung’s Tomb – often called the last flicker of Mughal architectural brilliance. With comfortable winter temperatures and clear blue skies, December in Delhi offers the ideal backdrop for creating lasting family memories while you advance your professional journey.</p>

            <p className="text-xl font-semibold text-red-600 mb-4">A Gathering of Minds, A Meeting of Hearts</p>
            <p className="mb-4">This conference brings together the brightest minds in paediatric surgery from across India and beyond. Under the distinguished guidance of our Patron Prof. M Srinivas and the expert leadership of Organizing Chairman Prof. Sandeep Agarwala, along with our dedicated team of organizing secretaries, we’ve created an environment where knowledge flows freely, collaborations are born, and friendships are forged.</p>

            <p className="mb-4">The involvement of both RIPSS and IAPS ensures that this conference represents the unified voice of paediatric surgery in India, bringing together diverse perspectives and expertise under one roof.</p>

            <p className="text-xl font-semibold text-red-600 mb-4">Special Benefits for Our Young Colleagues</p>
            <p className="mb-4">We understand the challenges faced by residents and young surgeons, which is why we’re pleased to offer complimentary accommodation on a first-come, first-served basis for resident trainees. This is our investment in the future of paediatric surgery – ensuring that financial constraints don’t prevent the next generation from accessing world-class education and networking opportunities.</p>

            <p className="text-xl font-semibold text-red-600 mb-4">Your Journey Starts Here</p>
            <p className="mb-4">The path to surgical excellence is not a destination but a continuous journey of learning, innovation, and service to our young patients. RIPSSCON 2025 is more than a conference – it’s a catalyst for transformation, a network of support, and a community of shared purpose.</p>

            <p className="mb-4">Whether you’re a seasoned surgeon looking to stay at the forefront of your field, a young professional seeking mentorship and growth opportunities, or a researcher passionate about advancing paediatric surgical science, this conference has something transformative waiting for you.</p>

            <p className="text-xl font-semibold text-red-600 mb-4">Register Today, Transform Tomorrow</p>
            <p className="mb-4">The future of paediatric surgery in India will be shaped by the decisions we make today, the knowledge we acquire, and the connections we build. Don’t let this opportunity pass by – be part of the conversation that will define the next decade of paediatric surgical excellence.</p>

            <p className="mb-4">Mark your calendars: December 06–07, 2025</p>
            <p className="mb-4">Location: JL Auditorium, AIIMS, New Delhi</p>

            <p className="mb-4" >For registration and further details, please contact:</p>
            <p className="mb-1 text-bold ">Prof. Prabudh Goel</p>
            <p className="mb-1 text-bold">Mobile: +91-9999944511</p>
            <p className="mb-4 text-bold">Email: drprabudhgoel@gmail.com</p>

            <p className="text-xl font-semibold text-red-600 mb-4">Together, We Heal. Together, We Innovate. Together, We Excel.</p>
            <p className="mb-4">We look forward to welcoming you to what promises to be an unforgettable celebration of paediatric surgical excellence, innovation, and camaraderie.</p>

            <div className="text-left">
              <p className="mb-4">With warm regards and best wishes,</p>
  
              <p className="mb-1">The Organizing Committee</p>
              <p className="mb-1">RIPSSCON 2025</p>
              <p className="mb-4">Research and Innovation Pediatric Surgery Society</p>
            </div>
          </div>

          <hr className="my-8" />

          <div className="text-center font-bold">
            <p className="italic mb-2">"The best way to predict the future is to create it together."</p>
            <p>Join us in creating the future of paediatric surgery in India.</p>
          </div>
        </div>
      </section>

      {/* Render the SpeakersSection component */}
      <SpeakersSection />

      {/* Photos and Names Section - Keeping the original for now, but likely to be replaced by SpeakersSection */}
      {/* You may want to remove the original Photos and Names Section if SpeakersSection is a replacement */}
      
    <WaveScrollEffect />
    </div>
  );
};

export default WelcomeLetterPage;