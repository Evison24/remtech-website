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
        text: "REN is a consulting platform delivering AI-powered solutions in machine learning, automation, and data integration. It enables enterprises to optimise operations and drive innovation. Key features include instant content compliance checks and ESG benchmarking, allowing organisations to compare against global peers using advanced analytics and document insights.",
        subsections: [
          {
            title: "Custom AI Application Development",
            text: "We design and develop tailored AI solutions that align with your business goals—ranging from intelligent automation tools to predictive analytics systems, all fully integrated with your existing workflows.",
          },
          {
            title: "LLM Model Building & Fine‑Tuning",
            text: "Our team builds and fine-tunes large language models on domain-specific data to improve accuracy, reduce hallucination, and optimize performance for your unique industry use case.",
          },
          {
            title: "Prompt Enhancement & Tuning",
            text: "We craft and refine prompts to maximize LLM output relevance and reliability, ensuring high-quality interactions whether used for chatbots, search engines, or internal tools.",
          },
          {
            title: "Retrieval‑Augmented Generation (RAG)",
            text: "We implement RAG architectures that allow LLMs to dynamically retrieve external knowledge, enabling more accurate and up-to-date responses grounded in your internal or public datasets.",
          },
          {
            title: "Expert Response Enhancement",
            text: "Our expert tuning pipelines enhance model responses using post-processing and evaluation layers—ensuring that generated content meets quality, tone, and compliance standards.",
          },
          {
            title: "Model Distillation & Knowledge Transfer",
            text: "We help you compress powerful models into lightweight, production-ready versions while preserving performance—ideal for deployment on edge devices, mobile apps, or private servers.",
          },
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
        text: "Cheza is an AI-powered sports-prediction platform built around a fine-tuned DeepSeek R1 7B LLM that digests betting odds, team form, and fan/expert sentiment to generate clear, explainable picks. Users can subscribe to our “House” agent or create their custom agents in a transparent marketplace, then track their simulated bankroll with an immutable ledger. We’ve launched in the Premier League, with NFL and NBA support right around the corner.",
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
    title: "Dibbery - Mobile Development Services ( Flutter, React Native )",
    icon: Smartphone,

    content: [
      {
        heading:
          "Deliver exceptional mobile experiences with Remtech Labs’ expert team...",
        text: "One Stop Destination For Your Gardening Desires, Dibbery is a Flutter and TypeScript/AWS app offering on-demand gardener bookings and curated affiliate products. Earn via hourly service commissions and product partnerships. Grow smarter with our AI Horticulture Platform, blending technology with gardening for better plant care and growth.",
        subsections: [
          {
            title: "User-Centric Design & Booking Flow",
            text: "We designed Dibbery with an intuitive interface that allows users to search, compare, and book local gardeners within seconds. The booking system includes time slot selection, service category filtering, and real-time availability.",
          },
          {
            title: "Secure Messaging & Quote Requests",
            text: "Integrated secure messaging enables users and gardeners to discuss job details, share images, and confirm pricing—all within the app before any job is scheduled.",
          },
          {
            title: "Community Feed & Social Engagement",
            text: "Dibbery fosters a gardening community where users can post garden updates, share before-and-after photos, comment on others’ posts, and like inspiring work. This builds trust and engagement across the platform.",
          },
          {
            title: "Ratings, Reviews & Trust Signals",
            text: "Dibbery includes a robust review system, giving users confidence in choosing providers based on ratings, completed job history, and user feedback.",
          },
          {
            title: "Payment Integration & Wallet System",
            text: "We implemented a secure in-app payment system with support for instant transactions, job deposits, and a digital wallet for managing earnings and refunds.",
          },
          {
            title: "Admin Dashboard & Service Management",
            text: "A backend dashboard gives Dibbery admins full control over users, services, payments, and performance analytics, helping to scale operations and manage disputes efficiently.",
          },
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
        text: "GOMA is an open-world, cultivation-based RPG built in Unreal Engine 5. Players master three paths—Qi, Soul, Body—rise through sect hierarchies, discover ancient inheritances, and engage in dynamic PvE and PvP. A Solana token economy powers a true play-to-earn marketplace. Embark on the journey to become the God of Martial Arts.",
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
    title: "Telehealth Mobile Consultation platform",
    icon: Target,
    content: [
      {
        heading:
          "Elevate your business with bespoke mobile applications crafted for peak performance...",
        text: "HealthPulse is a comprehensive telehealth platform offering AI-powered symptom checking, secure video consultations, e-prescription management, and wearable device integration. Built with React Native and FastAPI, it provides seamless remote healthcare access while maintaining HIPAA compliance, empowering patients and healthcare providers with real-time health monitoring and convenient virtual care options.",
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
        text: "Kweet is a modern microblogging platform built with Kotlin and Ktor. This Twitter-like service offers real-time social interaction through concise posts, featuring secure JWT authentication, WebSocket-powered live updates, and robust PostgreSQL persistence. With a responsive interface and Docker deployment, Kweet delivers a seamless social experience for connected communities.",
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
        {/* Description Block */}
        <div className="bg-muted/10 border border-muted rounded-xl p-6 max-w-4xl mx-auto text-center shadow-md">
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {service.content[0]?.text || ""}
          </p>
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
