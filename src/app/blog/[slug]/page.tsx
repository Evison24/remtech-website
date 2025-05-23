// app/blog/[slug]/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

const blogPosts = [
  {
    slug: "understanding-llms",
    title: "Understanding Large Language Models (LLMs)",
    date: "2025-04-28",
    excerpt:
      "A deep dive into how Large Language Models work and their potential applications in business...",
    content: `<p>Large Language Models (LLMs)...</p>`, // trimmed for brevity
  },
  {
    slug: "react-native-vs-native",
    title: "React Native vs. Native Development: Choosing the Right Path",
    date: "2025-04-20",
    excerpt: "Exploring the pros and cons of using React Native...",
    content: `<p>When building a mobile application...</p>`, // trimmed
  },
  {
    slug: "web3-security-best-practices",
    title: "Top Security Practices for Web3 Development",
    date: "2025-04-15",
    excerpt:
      "Ensuring the security of your decentralized applications is crucial...",
    content: `<p>The decentralized nature of Web3...</p>`, // trimmed
  },
];

const getPostData = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
};

// ✅ REQUIRED for `output: 'export'`
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// Optional metadata
export async function generateMetadata(
  { params }: { params: { slug: string } },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const post = getPostData(params.slug);
  return post
    ? {
        title: `${post.title} - Remtech Labs Blog`,
        description: post.excerpt,
      }
    : {
        title: "Blog Post Not Found - Remtech Labs",
      };
}

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  const post = getPostData(params.slug);
  if (!post) return notFound();

  return (
    <article className="prose prose-invert max-w-none mx-auto dark:prose-invert lg:prose-lg xl:prose-xl">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {post.title}
        </h1>
        <p className="text-sm text-foreground/60">
          Published on{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>

      <div
        className="prose-table:border prose-td:border prose-th:border prose-td:p-2 prose-th:p-2"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-12 pt-8 border-t">
        <Link href="/blog" className="text-primary hover:underline">
          ← Back to Blog List
        </Link>
      </div>
    </article>
  );
};

export default BlogPostPage;
