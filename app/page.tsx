"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ResumeButton from "@/components/ResumeButton";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <main
      className={`relative min-h-screen bg-[#f5f4ff] frost:bg-transparent
        transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Ambient gradient orbs + grid */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.10) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Light mode orbs — soft pastel */}
        <div className="dark:hidden absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-300/20 blur-[120px] animate-orb" />
        <div
          className="dark:hidden absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-300/15 blur-[120px] animate-orb"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="dark:hidden absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-300/15 blur-[100px] animate-orb"
          style={{ animationDelay: "8s" }}
        />
        {/* Dark mode orbs — vivid */}
        <div className="hidden dark:block absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-700/12 blur-[120px] animate-orb" />
        <div
          className="hidden dark:block absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-600/8 blur-[120px] animate-orb"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="hidden dark:block absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[100px] animate-orb"
          style={{ animationDelay: "8s" }}
        />
      </div>

      <div className="relative z-10">
        <Navigation />
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResumeButton />
        <ContactSection />
      </div>
    </main>
  );
}
