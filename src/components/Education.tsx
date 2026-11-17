"use client";

import { 
  GraduationCap, 
  Award, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  Sparkles 
} from "lucide-react";
import { educationData } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
            Formal education, academic distinctions, and engineering specialization.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`glass-panel rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl ${
                edu.current
                  ? "border-cyan-500/50 shadow-cyan-500/10"
                  : "border-slate-200/80 dark:border-slate-800/80 hover:border-purple-500/50 shadow-xl"
              }`}
            >
              {/* Top Accent Gradient */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 ${
                  edu.current
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                    : "bg-gradient-to-r from-purple-500 to-pink-500"
                }`}
              />

              <div>
                {/* Status or Score Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {edu.current ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                      Current Program
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                      <Award className="w-3.5 h-3.5" />
                      Completed
                    </span>
                  )}

                  {edu.score && (
                    <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      Score: {edu.score}
                    </span>
                  )}
                </div>

                {/* Degree / Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors mb-1">
                  {edu.degree}
                </h3>

                {/* Branch if available */}
                {edu.branch && (
                  <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                    {edu.branch}
                  </p>
                )}

                {/* Institution */}
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                  {edu.institution}
                </h4>

                {/* Timeline and Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5">
                  {edu.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Education Step #{index + 1}</span>
                {edu.current && <span className="font-semibold text-cyan-500">Graduation 2029</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
