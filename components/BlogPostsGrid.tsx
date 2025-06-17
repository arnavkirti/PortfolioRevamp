import React from "react";
import BlogPost, { BlogPostProps } from "./BlogPost";

interface BlogPostsGridProps {
  posts: BlogPostProps[];
  title?: string;
  emptyMessage?: string;
  emptyDescription?: string;
  onClearFilters?: () => void;
  showClearFilters?: boolean;
}

export default function BlogPostsGrid({
  posts,
  title,
  emptyMessage = "No posts found",
  emptyDescription = "Check back later for new blog posts.",
  onClearFilters,
  showClearFilters = false
}: BlogPostsGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-6 text-gray-600">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
            />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-gray-400 mb-2">
          {emptyMessage}
        </h3>
        <p className="text-gray-500 mb-4">
          {emptyDescription}
        </p>
        {showClearFilters && onClearFilters && (
          <button
            onClick={onClearFilters}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {title && (
        <h2 className="text-2xl font-bold mb-8 text-left">
          {title}
        </h2>
      )}
      
      {posts.map((post, index) => (
        <BlogPost key={post.slug || index} {...post} />
      ))}
    </div>
  );
}
