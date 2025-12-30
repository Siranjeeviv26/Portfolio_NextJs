'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside the menu AND outside the menu button
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <span className="text-2xl font-bold text-teal-700">
            Siranjeevi
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-teal-700 hover:text-teal-900 font-medium transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="md:hidden text-teal-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Glassy Mobile Dropdown */}
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div
            className="
              flex flex-col space-y-4
              rounded-2xl p-5
              backdrop-blur-xl
              bg-gradient-to-br from-white/10 via-white/5 to-white/10
              border border-white/20
              shadow-[0_8px_32px_rgba(0,0,0,0.08)]
            "
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="
                  text-teal-800 font-medium
                  hover:text-teal-900
                  transition-colors duration-300
                "
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}