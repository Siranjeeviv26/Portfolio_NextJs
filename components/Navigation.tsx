"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = ["Home", "About", "Experience", "Projects", "Contact"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActive] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      )
        setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) sectionObserver.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      sectionObserver.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "top-3" : "top-0"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 rounded-2xl px-4 sm:px-6 py-3
          ${
            scrolled
              ? "max-w-xl md:max-w-2xl bg-white/80 frost:bg-teal-100/80 backdrop-blur-2xl border border-white/40 frost:border-teal-200/50 shadow-glass dark:bg-[#0f0f1f]/70 dark:border-white/[0.06] dark:shadow-glass-dark"
              : "max-w-7xl bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <span className="text-lg font-bold bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent tracking-tight mr-6 md:mr-8 shrink-0">
            <span className="md:hidden">S.</span>
            <span className="hidden md:inline">Siranjeevi</span>
          </span>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-3.5 py-2 text-[11px] font-medium tracking-wide uppercase transition-all duration-300 rounded-xl whitespace-nowrap
                    ${
                      isActive
                        ? "text-violet-600 dark:text-violet-400"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                    }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-violet-50 dark:bg-violet-500/10 rounded-xl border border-violet-200/50 dark:border-violet-500/20" />
                  )}
                  <span className="relative z-10">{item}</span>
                </button>
              );
            })}
          </div>

          {/* Theme + Mobile */}
          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle />
            <button
              ref={buttonRef}
              className="md:hidden text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors p-1.5 rounded-xl hover:bg-violet-50 dark:hover:bg-violet-500/10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
            menuOpen ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="flex flex-col space-y-1 rounded-2xl p-2
            bg-white/90 frost:bg-teal-50/90 backdrop-blur-2xl
            border border-white/50 frost:border-teal-200/50
            shadow-glass dark:bg-[#0f0f1f]/80 dark:border-white/[0.06] dark:shadow-glass-dark"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 text-left
                    ${
                      isActive
                        ? "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-200/60 dark:border-violet-500/20"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                    }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
