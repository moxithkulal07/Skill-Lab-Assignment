"use client";

import { 
  User, 
  Target, 
  Sparkles, 
  GraduationCap, 
  Compass, 
  Cpu, 
  Trophy, 
  Zap, 
  BookOpen, 
  CheckCircle2 
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function About() {
  const interestIcons = [
    <Sparkles key="1" className="w-5 h-5 text-cyan-500" />,
    <Cpu key="2" className="w-5 h-5 text-blue-500" />,
    <Zap key="3" className="w-5 h-5 text-purple-500" />,
    <Trophy key="4" className="w-5 h-5 text-amber-500" />,
    <Compass key="5" className="w-5 h-5 text-emerald-500" />,
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
            Driven by curiosity, engineering discipline, and a passion for building software that makes a real impact.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story & Background Card */}
          <div className="lg:col-span-7 flex flex-col justify-between glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Personal Background
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    2nd Year Computer Science & Engineering Student
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                <p>
                  I am a second-year Computer Science and Engineering student at{" "}
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    Sahyadri College of Engineering and Management, Mangalore
                  </strong>
                  . I am deeply passionate about web development, software engineering, and exploring emerging technologies.
                </p>
                <p>
                  I thrive on building practical projects, solving challenging algorithmic problems, participating in hackathons, and learning through hands-on development. I have hands-on experience working with frontend technologies (React.js, Next.js, TypeScript) and am steadily expanding into backend systems (Node.js, Express, SQL) to become a versatile, well-rounded software engineer.
                </p>
              </div>
            </div>

            {/* Quick Metrics / Highlights */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-center">
                <span className="text-2xl font-black text-cyan-500">2nd</span>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">Year CSE (Sahyadri)</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-center">
                <span className="text-2xl font-black text-purple-500">94.83%</span>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">PUC Merit</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-center col-span-2 sm:col-span-1">
                <span className="text-2xl font-black text-blue-500">92.96%</span>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">SSLC Distinction</p>
              </div>
            </div>
          </div>

          {/* Career Goals & Focus Card */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/15 transition-all" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Career Objective
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Vision & Future Aspiration
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/20 text-slate-700 dark:text-slate-200 text-base leading-relaxed mb-6 font-medium">
                &ldquo;{personalInfo.careerObjective}&rdquo;
              </div>

              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                Core Focus Areas
              </h4>

              <div className="space-y-3">
                {[
                  "Building clean, reactive web UIs with Next.js & React",
                  "Designing robust REST APIs and data management models",
                  "Accelerating through hackathons and peer collaborations",
                  "Integrating AI models into tangible end-user applications",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400">
                <GraduationCap className="w-4 h-4" />
                <span>Graduation Target: B.E. CSE 2029</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-500" />
            <span>Passions & Interests</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {personalInfo.interests.map((interest, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 shadow-md group"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-110 transition-transform">
                    {interestIcons[idx % interestIcons.length]}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    {interest.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {interest.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
