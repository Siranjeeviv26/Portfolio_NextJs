"use client";

import { Layout, Server, Database, Sparkles } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDotnet,
  SiPostman,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";

const frontendSkills = [
  {
    name: "HTML",
    icon: SiHtml5,
    color:
      "bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200/60 dark:border-orange-500/20",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color:
      "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200/60 dark:border-blue-500/20",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color:
      "bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-200/60 dark:border-yellow-500/20",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color:
      "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200/60 dark:border-blue-500/20",
  },
  {
    name: "ReactJS",
    icon: SiReact,
    color:
      "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200/60 dark:border-cyan-500/20",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color:
      "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200/60 dark:border-slate-500/20",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color:
      "bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-200/60 dark:border-teal-500/20",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color:
      "bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border-green-200/60 dark:border-green-500/20",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color:
      "bg-slate-100 dark:bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-200/60 dark:border-slate-500/20",
  },
  {
    name: "Python",
    icon: SiPython,
    color:
      "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200/60 dark:border-blue-500/20",
  },
  {
    name: ".NET",
    icon: SiDotnet,
    color:
      "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-200/60 dark:border-purple-500/20",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color:
      "bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200/60 dark:border-orange-500/20",
  },
  {
    name: "Hapi.js",
    image: "/assets/hapi.png",
    color:
      "bg-slate-100 dark:bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-200/60 dark:border-slate-500/20",
  },
];

const databaseSkills = [
  {
    name: "MySQL",
    icon: SiMysql,
    color:
      "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200/60 dark:border-blue-500/20",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color:
      "bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border-green-200/60 dark:border-green-500/20",
  },
  {
    name: "SQL Server",
    image: "/assets/SQLServer.png",
    color:
      "bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-200/60 dark:border-red-500/20",
  },
];

const CursorIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path
      d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.82c.45 0 .67-.54.35-.85L6.35 2.85a.5.5 0 0 0-.85.36Z"
      fill="currentColor"
    />
  </svg>
);

const ClaudeIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3Zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22Z"
      fill="currentColor"
    />
  </svg>
);

const OpenCodeIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path
      d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z"
      fill="currentColor"
    />
  </svg>
);

const aiSkills = [
  {
    name: "Claude AI",
    icon: ClaudeIcon,
    color:
      "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200/60 dark:border-amber-500/20",
  },
  {
    name: "OpenCode",
    icon: OpenCodeIcon,
    color:
      "bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-200/60 dark:border-violet-500/20",
  },
  {
    name: "Cursor AI",
    icon: CursorIcon,
    color:
      "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-200/60 dark:border-cyan-500/20",
  },
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
      className={`flex items-center gap-2 ${skill.color} border px-3.5 py-1.5 rounded-xl text-xs font-semibold
        transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default`}
      style={{ transitionDelay: `${i * 40}ms` }}
    >
      {skill.icon ? (
        <skill.icon className="w-3.5 h-3.5 flex-shrink-0" />
      ) : (
        <Image
          src={skill.image!}
          alt={skill.name}
          width={14}
          height={14}
          className="object-contain flex-shrink-0"
        />
      )}
      <span>{skill.name}</span>
    </div>
  );
}

