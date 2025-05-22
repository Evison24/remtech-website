import React from "react";
import Link from "next/link";
import CTAForm from "@/components/core/CTAForm";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { HoverEffect } from "@/components/ui/card-hover-effect"; // Import HoverEffect

// Placeholder Testimonial Data
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

// Services Data for Hover Effect
const services = [
  {
    title: "AI & LLM Development",
    description:
      "Bespoke AI solutions designed for speed, precision, and transparency. Custom LLM building, fine-tuning, and optimisation.",
    link: "/services/ai-llm-development",
  },
  {
    title: "Blockchain & Web3",
    description:
      "Harness decentralised technologies for secure, transparent platforms. Innovative solutions including metaverse, DeFi, and secure wallets.",
    link: "/services/blockchain-web3-development",
  },
  {
    title: "Mobile Development",
    description:
      "Scalable, high-performance cross-platform & native mobile apps using React Native, Flutter, Swift, and Kotlin.",
    link: "/services/mobile-development",
  },
  {
    title: "Custom Application Development",
    description:
      "Tailored software solutions to meet unique business needs, enhancing efficiency and driving growth.",
    link: "/services/custom-application-development",
  },
  {
    title: "Intelligent Model Distillation",
    description:
      "Transform complex AI into agile, efficient models while retaining expertise, perfect for edge computing.",
    link: "/services/intelligent-model-distillation",
  },
  {
    title: "Low-Code AI Platform",
    description:
      "Accelerate go-to-market strategies with our intuitive low-code AI platform for rapid development.",
    link: "/services/low-code-ai-platform",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section with Background Beams */}
      <section className="relative text-center py-16 md:py-24 overflow-hidden rounded-lg bg-neutral-950">
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white">
            Where Innovation Meets Intelligence
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            Empowering your business with breakthrough AI, mobile, and custom
            application solutions.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Discover Our Solutions
          </Link>
          <a
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-white hover:text-black"
          >
            Get In Touch
          </a>
          <div className="max-w-md mx-auto">
            <p className="text-sm text-neutral-400 my-5">
              Stay updated with our latest insights:
            </p>
            <CTAForm />
          </div>
        </div>
      </section>

      {/* Services Highlight Section using HoverEffect */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Core Services
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Explore our comprehensive suite of services designed to elevate your
          business through cutting-edge technology.
        </p>
        <HoverEffect items={services} />
        {/* Removed the old grid and the 'Explore all services' link from here as cards are links */}
      </section>

      {/* Why Choose Us / Expertise Section */}
      <section className="py-16 bg-secondary/50 rounded-lg px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Partner with Remtech Labs?
        </h2>
        {/* Consider using Aceternity's 3D Card Effect or similar for this section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            {/* <div className="text-4xl mb-4">💡</div> */}
            <h3 className="text-xl font-semibold mb-2">Strategic Efficiency</h3>
            <p className="text-foreground/70 text-sm">
              Streamlined processes aligned with your business objectives for
              maximum ROI.
            </p>
          </div>
          <div>
            {/* <div className="text-4xl mb-4">🚀</div> */}
            <h3 className="text-xl font-semibold mb-2">Accelerated Growth</h3>
            <p className="text-foreground/70 text-sm">
              Deep expertise tailored to your goals, helping you stay ahead in
              evolving markets.
            </p>
          </div>
          <div>
            {/* <div className="text-4xl mb-4">🤝</div> */}
            <h3 className="text-xl font-semibold mb-2">
              Enhanced Collaboration
            </h3>
            <p className="text-foreground/70 text-sm">
              Continuous engagement and transparent communication throughout the
              lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section using AnimatedTestimonials */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          What Our Clients Say
        </h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </section>
    </div>
  );
}
