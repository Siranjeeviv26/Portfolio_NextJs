'use client';

import { Layout, Server, Database } from 'lucide-react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython, SiDotnet, SiPostman,
  SiMysql, SiMongodb,
} from 'react-icons/si';
import Image from 'next/image';
import { useInView } from '@/hooks/use-in-view';

const frontendSkills = [
  { name: 'HTML',        icon: SiHtml5,       color: 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-500/20' },
  { name: 'CSS',         icon: SiCss3,        color: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20' },
  { name: 'JavaScript',  icon: SiJavascript,  color: 'bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-500/20' },
  { name: 'ReactJS',     icon: SiReact,       color: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-500/20' },
];

const backendSkills = [
  { name: 'Node.js',    icon: SiNodedotjs, color: 'bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border-green-200 dark:border-green-500/20' },
  { name: 'Express.js', icon: SiExpress,   color: 'bg-slate-100 dark:bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-500/20' },
  { name: 'Python',     icon: SiPython,    color: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20' },
  { name: '.NET',       icon: SiDotnet,    color: 'bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-500/20' },
  { name: 'Postman',    icon: SiPostman,   color: 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-500/20' },
  { name: 'Hapi.js', image: '/assets/hapi.png', color: 'bg-slate-100 dark:bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-500/20' },
];

const databaseSkills = [
  { name: 'MySQL',      icon: SiMysql,   color: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20' },
  { name: 'MongoDB',    icon: SiMongodb, color: 'bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border-green-200 dark:border-green-500/20' },
  { name: 'SQL Server', image: '/assets/SQLServer.png', color: 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-500/20' },
];

type Skill = {
  name: string;
  icon?: React.ElementType;
  image?: string;
  color: string;
};

function SkillBadge({ skill, i }: { skill: Skill; i: number }) {
  return (
    <div
      className={`flex items-center gap-2 ${skill.color} border px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer`}
      style={{ transitionDelay: `${i * 40}ms` }}
    >
      {skill.icon ? (
        <skill.icon className="w-4 h-4 flex-shrink-0" />
      ) : (
        <Image src={skill.image!} alt={skill.name} width={16} height={16} className="object-contain flex-shrink-0" />
      )}
      <span>{skill.name}</span>
    </div>
  );
}

export default function AboutSection() {
  const { ref: titleRef,  inView: titleVisible  } = useInView();
  const { ref: descRef,   inView: descVisible   } = useInView();
  const { ref: frontRef,  inView: frontVisible  } = useInView();
  const { ref: backRef,   inView: backVisible   } = useInView();
  const { ref: dbRef,     inView: dbVisible     } = useInView();

  return (
    <section id="about" className="relative min-h-screen py-24 px-4 sm:px-6 section-glow">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div ref={titleRef}>
          <div className={`text-center mb-16 reveal ${titleVisible ? 'visible' : ''}`}>
            <span className="text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3 block">
              Who I Am
            </span>
            <h2 className="text-5xl font-bold text-slate-900 dark:text-slate-100">
              About <span className="animate-gradient">Me</span>
            </h2>
          </div>
        </div>

        {/* Description card */}
        <div ref={descRef}>
          <div className={`glass-card glass-card-hover rounded-2xl p-8 mb-10
            reveal ${descVisible ? 'visible' : ''}`}>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a{' '}
              <span className="text-slate-900 dark:text-slate-200 font-semibold">Full Stack Developer</span>{' '}
              who specializes in Node.js, React.js, .NET, and cloud platforms.
              I have experience building systems for warehouse management (WMS), human resources (HRMS),
              e-commerce, and hotels. My work includes creating robust backend APIs, integrating secure payment
              systems, and making applications faster and easier to use. I enjoy both frontend and backend
              development — from building clean, responsive interfaces with React to developing scalable servers
              with Node.js and Azure. I focus on writing{' '}
              <span className="text-violet-600 dark:text-violet-400 font-medium">clean, maintainable code</span>{' '}
              and staying up-to-date with best practices in modern software development.
            </p>
          </div>
        </div>

        {/* Frontend & Backend grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div ref={frontRef}>
            <div className={`glass-card rounded-2xl p-8 h-full
              hover:border-violet-300 dark:hover:border-violet-500/30
              hover:shadow-[0_0_40px_rgba(139,92,246,0.08)] dark:hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]
              transition-all duration-300
              reveal from-left ${frontVisible ? 'visible' : ''}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-violet-100 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20">
                  <Layout className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill, i) => <SkillBadge key={skill.name} skill={skill} i={i} />)}
              </div>
            </div>
          </div>

          <div ref={backRef}>
            <div className={`glass-card rounded-2xl p-8 h-full
              hover:border-cyan-300 dark:hover:border-cyan-500/30
              hover:shadow-[0_0_40px_rgba(6,182,212,0.08)] dark:hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]
              transition-all duration-300
              reveal from-right ${backVisible ? 'visible' : ''}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20">
                  <Server className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill, i) => <SkillBadge key={skill.name} skill={skill} i={i} />)}
              </div>
            </div>
          </div>
        </div>

        {/* Database */}
        <div ref={dbRef}>
          <div className={`glass-card rounded-2xl p-8
            hover:border-teal-300 dark:hover:border-teal-500/30
            hover:shadow-[0_0_40px_rgba(20,184,166,0.08)] dark:hover:shadow-[0_0_40px_rgba(20,184,166,0.1)]
            transition-all duration-300
            reveal ${dbVisible ? 'visible' : ''}`}>
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="p-2 rounded-xl bg-teal-100 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20">
                <Database className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Database</h3>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {databaseSkills.map((skill, i) => <SkillBadge key={skill.name} skill={skill} i={i} />)}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
