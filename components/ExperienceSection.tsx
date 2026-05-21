'use client';

import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
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
    title: 'Junior Software Engineer',
    company: 'PROSPEROUSTECH',
    period: 'Sep 2025 – Dec 2025',
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
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div ref={titleRef}>
          <div className={`text-center mb-16 reveal ${titleVisible ? 'visible' : ''}`}>
            <span className="text-sm font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 mb-3 block">
              My Journey
            </span>
            <h2 className="text-5xl font-bold text-slate-900 dark:text-slate-100">
              Experience &amp; <span className="animate-gradient">Education</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Education column */}
          <div ref={eduRef} className="space-y-4">
            <div className={`flex items-center gap-3 mb-8 reveal from-left ${eduVisible ? 'visible' : ''}`}>
              <div className="p-2.5 rounded-xl bg-violet-100 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20">
                <GraduationCap className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Education</h3>
            </div>

            <div className="space-y-4 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`glass-card rounded-2xl p-6
                    border-l-4 border-l-violet-400 dark:border-l-violet-500
                    hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)] dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]
                    hover:-translate-y-1
                    transition-all duration-300
                    reveal from-left ${eduVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-violet-500 dark:text-violet-400" />
                    <span className="text-xs font-semibold
                      text-violet-700 dark:text-violet-400
                      bg-violet-100 dark:bg-violet-500/10
                      border border-violet-200 dark:border-violet-500/20
                      px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">{edu.degree}</h4>
                  <p className="text-violet-600 dark:text-violet-300 font-semibold text-sm mb-1">{edu.institution}</p>
                  <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience column */}
          <div ref={workRef} className="space-y-4">
            <div className={`flex items-center gap-3 mb-8 reveal from-right ${workVisible ? 'visible' : ''}`}>
              <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20">
                <Briefcase className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Work Experience</h3>
            </div>

            <div className="space-y-4 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
              {workExperience.map((work, index) => (
                <div
                  key={index}
                  className={`glass-card rounded-2xl p-6
                    border-l-4 border-l-cyan-400 dark:border-l-cyan-500
                    hover:shadow-[0_8px_32px_rgba(6,182,212,0.1)] dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]
                    hover:-translate-y-1
                    transition-all duration-300
                    reveal from-right ${workVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                    <span className="text-xs font-semibold
                      text-cyan-700 dark:text-cyan-400
                      bg-cyan-100 dark:bg-cyan-500/10
                      border border-cyan-200 dark:border-cyan-500/20
                      px-3 py-1 rounded-full">
                      {work.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">{work.title}</h4>
                  <p className="text-cyan-600 dark:text-cyan-300 font-semibold text-sm mb-2">{work.company}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{work.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
