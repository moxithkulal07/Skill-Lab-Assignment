import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeCanvas from "@/components/ThreeCanvas";

export const metadata: Metadata = {
  title: "K Mokshith | Software Engineering Aspirant | Portfolio",
  description:
    "Personal portfolio website of K Mokshith - Computer Science and Engineering student at Sahyadri College of Engineering and Management, showcasing practical projects, skills, experience, and academic achievements.",
  keywords: [
    "K Mokshith",
    "Mokshith Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Next.js Developer",
    "Sahyadri College",
    "CampusLoop",
    "MediLens",
  ],
  authors: [{ name: "K Mokshith" }],
  creator: "K Mokshith",
  openGraph: {
    title: "K Mokshith | Software Engineering Aspirant",
    description: "Explore the projects, skills, and engineering journey of K Mokshith.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-slate-50 dark:bg-[#080b12] text-slate-900 dark:text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-400">
        {/* Background 3D Interactive Canvas */}
        <ThreeCanvas />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Page Content */}
        <main className="relative z-10 flex-grow min-h-screen">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
