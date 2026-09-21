'use client';

import { Mail, Phone, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { useInView } from '@/hooks/use-in-view';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '90427 07001',
    href: 'tel:9042707001',
    gradient: 'from-violet-500 to-purple-600',
    glowColor: 'rgba(139,92,246,0.15)',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'siranjeevi26@outlook.com',
    href: 'mailto:siranjeevi26@outlook.com',
    gradient: 'from-cyan-500 to-blue-600',
    glowColor: 'rgba(6,182,212,0.15)',
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: 'github.com/siranjeevi26',
    href: 'https://github.com/Siranjeeviv26',
    gradient: 'from-slate-600 to-slate-800',
    glowColor: 'rgba(100,116,139,0.15)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/siranjeevi',
    href: 'https://www.linkedin.com/in/siranjeevi-v-737409421/',
    gradient: 'from-blue-500 to-indigo-600',
    glowColor: 'rgba(59,130,246,0.15)',
  },
];

export default function ContactSection() {
  const { ref: titleRef, inView: titleVisible } = useInView();
  const { ref: cardsRef, inView: cardsVisible } = useInView();

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 section-glow">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-64 rounded-full
          bg-violet-300/10 dark:bg-violet-700/8 blur-[80px]" />
        <div className="absolute top-1/3 right-[10%] w-[300px] h-[300px] rounded-full
          bg-cyan-400/5 dark:bg-cyan-500/6 blur-[100px] animate-orb" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Title */}
        <div ref={titleRef}>
          <div className={`text-center mb-4 reveal ${titleVisible ? 'visible' : ''}`}>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-violet-600 dark:text-violet-400 mb-3 block">
              Say Hello
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
              Get In <span className="animate-gradient">Touch</span>
            </h2>
          </div>
          <p
            className={`text-center text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-14 text-base
              reveal ${titleVisible ? 'visible' : ''}`}
            style={{ transitionDelay: titleVisible ? '150ms' : '0ms' }}
          >
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate. Let&apos;s connect.
          </p>
        </div>

        {/* Contact cards */}
        <div ref={cardsRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group relative reveal ${cardsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="glass-card rounded-2xl p-6 h-full glow-border
                group-hover:-translate-y-1.5 transition-all duration-400">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${contact.gradient}
                    shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="h-5 w-5 text-white" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 dark:text-slate-600
                    group-hover:text-violet-500 dark:group-hover:text-violet-400
                    transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-1.5 tracking-widest uppercase">
                  {contact.label}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-200 break-all leading-relaxed font-medium">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full
            bg-white/50 dark:bg-white/[0.03]
            border border-slate-200/50 dark:border-white/[0.06]
            backdrop-blur-sm">
            <Send className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400" />
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Open to full-time roles and freelance projects</span>
          </div>
          <p className="mt-6 text-slate-400 dark:text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Siranjeevi. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

      </div>
    </section>
  );
}