export default function AboutSection() {
  const { ref: titleRef, inView: titleVisible } = useInView();
  const { ref: descRef, inView: descVisible } = useInView();
  const { ref: frontRef, inView: frontVisible } = useInView();
  const { ref: backRef, inView: backVisible } = useInView();
  const { ref: dbRef, inView: dbVisible } = useInView();
  const { ref: aiRef, inView: aiVisible } = useInView();

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-4 sm:px-6 section-glow"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 right-[10%] w-[400px] h-[400px] rounded-full
          bg-violet-400/5 dark:bg-violet-500/8 blur-[120px] animate-orb"
        />
        <div
          className="absolute bottom-1/4 left-[10%] w-[350px] h-[350px] rounded-full
          bg-cyan-400/4 dark:bg-cyan-500/6 blur-[100px] animate-orb"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <div ref={titleRef}>
          <div
            className={`text-center mb-16 reveal ${titleVisible ? "visible" : ""}`}
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-violet-600 dark:text-violet-400 mb-3 block">
              Who I Am
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              About <span className="animate-gradient">Me</span>
            </h2>
          </div>
        </div>

        {/* Description card */}
        <div ref={descRef}>
          <div
            className={`glass-card rounded-2xl p-8 mb-10 glow-border relative overflow-hidden
            reveal ${descVisible ? "visible" : ""}`}
          >
            {/* Accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-violet-500 via-amber-500 to-cyan-500" />
            {/* Quote icon */}
            <div className="absolute top-6 right-8 text-violet-200 dark:text-violet-800/30">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <div className="relative">
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Most of my work has been about{" "}
                <span className="text-slate-900 dark:text-white font-semibold">solving real business problems</span>.
                I&apos;ve built a WhatsApp campaign CRM that keeps messages flowing
                reliably, connected Shopify and other platforms through{" "}
                <span className="text-violet-600 dark:text-violet-400 font-semibold">webhooks</span>{" "}
                so teams didn&apos;t have to process orders by hand, and created
                warehouse and inventory systems that people use every day. I also
                work with{" "}
                <span className="text-amber-600 dark:text-amber-400 font-semibold">AI tools like Claude, Cursor, and OpenCode</span>{" "}
                to move faster on scaffolding, debugging, and documentation, but I review
                every line myself, because AI speeds me up and the quality is
                still my responsibility. Seeing something I built save someone
                hours of manual work is what I enjoy most about this job.
              </p>
            </div>
          </div>
        </div>

        {/* Skill cards — clean grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Frontend — top gradient bar */}
          <div ref={frontRef} className="md:col-span-3">
            <div
              className={`relative glass-card rounded-2xl overflow-hidden glow-border
              reveal ${frontVisible ? "visible" : ""}`}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500" />
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-violet-400/8 blur-3xl" />
              <div className="p-7 relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-violet-100 dark:bg-violet-500/10 border border-violet-200/60 dark:border-violet-500/20">
                    <Layout className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Frontend
                    </h3>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500">
                      UI &amp; Client-side
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {frontendSkills.map((skill, i) => (
                    <SkillBadge key={skill.name} skill={skill} i={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Backend — left border accent */}
          <div ref={backRef}>
            <div
              className={`relative glass-card rounded-2xl overflow-hidden glow-border h-full
              border-l-[3px] border-l-cyan-400 dark:border-l-cyan-500
              reveal from-left ${backVisible ? "visible" : ""}`}
            >
              <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-cyan-400/8 blur-3xl" />
              <div className="p-6 relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200/60 dark:border-cyan-500/20">
                    <Server className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Backend
                    </h3>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500">
                      Server &amp; API
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, i) => (
                    <SkillBadge key={skill.name} skill={skill} i={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Database — bottom accent */}
          <div ref={dbRef}>
            <div
              className={`relative glass-card rounded-2xl overflow-hidden glow-border h-full
              reveal ${dbVisible ? "visible" : ""}`}
            >
              <div className="absolute -top-12 -left-12 w-28 h-28 rounded-full bg-teal-400/8 blur-3xl" />
              <div className="p-6 relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-500/10 border border-teal-200/60 dark:border-teal-500/20">
                    <Database className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Database
                    </h3>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500">
                      Data Storage
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {databaseSkills.map((skill, i) => (
                    <SkillBadge key={skill.name} skill={skill} i={i} />
                  ))}
                </div>
              </div>
              <div className="h-[2px] bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500" />
            </div>
          </div>

          {/* AI Tools — amber accent */}
          <div ref={aiRef}>
            <div
              className={`relative glass-card rounded-2xl overflow-hidden glow-border h-full
              reveal ${aiVisible ? "visible" : ""}`}
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-amber-400/10 blur-3xl" />
              <div className="p-6 relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-500/10 border border-amber-200/60 dark:border-amber-500/20">
                    <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      AI Tools
                    </h3>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500">
                      Intelligence
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aiSkills.map((skill, i) => (
                    <SkillBadge key={skill.name} skill={skill} i={i} />
                  ))}
                </div>
              </div>
              <div className="h-[2px] bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
