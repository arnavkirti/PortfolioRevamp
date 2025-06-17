"use client";
import React, { useState } from "react";
import { 
  getAllLabProjects, 
  getFeaturedLabProjects, 
  getLabStats, 
  searchLabProjects
} from "@/utils/labs";
import LabSearch from "@/components/LabSearch";
import LabStats from "@/components/LabStats";
import LabsGrid from "@/components/LabsGrid";

export default function LabsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Get data using utility functions
  const allLabProjects = getAllLabProjects();
  const featuredProjects = getFeaturedLabProjects();
  const labStats = getLabStats();

  // Filter projects based on search only
  const filteredProjects = searchTerm 
    ? searchLabProjects(searchTerm)
    : allLabProjects;

  // Handle filter clearing
  const handleClearFilters = () => {
    setSearchTerm("");
  };

  // Dynamic empty state description
  const getEmptyDescription = () => {
    if (searchTerm) {
      return "Try different search terms or browse all experiments.";
    }
    return "Check back later for new experiments and dev tools.";
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            🧪 Labs
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Experimental projects, dev tools, mini-apps, and prototypes. A playground for testing new ideas and building useful utilities.
          </p>
        </div>

        {/* Stats Section */}
        <LabStats stats={labStats} variant="minimal" />

        {/* Search Section */}
        <div className="mb-16">
          <LabSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search lab projects..."
          />
        </div>

        {/* Featured Projects */}
        {!searchTerm && featuredProjects.length > 0 && (
          <div className="mb-16">
            <LabsGrid
              projects={featuredProjects}
              title="⭐ Featured Labs"
            />
          </div>
        )}

        {/* All Projects */}
        <LabsGrid
          projects={filteredProjects}
          title={searchTerm ? `Search Results for "${searchTerm}"` : "All Labs"}
          emptyMessage="No lab projects found"
          emptyDescription={getEmptyDescription()}
          onClearFilters={handleClearFilters}
          showClearFilters={!!searchTerm}
        />

        {/* Call to Action */}
        <div className="mt-20 pt-12 border-t border-zinc-800/50 text-center">
          <h3 className="text-xl font-semibold mb-4">Have an idea for a lab project?</h3>
          <p className="text-gray-400 mb-6">
            I&apos;m always experimenting with new tools and concepts. Suggestions and collaborations are welcome!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:arnav.tkd@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-zinc-900 font-medium rounded-lg hover:bg-cyan-300 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Share an idea
            </a>
            <a
              href="https://github.com/arnavkirti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white font-medium rounded-lg hover:bg-zinc-700 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
