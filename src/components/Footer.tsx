"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-md pt-16 pb-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80 items-center">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/#home" className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-base shadow-md shadow-cyan-500/25">
                KM
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                {personalInfo.name}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed mb-4">
              Computer Science & Engineering Student at Sahyadri College of Engineering and Management. Passionate about modern web development, Next.js, and interactive digital experiences.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Navigation
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link href="/#home" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors">Home</Link></li>
                <li><Link href="/#about" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors">About Me</Link></li>
                <li><Link href="/#skills" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors">Skills & Stack</Link></li>
                <li><Link href="/#projects" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors">Projects</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Explore More
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link href="/#experience" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors">Experience</Link></li>
                <li><Link href="/#education" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors">Education</Link></li>
                <li><Link href="/#achievements" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors">Achievements</Link></li>
                <li><Link href="/#contact" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-500 transition-all shadow-sm group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} K Mokshith. Built with Next.js, React, Tailwind CSS & Three.js.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for high performance & modern web design</span>
            <Sparkles className="w-3 h-3 text-cyan-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
