import Education from "@/components/Education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | K Mokshith",
  description: "Academic background of K Mokshith: Sahyadri College of Engineering (B.E. CSE), PUC (94.83%), and SSLC (92.96%).",
};

export default function EducationPage() {
  return (
    <div className="pt-20">
      <Education />
    </div>
  );
}
