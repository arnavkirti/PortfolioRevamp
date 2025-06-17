import React from "react";

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagChange: (tag: string | null) => void;
  allLabel?: string;
}

export default function TagFilter({ 
  tags, 
  selectedTag, 
  onTagChange,
  allLabel = "All Posts"
}: TagFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        onClick={() => onTagChange(null)}
        className={`px-4 py-2 text-sm rounded-lg border transition-all duration-200 ${
          !selectedTag
            ? "bg-cyan-400 text-zinc-900 border-cyan-400"
            : "bg-zinc-900/50 text-gray-400 border-zinc-800/50 hover:bg-zinc-800/50 hover:border-zinc-700/50"
        }`}
      >
        {allLabel}
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={`px-4 py-2 text-sm rounded-lg border transition-all duration-200 ${
            selectedTag === tag
              ? "bg-cyan-400 text-zinc-900 border-cyan-400"
              : "bg-zinc-900/50 text-gray-400 border-zinc-800/50 hover:bg-zinc-800/50 hover:border-zinc-700/50"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
