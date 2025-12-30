'use client';

import { Download } from 'lucide-react';

interface ResumeButtonProps {
  isMobile?: boolean;
}

export default function ResumeButton({ isMobile = false }: ResumeButtonProps) {
  const handleDownload = () => {
    window.open(
      'https://drive.google.com/file/d/1Kro9fAyBKCwZCw9c2GJ9tU-mJKinHdIK/view?usp=sharing',
      '_blank'
    );
  };

  if (isMobile) {
    return (
      <button
        onClick={handleDownload}
        className="group relative inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Download Resume
      </button>
    );
  }

  return (
    <button
      onClick={handleDownload}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 group hidden md:block"
      aria-label="Download Resume"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-teal-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse" />
        <div className="relative bg-teal-600 hover:bg-teal-700 text-white px-4 py-8 rounded-lg shadow-xl transition-all duration-300 transform group-hover:scale-105">
          <div className="flex flex-col items-center space-y-3">
            <Download className="w-6 h-6" />
            <div className="flex flex-col items-center">
              {['R', 'E', 'S', 'U', 'M', 'E'].map((letter, index) => (
                <span
                  key={index}
                  className="text-sm font-bold tracking-wider"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}


// 'use client';

// import { Download } from 'lucide-react';

// export default function ResumeButton() {
//   const handleDownload = () => {
//     window.open(
//       'https://drive.google.com/file/d/1Kro9fAyBKCwZCw9c2GJ9tU-mJKinHdIK/view?usp=sharing',
//       '_blank'
//     );
//   };

//   return (
//     <button
//       onClick={handleDownload}
//       className="fixed right-8 top-1/2 -translate-y-1/2 z-50 group hidden md:block"
//       aria-label="Download Resume"
//     >
//       <div className="relative">
//         <div className="absolute -inset-1 bg-teal-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse" />
//         <div className="relative bg-teal-600 hover:bg-teal-700 text-white px-4 py-8 rounded-lg shadow-xl transition-all duration-300 transform group-hover:scale-105">
//           <div className="flex flex-col items-center space-y-3">
//             <Download className="w-6 h-6" />
//             <div className="flex flex-col items-center">
//               {['R', 'E', 'S', 'U', 'M', 'E'].map((letter, index) => (
//                 <span
//                   key={index}
//                   className="text-sm font-bold tracking-wider"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   {letter}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </button>
//   );
// }
