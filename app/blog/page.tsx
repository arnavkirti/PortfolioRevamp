"use client";
import React, { useState } from "react";
import { 
  getAllTags, 
  filterBlogPosts, 
  getBlogStats 
} from "@/utils/blog";
import BlogSearch from "@/components/BlogSearch";
import TagFilter from "@/components/TagFilter";
import BlogStats from "@/components/BlogStats";
import BlogPostsGrid from "@/components/BlogPostsGrid";

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Get data using utility functions
  const blogStats = getBlogStats();
  const allTags = getAllTags();

  // Filter posts based on search and tag
  const filteredPosts = filterBlogPosts(searchTerm, selectedTag);

  // Handle filter clearing
  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedTag(null);
  };

  // Dynamic empty state description
  const getEmptyDescription = () => {
    if (searchTerm || selectedTag) {
      return "Try adjusting your search or filter criteria.";
    }
    return "Check back later for new blog posts.";
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Blog
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Thoughts on blockchain development, Web3 innovation, and the future of decentralized technology.
          </p>
        </div>

        {/* Stats Section */}
        <BlogStats stats={blogStats} variant="minimal" />

        {/* Search Section */}
        <div className="mb-16 space-y-6">
          <BlogSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search posts..."
          />

          {/* Only show tag filter if there's a search or it's useful */}
          {allTags.length > 3 && (
            <TagFilter
              tags={allTags}
              selectedTag={selectedTag}
              onTagChange={setSelectedTag}
              allLabel="All Posts"
            />
          )}
        </div>

        {/* Posts Grid */}
        <BlogPostsGrid
          posts={filteredPosts}
          emptyMessage="No posts found"
          emptyDescription={getEmptyDescription()}
          onClearFilters={handleClearFilters}
          showClearFilters={!!(searchTerm || selectedTag)}
        />
      </div>
    </div>
  );
}
