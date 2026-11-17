"use client";

import { 
  Trophy, 
  Award, 
  Sparkles, 
  BookOpen, 
  Code, 
  GraduationCap, 
  CheckCircle2,
  Calendar
} from "lucide-react";
import { achievementsData, AchievementItem } from "@/data/portfolioData";

export default function Achievements() {
  const getCategoryIcon = (category: AchievementItem["category"]) => {
    switch (category) {
      case "Academic":
        return <GraduationCap className="w-5 h-5 text-amber-500" />;
      case "Research":
        return <BookOpen className="w-5 h-5 text-purple-500" />;
      case "Hackathon":
        return <Trophy className="w-5 h-5 text-cyan-500" />;
      case "Technical":
        return <Code className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Milestones & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Honors & <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
            Recognitions in academic distinction, research presentations, and hackathon project building.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/40 shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-110 transition-transform">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                        {item.category} Recognition
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <Calendar className="w-3 h-3" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shadow-sm">
                    {item.badgeText}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-4">
                  {item.issuer}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Verified Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
