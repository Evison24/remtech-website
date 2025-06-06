import React from "react";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { Brain, Link2, Smartphone, Monitor, Target } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import HorizontalImageScroller from "@/components/services/HorizontalImageScroller";

const services = [
  {
    slug: "ai-llm-development",
    title: "REN - AI & LLM Development Services",
    icon: Brain,
    images: [
      "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/14202/production/_108243428_gettyimages-871148930.jpg.webp",
      "https://files.selar.co/product-images/2024/products/Viclabulary/project-management-selar.co-65f60d5694847.jpg",
      "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/14202/production/_108243428_gettyimages-871148930.jpg.webp",
      "https://files.selar.co/product-images/2024/products/Viclabulary/project-management-selar.co-65f60d5694847.jpg",
      "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/14202/production/_108243428_gettyimages-871148930.jpg.webp",
      "https://files.selar.co/product-images/2024/products/Viclabulary/project-management-selar.co-65f60d5694847.jpg",
    ],
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
    slug: "ai-sports-prediction-engine",
    title: "CHEZA - AI sports prediction engine",
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
    title: "Dibbery - Mobile Development Services (FLutter,React Native)",
    icon: Smartphone,
    content: [
      {
        heading:
          "Deliver exceptional mobile experiences with Remtech Labs’ expert team...",
        subsections: [
          { title: "Why Choose React Native?", text: "" },
          { title: "Our Expertise", text: "" },
        ],
        cta: "Ready to Transform Your Mobile Strategy? Partner with Remtech Labs to bring your mobile vision to life.",
      },
    ],
  },
  {
    slug: "game-development",
    title: "GOMA - RPG Blockchain game on Solana",
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
    slug: "intelligent-model-distillation",
    title: "Telehealth Mobile AI Consultation platform",
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
  {
    slug: "native-app-development",
    title: "Kweet - Twitter clone (written in Kotlin)",
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
  const testimonials = [
    {
      quote:
        "Remtech Labs transformed our workflow with their attention to detail and innovative features. Their AI solution was exactly what we needed.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1531590878845-12627191e687?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The implementation was seamless, and the results exceeded our expectations. The platform's flexibility is outstanding.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Working with Remtech Labs felt like a true partnership. Their communication and expertise in blockchain development were invaluable.",
      name: "Emily Carter",
      designation: "CEO of SecureChain",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their React Native team delivered a high-quality mobile app ahead of schedule. Highly recommended for cross-platform development.",
      name: "David Lee",
      designation: "Head of Mobile at ConnectApp",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
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
        {service.images?.length > 0 && (
          <section className="py-12">
            <HorizontalImageScroller images={service.images || []} />
          </section>
        )}
      </section>
    </div>
  );
};

export default ServiceDetailPage;
