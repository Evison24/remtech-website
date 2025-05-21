import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Remtech Labs',
  description: 'Learn about Remtech Labs mission, approach, and expertise in AI, mobile, and custom application solutions.',
};

const AboutPage = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6 tracking-tight">Welcome to Remtech Labs</h1>
        {/* Optional: Add Slogan here if provided or desired */}
        {/* <p className="text-xl text-foreground/80 mb-8">[Slogan Placeholder]</p> */}
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-foreground/70 leading-relaxed">
          We deliver enhanced collaboration between businesses and technology, giving you unparalleled control and clarity over your project timelines. This focus is the cornerstone of our success.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Our Approach</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Strategic Efficiency & Transparent Investment</h3>
            <p className="text-foreground/70 leading-relaxed">
              At Remtech Labs, we meticulously streamline our development processes to seamlessly align with your business objectives. Our transparent and detailed guidance from initial concept and problem-solving through to delivering scalable, dependable products helps you confidently navigate challenges, ensuring you extract maximum value from every investment.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Accelerated Growth & Optimized Expenditure</h3>
            <p className="text-foreground/70 leading-relaxed">
              Leveraging our deep expertise in Custom AI & App Development, LLM Engineering & Optimisation, Intelligent Model Distillation & Knowledge Transfer, and Blockchain & Web3 Development, we tailor each project precisely to your unique innovation objectives. This specialized approach empowers you to rapidly accelerate growth, stay ahead in evolving markets, and efficiently optimize your investment.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Enhanced Collaboration & Consistent Communication</h3>
            <p className="text-foreground/70 leading-relaxed">
              We strongly believe in the power of collaboration. Our structured approach promotes continuous engagement, open communication, and clear visibility across all stakeholders, ensuring you remain informed, involved, and empowered at every stage of the development lifecycle.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Our Expertise</h2>
        <p className="text-lg text-foreground/70 leading-relaxed">
          At Remtech Labs, we blend cutting-edge technology with deep domain expertise to transform your ideas into market-ready solutions. Whether you're looking to streamline app development, harness the power of large language models, or optimise AI performance through advanced distillation techniques, our team is here to bring your vision to life.
        </p>
        {/* Optionally list key expertise areas again or link to services */}
      </section>

      {/* Optional: Team Section Placeholder */}
      {/* <section>
        <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
        <p className="text-lg text-foreground/70">[Placeholder for team member profiles or description]</p>
      </section> */}

      {/* Optional: Call to Action */}
      <section className="text-center py-12 bg-secondary/50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Ready to Innovate?</h2>
        <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
          Explore how Remtech Labs can help you unlock your full potential and transform your business.
        </p>
        <a href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default AboutPage;

