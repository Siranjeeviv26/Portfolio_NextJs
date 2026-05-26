'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGithub,
  SiNodedotjs, SiExpress, SiMongodb, SiVercel, SiTypescript,
} from 'react-icons/si';
import { useInView } from '@/hooks/use-in-view';

const techIcons: Record<string, JSX.Element> = {
  HTML:       <SiHtml5       className="w-3.5 h-3.5 text-orange-500" />,
  CSS:        <SiCss3        className="w-3.5 h-3.5 text-blue-500" />,
  JavaScript: <SiJavascript  className="w-3.5 h-3.5 text-yellow-500" />,
  React:      <SiReact       className="w-3.5 h-3.5 text-cyan-500" />,
  TailwindCSS:<SiTailwindcss className="w-3.5 h-3.5 text-teal-500" />,
  GitHub:     <SiGithub      className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />,
  NodeJs:     <SiNodedotjs   className="w-3.5 h-3.5 text-green-600" />,
  ExpressJs:  <SiExpress     className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />,
  MongoDB:    <SiMongodb     className="w-3.5 h-3.5 text-green-600" />,
  Vercel:     <SiVercel      className="w-3.5 h-3.5 text-slate-800 dark:text-slate-200" />,
  vercel:     <SiVercel      className="w-3.5 h-3.5 text-slate-800 dark:text-slate-200" />,
  TypeScript: <SiTypescript  className="w-3.5 h-3.5 text-blue-600" />,
  render: (
    <div className="w-3.5 h-3.5 flex items-center justify-center">
      <img src="/assets/render.png" alt="Render" className="w-3.5 h-3.5 object-contain" />
    </div>
  ),
};

