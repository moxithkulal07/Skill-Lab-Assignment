"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Compass, 
  Award,
  Layers,
  GraduationCap
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & Introduction */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-6 animate-pulse-slow">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            <span>Open to Internships & Hackathons</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Subtitle / Role */}
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
            <Code2 className="w-6 h-6 text-cyan-500 inline-block" />
            <span>{personalInfo.roleHeadline}</span>
          </h2>

          {/* Summary / Tagline */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-6 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Academic Highlight Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium mb-8">
            <GraduationCap className="w-4 h-4 text-purple-500 flex-shrink-0" />
            <span>{personalInfo.academicHighlights}</span>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
            <Link
              href="/#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/#contact"
              className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-cyan-500 text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-sm hover:shadow-cyan-500/10 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <Mail className="w-4 h-4 text-cyan-500" />
            </Link>

            <Link
              href="/#skills"
              className="px-5 py-3.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 font-medium text-sm transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4" />
              <span>Tech Stack</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">
              Connect:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:scale-110 shadow-sm transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:scale-110 shadow-sm transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:scale-110 shadow-sm transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 3D-Styled Photo Showcase Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10">
          <div className="relative w-72 sm:w-80 md:w-96 group">
            {/* Glowing Backdrop Ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-30 blur-2xl group-hover:opacity-60 transition duration-1000 group-hover:duration-300 animate-pulse-slow" />

            {/* Futuristic 3D Orbiting Border Card */}
            <div className="relative rounded-3xl glass-panel p-3 overflow-hidden shadow-2xl border border-white/20 dark:border-slate-700/60 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-cyan-500/20">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                {/* Bottom Card Pill inside Image */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold tracking-wide">K Mokshith</p>
                      <p className="text-[11px] text-cyan-400 font-medium">B.E. CSE • Sahyadri College</p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating 3D Badge 1 */}
            <div className="absolute -top-3 -right-3 px-3.5 py-2 rounded-xl glass-panel shadow-lg border border-cyan-500/30 flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-300 animate-float">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>React & Next.js</span>
            </div>

            {/* Floating 3D Badge 2 */}
            <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl glass-panel shadow-lg border border-purple-500/30 flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-300 animate-float-delayed">
              <Compass className="w-3.5 h-3.5 text-purple-400" />
              <span>Full-Stack Explorer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
