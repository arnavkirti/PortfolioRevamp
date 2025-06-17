import ProjectCard, { ProjectProps } from "./ProjectCard";

interface ProjectsGridProps {
  projects: ProjectProps[];
  title?: string;
  emptyMessage?: string;
  emptyDescription?: string;
  onClearFilters?: () => void;
  showClearFilters?: boolean;
}

export default function ProjectsGrid({ 
  projects, 
  title,
  emptyMessage = "No projects found",
  emptyDescription = "Try adjusting your filter criteria.",
  onClearFilters,
  showClearFilters = false
}: ProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-6 text-gray-600">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
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
      
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title || index} {...project} />
        ))}
      </div>
    </div>
  );
}
