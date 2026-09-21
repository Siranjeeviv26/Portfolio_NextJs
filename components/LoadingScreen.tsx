'use client';

import { useEffect, useState } from 'react';

const name = ['S', 'I', 'R', 'A', 'N', 'J', 'E', 'E', 'V', 'I'];

export default function LoadingScreen() {
  const [progress, setProgress]       = useState(0);
  const [exiting, setExiting]         = useState(false);
  const [showLetters, setShowLetters] = useState(false);
  const [showSub, setShowSub]         = useState(false);
  const [showBar, setShowBar]         = useState(false);
  const [showPercent, setShowPercent] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowLetters(true), 200);
    const t2 = setTimeout(() => setShowSub(true),     1000);
    const t3 = setTimeout(() => setShowBar(true),     400);
    const t4 = setTimeout(() => setShowPercent(true), 600);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setExiting(true), 200);
          return 100;
        }
        return prev + 1;
      });
    }, 22);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#050510] flex flex-col overflow-hidden
        transition-all duration-700 ease-out
        ${exiting ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'}`}
    >
      {/* Animated dot grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(139,92,246,0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Radial gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full
          bg-violet-600/8 blur-[150px] animate-orb" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] rounded-full
          bg-cyan-600/6 blur-[130px] animate-orb" style={{ animationDelay: '6s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full
          bg-fuchsia-600/5 blur-[120px] animate-orb" style={{ animationDelay: '3s' }} />
      </div>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 relative z-10 px-4">

        {/* Bracket + Name */}
        <div className="flex items-center gap-3 md:gap-5">
          <span className={`text-2xl md:text-4xl font-mono font-bold text-violet-400/40 select-none
            transition-all duration-700 ease-out
            ${showLetters ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            {'<'}
          </span>

          <div className="flex gap-[2px] md:gap-1">
            {name.map((letter, i) => (
              <span
                key={i}
                className={`text-4xl md:text-7xl font-black tracking-tighter
                  bg-gradient-to-b from-white via-violet-200 to-cyan-300
                  bg-clip-text text-transparent
                  transition-all duration-600 ease-out
                  ${showLetters ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-x-90'}`}
                style={{
                  transitionDelay: `${i * 60}ms`,
                  transitionDuration: '600ms',
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          <span className={`text-2xl md:text-4xl font-mono font-bold text-cyan-400/40 select-none
            transition-all duration-700 ease-out
            ${showLetters ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
            style={{ transitionDelay: '600ms' }}>
            {'/>'}
          </span>
        </div>

        {/* Role line */}
        <div
          className={`flex items-center gap-4 transition-all duration-700 ease-out
            ${showSub ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-400/50" />
          <p className="text-slate-400/80 text-[10px] md:text-xs tracking-[0.35em] uppercase font-medium">
            Full Stack Developer
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/50" />
        </div>

        {/* Percentage */}
        <div className={`mt-2 transition-all duration-500 ease-out
          ${showPercent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <p className="text-6xl md:text-8xl font-black tabular-nums
            bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400
            bg-clip-text text-transparent leading-none">
            {String(progress).padStart(3, '\u2007')}
          </p>
          <p className="text-center text-xs text-slate-500/60 mt-2 tracking-[0.3em] uppercase font-medium">
            Loading
          </p>
        </div>

        {/* Status dots */}
        <div className={`flex gap-2.5 transition-opacity duration-500 ${showBar ? 'opacity-100' : 'opacity-0'}`}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-dot-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Full-width progress bar */}
      <div className="relative z-10 w-full">
        {/* Track */}
        <div className="w-full h-[2px] bg-white/[0.04]" />
        {/* Fill */}
        <div
          className="absolute top-0 left-0 h-[2px]"
          style={{
            width: `${progress}%`,
            transition: 'width 70ms linear',
            background: 'linear-gradient(90deg, #7c3aed, #d946ef, #06b6d4)',
          }}
        />
        {/* Glow tip */}
        <div
          className="absolute top-0 h-[2px] w-12 blur-sm"
          style={{
            left: `calc(${progress}% - 24px)`,
            transition: 'left 70ms linear',
            background: 'linear-gradient(90deg, transparent, #7c3aed, #06b6d4)',
            opacity: progress > 0 && progress < 100 ? 0.8 : 0,
          }}
        />
      </div>
    </div>
  );
}
