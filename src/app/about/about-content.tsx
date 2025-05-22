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

const features = [
  {
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    title: "Strategic Efficiency",
    desc: "Streamlined tech delivery that scales with you.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-primary" />,
    title: "Accelerated Growth",
    desc: "LLMs and Web3 apps to fast-track your innovation.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Transparent Communication",
    desc: "Full visibility with structured collaboration.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Security-First",
    desc: "Privacy, trust, and compliance by design.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Optimized Investment",
    desc: "High ROI through precision planning and build.",
  },
  {
    icon: <Settings2 className="w-6 h-6 text-primary" />,
    title: "Adaptive Engineering",
    desc: "Flexible architecture for evolving use cases.",
  },
];

const AboutPageContent = () => {
  return (
    <div className="space-y-24">
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
        className="px-4 md:px-0"
      >
        <div className="text-center mb-12">
          <span className="text-sm uppercase text-primary font-semibold tracking-wider">
            Our Approach
          </span>
          <h2 className="text-3xl font-bold mt-2">Built for Impact</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-xl border bg-card p-6 text-center hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Our Expertise */}
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

        <div className="flex flex-wrap justify-center gap-3 text-sm text-primary-foreground/80">
          {[
            "AI Systems",
            "LLMs",
            "Web3",
            "Mobile",
            "Cloud Infrastructure",
            "Security",
            "Data Strategy",
          ].map((tag, i) => (
            <span
              key={i}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
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
