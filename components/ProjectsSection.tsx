'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVercel,
} from 'react-icons/si';

const techIcons: Record<string, JSX.Element> = {
  HTML: <SiHtml5 className="w-4 h-4 text-orange-600" />,
  CSS: <SiCss3 className="w-4 h-4 text-blue-600" />,
  JavaScript: <SiJavascript className="w-4 h-4 text-yellow-500" />,
  React: <SiReact className="w-4 h-4 text-cyan-500" />,
  TailwindCSS: <SiTailwindcss className="w-4 h-4 text-teal-500" />,
  GitHub: <SiGithub className="w-4 h-4 text-gray-800" />,
  NodeJs: <SiNodedotjs className="w-4 h-4 text-green-600" />,
  ExpressJs: <SiExpress className="w-4 h-4 text-gray-700" />,
  MongoDB: <SiMongodb className="w-4 h-4 text-green-700" />,
  Vercel: <SiVercel className="w-4 h-4 text-black" />,
  vercel: <SiVercel className="w-4 h-4 text-black" />,
};

const projects = [
  {
    title: 'Travel Website',
    description:
      `A responsive travel booking website showcasing destinations and tour packages with smooth navigation and interactive UI. 
      Built using HTML, CSS, and JavaScript, and deployed via GitHub Pages to ensure fast and reliable access.`,
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub'],
    image: '/assets/Travel.png',
    live: 'https://siranjeeviv26.github.io/travel/',
  },
  {
    title: 'Gym Website',
    description:
      `A modern fitness website designed to promote gym services, membership plans, and workout programs. 
      Developed using React and Tailwind CSS with a clean, mobile-first UI and deployed on GitHub Pages.`,
    tech: ['React', 'TailwindCSS', 'GitHub'],
    image: '/assets/Gym.png',
    live: 'https://siranjeeviv26.github.io/Matrix_gym/',
  },
  {
    title: 'Wanderlust Travel Blog',
    description:
      `A modern fitness website designed to promote gym services, membership plans, and workout programs. 
      Developed using React and Tailwind CSS with a clean, mobile-first UI and deployed on GitHub Pages.`,
    tech: ['React', 'TailwindCSS', 'GitHub', 'Vercel'],
    image: '/assets/Home.png',
    live: 'https://wanderlust-swart.vercel.app/',
  },
  {
    title: 'Moments Notes/Photos',
    description:
      `A full-stack web application for saving personal notes and photos, featuring secure authentication, CRUD operations, and responsive design. 
      Built with React, Node.js, Express, MongoDB, and Tailwind CSS, and deployed using Vercel and Render.`,
    tech: ['React', 'NodeJs', 'ExpressJs', 'MongoDB', 'TailwindCSS', 'Vercel', 'Render'],
    image: '/assets/Moments.png',
    live: 'https://moments-pink.vercel.app',
  },
  {
    title: 'QR Code Generator',
    description:
      `A lightweight web application that generates QR codes instantly from user input. 
      Built using React and Tailwind CSS with real-time rendering and deployed on Vercel for fast performance.`,
    tech: ['React','TailwindCSS','vercel'],
    image: '/assets/QR code.png',
    live: 'https://qr-generator-three-omega.vercel.app/',
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint is 768px
    };

    // Initial check
    checkMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    // On mobile, show only 1 card
    if (isMobile) {
      return [projects[currentIndex]];
    }
    
    // On desktop, show 3 cards
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  // For mobile swipe functionality
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-700 mb-12 md:mb-16">
          Projects
        </h2>

        <div className="relative">
          {/* Mobile: Single Card with Swipe */}
          {isMobile ? (
            <div 
              className="w-full"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <a
                href={projects[currentIndex].live}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl mx-auto max-w-md"
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold bg-teal-600/80 px-4 py-2 rounded-lg">
                      Visit Live Project
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {projects[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[currentIndex].tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                      >
                        {techIcons[tech]}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ) : (
            /* Desktop: 3 Cards Grid */
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {getVisibleProjects().map((project, index) => (
                <a
                  key={`${currentIndex}-${index}`}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold bg-teal-600/80 px-4 py-2 rounded-lg">
                        Visit Live Project
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                        >
                          {techIcons[tech]}
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8 md:mt-0">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-teal-600 text-teal-600 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-teal-600 w-8'
                      : 'bg-teal-200 hover:bg-teal-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white hover:bg-teal-600 text-teal-600 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Next projects"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Swipe Instructions */}
          {isMobile && (
            <div className="text-center mt-6 text-gray-500 text-sm">
              <p>Swipe left/right or use buttons to navigate</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// 'use client';

// import { useState } from 'react';
// import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
// import {
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiReact,
//   SiTailwindcss,
//   SiGithub,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiVercel,
// } from 'react-icons/si';

// const techIcons: Record<string, JSX.Element> = {
//   HTML: <SiHtml5 className="w-4 h-4 text-orange-600" />,
//   CSS: <SiCss3 className="w-4 h-4 text-blue-600" />,
//   JavaScript: <SiJavascript className="w-4 h-4 text-yellow-500" />,
//   React: <SiReact className="w-4 h-4 text-cyan-500" />,
//   TailwindCSS: <SiTailwindcss className="w-4 h-4 text-teal-500" />,
//   GitHub: <SiGithub className="w-4 h-4 text-gray-800" />,
//   NodeJs: <SiNodedotjs className="w-4 h-4 text-green-600" />,
//   ExpressJs: <SiExpress className="w-4 h-4 text-gray-700" />,
//   MongoDB: <SiMongodb className="w-4 h-4 text-green-700" />,
//   Vercel: <SiVercel className="w-4 h-4 text-black" />,
//   vercel: <SiVercel className="w-4 h-4 text-black" />,
// };


// const projects = [
//   {
//     title: 'Travel Website',
//     description:
//       `A responsive travel booking website showcasing destinations and tour packages with smooth navigation and interactive UI. 
//       Built using HTML, CSS, and JavaScript, and deployed via GitHub Pages to ensure fast and reliable access.`,
//     tech: ['HTML', 'CSS', 'JavaScript', 'GitHub'],
//     image: '/assets/Travel.png',
//    // github: 'https://github.com',
//     live: 'https://siranjeeviv26.github.io/travel/',
//   },
//   {
//     title: 'Gym Website',
//     description:
//       `A modern fitness website designed to promote gym services, membership plans, and workout programs. 
//       Developed using React and Tailwind CSS with a clean, mobile-first UI and deployed on GitHub Pages.`,
//     tech: ['React', 'TailwindCSS', 'GitHub'],
//     image: '/assets/Gym.png',
//    // github: 'https://github.com',
//     live: 'https://siranjeeviv26.github.io/Matrix_gym/',
//   },
//   {
//     title: 'Moments Notes/Photos',
//     description:
//       `A full-stack web application for saving personal notes and photos, featuring secure authentication, CRUD operations, and responsive design. 
//       Built with React, Node.js, Express, MongoDB, and Tailwind CSS, and deployed using Vercel and Render.`,
//     tech: ['React', 'NodeJs', 'ExpressJs', 'MongoDB', 'TailwindCSS', 'Vercel', 'Render'],
//     image: '/assets/Moments.png',
//    // github: 'https://github.com',
//     live: 'https://moments-pink.vercel.app',
//   },
//   {
//     title: 'QR Code Generator',
//     description:
//       `A lightweight web application that generates QR codes instantly from user input. 
//       Built using React and Tailwind CSS with real-time rendering and deployed on Vercel for fast performance.`,
//     tech: ['React','TailwindCSS','vercel'],
//     image: '/assets/QR code.png',
//    // github: 'https://github.com',
//     live: 'https://qr-generator-three-omega.vercel.app/',
//   },
// ];

// export default function ProjectsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % projects.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   const getVisibleProjects = () => {
//     const visible = [];
//     for (let i = 0; i < 3; i++) {
//       visible.push(projects[(currentIndex + i) % projects.length]);
//     }
//     return visible;
//   };

//   return (
//     <section id="projects" className="min-h-screen py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-5xl font-bold text-center text-teal-700 mb-16">
//           Projects
//         </h2>

//         <div className="relative">
//           <div className="grid md:grid-cols-3 gap-6 mb-6">
//             {getVisibleProjects().map((project, index) => (
//   <a
//     key={`${currentIndex}-${index}`}
//     href={project.live}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="group block relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
//   >
//     <div className="relative h-48 overflow-hidden">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <span className="text-white text-lg font-semibold bg-teal-600/80 px-4 py-2 rounded-lg">
//           Visit Live Project
//         </span>
//       </div>
//     </div>

//     <div className="p-6">
//       <h3 className="text-2xl font-bold text-gray-800 mb-3">
//         {project.title}
//       </h3>
//       <p className="text-gray-600 mb-6 line-clamp-3">
//         {project.description}
//       </p>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {project.tech.map((tech) => (
//           <span
//             key={tech}
//             className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
//           >
//             {techIcons[tech]}
//             <span>{tech}</span>
//           </span>
//         ))}
//       </div>
//     </div>
//   </a>
// ))}

//           </div>

//           <div className="flex justify-center items-center space-x-4">
//             <button
//               onClick={prevSlide}
//               className="bg-white hover:bg-teal-600 text-teal-600 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
//               aria-label="Previous projects"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>

//             <div className="flex space-x-2">
//               {projects.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentIndex
//                       ? 'bg-teal-600 w-8'
//                       : 'bg-teal-200 hover:bg-teal-400'
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={nextSlide}
//               className="bg-white hover:bg-teal-600 text-teal-600 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
//               aria-label="Next projects"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
