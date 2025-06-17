"use client";
import React, { useState } from "react";
import { 
  getAllBlogPosts, 
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
  const allBlogPosts = getAllBlogPosts();
  const allTags = getAllTags();
  const blogStats = getBlogStats();

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
      <div className="max-w-2xl mx-auto px-6 sm:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Blog
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Thoughts on blockchain development, Web3 innovation, and the future of decentralized technology.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <BlogSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search posts..."
          />

          {/* Tags Filter */}
          <TagFilter
            tags={allTags}
            selectedTag={selectedTag}
            onTagChange={setSelectedTag}
            allLabel="All Posts"
          />
        </div>

        {/* Posts Grid */}
        <BlogPostsGrid
          posts={filteredPosts}
          emptyMessage="No posts found"
          emptyDescription={getEmptyDescription()}
          onClearFilters={handleClearFilters}
          showClearFilters={!!(searchTerm || selectedTag)}
        />

        {/* Stats Section */}
        <BlogStats stats={blogStats} />
      </div>
    </div>
  );
}
