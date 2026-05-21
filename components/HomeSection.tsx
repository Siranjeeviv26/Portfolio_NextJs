'use client';

import { ArrowRight, Sparkles, Code2, Zap, ChevronsDown } from 'lucide-react';
import ResumeButton from './ResumeButton';

export default function HomeSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col px-4 sm:px-6 overflow-hidden"
      >
        {/* Section orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full
            bg-violet-400/10 dark:bg-violet-600/15 blur-[100px] animate-orb" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full
            bg-cyan-400/8 dark:bg-cyan-500/10 blur-[90px] animate-orb"
            style={{ animationDelay: '6s' }} />
        </div>

        {/* ── Main content — centred, padded bottom so it never touches the scroll indicator ── */}
        <div className="relative z-10 flex-1 flex items-center justify-center pt-20">
          <div className="max-w-5xl mx-auto text-center space-y-8 pb-16">

            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-violet-100/80 dark:bg-violet-500/10
              border border-violet-300/60 dark:border-violet-500/20
              backdrop-blur-sm animate-fade-in delay-100">
              <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400 animate-float" />
              <span className="text-sm font-medium text-violet-700 dark:text-violet-300">
                Welcome to my portfolio
              </span>
            </div>

            {/* Heading */}
            <div className="animate-fade-in delay-300">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                Hi, I&apos;m{' '}
                <span className="animate-gradient inline-block">Siranjeevi</span>
              </h1>
            </div>

            {/* Role badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in delay-400">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium
                bg-cyan-100/80 dark:bg-cyan-500/10
                border border-cyan-300/60 dark:border-cyan-500/20
                text-cyan-700 dark:text-cyan-300">
                <Code2 className="w-3.5 h-3.5" />
                Full-Stack Developer
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium
                bg-violet-100/80 dark:bg-violet-500/10
                border border-violet-300/60 dark:border-violet-500/20
                text-violet-700 dark:text-violet-300">
                <Zap className="w-3.5 h-3.5" />
                Backend Specialist
              </span>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
              I build{' '}
              <span className="text-slate-800 dark:text-slate-200 font-semibold">
                scalable, secure, and high-performance
              </span>{' '}
              web applications with a strong focus on backend architecture and smooth frontend
              experiences. Passionate about solving real-world problems through clean code and
              user-centric design.{' '}
              <span className="text-violet-600 dark:text-violet-400 font-semibold">
                Let&apos;s build something amazing together.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 pt-2 animate-fade-in delay-700">
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2
                  px-8 py-4 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-violet-600 to-cyan-600
                  hover:from-violet-500 hover:to-cyan-500
                  shadow-[0_0_30px_rgba(124,58,237,0.25)]
                  hover:shadow-[0_0_50px_rgba(124,58,237,0.4)]
                  transition-all duration-300 hover:scale-105"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2
                  px-8 py-4 rounded-xl font-semibold
                  text-slate-700 dark:text-slate-200
                  bg-white/70 dark:bg-white/[0.06]
                  border border-slate-200 dark:border-white/[0.12]
                  backdrop-blur-sm
                  hover:bg-white dark:hover:bg-white/[0.1]
                  hover:border-violet-300 dark:hover:border-violet-500/30
                  hover:text-violet-700 dark:hover:text-white
                  transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </button>

              <div className="block md:hidden w-full">
                <ResumeButton isMobile />
              </div>
            </div>

          </div>
        </div>

        {/* ── Scroll indicator — sits in its own flex row at the very bottom ── */}
        <div className="relative z-10 flex flex-col items-center gap-1 pb-6 animate-fade-in delay-700">
          <ChevronsDown
            className="w-5 h-5 text-violet-500/70 dark:text-violet-400/60 animate-float"
          />
          <span className="text-[10px] tracking-[0.3em] uppercase text-slate-400/70 dark:text-slate-500/80">
            Scroll
          </span>
        </div>

        <ResumeButton />
      </section>
    </>
  );
}
