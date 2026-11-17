import Skills from "@/components/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Tech Stack | K Mokshith",
  description: "Technical skills and tools mastered by K Mokshith: C, C++, Python, JavaScript, React.js, Next.js, and more.",
};

export default function SkillsPage() {
  return (
    <div className="pt-20">
      <Skills />
    </div>
  );
}
