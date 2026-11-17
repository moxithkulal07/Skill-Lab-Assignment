"use client";

import { useState } from "react";
import { 
  Code2, 
  Layout, 
  Server, 
  Terminal, 
  Cpu, 
  CheckCircle, 
  Sparkles,
  Layers
} from "lucide-react";
import { skillCategories } from "@/data/portfolioData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code2 className="w-5 h-5 text-cyan-500" />,
    "Frontend Development": <Layout className="w-5 h-5 text-blue-500" />,
    "Backend Development": <Server className="w-5 h-5 text-purple-500" />,
    "Development Tools": <Terminal className="w-5 h-5 text-emerald-500" />,
  };

  const filteredCategories = activeCategory === "All"
    ? skillCategories
    : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
            Core technologies and developer tools I leverage to engineer performant, scalable applications.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === "All"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25"
                  : "glass-panel text-slate-600 dark:text-slate-300 hover:text-cyan-500"
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat.category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25"
                    : "glass-panel text-slate-600 dark:text-slate-300 hover:text-cyan-500"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.category}
              className="glass-panel p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/40 shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-110 group-hover:shadow-md transition-all">
                  {categoryIcons[category.category] || <Cpu className="w-5 h-5 text-cyan-500" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.category}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills badges grid */}
              <div className="grid grid-cols-2 gap-3.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-2xl bg-white/60 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-200 flex items-center justify-between group/skill"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover/skill:scale-150 transition-transform" />
                      <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </div>

                    {skill.level && (
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 3D Tech Orbit Summary Footer */}
        <div className="mt-12 p-6 rounded-3xl glass-panel border border-cyan-500/20 text-center max-w-2xl mx-auto shadow-lg shadow-cyan-500/5">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Learning Philosophy</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Comfortable with practical software tools. Constantly expanding hands-on proficiency in modern architectures, API performance, and AI-assisted engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
