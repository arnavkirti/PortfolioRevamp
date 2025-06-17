import Image from "next/image";

export interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  status: "completed" | "in-progress" | "planning";
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl, 
  imageUrl, 
  featured = false,
  status 
}: ProjectProps) {
  const getStatusColor = () => {
    switch (status) {
      case "completed": return "text-green-400";
      case "in-progress": return "text-yellow-400";
      case "planning": return "text-blue-400";
      default: return "text-gray-400";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "planning": return "Planning";
      default: return status;
    }
  };

  return (
    <article className={`group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl overflow-hidden hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 ${featured ? 'ring-1 ring-cyan-400/20' : ''}`}>
      {/* Project Image/Preview */}
      <div className="h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
        {imageUrl ? (
          <Image 
          width={400}
            height={200}
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 text-zinc-600">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-md bg-zinc-900/80 backdrop-blur-sm ${getStatusColor()}`}>
            {getStatusText()}
          </span>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium rounded-md bg-cyan-400/20 text-cyan-400 backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-zinc-800/50 text-xs text-gray-400 rounded-md border border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 py-1 text-xs text-gray-500">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 text-gray-300 text-sm rounded-lg border border-zinc-700/50 hover:bg-zinc-700/50 hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </a>
          )}
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-zinc-900 text-sm rounded-lg hover:bg-cyan-300 transition-all duration-200 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
