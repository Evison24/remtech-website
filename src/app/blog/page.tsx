import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Remtech Labs",
  description:
    "Read the latest insights and articles on software development, AI, blockchain, and more from Remtech Labs.",
};

// Placeholder blog post data
const blogPosts = [
  {
    slug: "understanding-llms",
    title: "Understanding Large Language Models (LLMs)",
    date: "2025-04-28",
    excerpt:
      "A deep dive into how Large Language Models work and their potential applications in business...",
  },
  {
    slug: "react-native-vs-native",
    title: "React Native vs. Native Development: Choosing the Right Path",
    date: "2025-04-20",
    excerpt:
      "Exploring the pros and cons of using React Native compared to traditional native development for iOS and Android...",
  },
  {
    slug: "web3-security-best-practices",
    title: "Top Security Practices for Web3 Development",
    date: "2025-04-15",
    excerpt:
      "Ensuring the security of your decentralized applications is crucial. Here are some best practices...",
  },
];

const BlogListPage = () => {
  return (
    <div className="min-h-screen px-4 md:px-10 py-12 space-y-16">
      {/* Hero Header */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background rounded-xl shadow-sm">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Remtech Labs Blog
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Stay updated with the latest insights in software development, AI,
          Web3, and mobile technologies.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border rounded-xl p-6 bg-card hover:shadow-lg transition"
            >
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <h2 className="text-xl font-semibold group-hover:underline text-foreground">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-sm font-medium text-primary hover:underline">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogListPage;
