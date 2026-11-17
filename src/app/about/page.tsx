import About from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | K Mokshith",
  description: "Learn about K Mokshith's background, education at Sahyadri College, interests, and career goals.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
    </div>
  );
}
