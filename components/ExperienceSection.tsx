'use client';

import { GraduationCap, Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const education = [
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'Thiagarajar College',
    location: 'Madurai',
    year: 'May 2020',
  },
  {
    degree: 'M.Sc. in Computer Science',
    institution: 'Thiagarajar College',
    location: 'Madurai',
    year: 'May 2023',
  },
];

const workExperience = [
  {
    title: 'Software Developer',
    company: 'LITHI INFOTECH',
    period: 'June 2025 – July 2026',
    description: 'Developed and maintained scalable backend APIs, and collaborated on integrations with frontend modules.',
  },
  {
    title: 'Backend Developer',
    company: 'FlexiDigit Technologies LLP',
    period: 'May 2024 – May 2025',
    description: 'Developed and maintained scalable backend APIs and contributed to frontend modules.',
  },
  {
    title: 'Full Stack Developer (Intern)',
    company: 'WHY Global Services',
    period: 'Oct 2023 – Apr 2024',
    description: 'Built full-stack modules and supported deployment tasks.',
  },
  {
    title: 'Research Intern',
    company: 'DRDO',
    period: 'Jan 2023 – Mar 2023',
    description: 'Worked on secure backend processing for defense-grade systems and communication protocol research.',
  },
];

export default function ExperienceSection() {
  const { ref: titleRef, inView: titleVisible } = useInView();
  const { ref: eduRef,   inView: eduVisible   } = useInView();
  const { ref: workRef,  inView: workVisible  } = useInView();

  return (
    <section id="experience" className="relative min-h-screen py-24 px-4 sm:px-6 section-glow">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-[5%] w-[400px] h-[400px] rounded-full
          bg-cyan-400/5 dark:bg-cyan-500/8 blur-[120px] animate-orb" />
        <div className="absolute bottom-1/3 right-[5%] w-[350px] h-[350px] rounded-full
          bg-violet-400/4 dark:bg-violet-500/6 blur-[100px] animate-orb"
          style={{ animationDelay: '5s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Title */}
        <div ref={titleRef}>
          <div className={`text-center mb-16 reveal ${titleVisible ? 'visible' : ''}`}>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-cyan-600 dark:text-cyan-400 mb-3 block">
              My Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Experience &amp; <span className="animate-gradient">Education</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Education column */}
          <div ref={eduRef} className="space-y-4">
            <div className={`flex items-center gap-3 mb-8 reveal from-left ${eduVisible ? 'visible' : ''}`}>
              <div className="p-2.5 rounded-xl bg-violet-100 dark:bg-violet-500/10 border border-violet-200/60 dark:border-violet-500/20">
                <GraduationCap className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-4 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`group relative glass-card rounded-2xl overflow-hidden glow-border
                    transition-all duration-300
                    reveal from-left ${eduVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  {/* Left accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-violet-500 to-violet-400" />
                  <div className="p-6 pl-7">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400" />
                      <span className="text-[11px] font-semibold tracking-wide
                        text-violet-700 dark:text-violet-400
                        bg-violet-50 dark:bg-violet-500/10
                        border border-violet-200/60 dark:border-violet-500/20
                        px-3 py-1 rounded-full uppercase">
                        {edu.year}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h4>
                    <p className="text-violet-600 dark:text-violet-300 font-semibold text-sm mb-1.5">{edu.institution}</p>
                    <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience column */}
          <div ref={workRef} className="space-y-4">
            <div className={`flex items-center gap-3 mb-8 reveal from-right ${workVisible ? 'visible' : ''}`}>
              <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200/60 dark:border-cyan-500/20">
                <Briefcase className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Work Experience</h3>
            </div>

            <div className="space-y-4 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
              {workExperience.map((work, index) => (
                <div
                  key={index}
                  className={`group relative glass-card rounded-2xl overflow-hidden glow-border
                    transition-all duration-300
                    reveal from-right ${workVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  {/* Left accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-500 to-cyan-400" />
                  <div className="p-6 pl-7">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                        <span className="text-[11px] font-semibold tracking-wide
                          text-cyan-700 dark:text-cyan-400
                          bg-cyan-50 dark:bg-cyan-500/10
                          border border-cyan-200/60 dark:border-cyan-500/20
                          px-3 py-1 rounded-full uppercase">
                          {work.period}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">{work.title}</h4>
                    <p className="text-cyan-600 dark:text-cyan-300 font-semibold text-sm mb-2">{work.company}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{work.description}</p>
                  </div>
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
