import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

// Placeholder blog post data (reuse or import)
const blogPosts = [
  {
    slug: 'understanding-llms',
    title: 'Understanding Large Language Models (LLMs)',
    date: '2025-04-28',
    excerpt: 'A deep dive into how Large Language Models work and their potential applications in business...',
    content: `
<p>Large Language Models (LLMs) have taken the world by storm, demonstrating remarkable capabilities in understanding and generating human-like text. But what exactly are they, and how do they work?</p>

<h2>The Basics of LLMs</h2>
<p>At their core, LLMs are sophisticated neural networks trained on vast amounts of text data. They learn patterns, grammar, facts, and reasoning abilities from this data. The 'large' in LLM refers to both the massive datasets used for training and the enormous number of parameters (connections between neurons) within the model, often numbering in the billions or even trillions.</p>

<h2>How They Learn</h2>
<p>LLMs typically use a transformer architecture, which employs mechanisms like self-attention to weigh the importance of different words in the input text when generating output. During training, they predict the next word in a sequence, constantly refining their parameters to improve accuracy. This process allows them to develop a deep understanding of language nuances.</p>

<h2>Applications in Business</h2>
<ul>
  <li><strong>Content Creation:</strong> Generating marketing copy, articles, emails, and reports.</li>
  <li><strong>Customer Service:</strong> Powering chatbots and virtual assistants for instant support.</li>
  <li><strong>Data Analysis:</strong> Summarizing large documents, extracting key information, and identifying trends.</li>
  <li><strong>Code Generation:</strong> Assisting developers by writing or suggesting code snippets.</li>
</ul>

<h2>Challenges and Future</h2>
<p>Despite their power, LLMs face challenges like potential biases inherited from training data, generating inaccurate information ('hallucinations'), and high computational costs. Ongoing research focuses on improving accuracy, fairness, efficiency, and controllability.</p>

<p>The future of LLMs promises even more integration into various aspects of our lives and work, driving innovation across industries.</p>
`,
  },
  {
    slug: 'react-native-vs-native',
    title: 'React Native vs. Native Development: Choosing the Right Path',
    date: '2025-04-20',
    excerpt: 'Exploring the pros and cons of using React Native compared to traditional native development for iOS and Android...',
    content: `
<p>When building a mobile application, one of the fundamental decisions is choosing the development approach: React Native or native (iOS/Android)? Both have their strengths and weaknesses.</p>

<h2>What is Native Development?</h2>
<p>Native development involves building separate applications for each platform (iOS and Android) using their respective official languages and tools (Swift/Objective-C for iOS, Kotlin/Java for Android). This approach offers the best possible performance, direct access to all device features, and adherence to platform-specific UI/UX conventions.</p>

<h2>What is React Native?</h2>
<p>React Native is a framework developed by Facebook that allows developers to build mobile apps using JavaScript and React. It compiles to native components, enabling a single codebase to run on both iOS and Android. The key benefit is 'write once, deploy everywhere,' significantly reducing development time and cost.</p>

<h2>Key Differences</h2>
<div class="overflow-x-auto">
  <table class="w-full border-collapse border border-border my-4 min-w-[600px]"> {/* Added overflow container and min-width */} 
    <thead>
      <tr class="bg-muted">
        <th class="border border-border p-2 text-left">Feature</th>
        <th class="border border-border p-2 text-left">Native</th>
        <th class="border border-border p-2 text-left">React Native</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-border p-2">Performance</td>
        <td class="border border-border p-2">Highest</td>
        <td class="border border-border p-2">Very Good (near-native)</td>
      </tr>
      <tr>
        <td class="border border-border p-2">Development Time</td>
        <td class="border border-border p-2">Longer (separate codebases)</td>
        <td class="border border-border p-2">Faster (shared codebase)</td>
      </tr>
      <tr>
        <td class="border border-border p-2">Cost</td>
        <td class="border border-border p-2">Higher</td>
        <td class="border border-border p-2">Lower</td>
      </tr>
      <tr>
        <td class="border border-border p-2">Access to Native Features</td>
        <td class="border border-border p-2">Full & Immediate</td>
        <td class="border border-border p-2">Good (may require bridges for newest features)</td>
      </tr>
      <tr>
        <td class="border border-border p-2">UI Consistency</td>
        <td class="border border-border p-2">Platform-Specific</td>
        <td class="border border-border p-2">Consistent across platforms (can be customized)</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>When to Choose Which?</h2>
<p><strong>Choose Native if:</strong></p>
<ul>
  <li>Maximum performance is critical (e.g., complex games, heavy computations).</li>
  <li>You need immediate access to the very latest platform-specific features.</li>
  <li>You want distinct UIs perfectly matching each platform's guidelines.</li>
</ul>
<p><strong>Choose React Native if:</strong></p>
<ul>
  <li>You need to launch on both platforms quickly and cost-effectively.</li>
  <li>Most of your app's functionality doesn't require deep native integrations.</li>
  <li>Your development team is proficient in JavaScript and React.</li>
</ul>

<p>Ultimately, the choice depends on your project's specific requirements, budget, timeline, and team expertise. Remtech Labs offers expertise in both approaches to help you make the right decision.</p>
`,
  },
   {
    slug: 'web3-security-best-practices',
    title: 'Top Security Practices for Web3 Development',
    date: '2025-04-15',
    excerpt: 'Ensuring the security of your decentralized applications is crucial. Here are some best practices...',
    content: `
<p>The decentralized nature of Web3 brings immense potential but also unique security challenges. Protecting user assets and maintaining trust requires a rigorous approach to security throughout the development lifecycle.</p>

<h2>Smart Contract Security</h2>
<ul>
    <li><strong>Audits:</strong> Always have your smart contracts audited by reputable third-party security firms before deployment.</li>
    <li><strong>Testing:</strong> Implement comprehensive unit and integration tests covering all functions and edge cases. Use tools like Hardhat or Truffle.</li>
    <li><strong>Known Vulnerabilities:</strong> Be aware of common attack vectors like reentrancy, integer overflow/underflow, front-running, and access control issues. Use established libraries like OpenZeppelin contracts.</li>
    <li><strong>Simplicity:</strong> Keep contracts as simple as possible. Complexity increases the attack surface.</li>
    <li><strong>Upgradability:</strong> Use proxy patterns (like UUPS or Transparent Proxies) carefully to allow for bug fixes, but be mindful of the governance risks they introduce.</li>
</ul>

<h2>Frontend Security</h2>
<ul>
    <li><strong>Input Validation:</strong> Sanitize and validate all user inputs rigorously to prevent injection attacks.</li>
    <li><strong>Secure Wallet Interaction:</strong> Use established libraries (e.g., ethers.js, web3.js) for interacting with user wallets. Never ask for private keys.</li>
    <li><strong>Phishing Prevention:</strong> Educate users about phishing risks. Clearly display contract addresses and transaction details before users sign.</li>
    <li><strong>Dependency Management:</strong> Keep frontend dependencies updated and audit them for vulnerabilities.</li>
</ul>

<h2>Infrastructure & Operations Security</h2>
<ul>
    <li><strong>Private Key Management:</strong> Securely manage deployer keys and admin keys using hardware wallets or multi-sig solutions. Never commit private keys to version control.</li>
    <li><strong>Monitoring & Alerting:</strong> Implement real-time monitoring for unusual contract activity and set up alerts.</li>
    <li><strong>Incident Response Plan:</strong> Have a clear plan in place for how to respond to security incidents, including pausing contracts if necessary.</li>
    <li><strong>Oracles:</strong> If using oracles for external data, ensure they are reliable and resistant to manipulation. Chainlink is a common choice.</li>
</ul>

<p>Web3 security is an ongoing process, not a one-time task. Staying informed about new threats and continuously improving your security posture is essential for building trustworthy decentralized applications.</p>
`,
  },
];

// Function to get blog post data by slug
const getPostData = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
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
  const post = getPostData(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found - Remtech Labs',
    };
  }

  return {
    title: `${post.title} - Remtech Labs Blog`,
    description: post.excerpt,
    // Add other metadata like open graph tags
  };
}

// Component to render the blog post page
const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  const post = getPostData(params.slug);

  if (!post) {
    notFound(); // Trigger 404 page if post not found
  }

  return (
    <article className="prose prose-invert max-w-none mx-auto dark:prose-invert lg:prose-lg xl:prose-xl">
      {/* Article Header */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight !mb-2">{post.title}</h1>
        <p className="text-sm text-foreground/60">
          Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>

      {/* Article Content */}
      {/* Use dangerouslySetInnerHTML for placeholder HTML content */}
      {/* In a real app, use MDX or a safer rendering method */}
      {/* Added prose-table:border to style table borders within prose */}
      <div className="prose-table:border prose-td:border prose-th:border prose-td:p-2 prose-th:p-2" dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* Back to Blog Link */}
      <div className="mt-12 pt-8 border-t">
        <Link href="/blog" className="text-primary hover:underline">
          ← Back to Blog List
        </Link>
      </div>
    </article>
  );
};

export default BlogPostPage;

