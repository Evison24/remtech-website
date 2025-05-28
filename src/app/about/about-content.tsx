"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb,
  Rocket,
  Users,
  ShieldCheck,
  TrendingUp,
  Settings2,
} from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  Cpu,
  BrainCircuit,
  Cloud,
  Shield,
  Smartphone,
  DatabaseZap,
  Globe,
} from "lucide-react";

const features = [
  {
    title: "Strategic Efficiency",
    description: "Streamlined tech delivery that scales with you.",
    icon: Lightbulb,
  },
  {
    title: "Accelerated Growth",
    description: "LLMs and Web3 apps to fast-track your innovation.",
    icon: Rocket,
  },
  {
    title: "Transparent Communication",
    description: "Full visibility with structured collaboration.",
    icon: Users,
  },
  {
    title: "Security-First",
    description: "Privacy, trust, and compliance by design.",
    icon: ShieldCheck,
  },
  {
    title: "Optimized Investment",
    description: "High ROI through precision planning and build.",
    icon: TrendingUp,
  },
  {
    title: "Adaptive Engineering",
    description: "Flexible architecture for evolving use cases.",
    icon: Settings2,
  },
];

const expertise = [
  {
    title: "AI Systems",
    description:
      "Powerful end-to-end intelligent automation and predictive solutions.",
    icon: Cpu,
  },
  {
    title: "LLMs",
    description:
      "Fine-tuning, training, and integrating large language models.",
    icon: BrainCircuit,
  },
  {
    title: "Web3",
    description: "Decentralized systems and smart contract development.",
    icon: Globe,
  },
  {
    title: "Mobile",
    description: "Cross-platform and native mobile development.",
    icon: Smartphone,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Scalable, secure deployments using modern cloud-native tools.",
    icon: Cloud,
  },
  {
    title: "Security",
    description: "Privacy, compliance, and cyber-resilience built in.",
    icon: Shield,
  },
  {
    title: "Data Strategy",
    description: "Data pipelines, governance, and real-time analytics.",
    icon: DatabaseZap,
  },
];

const AboutPageContent = () => {
  return (
    <div className="space-y-24 w-[100vw]">
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-background via-muted/20 to-background text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#1a1a1f] to-[#0e0e13] opacity-50 blur-2xl" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold">Welcome to Remtech Labs</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empowering innovation through strategy, technology, and seamless
            execution.
          </p>
        </motion.div>
      </section>

      {/* Our Approach */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="px-4 md:px-0 mx-[5%]"
      >
        <div className="text-center mb-12">
          <span className="text-sm uppercase text-primary font-semibold tracking-wider">
            Our Approach
          </span>
          <h2 className="text-3xl font-bold mt-2">Built for Impact</h2>
        </div>

        <HoverEffect items={features} />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 px-6 py-20 bg-muted/10 rounded-xl text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
          From LLM fine-tuning to scalable cloud-native apps, we deliver
          end-to-end innovation in:
        </p>

        {/* Hover cards instead of plain tags */}
        <HoverEffect items={expertise} />
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center py-12 bg-secondary/40 rounded-xl"
      >
        <h2 className="text-2xl font-semibold mb-2">Ready to Build?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Discover how Remtech Labs can help transform your ideas into impact.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 transition"
        >
          Get in Touch
        </Link>
      </motion.section>
    </div>
  );
};

export default AboutPageContent;
