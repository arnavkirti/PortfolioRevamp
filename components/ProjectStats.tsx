interface ProjectStatsProps {
  stats: {
    total: number;
    completed: number;
    inProgress: number;
    planning?: number;
    featured?: number;
  };
  variant?: 'default' | 'compact' | 'minimal';
}

export default function ProjectStats({ stats, variant = 'default' }: ProjectStatsProps) {
  if (variant === 'minimal') {
    return (
      <div className="flex justify-center items-center gap-12 mb-20">
        <div className="text-center">
          <div className="text-4xl font-light text-white mb-2 tracking-wide">
            {stats.total}
          </div>
          <div className="text-xs uppercase tracking-widest text-gray-600 font-medium">Projects</div>
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
        <div className="text-center">
          <div className="text-4xl font-light text-white mb-2 tracking-wide">
            {stats.completed}
          </div>
          <div className="text-xs uppercase tracking-widest text-gray-600 font-medium">Completed</div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="grid grid-cols-3 gap-6 mb-12">
        <div className="text-center">
          <div className="text-2xl font-bold text-cyan-400 mb-1">
            {stats.total}
          </div>
          <div className="text-sm text-gray-400">Total Projects</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400 mb-1">
            {stats.completed}
          </div>
          <div className="text-sm text-gray-400">Completed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400 mb-1">
            {stats.inProgress}
          </div>
          <div className="text-sm text-gray-400">In Progress</div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl mb-12">
      <div className="text-center">
        <div className="text-3xl font-bold text-cyan-400 mb-2">
          {stats.total}
        </div>
        <div className="text-sm text-gray-400">Total Projects</div>
      </div>
      
      <div className="text-center">
        <div className="text-3xl font-bold text-green-400 mb-2">
          {stats.completed}
        </div>
        <div className="text-sm text-gray-400">Completed</div>
      </div>
      
      <div className="text-center">
        <div className="text-3xl font-bold text-yellow-400 mb-2">
          {stats.inProgress}
        </div>
        <div className="text-sm text-gray-400">In Progress</div>
      </div>
      
      {stats.planning !== undefined && (
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">
            {stats.planning}
          </div>
          <div className="text-sm text-gray-400">Planning</div>
        </div>
      )}
      
      {stats.featured !== undefined && (
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">
            {stats.featured}
          </div>
          <div className="text-sm text-gray-400">Featured</div>
        </div>
      )}
    </div>
  );
}
