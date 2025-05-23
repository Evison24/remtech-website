import React from "react";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

const services = [
  {
    slug: "ai-llm-development",
    title: "AI & LLM Development Services",
    icon: "🧠",
    content: [
      {
        heading:
          "Transform your organisation with bespoke AI solutions designed for speed, precision and complete transparency...",
        subsections: [
          { title: "1. Custom AI Application Development", text: "..." },
          { title: "2. LLM Model Building & Fine‑Tuning", text: "..." },
          { title: "3. Prompt Enhancement & Tuning", text: "..." },
          { title: "4. Retrieval‑Augmented Generation (RAG)", text: "..." },
          { title: "5. Expert Response Enhancement", text: "..." },
          { title: "6. Model Distillation & Knowledge Transfer", text: "..." },
        ],
        cta: "Ready to accelerate your AI journey? Contact us today to discuss how our tailored solutions can drive innovation and competitive advantage for your business.",
      },
    ],
  },
  {
    slug: "blockchain-web3-development",
    title: "Blockchain & Web3 Development Services",
    icon: "🔗",
    content: [
      {
        heading:
          "Harness the transformative potential of decentralised technologies...",
        subsections: [
          { title: "Metaverse Casinos", text: "..." },
          { title: "Decentralised Finance & Sports Betting", text: "..." },
          { title: "Secure Crypto Wallets & Identity", text: "..." },
          { title: "Real‑World Asset Tokenisation", text: "..." },
          { title: "Bespoke Token Engineering", text: "..." },
          { title: "Interoperability & Blockchain-as-a-Service", text: "..." },
          { title: "AI‑Enhanced Security & Insights", text: "..." },
          { title: "Compliance & Governance", text: "..." },
        ],
        cta: "Ready to lead the Web3 revolution? Get in touch to discuss how our tailored Blockchain & Web3 development services can power your next‑generation platform.",
      },
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile Development Services (React Native)",
    icon: "📱",
    content: [
      {
        heading:
          "Deliver exceptional mobile experiences with Remtech Labs’ expert React Native team...",
        subsections: [
          { title: "Why Choose React Native?", text: "..." },
          { title: "Our Expertise", text: "..." },
        ],
        cta: "Ready to Transform Your Mobile Strategy? Partner with Remtech Labs to bring your mobile vision to life.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development Services",
    icon: "💻",
    content: [
      {
        heading:
          "Empower Your Digital Presence. Understanding Web & App Development Costs...",
        subsections: [
          { title: "Key Cost Factors", text: "..." },
          { title: "Why Choose Web Applications?", text: "..." },
          { title: "Our Expertise & Approach", text: "..." },
          { title: "Tailored Web Development Services", text: "..." },
        ],
        cta: "Ready to transform your digital presence? Contact Remtech Labs today to discuss your project.",
      },
    ],
  },
  {
    slug: "native-app-development",
    title: "Native App Development Services",
    icon: "🎯",
    content: [
      {
        heading:
          "Elevate your business with bespoke mobile applications crafted for peak performance...",
        subsections: [
          { title: "Platform-Specific Expertise", text: "..." },
          { title: "Optimized Performance", text: "..." },
          { title: "Seamless User Experience", text: "..." },
          { title: "Full Hardware Access", text: "..." },
        ],
        cta: "Need a high-performance native application? Contact us to discuss your iOS or Android project requirements.",
      },
    ],
  },
];

// ✅ Add this function
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
  if (!service) {
    return { title: "Service Not Found - Remtech Labs" };
  }

  return {
    title: `${service.title} - Remtech Labs`,
    description: `Learn more about Remtech Labs' ${service.title}.`,
  };
}

const ServiceDetailPage = ({ params }: { params: { slug: string } }) => {
  const service = getServiceData(params.slug);
  if (!service) return notFound();

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4">{service.icon}</span>
          <h1 className="text-4xl font-bold tracking-tight">{service.title}</h1>
        </div>

        {service.content.map((contentBlock, index) => (
          <div key={index} className="space-y-6">
            <p className="text-lg text-foreground/70 leading-relaxed mt-4">
              {contentBlock.heading}
            </p>

            {contentBlock.subsections.map((sub, subIndex) => (
              <div key={subIndex}>
                <h2 className="text-2xl font-semibold mt-8 mb-3">
                  {sub.title}
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {sub.text}
                </p>
              </div>
            ))}

            {contentBlock.cta && (
              <section className="text-center py-12 bg-secondary/50 rounded-lg mt-12">
                <h2 className="text-2xl font-semibold mb-4">
                  Interested in {service.title}?
                </h2>
                <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                  {contentBlock.cta}
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Contact Us
                </a>
              </section>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ServiceDetailPage;
