'use client';

import { useTheme } from 'next-themes';
import { Sun, Snowflake } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8 md:w-[68px]" />;

  const isFrost = theme === 'frost';

  const toggle = () => setTheme(isFrost ? 'light' : 'frost');

  return (
    <>
      {/* ── Mobile: compact icon button ── */}
      <button
        onClick={toggle}
        aria-label="Toggle frost / light theme"
        className={`md:hidden relative w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 border
          ${isFrost
            ? 'bg-teal-600 border-teal-400/60 shadow-[0_0_12px_rgba(20,184,166,0.4)] text-teal-100'
            : 'bg-teal-50 border-teal-300/80 text-teal-600'
          }`}
      >
        {isFrost
          ? <Snowflake className="w-4 h-4 animate-spin-slow" strokeWidth={2.5} />
          : <Sun className="w-4 h-4" strokeWidth={2.5} />
        }
      </button>

      {/* ── Desktop: pill toggle ── */}
      <button
        onClick={toggle}
        aria-label="Toggle frost / light theme"
        className={`hidden md:block relative w-[68px] h-8 rounded-full p-1 transition-all duration-500 border overflow-hidden
          ${isFrost
            ? 'bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 border-teal-400/60 shadow-[0_0_18px_rgba(20,184,166,0.45),inset_0_0_10px_rgba(94,234,212,0.1)]'
            : 'bg-gradient-to-r from-teal-50 via-white to-teal-50 border-teal-300/80 shadow-[0_2px_14px_rgba(20,184,166,0.2)]'
          }`}
      >
        {/* Frost shimmer overlay */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isFrost ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background:
              'radial-gradient(ellipse at 25% 50%, rgba(167,243,208,0.15) 0%, transparent 55%), radial-gradient(ellipse at 75% 50%, rgba(94,234,212,0.1) 0%, transparent 55%)',
          }}
        />

        {/* Ice particles */}
        <span className={`absolute top-[5px] left-[13px] w-[3px] h-[3px] rounded-full bg-teal-200 transition-all duration-500 animate-frost-flicker ${isFrost ? 'opacity-70' : 'opacity-0'}`} />
        <span className={`absolute bottom-[6px] left-[21px] w-[2px] h-[2px] rounded-full bg-emerald-200 transition-all duration-700 animate-frost-flicker delay-300 ${isFrost ? 'opacity-50' : 'opacity-0'}`} />
        <span className={`absolute top-[6px] right-[13px] w-[2px] h-[2px] rounded-full bg-teal-300 transition-all duration-500 animate-frost-flicker delay-200 ${isFrost ? 'opacity-40' : 'opacity-0'}`} />

        {/* Sliding orb */}
        <div
          className={`absolute top-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500
            ${isFrost
              ? 'left-[38px] bg-gradient-to-br from-teal-100 via-teal-200 to-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.7),0_0_22px_rgba(20,184,166,0.4)]'
              : 'left-1 bg-gradient-to-br from-amber-300 to-orange-400 shadow-[0_2px_8px_rgba(251,191,36,0.5)]'
            }`}
        >
          <Snowflake
            className={`w-3.5 h-3.5 text-teal-800 absolute transition-all duration-300 animate-spin-slow
              ${isFrost ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
            strokeWidth={2.5}
          />
          <Sun
            className={`w-3.5 h-3.5 text-white absolute transition-all duration-300
              ${isFrost ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
            strokeWidth={2.5}
          />
        </div>

        {/* Faint track icons */}
        <div className="absolute inset-0 flex items-center justify-between px-[10px] pointer-events-none">
          <Sun className={`w-2.5 h-2.5 text-amber-400 transition-opacity duration-300 ${isFrost ? 'opacity-25' : 'opacity-0'}`} />
          <Snowflake className={`w-2.5 h-2.5 text-teal-300 transition-opacity duration-300 ${isFrost ? 'opacity-0' : 'opacity-35'}`} />
        </div>
      </button>
    </>
  );
}
