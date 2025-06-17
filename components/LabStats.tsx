import React from "react";

interface LabStatsProps {
  stats: {
    total: number;
    live: number;
    development: number;
    experimental: number;
    featured: number;
    byCategory: Record<string, number>;
    byComplexity: Record<string, number>;
  };
  variant?: 'default' | 'compact' | 'minimal';
}

export default function LabStats({ stats, variant = 'default' }: LabStatsProps) {
  if (variant === 'minimal') {
    return (
      <div className="flex justify-center items-center gap-12 mb-20">
        <div className="text-center">
          <div className="text-4xl font-light text-white mb-2 tracking-wide">
            {stats.total}
          </div>
          <div className="text-xs uppercase tracking-widest text-gray-600 font-medium">Experiments</div>
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
        <div className="text-center">
          <div className="text-4xl font-light text-white mb-2 tracking-wide">
            {stats.live}
          </div>
          <div className="text-xs uppercase tracking-widest text-gray-600 font-medium">Live Tools</div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="grid grid-cols-4 gap-4 mb-12">
        <div className="text-center">
          <div className="text-2xl font-bold text-cyan-400 mb-1">
            {stats.total}
          </div>
          <div className="text-sm text-gray-400">Total Labs</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400 mb-1">
            {stats.live}
          </div>
          <div className="text-sm text-gray-400">Live</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400 mb-1">
            {stats.development}
          </div>
          <div className="text-sm text-gray-400">In Dev</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400 mb-1">
            {stats.experimental}
          </div>
          <div className="text-sm text-gray-400">Experimental</div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl mb-12">
      <div className="text-center">
        <div className="text-3xl font-bold text-cyan-400 mb-2">
          {stats.total}
        </div>
        <div className="text-sm text-gray-400">Total Labs</div>
      </div>
      
      <div className="text-center">
        <div className="text-3xl font-bold text-green-400 mb-2">
          {stats.live}
        </div>
        <div className="text-sm text-gray-400">Live Projects</div>
      </div>
      
      <div className="text-center">
        <div className="text-3xl font-bold text-yellow-400 mb-2">
          {stats.development}
        </div>
        <div className="text-sm text-gray-400">In Development</div>
      </div>
      
      <div className="text-center">
        <div className="text-3xl font-bold text-purple-400 mb-2">
          {stats.experimental}
        </div>
        <div className="text-sm text-gray-400">Experimental</div>
      </div>
    </div>
  );
}
