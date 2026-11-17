import Experience from "@/components/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Activities | K Mokshith",
  description: "Hackathons, research presentations, and practical web engineering experience of K Mokshith.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-20">
      <Experience />
    </div>
  );
}
