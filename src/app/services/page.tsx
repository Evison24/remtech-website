"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";

const services = [
  {
    title: "REN - AI & LLM Development",
    description:
      "Bespoke AI solutions designed for speed, precision, and transparency. Custom LLM building, fine-tuning, and optimisation.",
    link: "/services/ai-llm-development",
    image: "/images/services/ren.png",
  },
  {
    // title: "Blockchain & Web3",
    title: "CHEZA - AI sports prediction engine",
    description:
      "Harness decentralised technologies for secure, transparent platforms. Innovative solutions including metaverse, DeFi, and secure wallets.",
    link: "/services/ai-sports-prediction-engine",
    image: "/images/services/cheza.png",
  },
  {
    title: "Dibbery - Mobile Development",
    description:
      "Scalable, high-performance cross-platform & native mobile apps using React Native, Flutter, Swift, and Kotlin.",
    link: "/services/mobile-development",
    image: "/images/services/dibbery.png",
  },
  {
    // title: "Custom Application Development",
    title: "GOMA - RPG Blockchain game on Solana",
    description:
      "Tailored software solutions to meet unique business needs, enhancing efficiency and driving growth.",
    link: "/services/game-development",
    image: "/images/services/gomarpg.png",
  },
  {
    // title: "Intelligent Model Distillation",
    title: "Telehealth Mobile AI Consultation platform",
    description:
      "Transform complex AI into agile, efficient models while retaining expertise, perfect for edge computing.",
    link: "/services/intelligent-model-distillation",
    image: "/images/services/healthpulse.png",
  },
  {
    // title: "Low-Code AI Platform",
    title: "Kweet - Twitter clone (written in Kotlin)",
    description:
      "Accelerate go-to-market strategies with our intuitive low-code AI platform for rapid development.",
    link: "/services/native-app-development",
    image: "/images/services/kweet.png",
  },
];

export default function ServicesOverviewPage() {
  const serviceCards = services.map((service) => ({
    title: service.title,
    description: service.description,
    link: service.link,
    image: service.image,
    // icon: <service.icon className="w-8 h-8 text-primary mb-4" />,
  }));

  return (
    <div className="relative z-10 w-[100vw] ">
      <HeroParallax
        products={serviceCards.map((card) => ({
          title: card.title,
          link: card.link,
          thumbnail:
            card.image ??
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
