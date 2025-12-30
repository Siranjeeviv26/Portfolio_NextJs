'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center 
      bg-gradient-to-br 
      from-[#e6fffa] 
      via-[#c7f9e9] 
      to-[#a7f3d0]">
      
      <div className="flex flex-col items-center gap-6 p-10 rounded-3xl 
        bg-white/55 backdrop-blur-xl shadow-2xl">

        {/* Circular Loader */}
        <div className="relative w-24 h-24">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="#d1fae5"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="#047857"
              strokeWidth="8"
              fill="none"
              strokeDasharray="251"
              strokeDashoffset={251 - (251 * progress) / 100}
              className="transition-all duration-300 ease-out"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center 
            text-lg font-semibold text-emerald-800">
            {progress}%
          </span>
        </div>

        {/* Text */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-emerald-900">
            Entering Protfolio
          </h1>
          <p className="text-sm text-emerald-700 mt-1">
            Loading your experience
          </p>
        </div>
      </div>
    </div>
  );
}
