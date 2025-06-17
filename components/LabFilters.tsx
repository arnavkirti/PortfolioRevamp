import React from "react";
import { labCategories, statusConfig } from "@/utils/labs";
import { LabProjectProps } from "@/utils/labs";

interface LabFiltersProps {
  selectedCategory: string;
  selectedStatus: LabProjectProps['status'] | null;
  onCategoryChange: (category: string) => void;
  onStatusChange: (status: LabProjectProps['status'] | null) => void;
}

export default function LabFilters({
  selectedCategory,
  selectedStatus,
  onCategoryChange,
  onStatusChange
}: LabFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-medium text-gray-400 mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {labCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-cyan-400 text-zinc-900 border-cyan-400"
                  : "bg-zinc-900/50 text-gray-400 border-zinc-800/50 hover:bg-zinc-800/50 hover:border-zinc-700/50"
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Status Filter */}
      <div>
        <h3 className="text-sm font-medium text-gray-400 mb-3">Status</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onStatusChange(null)}
            className={`px-3 py-1.5 text-xs rounded-md border transition-all duration-200 ${
              !selectedStatus
                ? "bg-zinc-700 text-white border-zinc-600"
                : "bg-zinc-900/50 text-gray-500 border-zinc-800/50 hover:bg-zinc-800/50"
            }`}
          >
            All Status
          </button>
          
          {Object.entries(statusConfig).map(([status, config]) => (
            <button
              key={status}
              onClick={() => onStatusChange(status as LabProjectProps['status'])}
              className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs rounded-md border transition-all duration-200 ${
                selectedStatus === status
                  ? "bg-zinc-700 text-white border-zinc-600"
                  : "bg-zinc-900/50 text-gray-500 border-zinc-800/50 hover:bg-zinc-800/50"
              }`}
            >
              <span>{config.icon}</span>
              {config.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
