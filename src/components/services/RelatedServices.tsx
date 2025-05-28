"use client";

import { Brain, Link2, Smartphone, Monitor, Target } from "lucide-react";
import { HoverEffect } from "../ui/card-hover-effect";

const relatedServices = [
  {
    title: "AI & LLM Development",
    description: "Speed, precision & transparency for your AI needs.",
    icon: Brain,
    link: "/services/ai-llm-development",
  },
  {
    title: "Blockchain & Web3",
    description: "Secure, decentralized platforms for future-ready systems.",
    icon: Link2,
    link: "/services/blockchain-web3-development",
  },
  {
    title: "Mobile Development",
    description: "High-performance React Native and native apps.",
    icon: Smartphone,
    link: "/services/mobile-development",
  },
  {
    title: "Web Development",
    description: "Modern, scalable web solutions that grow with you.",
    icon: Monitor,
    link: "/services/web-development",
  },
  {
    title: "Native App Development",
    description: "iOS and Android apps built for peak performance.",
    icon: Target,
    link: "/services/native-app-development",
  },
];

export default function RelatedServices() {
  return (
    <div className="pt-20">
      <h2 className="text-3xl font-bold text-center mb-8">
        Explore Other Services
      </h2>
      <HoverEffect items={relatedServices} />
    </div>
  );
}
