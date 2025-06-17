import React, { useState } from "react";

export default function SolidityFormatter() {
  const [code, setCode] = useState(`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract SimpleStorage{uint256 storedData;function set(uint256 x)public{storedData=x;}function get()public view returns(uint256){return storedData;}}`);

  const [formatted, setFormatted] = useState("");

  const formatSolidity = (input: string) => {
    let result = input;
    
    // Basic formatting rules
    result = result
      // Add line breaks after semicolons
      .replace(/;/g, ';\n')
      // Add line breaks after opening braces
      .replace(/{/g, '{\n')
      // Add line breaks before closing braces
      .replace(/}/g, '\n}')
      // Add line breaks after function declarations
      .replace(/\)\s*{/g, ') {\n')
      // Fix spacing around operators
      .replace(/(\w)=(\w)/g, '$1 = $2')
      .replace(/(\w)<(\w)/g, '$1 < $2')
      .replace(/(\w)>(\w)/g, '$1 > $2')
      .replace(/(\w)\+(\w)/g, '$1 + $2')
      .replace(/(\w)-(\w)/g, '$1 - $2')
      // Add proper spacing
      .replace(/pragma\s+solidity/gi, 'pragma solidity')
      .replace(/contract\s+/gi, 'contract ')
      .replace(/function\s+/gi, 'function ')
      .replace(/\s+public\s+/gi, ' public ')
      .replace(/\s+private\s+/gi, ' private ')
      .replace(/\s+internal\s+/gi, ' internal ')
      .replace(/\s+external\s+/gi, ' external ')
      .replace(/\s+view\s+/gi, ' view ')
      .replace(/\s+pure\s+/gi, ' pure ')
      .replace(/\s+returns\s*\(/gi, ' returns(');

    // Clean up multiple line breaks
    result = result.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Add proper indentation
    const lines = result.split('\n');
    let indentLevel = 0;
    const indentedLines = lines.map(line => {
      const trimmed = line.trim();
      if (!trimmed) return '';
      
      // Decrease indent for closing braces
      if (trimmed.startsWith('}')) {
        indentLevel = Math.max(0, indentLevel - 1);
      }
      
      const indented = '    '.repeat(indentLevel) + trimmed;
      
      // Increase indent after opening braces
      if (trimmed.endsWith('{')) {
        indentLevel++;
      }
      
      return indented;
    });
    
    return indentedLines.join('\n');
  };

  const handleFormat = () => {
    const formattedCode = formatSolidity(code);
    setFormatted(formattedCode);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formatted);
  };

  const suggestions = [
    "Use consistent indentation (4 spaces)",
    "Add spaces around operators",
    "Use descriptive variable names",
    "Add proper documentation",
    "Follow Solidity style guide"
  ];

  return (
    <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
        📝 Solidity Code Formatter
        <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded">DEV TOOL</span>
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Input Code
            </label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={12}
              className="w-full p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-white text-sm font-mono"
              placeholder="Paste your Solidity code here..."
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleFormat}
              className="px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400/30 transition-all"
            >
              ✨ Format Code
            </button>
            
            <button
              onClick={() => setCode("")}
              className="px-4 py-2 bg-zinc-700/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-zinc-600/50 transition-all"
            >
              🗑️ Clear
            </button>
          </div>

          {/* Best Practices */}
          <div className="bg-zinc-800/30 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Best Practices</h4>
            <ul className="space-y-1">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Output */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-300">
                Formatted Code
              </label>
              {formatted && (
                <button
                  onClick={handleCopy}
                  className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  📋 Copy
                </button>
              )}
            </div>
            
            <div className="relative">
              <pre className="w-full h-72 p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-white text-sm font-mono overflow-auto">
                {formatted || "Click 'Format Code' to see the result..."}
              </pre>
            </div>
          </div>

          {/* Analysis */}
          {formatted && (
            <div className="bg-zinc-800/30 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Analysis</h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Lines:</span>
                  <span className="text-white">{formatted.split('\n').length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Characters:</span>
                  <span className="text-white">{formatted.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Functions:</span>
                  <span className="text-white">{(formatted.match(/function\s+\w+/gi) || []).length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Contracts:</span>
                  <span className="text-white">{(formatted.match(/contract\s+\w+/gi) || []).length}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        💡 Basic formatter for Solidity code - use Prettier for production
      </div>
    </div>
  );
}
