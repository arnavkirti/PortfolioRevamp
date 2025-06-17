"use client";
import React, { useState } from "react";
import { 
  getAllProjects, 
  getFeaturedProjects, 
  getProjectStats, 
  projectCategories 
} from "@/utils/projects";
import { CategoryFilter } from "@/components/ProjectFilters";
import ProjectStats from "@/components/ProjectStats";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get data using utility functions
  const allProjects = getAllProjects();
  const featuredProjects = getFeaturedProjects();
  const projectStats = getProjectStats();

  // Filter projects based on selected category only
  const filteredProjects = selectedCategory === "all" 
    ? allProjects 
    : allProjects.filter(project => {
        // Simple category matching logic here
        const title = project.title.toLowerCase();
        switch (selectedCategory) {
          case "defi":
            return title.includes("defi") || title.includes("yield") || title.includes("farming");
          case "nft":
            return title.includes("nft") || title.includes("marketplace");
          case "infrastructure":
            return title.includes("bridge") || title.includes("infrastructure");
          default:
            return true;
        }
      });

  // Handle filter clearing
  const handleClearFilters = () => {
    setSelectedCategory("all");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Projects
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            A collection of blockchain projects, DeFi protocols, and Web3 applications I&apos;ve built with modern technologies.
          </p>
        </div>

        {/* Stats Section */}
        <ProjectStats stats={projectStats} variant="minimal" />

        {/* Filter Section - Only show if there are multiple categories */}
        <div className="mb-16 space-y-6">
          {/* Only show category filter if needed */}
          {projectCategories.length > 3 && (
            <CategoryFilter
              categories={projectCategories.slice(0, 4)} // Limit to most important categories
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          )}
        </div>

        {/* Featured Projects */}
        {selectedCategory === "all" && featuredProjects.length > 0 && (
          <div className="mb-16">
            <ProjectsGrid
              projects={featuredProjects}
              title="Featured Projects"
            />
          </div>
        )}

        {/* All Projects */}
        <ProjectsGrid
          projects={filteredProjects}
          title={selectedCategory === "all" ? "All Projects" : "Projects"}
          emptyMessage="No projects found"
          emptyDescription="Check back for new projects."
          onClearFilters={handleClearFilters}
          showClearFilters={selectedCategory !== "all"}
        />

        {/* Call to Action */}
        <div className="mt-20 pt-12 border-t border-zinc-800/50 text-center">
          <h3 className="text-xl font-semibold mb-4">Interested in collaborating?</h3>
          <p className="text-gray-400 mb-6">
            I&apos;m always open to discussing new opportunities and innovative blockchain projects.
          </p>
          <a
            href="mailto:arnav.tkd@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-zinc-900 font-medium rounded-lg hover:bg-cyan-300 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
