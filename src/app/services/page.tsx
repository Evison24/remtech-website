import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Remtech Labs',
  description: 'Explore the innovative services offered by Remtech Labs, including AI & LLM Development, Blockchain & Web3, Mobile Development, and Custom Web Applications.',
};

// Define service data (could be moved to a separate file/CMS later)
const services = [
  {
    slug: 'ai-llm-development',
    title: 'AI & LLM Development',
    description: 'Bespoke AI solutions designed for speed, precision, and transparency, including custom model building, fine-tuning, RAG, and distillation.',
    icon: '🧠', // Placeholder icon
  },
  {
    slug: 'blockchain-web3-development',
    title: 'Blockchain & Web3 Development',
    description: 'Harness decentralised technologies for secure, transparent platforms like metaverse casinos, DeFi, secure wallets, and asset tokenisation.',
    icon: '🔗', // Placeholder icon
  },
  {
    slug: 'mobile-development',
    title: 'Mobile Development (React Native)',
    description: 'Scalable, high-performance cross-platform mobile apps using React Native for efficiency and native-like experiences.',
    icon: '📱', // Placeholder icon
  },
  {
    slug: 'web-development',
    title: 'Web Development Services',
    description: 'Custom web applications, front-end and back-end development, PWAs, and full-stack solutions tailored to your business needs.',
    icon: '💻', // Placeholder icon
  },
   {
    slug: 'native-app-development',
    title: 'Native App Development',
    description: 'Bespoke mobile applications crafted for peak performance and user engagement on specific platforms (iOS/Android).',
    icon: '🎯', // Placeholder icon
  },
];

const ServicesOverviewPage = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Our Services</h1>
        <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
          At Remtech Labs, we harness cutting‑edge technologies to deliver innovative, reliable solutions tailored to your business needs. Explore our core service areas below.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="block p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-card">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{service.icon}</span>
                <h2 className="text-xl font-semibold text-card-foreground">{service.title}</h2>
              </div>
              <p className="text-sm text-card-foreground/80">
                {service.description}
              </p>
              <div className="mt-4 text-sm font-medium text-primary hover:underline">
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </section>

       {/* Optional: Call to Action */}
      <section className="text-center py-12 bg-secondary/50 rounded-lg mt-16">
        <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
        <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
          Let's discuss how our expertise can help you achieve your business goals.
        </p>
        <a href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default ServicesOverviewPage;

