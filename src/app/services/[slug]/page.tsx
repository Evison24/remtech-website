import React from "react";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { Brain, Link2, Smartphone, Monitor, Target } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const services = [
  {
    slug: "ai-llm-development",
    title: "AI & LLM Development Services",
    icon: Brain,
    content: [
      {
        heading:
          "Transform your organisation with bespoke AI solutions designed for speed, precision and complete transparency...",
        subsections: [
          { title: "Custom AI Application Development", text: "" },
          { title: "LLM Model Building & Fine‑Tuning", text: "" },
          { title: "Prompt Enhancement & Tuning", text: "" },
          { title: "Retrieval‑Augmented Generation (RAG)", text: "" },
          { title: "Expert Response Enhancement", text: "" },
          { title: "Model Distillation & Knowledge Transfer", text: "" },
        ],
        cta: "Ready to accelerate your AI journey? Contact us today to discuss how our tailored solutions can drive innovation and competitive advantage for your business.",
      },
    ],
  },
  {
    slug: "blockchain-web3-development",
    title: "Blockchain & Web3 Development Services",
    icon: Link2,
    content: [
      {
        heading:
          "Harness the transformative potential of decentralised technologies...",
        subsections: [
          { title: "Metaverse Casinos", text: "" },
          { title: "Decentralised Finance & Sports Betting", text: "" },
          { title: "Secure Crypto Wallets & Identity", text: "" },
          { title: "Real‑World Asset Tokenisation", text: "" },
          { title: "Bespoke Token Engineering", text: "" },
          { title: "Interoperability & Blockchain-as-a-Service", text: "" },
          { title: "AI‑Enhanced Security & Insights", text: "" },
          { title: "Compliance & Governance", text: "" },
        ],
        cta: "Ready to lead the Web3 revolution? Get in touch to discuss how our tailored Blockchain & Web3 development services can power your next‑generation platform.",
      },
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile Development Services (React Native)",
    icon: Smartphone,
    content: [
      {
        heading:
          "Deliver exceptional mobile experiences with Remtech Labs’ expert React Native team...",
        subsections: [
          { title: "Why Choose React Native?", text: "" },
          { title: "Our Expertise", text: "" },
        ],
        cta: "Ready to Transform Your Mobile Strategy? Partner with Remtech Labs to bring your mobile vision to life.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development Services",
    icon: Monitor,
    content: [
      {
        heading:
          "Empower Your Digital Presence. Understanding Web & App Development Costs...",
        subsections: [
          { title: "Key Cost Factors", text: "" },
          { title: "Why Choose Web Applications?", text: "" },
          { title: "Our Expertise & Approach", text: "" },
          { title: "Tailored Web Development Services", text: "" },
        ],
        cta: "Ready to transform your digital presence? Contact Remtech Labs today to discuss your project.",
      },
    ],
  },
  {
    slug: "native-app-development",
    title: "Native App Development Services",
    icon: Target,
    content: [
      {
        heading:
          "Elevate your business with bespoke mobile applications crafted for peak performance...",
        subsections: [
          { title: "Platform-Specific Expertise", text: "" },
          { title: "Optimized Performance", text: "" },
          { title: "Seamless User Experience", text: "" },
          { title: "Full Hardware Access", text: "" },
        ],
        cta: "Need a high-performance native application? Contact us to discuss your iOS or Android project requirements.",
      },
    ],
  },
];

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const getServiceData = (slug: string) => {
  return services.find((service) => service.slug === slug);
};

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const service = getServiceData(params.slug);
  if (!service) return { title: "Service Not Found - Remtech Labs" };
  return {
    title: `${service.title} - Remtech Labs`,
    description: `Learn more about Remtech Labs' ${service.title}.`,
  };
}

const ServiceDetailPage = ({ params }: { params: { slug: string } }) => {
  const service = getServiceData(params.slug);
  if (!service) return notFound();

  const Icon = service.icon;

  const subsections = service.content[0]?.subsections ?? [];

  return (
    <div className="space-y-12 px-4 sm:px-6 lg:px-24 py-12 w-[100vw]">
      <section>
        <div className="flex items-center gap-4 mb-6 justify-center">
          <Icon className="w-10 h-10 text-primary" />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {service.title}
          </h1>
        </div>
        <HoverEffect
          items={subsections.map((sub) => ({
            title: sub.title,
            description: sub.text,
          }))}
        />
      </section>
    </div>
  );
};

export default ServiceDetailPage;
