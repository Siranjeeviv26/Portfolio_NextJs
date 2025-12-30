'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ResumeButton from '@/components/ResumeButton';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#e6fffa] via-[#c7f9e9] to-[#a7f3d0]">
      <Navigation />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResumeButton />
      <ContactSection />
    </main>
  );
}
