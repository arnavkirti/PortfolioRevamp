import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPostBySlug, getAllBlogPosts, getBlogPostsByTag } from "@/utils/blog";
import { formatDate } from "@/utils/formatters";
import BlogContentRenderer from "@/components/BlogContentRenderer";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | Portfolio Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(', '),
    authors: [{ name: 'Your Name' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Your Name'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts by tags
  const relatedPosts = getBlogPostsByTag(post.tags?.[0] || "")
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m0 0l7-7m-7 7l7 7" />
          </svg>
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="px-3 py-1 text-xs bg-zinc-800/50 border border-zinc-700/50 rounded-full hover:bg-zinc-700/50 transition-colors duration-200"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <BlogContentRenderer slug={post.slug} />
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-zinc-800/50">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-xl hover:bg-zinc-800/50 transition-all duration-200"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="text-xs text-gray-500">
                    {formatDate(relatedPost.date)} • {relatedPost.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <div className="mt-20 pt-12 border-t border-zinc-800/50 text-center">
          <h3 className="text-xl font-semibold mb-4">Enjoyed this article?</h3>
          <p className="text-gray-400 mb-6">
            Follow me for more insights on blockchain development and Web3 innovation.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/blog"
              className="px-6 py-3 bg-cyan-400 text-zinc-900 font-medium rounded-lg hover:bg-cyan-300 transition-all duration-200"
            >
              Read More Articles
            </Link>
            <Link
              href="mailto:arnav.tkd@gmail.com"
              className="px-6 py-3 bg-zinc-800 text-white font-medium rounded-lg hover:bg-zinc-700 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all blog posts (optional for SSG)
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
