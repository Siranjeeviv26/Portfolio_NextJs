'use client';

import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { useInView } from '@/hooks/use-in-view';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '90427 07001',
    href: 'tel:9042707001',
    gradient: 'from-violet-500 to-purple-600',
    lightGlow: 'rgba(139,92,246,0.15)',
    darkGlow: 'rgba(139,92,246,0.3)',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'siranjeevi26@outlook.com',
    href: 'mailto:siranjeevi26@outlook.com',
    gradient: 'from-cyan-500 to-blue-600',
    lightGlow: 'rgba(6,182,212,0.15)',
    darkGlow: 'rgba(6,182,212,0.3)',
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: 'github.com/siranjeevi26',
    href: 'https://github.com/Siranjeeviv26',
    gradient: 'from-slate-600 to-slate-800',
    lightGlow: 'rgba(100,116,139,0.15)',
    darkGlow: 'rgba(148,163,184,0.2)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/siranjeevi',
    href: 'https://www.linkedin.com/in/siranjeevi-v-737409421/',
    gradient: 'from-blue-500 to-indigo-600',
    lightGlow: 'rgba(59,130,246,0.15)',
    darkGlow: 'rgba(59,130,246,0.3)',
  },
];

export default function ContactSection() {
  const { ref: titleRef, inView: titleVisible } = useInView();
  const { ref: cardsRef, inView: cardsVisible } = useInView();

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 section-glow">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-64 rounded-full
        bg-violet-300/15 dark:bg-violet-700/8 blur-[80px]" />

      <div className="relative max-w-6xl mx-auto">

        <div ref={titleRef}>
          <div className={`text-center mb-4 reveal ${titleVisible ? 'visible' : ''}`}>
            <span className="text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3 block">
              Say Hello
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Get In <span className="animate-gradient">Touch</span>
            </h2>
          </div>
          <p
            className={`text-center text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-14
              reveal ${titleVisible ? 'visible' : ''}`}
            style={{ transitionDelay: titleVisible ? '150ms' : '0ms' }}
          >
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate. Let&apos;s connect.
          </p>
        </div>

        <div ref={cardsRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group reveal ${cardsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div
                className="glass-card rounded-2xl p-6 text-center h-full
                  hover:-translate-y-3 transition-all duration-300"
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = `0 0 40px ${contact.lightGlow}, 0 20px 40px rgba(0,0,0,0.06)`;
                  el.style.borderColor = contact.lightGlow;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = '';
                  el.style.borderColor = '';
                }}
              >
                <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center
                  rounded-2xl bg-gradient-to-br ${contact.gradient}
                  shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2 tracking-wide uppercase">
                  {contact.label}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-500 break-all leading-relaxed">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm">
            <Send className="w-3.5 h-3.5" />
            <span>Open to full-time roles and freelance projects</span>
          </div>
          <p className="mt-4 text-slate-400 dark:text-slate-600 text-xs">
            © {new Date().getFullYear()} Siranjeevi. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

      </div>
    </section>
  );
}
