'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import ResumeButton from './ResumeButton';

export default function HomeSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-6 pt-20"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">

          {/* Top welcome badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-medium text-teal-500">
              Welcome to my portfolio
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 leading-tight">
            Hi, I'm{' '}
            <span className="text-teal-600 inline-block animate-gradient">
              Siranjeevi
            </span>
          </h1>

          {/* Short introduction */}
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            A <span className="font-bold">Full-Stack Developer</span> | Backend Specialist. I build scalable, secure, and high-performance web applications with a strong focus on backend development and smooth frontend experiences. Passionate about solving real-world problems through clean code, efficient architecture, and user-centric design.{' '}<br />
            <span className="text-teal-600 font-semibold">Let’s build something amazing together.</span>
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5 pt-5">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center space-x-2 bg-white hover:bg-teal-50 text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Contact Me</span>
            </button>

            {/* Mobile Resume Button */}
            <div className="block md:hidden w-full">
              <ResumeButton isMobile />
            </div>
          </div>
        </div>

        {/* Desktop Resume Button */}
        <ResumeButton />
      </section>
    </>
  );
}

// 'use client';

// import { ArrowRight, Sparkles } from 'lucide-react';
// import ResumeButton from './ResumeButton';

// export default function HomeSection() {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       {/* Home Section */}
//       <section
//         id="home"
//         className="min-h-screen flex items-center justify-center px-6 pt-20"
//       >
//         <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">

//           {/* Top welcome badge */}
//           <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
//             <Sparkles className="w-4 h-4 text-yellow-600" />
//             <span className="text-sm font-medium text-teal-500">
//               Welcome to my portfolio
//             </span>
//           </div>

//           {/* Main heading */}
//           <h1 className="text-6xl md:text-7xl font-bold text-gray-800 leading-tight">
//             Hi, I'm{' '}
//             <span className="text-teal-600 inline-block animate-gradient">
//               Siranjeevi
//             </span>
//           </h1>

//           {/* Short introduction / description */}
//           <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
//             A <span className="font-bold">Full-Stack Developer</span> | Backend Specialist. I build scalable, secure, and high-performance web applications with a strong focus on backend development and smooth frontend experiences. Passionate about solving real-world problems through clean code, efficient architecture, and user-centric design.{' '}<br />
//             <span className="text-teal-600 font-semibold">Let’s build something amazing together.</span>
//           </p>

//           {/* Action buttons */}
//           <div className="flex flex-wrap items-center justify-center gap-5 pt-5">
//             {/* View Projects Button */}
//             <button
//               onClick={() => scrollToSection('projects')}
//               className="group relative inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//             >
//               <span>View Projects</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>

//             {/* Contact Me Button */}
//             <button
//               onClick={() => scrollToSection('contact')}
//               className="inline-flex items-center space-x-2 bg-white hover:bg-teal-50 text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//             >
//               <span>Contact Me</span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Resume Button Component */}
//       <ResumeButton />
//     </>
//   );
// }
