import Projects from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | K Mokshith",
  description: "Explore projects built by K Mokshith, including CampusLoop, MediLens, and Dynamic Train ETA.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <Projects />
    </div>
  );
}
