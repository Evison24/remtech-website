import type { Metadata } from "next";
import AboutPageContent from "./about-content";

export const metadata: Metadata = {
  title: "About Us - Remtech Labs",
  description:
    "Learn about Remtech Labs mission, approach, and expertise in AI, mobile, and custom application solutions.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
