'use client';

import { useEffect, useState } from 'react';

const name = ['S', 'I', 'R', 'A', 'N', 'J', 'E', 'E', 'V', 'I'];

export default function LoadingScreen() {
  const [progress, setProgress]       = useState(0);
  const [exiting, setExiting]         = useState(false);
  const [showLetters, setShowLetters] = useState(false);
  const [showSub, setShowSub]         = useState(false);
  const [showBar, setShowBar]         = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowLetters(true), 150);
    const t2 = setTimeout(() => setShowSub(true),     900);
    const t3 = setTimeout(() => setShowBar(true),     400);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setExiting(true);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#050510] flex flex-col overflow-hidden
        transition-opacity duration-500 ${exiting ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Animated dot-grid background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(139,92,246,0.35) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[130px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-600/8  blur-[110px]" />

      {/* ── Center content ── */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 relative z-10">

        {/* Bracket + Name */}
        <div className="flex items-center gap-5">
          <span className="text-3xl md:text-4xl font-mono font-bold text-violet-400/50 select-none animate-pulse">
            {'<'}
          </span>

          <div className="flex gap-0.5 md:gap-1">
            {name.map((letter, i) => (
              <span
                key={i}
                className={`text-4xl md:text-6xl font-extrabold tracking-tight
                  bg-gradient-to-b from-violet-300 via-violet-400 to-cyan-400
                  bg-clip-text text-transparent
                  transition-all duration-500 ease-out
                  ${showLetters ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 55}ms` }}
              >
                {letter}
              </span>
            ))}
          </div>

          <span className="text-3xl md:text-4xl font-mono font-bold text-cyan-400/50 select-none animate-pulse">
            {'/>'}
          </span>
        </div>

        {/* Role line */}
        <div
          className={`flex items-center gap-3 transition-all duration-700 ease-out
            ${showSub ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-violet-400/60" />
          <p className="text-slate-400 text-xs md:text-sm tracking-[0.25em] uppercase font-medium">
            Full Stack Developer
          </p>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400/60" />
        </div>

        {/* Percentage counter */}
        <p
          className={`text-5xl md:text-6xl font-black tabular-nums mt-4
            bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent
            transition-opacity duration-500 ${showBar ? 'opacity-100' : 'opacity-0'}`}
        >
          {String(progress).padStart(3, ' ')}
          <span className="text-3xl md:text-4xl font-bold text-slate-500">%</span>
        </p>

        {/* Status dots */}
        <div
          className={`flex gap-2 transition-opacity duration-500 ${showBar ? 'opacity-100' : 'opacity-0'}`}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-violet-500 dot-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* ── Full-width gradient progress bar ── */}
      <div className="relative z-10 w-full">
        {/* Track */}
        <div className="w-full h-[3px] bg-white/[0.06]" />
        {/* Fill */}
        <div
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500"
          style={{ width: `${progress}%`, transition: 'width 80ms linear' }}
        />
        {/* Glowing tip */}
        <div
          className="absolute top-0 h-[3px] w-8 blur-sm bg-gradient-to-r from-violet-400 to-cyan-400"
          style={{
            left: `calc(${progress}% - 16px)`,
            transition: 'left 80ms linear',
            opacity: progress > 0 && progress < 100 ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
}
