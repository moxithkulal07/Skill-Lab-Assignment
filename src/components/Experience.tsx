"use client";

import { 
  Briefcase, 
  Trophy, 
  BookOpen, 
  Code2, 
  Sparkles, 
  Calendar,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { experienceData, ExperienceItem } from "@/data/portfolioData";

export default function Experience() {
  const getIcon = (type: ExperienceItem["type"]) => {
    switch (type) {
      case "Hackathon":
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case "Research":
        return <BookOpen className="w-5 h-5 text-purple-500" />;
      case "Development":
        return <Code2 className="w-5 h-5 text-cyan-500" />;
      case "Activity":
        return <Sparkles className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
            Collaborative initiatives, hackathons, technical research, and hands-on software development milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 sm:-translate-x-1/2 opacity-40 dark:opacity-60" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } group`}
                >
                  {/* Central Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-125 transition-transform z-20">
                    {getIcon(item.type)}
                  </div>

                  {/* Spacer for Desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/50 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group-hover:-translate-y-1">
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-3">
                        {item.organization}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
                        {item.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
