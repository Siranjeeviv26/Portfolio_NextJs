'use client';

import { Layout, Server, Database } from 'lucide-react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDotnet,
  SiPostman,
  SiMysql,
  SiMongodb,
  SiAngular
} from 'react-icons/si';
import Image from 'next/image';


/* ================= FRONTEND SKILLS ================= */
const frontendSkills = [
  { name: 'HTML', icon: SiHtml5, color: 'bg-orange-100 text-orange-600' },
  { name: 'CSS', icon: SiCss3, color: 'bg-blue-100 text-blue-600' },
  { name: 'JavaScript', icon: SiJavascript, color: 'bg-yellow-100 text-yellow-600' },
  { name: 'ReactJS', icon: SiReact, color: 'bg-cyan-100 text-cyan-600' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'bg-teal-100 text-teal-600' },
  // { name: 'Next.js', icon: SiNextdotjs, color: 'bg-gray-100 text-gray-600' },
  // { name: 'Angular', icon: SiAngular, color: 'bg-red-100 text-red-600' },
];

/* ================= BACKEND SKILLS ================= */
const backendSkills = [
  { name: 'Node.js', icon: SiNodedotjs, color: 'bg-green-100 text-green-600' },
  { name: 'Express.js', icon: SiExpress, color: 'bg-gray-100 text-gray-600' },
  { name: 'Python', icon: SiPython, color: 'bg-blue-100 text-blue-600' },
  { name: '.NET', icon: SiDotnet, color: 'bg-purple-100 text-purple-600' },
  { name: 'Postman', icon: SiPostman, color: 'bg-orange-100 text-orange-600' },
  {
    name: 'Hapi.js',
    image: '/assets/hapi.png',
    color: 'bg-orange-100 text-orange-600',
  },
];

/* ================= DATABASE SKILLS ================= */
const databaseSkills = [
  { name: 'MySQL', icon: SiMysql, color: 'bg-blue-100 text-blue-600' },
  { name: 'MongoDB', icon: SiMongodb, color: 'bg-green-100 text-green-600' },
  {
    name: 'SQL Server',
    image: '/assets/SQLServer.png',
    color: 'bg-white text-red-600',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center text-teal-700 mb-16">
          About Me
        </h2>

        {/* Description */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12 transform hover:scale-[1.02] transition-all duration-300">
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a Full Stack Developer who specializes in Node.js, React.js, .NET, and cloud platforms. I have experience building systems for warehouse management (WMS), human resources (HRMS), e-commerce, and hotels.
            My work includes creating strong backend APIs, adding secure payment systems, and making applications faster and easier to use.
            I enjoy both frontend and backend development—from building clean, responsive interfaces with React to developing scalable servers with Node.js and Azure. I focus on writing clean, maintainable code and staying up-to-date with best practices.
            Right now, I am concentrating on improving backend performance, integrating cloud services, and developing full-stack applications to build solutions that work well today and can grow in the future.
          </p>
        </div>

        {/* Frontend & Backend */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Frontend */}
          <div className="bg-teal-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <Layout className="w-8 h-8 text-teal-600" />
              <h3 className="text-2xl font-bold text-teal-700">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center space-x-2 ${skill.color} px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110 cursor-pointer`}
                >
                  <skill.icon className="w-5 h-5" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <Server className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-700">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center space-x-2 ${skill.color} px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110 cursor-pointer`}
                >
                  {skill.icon ? (
                    <skill.icon className="w-5 h-5" />
                  ) : (
                    <Image
                      src={skill.image!}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Database */}
        <div className="bg-cyan-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center space-x-3 mb-6 justify-center">
            <Database className="w-8 h-8 text-cyan-600" />
            <h3 className="text-2xl font-bold text-cyan-700">Database</h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {databaseSkills.map((skill) => (
              <div
                key={skill.name}
                className={`flex items-center space-x-2 ${skill.color} px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110 cursor-pointer`}
              >
                {skill.icon ? (
                    <skill.icon className="w-5 h-5" />
                  ) : (
                    <Image
                      src={skill.image!}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  )}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}