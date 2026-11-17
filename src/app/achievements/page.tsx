import Achievements from "@/components/Achievements";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements & Milestones | K Mokshith",
  description: "Academic merits, research presentations, and hackathon milestones achieved by K Mokshith.",
};

export default function AchievementsPage() {
  return (
    <div className="pt-20">
      <Achievements />
    </div>
  );
}
