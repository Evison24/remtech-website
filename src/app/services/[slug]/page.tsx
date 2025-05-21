import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

// Re-use or import service data (ensure consistency with overview page)
const services = [
  {
    slug: 'ai-llm-development',
    title: 'AI & LLM Development Services',
    icon: '🧠',
    content: [
      {
        heading: 'Transform your organisation with bespoke AI solutions designed for speed, precision and complete transparency. Our end-to-end approach ensures rapid delivery, rigorous security and seamless integration into your existing workflows.',
        subsections: [
          { title: '1. Custom AI Application Development', text: 'Leverage our low‑code AI platform to bring your vision to market swiftly and cost‑effectively. Projects that traditionally require 6–12 months can be delivered in just weeks, without compromising on quality or performance.' },
          { title: '2. LLM Model Building & Fine‑Tuning', text: 'Model Building: We design and train proprietary large language models from the ground up, using only your data. This guarantees full explainability, maximum security and a model architecture tailored to your specific requirements. Fine‑Tuning: Enhance pre‑trained models such as Deepseek R1 or LLaMA 2 with your own labelled data. Through transfer learning, we adapt these models for specialised industry needs, improving accuracy, relevance and task‑specific performance.' },
          { title: '3. Prompt Enhancement & Tuning', text: 'Prompt Enhancement Tool: Optimise your input prompts with adversarial testing, auto‑regressive refinement and iterative feedback loops. The result is consistently more accurate, contextually relevant AI responses. Prompt Tuning System: Employ meta‑learning and hyperparameter tuning to discover optimal prompt structures and embeddings, fine‑tuning LLM outputs for your unique use cases.' },
          { title: '4. Retrieval‑Augmented Generation (RAG)', text: 'Integrate powerful neural retrievers with advanced generative models. Our RAG systems source relevant passages from vast external corpora in real time, enriching the model’s responses with precise, up‑to‑date information.' },
          { title: '5. Expert Response Enhancement', text: 'Post‑process LLM outputs using rule‑based algorithms, knowledge graphs and specialised classifiers. This extra layer of scrutiny boosts response accuracy, domain relevance and specificity for critical applications.' },
          { title: '6. Model Distillation & Knowledge Transfer', text: 'Teacher‑Student Distillation: Compress complex models into lightweight architectures. By training a smaller “student” network on the “teacher” model’s soft outputs, we retain essential expertise while reducing computational overhead. Open‑Source Model Distillation: Refine community‑driven LLMs with advanced knowledge from proprietary models. We transfer nuanced domain insights into open‑source frameworks, delivering cost‑effective models optimised for your tasks.' },
        ],
        cta: 'Ready to accelerate your AI journey? Contact us today to discuss how our tailored solutions can drive innovation and competitive advantage for your business.'
      }
    ]
  },
  {
    slug: 'blockchain-web3-development',
    title: 'Blockchain & Web3 Development Services',
    icon: '🔗',
    content: [
      {
        heading: 'Harness the transformative potential of decentralised technologies to build secure, transparent and scalable platforms. Our comprehensive Web3 services combine robust infrastructure with intuitive design to drive rapid innovation and ensure regulatory compliance.',
        subsections: [
          { title: 'Metaverse Casinos', text: 'Create immersive virtual gaming environments that blend social interaction with secure on‑chain transactions. We develop bespoke metaverse casinos featuring dynamic loyalty programmes, provably fair game mechanics and seamless wallet integration to enhance user engagement and lifetime value.' },
          { title: 'Decentralised Finance & Sports Betting', text: 'Revolutionise financial and wagering platforms with permissionless smart contracts and tamper‑proof ledgers. From modular DeFi dashboards to DLT‑powered sportsbooks, we deliver automated payouts, provable fairness and flexible back‑office systems for unmatched reliability.' },
          { title: 'Secure Crypto Wallets & Identity', text: 'Build next‑generation wallets with cross‑chain interoperability, multi‑factor authentication and on‑chain KYC compliance. Our identity solutions leverage zero‑knowledge proofs and verifiable credentials to protect privacy while meeting global regulatory requirements.' },
          { title: 'Real‑World Asset Tokenisation', text: 'Open new liquidity avenues by digitising tangible assets—real estate, art or bonds. We design tokenisation frameworks that automate issuance, governance and fractional ownership, all secured by immutable smart contracts.' },
          { title: 'Bespoke Token Engineering', text: 'Launch native tokens or stablecoins optimised for your ecosystem’s economics. Our services cover tokenomics consulting, smart contract development and audit‑ready deployment, ensuring seamless integration and regulatory adherence.' },
          { title: 'Interoperability & Blockchain-as-a-Service', text: 'Accelerate development with modular SDKs, cross‑chain bridges and managed BaaS platforms from leading cloud providers. Benefit from low‑latency performance, automatic scaling and enterprise‑grade service level agreements.' },
          { title: 'AI‑Enhanced Security & Insights', text: 'Augment blockchain with AI‑driven analytics to detect fraud, optimise transaction fees and forecast network trends. Our solutions employ machine learning for real‑time anomaly detection and predictive maintenance.' },
          { title: 'Compliance & Governance', text: 'Implement on‑chain governance mechanisms, automated compliance audits and transparent voting to meet evolving global standards. We build frameworks for treasury management, protocol upgrades and dynamic policy enforcement.' },
        ],
        cta: 'Ready to lead the Web3 revolution? Get in touch to discuss how our tailored Blockchain & Web3 development services can power your next‑generation platform.'
      }
    ]
  },
  {
    slug: 'mobile-development',
    title: 'Mobile Development Services (React Native)',
    icon: '📱',
    content: [
      {
        heading: 'Deliver exceptional mobile experiences with Remtech Labs’ expert React Native team. We create scalable, high-performance applications that look and feel native on both iOS and Android—using a single codebase to streamline development and reduce costs.',
        subsections: [
          { title: 'Why Choose React Native?', text: 'Cross-Platform Efficiency: Write once, deploy everywhere. Our approach minimises development time and budget by maintaining a unified codebase for both iOS and Android. Native Performance: Harness platform-specific components to achieve smooth animations, rapid load times and responsive interfaces comparable to fully native apps. Accelerated Iteration: Benefit from hot reloading and modular architecture to implement updates instantly, shorten testing cycles and deliver new features to market faster.' },
          { title: 'Our Expertise', text: 'Custom App Development: Tailored solutions built to your exact requirements, ensuring seamless integration with your business objectives and ecosystem. Migration & Modernisation: Revitalise legacy applications by migrating to React Native; enhancing maintainability, performance and future-proofing without sacrificing existing functionality. UI/UX Design & Optimisation: Blend user-centred design with rigorous performance tuning to create intuitive, engaging experiences that delight and retain users. Ongoing Support & Maintenance: Stay ahead with proactive monitoring, regular updates and comprehensive technical support—keeping your app secure, stable and up to date.' },
        ],
        cta: 'Ready to Transform Your Mobile Strategy? Partner with Remtech Labs to bring your mobile vision to life. Contact us today to discuss your project and discover how we can deliver robust, market-ready applications with speed and precision.'
      }
    ]
  },
  {
    slug: 'web-development',
    title: 'Web Development Services',
    icon: '💻',
    content: [
      {
        heading: 'Empower Your Digital Presence. Understanding Web & App Development Costs: At Remtech Labs, we demystify the complexities of web and app development, helping you make informed decisions that align with your budget and objectives. By breaking down each aspect of the project—from user interface design to server-side architecture, we ensure complete transparency, so you know exactly where your investment is going and why.',
        subsections: [
          { title: 'Key Cost Factors', text: 'Front‑End Development: Crafting the user interface and experience using frameworks like React, Vue.js or Angular. Factors such as custom animations, responsive layouts and accessibility requirements can influence the overall cost. Back‑End Development: Building the server‑side logic, APIs and database structures with technologies such as Node.js, Django or Laravel. The complexity of integrations, security protocols and scalability needs will affect development time and expenses. Quality Assurance & Testing: Implementing comprehensive testing—unit, integration and end‑to‑end—to ensure reliability, performance and security. Rigorous QA reduces post‑launch maintenance costs and protects your reputation. Hosting & Infrastructure: Selecting the right hosting environment—cloud, dedicated servers or hybrid solutions—based on traffic forecasts, compliance requirements and performance targets. Ongoing costs for servers, bandwidth and monitoring should be factored in.' },
          { title: 'Why Choose Web Applications?', text: 'Global Reach: Accessible from any device with a browser, web applications eliminate the need for separate native apps, widening your audience without multiplying development budgets. Cross‑Platform Compatibility: One codebase for desktop, tablet and mobile devices ensures consistency in user experience while reducing maintenance overhead. Scalability & Flexibility: Easily adapt and extend your web application as your business grows, with modular architectures that accommodate new features and integrations.' },
          { title: 'Our Expertise & Approach', text: 'At Remtech Labs, we combine technical excellence with a user‑centric mindset: Transparent Planning: We collaborate closely with you to define clear deliverables, timelines and milestones, ensuring there are no surprises along the way. Efficient Development: Leveraging agile methodologies and reusable components, we accelerate delivery without compromising on quality. Continuous Optimisation: From performance tuning to regular health checks, we proactively maintain and improve your application, safeguarding your long‑term investment.' },
          { title: 'Tailored Web Development Services', text: 'Front‑End Development: Responsive, accessible interfaces that captivate users and drive engagement. Back‑End Development: Secure, scalable server‑side systems with clean APIs and robust databases. Full‑Stack Solutions: Seamless integration of front‑end and back‑end components for cohesive user experiences. Progressive Web Apps (PWAs): Offline support, push notifications and native‑like performance—all within a browser. Ongoing Support & Maintenance: Regular updates, security patches and dedicated support to keep your application running smoothly.' },
        ],
        cta: 'Ready to transform your digital presence? Contact Remtech Labs today to discuss your project and discover how our cost‑effective web development services can drive growth and maximise your return on investment.'
      }
    ]
  },
   {
    slug: 'native-app-development',
    title: 'Native App Development Services',
    icon: '🎯',
    content: [
      {
        heading: 'Elevate your business with bespoke mobile applications crafted for peak performance and user engagement on specific platforms (iOS/Android).',
        // Add more detailed content from PDF if available
        subsections: [
            { title: 'Platform-Specific Expertise', text: 'Deep knowledge of iOS (Swift/Objective-C) and Android (Kotlin/Java) ecosystems to leverage unique platform capabilities.' },
            { title: 'Optimized Performance', text: 'Applications built for maximum speed, responsiveness, and efficiency, taking full advantage of native hardware.' },
            { title: 'Seamless User Experience', text: 'Adherence to platform-specific design guidelines (Human Interface Guidelines, Material Design) for intuitive and familiar user interfaces.' },
            { title: 'Full Hardware Access', text: 'Direct access to device features like camera, GPS, sensors, and more for richer application functionality.' },
        ],
        cta: 'Need a high-performance native application? Contact us to discuss your iOS or Android project requirements.'
      }
    ]
  },
];

