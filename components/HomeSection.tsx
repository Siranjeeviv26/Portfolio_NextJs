"use client";

import {
  ArrowRight,
  Sparkles,
  Code2,
  Zap,
  ChevronsDown,
  Terminal,
  Globe,
  Server,
} from "lucide-react";
import ResumeButton from "./ResumeButton";

const techStack = [
  { icon: Code2, label: "React", color: "text-cyan-500" },
  { icon: Server, label: "Node.js", color: "text-green-500" },
  {
    icon: Globe,
    label: "Next.js",
    color: "text-slate-700 dark:text-slate-200",
  },
  { icon: Terminal, label: "TypeScript", color: "text-blue-500" },
];

export default function HomeSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col px-4 sm:px-6 overflow-hidden grid-bg"
      >
        {/* Gradient mesh background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-[15%] w-[500px] h-[500px] rounded-full
            bg-violet-500/8 dark:bg-violet-500/12 blur-[120px] animate-orb"
          />
          <div
            className="absolute bottom-32 right-[10%] w-[450px] h-[450px] rounded-full
            bg-cyan-400/6 dark:bg-cyan-500/10 blur-[110px] animate-orb"
            style={{ animationDelay: "6s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full
            bg-fuchsia-400/4 dark:bg-fuchsia-500/8 blur-[100px] animate-orb"
            style={{ animationDelay: "3s" }}
          />
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#f5f4ff_70%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,#050510_70%)]" />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center justify-center pt-20 sm:pt-24">
          <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 pb-16 px-2">
            {/* Welcome badge */}
            <div
              className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full
              bg-white/60 dark:bg-white/[0.04]
              border border-violet-200/50 dark:border-violet-500/15
              backdrop-blur-xl animate-fade-in delay-100
              shadow-sm dark:shadow-none"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 dark:text-amber-400 animate-float" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400">
                Welcome to my portfolio
              </span>
            </div>

            {/* Heading */}
            <div className="animate-fade-in delay-300">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tight">
                Hi, I&apos;m{" "}
                <span className="animate-gradient inline-block">
                  Siranjeevi
                </span>
              </h1>
            </div>

            {/* Role badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 animate-fade-in delay-400">
              <span
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold
                bg-cyan-50 dark:bg-cyan-500/8
                border border-cyan-200/60 dark:border-cyan-500/15
                text-cyan-700 dark:text-cyan-300
                backdrop-blur-sm"
              >
                <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                Full-Stack Developer
              </span>
              <span
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold
                bg-violet-50 dark:bg-violet-500/8
                border border-violet-200/60 dark:border-violet-500/15
                text-violet-700 dark:text-violet-300
                backdrop-blur-sm"
              >
                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                Backend Specialist
              </span>
              <span
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold
                bg-amber-50 dark:bg-amber-500/8
                border border-amber-200/60 dark:border-amber-500/15
                text-amber-700 dark:text-amber-300
                backdrop-blur-sm"
              >
                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500" />| AI-Assisted Developer
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500 px-2">
              I build{" "}
              <span className="text-slate-800 dark:text-slate-200 font-semibold">
                scalable, secure, and high-performance
              </span>{" "}
              web applications with a strong focus on backend architecture and
              smooth frontend experiences.{" "}
              <span className="text-violet-600 dark:text-violet-400 font-semibold">
                Let&apos;s build something amazing together.
              </span>
            </p>

            {/* Tech stack floating pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2 animate-fade-in delay-600">
              {techStack.map((tech, i) => (
                <div
                  key={tech.label}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl
                    bg-white/50 dark:bg-white/[0.03]
                    border border-slate-200/50 dark:border-white/[0.06]
                    backdrop-blur-sm
                    hover:border-violet-300 dark:hover:border-violet-500/30
                    hover:shadow-glow-violet
                    transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${700 + i * 100}ms` }}
                >
                  <tech.icon
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${tech.color}`}
                  />
                  <span className="text-[11px] sm:text-xs font-medium text-slate-600 dark:text-slate-300">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 animate-fade-in delay-700">
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative inline-flex items-center gap-2
                  px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold text-white
                  bg-gradient-to-r from-violet-600 to-cyan-600
                  hover:from-violet-500 hover:to-cyan-500
                  shadow-glow-violet
                  hover:shadow-glow-violet-lg
                  transition-all duration-400 hover:scale-[1.02]
                  overflow-hidden w-full sm:w-auto justify-center"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2
                  px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold
                  text-slate-700 dark:text-slate-200
                  bg-white/60 dark:bg-white/[0.04]
                  border border-slate-200/60 dark:border-white/[0.08]
                  backdrop-blur-xl
                  hover:bg-white dark:hover:bg-white/[0.08]
                  hover:border-violet-300 dark:hover:border-violet-500/30
                  hover:text-violet-700 dark:hover:text-white
                  hover:shadow-glass-hover dark:hover:shadow-glass-dark-hover
                  transition-all duration-400 hover:scale-[1.02]
                  w-full sm:w-auto justify-center"
              >
                Contact Me
              </button>

              <div className="block md:hidden w-full">
                <ResumeButton isMobile />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 flex flex-col items-center gap-1.5 pb-6 animate-fade-in delay-1000">
          <ChevronsDown className="w-5 h-5 text-violet-400/60 dark:text-violet-400/40 animate-float" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-slate-400/60 dark:text-slate-500/60 font-medium">
            Scroll
          </span>
        </div>

        <ResumeButton />
      </section>
    </>
  );
}