const projects = [
  {
    title: 'Travel Website',
    description: 'A responsive travel booking website showcasing destinations and tour packages with smooth navigation and interactive UI. Built using HTML, CSS, and JavaScript, deployed via GitHub Pages.',
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub'],
    image: '/assets/Travel.png',
    live: 'https://siranjeeviv26.github.io/travel/',
  },
  {
    title: 'Gym Website',
    description: 'A modern fitness website designed to promote gym services, membership plans, and workout programs. Developed using React and Tailwind CSS with a clean, mobile-first UI.',
    tech: ['React', 'TailwindCSS', 'GitHub'],
    image: '/assets/Gym.png',
    live: 'https://siranjeeviv26.github.io/Matrix_gym/',
  },
  {
    title: 'Wanderlust Travel Blog',
    description: 'A Travel platform built with React, TypeScript, and Tailwind CSS. Features multi-page navigation, destination guides, booking interface, and responsive design.',
    tech: ['React', 'TailwindCSS', 'GitHub', 'Vercel', 'TypeScript'],
    image: '/assets/Home.png',
    live: 'https://wanderlust-swart.vercel.app/',
  },
  {
    title: 'Moments Notes/Photos',
    description: 'A full-stack web application for saving personal notes and photos, featuring secure authentication, CRUD operations, and responsive design. Built with React, Node.js, Express, and MongoDB.',
    tech: ['React', 'NodeJs', 'ExpressJs', 'MongoDB', 'TailwindCSS', 'Vercel', 'render'],
    image: '/assets/Moments.png',
    live: 'https://moments-pink.vercel.app',
  },
  {
    title: 'PowerZone-Gym management',
    description: 'PowerZone Gym Management System — A full-stack web application built with React 18, Node.js, Express, and MongoDB. Features a public marketing website, member self-service dashboard, trainer portal, and a comprehensive admin panel. Includes JWT authentication, Cloudinary image uploads, dynamic theming, real-time content editing, and role-based access control.',
    tech: ['React', 'TailwindCSS', 'vercel', 'NodeJs', 'ExpressJs', 'MongoDB', 'GitHub', 'render'],
    image: '/assets/powerzone.png',
    live: 'https://power-zone-one.vercel.app/register',
  },
  {
    title: 'QR Code Generator',
    description: 'A lightweight web application that generates QR codes instantly from user input. Built using React and Tailwind CSS with real-time rendering and deployed on Vercel.',
    tech: ['React', 'TailwindCSS', 'vercel'],
    image: '/assets/QR code.png',
    live: 'https://qr-generator-three-omega.vercel.app/',
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [animating, setAnimating] = useState(false);

  const { ref: sectionRef, inView: sectionVisible } = useInView();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navigate = useCallback((dir: 'left' | 'right') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        dir === 'right'
          ? (prev + 1) % projects.length
          : (prev - 1 + projects.length) % projects.length
      );
      setAnimating(false);
    }, 250);
  }, [animating]);

  const nextSlide = () => navigate('right');
  const prevSlide = () => navigate('left');

  const getVisibleProjects = () => {
    if (isMobile) return [projects[currentIndex]];
    return Array.from({ length: 3 }, (_, i) => projects[(currentIndex + i) % projects.length]);
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd,   setTouchEnd  ] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const handleTouchMove  = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd   = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance)  nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  const slideStyle = {
    transition: 'opacity 0.25s ease-out, transform 0.25s ease-out',
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === 'right' ? '-20px' : '20px'})`
      : 'translateX(0)',
  };

  const TechBadge = ({ tech }: { tech: string }) => (
    <span className="flex items-center gap-1
      bg-slate-100 dark:bg-white/[0.06]
      border border-slate-200 dark:border-white/[0.08]
      text-slate-600 dark:text-slate-300
      px-2.5 py-1 rounded-full text-xs font-medium">
      {techIcons[tech]}
      <span>{tech}</span>
    </span>
  );

  return (
    <section id="projects" className="relative min-h-screen py-24 px-4 md:px-6 section-glow">
      <div className="max-w-7xl mx-auto">

        <div ref={sectionRef}>
          <div className={`text-center mb-14 reveal ${sectionVisible ? 'visible' : ''}`}>
            <span className="text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3 block">
              What I&apos;ve Built
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
              Featured <span className="animate-gradient">Projects</span>
            </h2>
          </div>
        </div>

        <div className="relative">
          {isMobile ? (
            <div
              className="w-full"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={slideStyle}
            >
              <a
                href={projects[currentIndex].live}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card rounded-2xl overflow-hidden
                  hover:shadow-[0_0_40px_rgba(139,92,246,0.12)] transition-all duration-300 mx-auto max-w-md"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center gap-2 text-white text-sm font-semibold
                      bg-violet-600/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <ExternalLink className="w-4 h-4" /> Visit Live Project
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-5 leading-relaxed">
                    {projects[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentIndex].tech.map((tech) => <TechBadge key={tech} tech={tech} />)}
                  </div>
                </div>
              </a>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-5 mb-6 items-stretch" style={slideStyle}>
              {getVisibleProjects().map((project, index) => (
                <a
                  key={`${currentIndex}-${index}`}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card rounded-2xl overflow-hidden flex flex-col
                    hover:shadow-[0_0_50px_rgba(139,92,246,0.12)] dark:hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]
                    hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Fixed-height image */}
                  <div className="relative h-52 flex-shrink-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="flex items-center gap-2 text-white text-sm font-semibold
                        bg-violet-600/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <ExternalLink className="w-4 h-4" /> Live Project
                      </span>
                    </div>
                  </div>
                  {/* Content fills remaining height so tech badges always align at the bottom */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{project.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech) => <TechBadge key={tech} tech={tech} />)}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Navigation controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              disabled={animating}
              className="p-3 rounded-full glass-card
                text-slate-600 dark:text-slate-400
                hover:text-violet-600 dark:hover:text-violet-400
                hover:border-violet-300 dark:hover:border-violet-500/30
                hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]
                transition-all duration-300 hover:scale-110 disabled:opacity-40"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (animating) return;
                    setDirection(index > currentIndex ? 'right' : 'left');
                    setAnimating(true);
                    setTimeout(() => { setCurrentIndex(index); setAnimating(false); }, 250);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-violet-500 to-cyan-500 w-7'
                      : 'bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40 w-2.5'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={animating}
              className="p-3 rounded-full glass-card
                text-slate-600 dark:text-slate-400
                hover:text-violet-600 dark:hover:text-violet-400
                hover:border-violet-300 dark:hover:border-violet-500/30
                hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]
                transition-all duration-300 hover:scale-110 disabled:opacity-40"
              aria-label="Next projects"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {isMobile && (
            <p className="text-center mt-5 text-slate-400 dark:text-slate-500 text-xs tracking-wide">
              Swipe left/right or use buttons to navigate
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