// Function to get service data by slug
const getServiceData = (slug: string) => {
  return services.find((service) => service.slug === slug);
};

// Generate metadata dynamically
type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const service = getServiceData(slug);

  if (!service) {
    return {
      title: 'Service Not Found - Remtech Labs',
    };
  }

  return {
    title: `${service.title} - Remtech Labs`,
    description: `Learn more about Remtech Labs' ${service.title}. ${service.content[0]?.heading.substring(0, 150)}...`,
    // Add other metadata like open graph tags
  };
}

// Component to render the service page
const ServiceDetailPage = ({ params }: { params: { slug: string } }) => {
  const service = getServiceData(params.slug);

  if (!service) {
    notFound(); // Trigger 404 page if service not found
  }

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4">{service.icon}</span>
          <h1 className="text-4xl font-bold tracking-tight">{service.title}</h1>
        </div>
        {service.content.map((contentBlock, index) => (
          <div key={index} className="space-y-6">
            <p className="text-lg text-foreground/70 leading-relaxed mt-4">{contentBlock.heading}</p>
            {contentBlock.subsections.map((subsection, subIndex) => (
              <div key={subIndex}>
                <h2 className="text-2xl font-semibold mt-8 mb-3">{subsection.title}</h2>
                {/* Split text by newline characters for paragraphs */}
                {subsection.text.split('\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-foreground/70 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
            {contentBlock.cta && (
              <section className="text-center py-12 bg-secondary/50 rounded-lg mt-12">
                <h2 className="text-2xl font-semibold mb-4">Interested in {service.title}?</h2>
                <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                  {contentBlock.cta}
                </p>
                <a href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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

