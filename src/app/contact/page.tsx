import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | K Mokshith",
  description: "Get in touch with K Mokshith for internships, hackathon collaborations, or engineering projects.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
