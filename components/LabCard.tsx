import React from "react";
import Link from "next/link";
import { LabProjectProps, statusConfig } from "@/utils/labs";

export default function LabCard({
  title,
  description,
  status,
  demoUrl,
  dateCreated,
  tags
}: LabProjectProps) {
  const statusInfo = statusConfig[status];

  return (
    <div className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-3 mb-3">
            <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
              status === 'live' ? 'bg-green-400/20 text-green-400' :
              status === 'development' ? 'bg-yellow-400/20 text-yellow-400' :
              status === 'experimental' ? 'bg-purple-400/20 text-purple-400' :
              'bg-gray-400/20 text-gray-400'
            }`}>
              <span>{statusInfo.icon}</span>
              {statusInfo.label}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs bg-cyan-400/10 text-cyan-400 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
        <div className="text-xs text-gray-500">
          Created: {new Date(dateCreated).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </div>
        
        <div className="flex items-center gap-3">
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-cyan-400 border border-cyan-400/30 rounded-md hover:bg-cyan-400/10 transition-all duration-200"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </Link>
          )}
          
        </div>
      </div>
    </div>
  );
}
