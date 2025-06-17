import React from "react";
import { LabProjectProps } from "@/utils/labs";
import GasFeeCalculator from "./tools/GasFeeCalculator";
import WalletConnector from "./tools/WalletConnector";
import NFTMetadataGenerator from "./tools/NFTMetadataGenerator";
import SolidityFormatter from "./tools/SolidityFormatter";

interface InteractiveLabCardProps extends LabProjectProps {
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export default function InteractiveLabCard(props: InteractiveLabCardProps) {
  const {
    title,
    description,
    technologies,
    status,
    dateCreated,
    tags,
    isExpanded,
    onToggleExpand
  } = props;

  // Map project titles to their interactive components
  const getInteractiveComponent = () => {
    switch (title) {
      case "Gas Fee Calculator":
        return <GasFeeCalculator />;
      case "Wallet Connector Widget":
        return <WalletConnector />;
      case "NFT Metadata Generator":
        return <NFTMetadataGenerator />;
      case "Solidity Code Formatter":
        return <SolidityFormatter />;
      default:
        return (
          <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-6">
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 text-gray-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-400 mb-2">Interactive Demo Coming Soon</h4>
              <p className="text-gray-500 text-sm">
                This tool will have an interactive demo available soon.
              </p>
            </div>
          </div>
        );
    }
  };

  const statusConfig = {
    live: { label: "Live", color: "green", icon: "✅" },
    development: { label: "In Development", color: "yellow", icon: "🚧" },
    experimental: { label: "Experimental", color: "purple", icon: "🧪" },
    archived: { label: "Archived", color: "gray", icon: "📦" }
  };

  const statusInfo = statusConfig[status];

  return (
    <div className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl overflow-hidden transition-all duration-300">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-2 mb-3">
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
          
          <button
            onClick={onToggleExpand}
            className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <svg 
              className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-zinc-800/50 text-gray-300 rounded-md border border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 py-1 text-xs bg-zinc-800/50 text-gray-300 rounded-md border border-zinc-700/50">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

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
          
          <button
            onClick={onToggleExpand}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-cyan-400 border border-cyan-400/30 rounded-md hover:bg-cyan-400/10 transition-all duration-200"
          >
            {isExpanded ? (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Hide Demo
              </>
            ) : (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Try Demo
              </>
            )}
          </button>
        </div>
      </div>

      {/* Interactive Component */}
      {isExpanded && (
        <div className="border-t border-zinc-800/50 p-6 bg-zinc-950/50">
          {getInteractiveComponent()}
        </div>
      )}
    </div>
  );
}
