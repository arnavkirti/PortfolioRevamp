import React from "react";

interface BlogStatsProps {
  stats: {
    totalPosts: number;
    totalTags: number;
    avgReadTime: number;
    postsByMonth?: Record<string, number>;
  };
  variant?: 'default' | 'compact';
}

export default function BlogStats({ stats, variant = 'default' }: BlogStatsProps) {
  if (variant === 'compact') {
    return (
      <div className="grid grid-cols-3 gap-6 mb-12">
        <div className="text-center">
          <div className="text-2xl font-bold text-cyan-400 mb-1">
            {stats.totalPosts}
          </div>
          <div className="text-sm text-gray-400">Total Posts</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-cyan-400 mb-1">
            {stats.totalTags}
          </div>
          <div className="text-sm text-gray-400">Topics</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-cyan-400 mb-1">
            {stats.avgReadTime}
          </div>
          <div className="text-sm text-gray-400">Avg. Read</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 pt-12 border-t border-zinc-800/50">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-2xl font-bold text-cyan-400 mb-2">
            {stats.totalPosts}
          </div>
          <div className="text-sm text-gray-400">Total Posts</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-cyan-400 mb-2">
            {stats.totalTags}
          </div>
          <div className="text-sm text-gray-400">Topics Covered</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-cyan-400 mb-2">
            {stats.avgReadTime}
          </div>
          <div className="text-sm text-gray-400">Avg. Read Time</div>
        </div>
      </div>
    </div>
  );
}
