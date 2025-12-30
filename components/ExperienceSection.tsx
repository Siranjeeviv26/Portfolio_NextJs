'use client';

import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'Thiagarajar College - Madurai',
    year: 'May 2020',
  },
  {
    degree: 'M.Sc. in Computer Science',
    institution: 'Thiagarajar College - Madurai',
    year: 'May 2023',
  },
];

const workExperience = [
  {
    title: 'Junior Software Engineer',
    company: 'PROSPEROUSTECH',
    period: 'Sep 2025 - Dec 2025',
    description:
      'Developed and maintained scalable backend APIs, and collaborated on integrations with frontend modules.',
  },
  {
    title: 'Full Stack Developer',
    company: 'D-Media',
    period: 'Jul 2025 – Sep 2025',
    description:
      'Designed and implemented scalable backend APIs while enhancing frontend and backend modules to improve performance, maintainability, and user experience.',
  },
  {
    title: 'Backend Developer',
    company: 'FlexiDigit Technologies LLP',
    period: 'May 2024 – May 2025',
    description:
      'Developed and maintained scalable backend APIs and contributed to frontend modules.',
  },
  {
    title: 'Full Stack Developer (Intern)',
    company: 'WHY Global Services',
    period: 'Oct 2024 – Apr 2024',
    description:
      'Built full-stack modules and supported deployment tasks.',
  },
  {
    title: ' Research Intern',
    company: 'DRDO',
    period: 'Jan 2023 – Mar 2023',
    description:
      'Worked on secure backend processing for defense-grade systems and communication protocol research.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-teal-700 mb-16">
          Experience & Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="w-10 h-10 text-teal-600" />
              <h3 className="text-3xl font-bold text-teal-700">Education</h3>
            </div>

            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl"
                  style={{
                    animation: `slideInLeft 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <Calendar className="w-5 h-5 text-teal-600 mt-1" />
                    <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-teal-600 font-semibold mb-2">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="w-10 h-10 text-blue-600" />
              <h3 className="text-3xl font-bold text-blue-700">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {workExperience.map((work, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl"
                  style={{
                    animation: `slideInRight 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {work.period}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {work.title}
                  </h4>
                  <p className="text-blue-600 font-semibold mb-2">
                    {work.company}
                  </p>
                  <p className="text-gray-600">{work.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
