import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Remtech Labs',
  description: 'Read the latest insights and articles on software development, AI, blockchain, and more from Remtech Labs.',
};

// Placeholder blog post data
const blogPosts = [
  {
    slug: 'understanding-llms',
    title: 'Understanding Large Language Models (LLMs)',
    date: '2025-04-28',
    excerpt: 'A deep dive into how Large Language Models work and their potential applications in business...',
  },
  {
    slug: 'react-native-vs-native',
    title: 'React Native vs. Native Development: Choosing the Right Path',
    date: '2025-04-20',
    excerpt: 'Exploring the pros and cons of using React Native compared to traditional native development for iOS and Android...',
  },
  {
    slug: 'web3-security-best-practices',
    title: 'Top Security Practices for Web3 Development',
    date: '2025-04-15',
    excerpt: 'Ensuring the security of your decentralized applications is crucial. Here are some best practices...',
  },
  // Add more placeholder posts as needed
];

const BlogListPage = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Remtech Labs Blog</h1>
        <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
          Stay updated with the latest trends, insights, and news in software development, AI, Web3, and mobile technologies.
        </p>
      </section>

      <section>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border-b pb-8 mb-8">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-foreground/60 mb-3">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="text-foreground/80 mb-4">
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
                Read More →
              </Link>
            </article>
          ))}
        </div>
        {/* Add pagination controls here later if needed */}
      </section>
    </div>
  );
};

export default BlogListPage;

