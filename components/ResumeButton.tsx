'use client';

import { Download } from 'lucide-react';

interface ResumeButtonProps {
  isMobile?: boolean;
}

export default function ResumeButton({ isMobile = false }: ResumeButtonProps) {
  const handleDownload = () => {
    // https://drive.google.com/file/d/1W7LuE4DI7LtDbWe7mDo47Ub6yz6hBlq5/view?usp=sharing
    const link = document.createElement('a');
    link.href = '/assets/Siranjeevi.pdf';
    link.download = 'Siranjeevi.pdf';
    link.click();
  };

  if (isMobile) {
    return (
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2
          px-8 py-4 rounded-xl font-semibold w-full justify-center
          text-slate-700 dark:text-slate-200
          bg-white/70 dark:bg-white/[0.06]
          border border-slate-200 dark:border-white/[0.12]
          hover:bg-white dark:hover:bg-white/[0.1]
          hover:border-violet-300 dark:hover:border-violet-500/30
          hover:text-violet-700 dark:hover:text-white
          transition-all duration-300 hover:scale-105"
      >
        <Download className="w-4 h-4" />
        Download Resume
      </button>
    );
  }

  return (
    <button
      onClick={handleDownload}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 group hidden md:block"
      aria-label="Download Resume"
    >
      <div className="relative">
        {/* Glow halo */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-b from-violet-500 to-cyan-500 blur-md
          opacity-30 dark:opacity-50 group-hover:opacity-70 dark:group-hover:opacity-90
          transition-opacity duration-300" />
        {/* Button body */}
        <div className="relative
          bg-white/90 dark:bg-[#0f0f1f]
          border border-violet-200 dark:border-violet-500/30
          group-hover:border-violet-400 dark:group-hover:border-violet-400/60
          text-slate-700 dark:text-slate-200
          px-4 py-8 rounded-xl
          shadow-[0_4px_20px_rgba(139,92,246,0.15)] dark:shadow-[0_0_30px_rgba(139,92,246,0.2)]
          transition-all duration-300 group-hover:scale-105">
          <div className="flex flex-col items-center gap-3">
            <Download className="w-5 h-5 text-violet-500 dark:text-violet-400 group-hover:text-violet-600 dark:group-hover:text-violet-300" />
            <div className="flex flex-col items-center">
              {['R', 'E', 'S', 'U', 'M', 'E'].map((letter, index) => (
                <span
                  key={index}
                  className="text-xs font-bold tracking-wider
                    bg-gradient-to-b from-violet-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400
                    bg-clip-text text-transparent"
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
