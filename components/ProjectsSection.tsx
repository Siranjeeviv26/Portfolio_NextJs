"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Code2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiTypescript,
  SiCloudinary,
  SiRazorpay,
} from "react-icons/si";
import { useInView } from "@/hooks/use-in-view";

const techIcons: Record<string, JSX.Element> = {
  HTML: <SiHtml5 className="w-3.5 h-3.5 text-orange-500" />,
  CSS: <SiCss3 className="w-3.5 h-3.5 text-blue-500" />,
  JavaScript: <SiJavascript className="w-3.5 h-3.5 text-yellow-500" />,
  React: <SiReact className="w-3.5 h-3.5 text-cyan-500" />,
  TailwindCSS: <SiTailwindcss className="w-3.5 h-3.5 text-teal-500" />,
  GitHub: (
    <SiGithub className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
  ),
  NodeJs: <SiNodedotjs className="w-3.5 h-3.5 text-green-600" />,
  ExpressJs: (
    <SiExpress className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
  ),
  MongoDB: <SiMongodb className="w-3.5 h-3.5 text-green-600" />,
  Vercel: (
    <SiVercel className="w-3.5 h-3.5 text-slate-800 dark:text-slate-200" />
  ),
  vercel: (
    <SiVercel className="w-3.5 h-3.5 text-slate-800 dark:text-slate-200" />
  ),
  TypeScript: <SiTypescript className="w-3.5 h-3.5 text-blue-600" />,
  render: (
    <div className="w-3.5 h-3.5 flex items-center justify-center">
      <img
        src="/assets/render.png"
        alt="Render"
        className="w-3.5 h-3.5 object-contain"
      />
    </div>
  ),
  Cloudinary: <SiCloudinary className="w-3.5 h-3.5 text-blue-500" />,
  Razorpay: <SiRazorpay className="w-3.5 h-3.5 text-blue-700" />,
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "PowerZone Gym Management",
    description:
      "A full-stack gym management platform with a public website, member dashboard, trainer portal, and admin panel — built to handle memberships, scheduling, and day-to-day gym operations in one system",
    tech: [
      "React",
      "Framer Motion",
      "React Context",
      "Redux Toolkit",
      "React Router",
      "TailwindCSS",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "GitHub",
      "Cloudinary",
      "Razorpay",
      "render",
      "vercel",
    ],
    image: "/assets/powerzone.png",
    live: "https://power-zone-one.vercel.app/register",
  },
  {
    title: "ClientHub",
    description:
      "Client management dashboard for tracking projects, invoices, and communications.",
    tech: [
      "React",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "React Context",
      "TailwindCSS",
      "NestJS",
      "ExpressJs",
      "TypeScript",
      "MongoDB",
      "Redis",
      "JWT Access",
      "GitHub",
      "Cloudinary",
      "Razorpay",
      "render",
      "vercel",
    ],
    image: "/assets/ClientHub.png",
    live: "https://clienthub.vercel.app",
  },
  {
    title: "StockPilot",
    description:
      "A full-stack inventory management web application with real-time stock tracking, multi-warehouse support, user/role management.",
    tech: [
      "React",
      "React Query",
      "React Hook Form",
      "Zod",
      "React Router",
      "TailwindCSS",
      "NodeJS",
      "ExpressJs",
      "TypeScript",
      "MongoDB",
      "JWT Access",
      "GitHub",
      "Cloudinary",
      "render",
      "vercel",
    ],
    image: "/assets/StockPilot.png",
    live: "https://stock-pilot-nu-olive.vercel.app/login",
  },
  {
    title: "Wanderlust Travel Blog",
    description:
      "A travel platform with multi-page navigation, destination guides, booking interface, and responsive design.",
    tech: ["React", "TailwindCSS", "GitHub", "Vercel", "TypeScript"],
    image: "/assets/Home.png",
    live: "https://wanderlust-swart.vercel.app/",
  },
  {
    title: "Moments Notes/Photos",
    description:
      "A full-stack web application for saving personal notes and photos with secure authentication and CRUD operations.",
    tech: [
      "React",
      "NodeJS",
      "ExpressJs",
      "MongoDB",
      "TailwindCSS",
      "Vercel",
      "Cloudinary",
      "render",
    ],
    image: "/assets/Moments.png",
    live: "https://moments-pink.vercel.app",
  },
  {
    title: "Travel Website",
    description:
      "A responsive travel booking website showcasing destinations and tour packages with smooth navigation and interactive UI.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub"],
    image: "/assets/Travel.png",
    live: "https://siranjeeviv26.github.io/travel/",
  },
  {
    title: "Gym Website",
    description:
      "A modern fitness website designed to promote gym services, membership plans, and workout programs with a mobile-first UI.",
    tech: ["React", "TailwindCSS", "GitHub"],
    image: "/assets/Gym.png",
    live: "https://siranjeeviv26.github.io/Matrix_gym/",
  },

  {
    title: "QR Code Generator",
    description:
      "A lightweight web application that generates QR codes instantly from user input with real-time rendering.",
    tech: ["React", "TailwindCSS", "vercel"],
    image: "/assets/QR code.png",
    live: "https://qr-generator-three-omega.vercel.app/",
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { ref: sectionRef, inView: sectionVisible } = useInView();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navigate = useCallback(
    (dir: "left" | "right") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          dir === "right"
            ? (prev + 1) % projects.length
            : (prev - 1 + projects.length) % projects.length,
        );
        setAnimating(false);
      }, 350);
    },
    [animating],
  );

  const getVisibleProjects = () => {
    if (isMobile) return [projects[currentIndex]];
    return Array.from(
      { length: 3 },
      (_, i) => projects[(currentIndex + i) % projects.length],
    );
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) navigate("right");
    if (distance < -minSwipeDistance) navigate("left");
  };

  const slideStyle = {
    transition:
      "opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === "right" ? "-20px" : "20px"}) scale(0.98)`
      : "translateX(0) scale(1)",
  };

  const TechBadge = ({ tech }: { tech: string }) => (
    <span
      className="inline-flex items-center gap-1.5
      bg-white/50 dark:bg-white/[0.04]
      border border-slate-200/50 dark:border-white/[0.06]
      text-slate-600 dark:text-slate-300
      px-2.5 py-1 rounded-lg text-[11px] font-medium
      backdrop-blur-sm"
    >
      {techIcons[tech]}
      <span>{tech}</span>
    </span>
  );

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="group h-full">
      <div
        className="relative flex h-full flex-col overflow-hidden
          glass-card rounded-3xl
          transition-all duration-400
          group-hover:-translate-y-1.5
          group-hover:shadow-glass-hover dark:group-hover:shadow-glass-dark-hover
          glow-border"
      >
        <div className="relative w-full h-52 flex-shrink-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col items-center text-center px-5 pt-4 pb-5">
          <h3
            className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white
              transition-colors duration-300 group-hover:text-violet-700 dark:group-hover:text-violet-300"
          >
            {project.title}
          </h3>

          <div className="mt-auto w-full flex items-center gap-3 pt-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2
                rounded-full text-white text-sm font-bold py-3
                bg-gradient-to-br from-violet-500 to-violet-600
                shadow-lg shadow-violet-500/30
                hover:shadow-violet-500/50 hover:-translate-y-0.5
                active:scale-95 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="flex-1 inline-flex items-center justify-center gap-2
                rounded-full text-sm font-bold py-3
                bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-slate-200
                hover:bg-slate-300 dark:hover:bg-white/20 hover:-translate-y-0.5
                active:scale-95 transition-all duration-300"
            >
              <Code2 className="w-4 h-4" /> Tech Used
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-4 md:px-6 section-glow"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-[10%] w-[400px] h-[400px] rounded-full
          bg-violet-400/5 dark:bg-violet-500/8 blur-[120px] animate-orb"
        />
        <div
          className="absolute bottom-1/4 right-[10%] w-[350px] h-[350px] rounded-full
          bg-cyan-400/4 dark:bg-cyan-500/6 blur-[100px] animate-orb"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <div ref={sectionRef}>
          <div
            className={`text-center mb-14 reveal ${sectionVisible ? "visible" : ""}`}
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-violet-600 dark:text-violet-400 mb-3 block">
              What I&apos;ve Built
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
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
              <div className="mx-auto max-w-md">
                <ProjectCard
                  key={`mobile-${currentIndex}`}
                  project={projects[currentIndex]}
                />
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 mb-6" style={slideStyle}>
              {getVisibleProjects().map((project, index) => (
                <ProjectCard
                  key={`${currentIndex}-${index}`}
                  project={project}
                />
              ))}
            </div>
          )}

          {/* Navigation controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => navigate("left")}
              disabled={animating}
              className="p-3 rounded-full glass-card
                text-slate-600 dark:text-slate-400
                hover:text-violet-600 dark:hover:text-violet-400
                hover:shadow-glow-violet
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
                    if (animating || index === currentIndex) return;
                    setDirection(index > currentIndex ? "right" : "left");
                    setAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setAnimating(false);
                    }, 350);
                  }}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-violet-500 to-cyan-500 w-8"
                      : "bg-slate-300 dark:bg-white/15 hover:bg-slate-400 dark:hover:bg-white/30 w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate("right")}
              disabled={animating}
              className="p-3 rounded-full glass-card
                text-slate-600 dark:text-slate-400
                hover:text-violet-600 dark:hover:text-violet-400
                hover:shadow-glow-violet
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

      {/* Tech Used popup */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      >
        <DialogContent
          className="w-[calc(100%-1.5rem)] max-w-md gap-0 p-0
            max-h-[85dvh] overflow-y-auto overscroll-contain
            rounded-[24px] sm:rounded-[28px]
            border-slate-200/80 dark:border-white/10
            bg-white dark:bg-slate-900 shadow-2xl"
        >
          {selectedProject && (
            <div className="flex flex-col items-center px-5 sm:px-7 pt-9 pb-7 text-center">
              <DialogTitle className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {selectedProject.title}
              </DialogTitle>

              <DialogDescription className="mt-3 text-[13px] sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {selectedProject.description}
              </DialogDescription>

              <div className="mt-6 w-full pt-5 border-t border-slate-100 dark:border-white/[0.06]">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400 mb-3">
                  Tech Used
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {selectedProject.tech.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
