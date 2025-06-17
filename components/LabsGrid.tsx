import React, { useState } from "react";
import InteractiveLabCard from "./InteractiveLabCard";
import { LabProjectProps } from "@/utils/labs";

interface LabsGridProps {
  projects: LabProjectProps[];
  title?: string;
  emptyMessage?: string;
  emptyDescription?: string;
  onClearFilters?: () => void;
  showClearFilters?: boolean;
}

export default function LabsGrid({
  projects,
  title,
  emptyMessage = "No lab projects found",
  emptyDescription = "Try adjusting your filter criteria or check back later for new experiments.",
  onClearFilters,
  showClearFilters = false
}: LabsGridProps) {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const toggleExpand = (projectTitle: string) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectTitle)) {
      newExpanded.delete(projectTitle);
    } else {
      newExpanded.add(projectTitle);
    }
    setExpandedProjects(newExpanded);
  };

  if (projects.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-6 text-gray-600">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
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
    <div>
      {title && (
        <h2 className="text-2xl font-bold mb-8 text-left">
          {title}
        </h2>
      )}
      
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <InteractiveLabCard 
            key={project.title || index} 
            {...project}
            isExpanded={expandedProjects.has(project.title)}
            onToggleExpand={() => toggleExpand(project.title)}
          />
        ))}
      </div>
    </div>
  );
}
