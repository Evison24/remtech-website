"use client";

import { HeroParallax } from "@/components/ui/hero-parallax"; // You need to copy this from Aceternity UI
import {
  BrainCog,
  Phone,
  Laptop,
  Blocks,
  GlobeLock,
  AppWindow,
} from "lucide-react";

const services = [
  {
    title: "AI & LLM Development",
    description:
      "Custom AI pipelines, RAG architecture, fine-tuning, and model distillation.",
    icon: BrainCog,
    key: "ai-llm-development",
  },
  {
    title: "Blockchain & Web3",
    description:
      "Secure decentralized solutions: DeFi, wallets, NFT platforms, and tokenization.",
    icon: GlobeLock,
    key: "blockchain-web3-development",
  },
  {
    title: "React Native Apps",
    description:
      "High-performance cross-platform mobile apps that feel native.",
    icon: Phone,
    key: "mobile-development",
  },
  {
    title: "Custom Web Platforms",
    description:
      "Scalable web solutions: PWAs, dashboards, SaaS, and API-based services.",
    icon: Laptop,
    key: "custom-application-development",
  },
  {
    title: "Native App Development",
    description:
      "Purpose-built iOS/Android apps with top-tier performance and UX.",
    icon: AppWindow,
    key: "native-app-development",
  },
  {
    title: "Modular Architecture",
    description:
      "Composability-first engineering with clean, extendable architecture.",
    icon: Blocks,
    key: "modular-architecture",
  },
];

export default function ServicesOverviewPage() {
  const serviceCards = services.map((service) => ({
    title: service.title,
    description: service.description,
    icon: <service.icon className="w-8 h-8 text-primary mb-4" />,
  }));

  return (
    <div className="relative z-10 w-[100vw] ">
      <HeroParallax
        products={serviceCards.map((card) => ({
          title: card.title,
          link: "#",
          thumbnail:
            "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/14202/production/_108243428_gettyimages-871148930.jpg.webp", // placeholder or actual image
        }))}
      />

      {/* Optional CTA */}
      <section className="text-center py-16 px-4 bg-secondary/50 rounded-lg mx-auto mt-20 max-w-4xl mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Let&apos;s discuss how our expertise can help you achieve your
          business goals.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 transition"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
}
