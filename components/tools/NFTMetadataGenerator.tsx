import React, { useState, useMemo, useCallback } from "react";

interface NFTAttribute {
  trait_type: string;
  value: string;
  rarity?: number;
}

export default function NFTMetadataGenerator() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [attributes, setAttributes] = useState<NFTAttribute[]>([
    { trait_type: "Background", value: "Blue", rarity: 0 },
    { trait_type: "Body", value: "Human", rarity: 0 }
  ]);
  const [externalUrl, setExternalUrl] = useState("");

  const addAttribute = useCallback(() => {
    setAttributes(prev => [...prev, { trait_type: "", value: "", rarity: 0 }]);
  }, []);

  const updateAttribute = useCallback((index: number, field: keyof NFTAttribute, value: string | number) => {
    setAttributes(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }, []);

  const removeAttribute = useCallback((index: number) => {
    setAttributes(prev => prev.filter((_, i) => i !== index));
  }, []);

  const calculateRarity = useCallback((attribute: NFTAttribute): number => {
    if (!attribute.value || !attribute.trait_type) return 0;
    
    // More realistic rarity calculation
    const hash = attribute.trait_type + attribute.value;
    let hashValue = 0;
    for (let i = 0; i < hash.length; i++) {
      hashValue = ((hashValue << 5) - hashValue + hash.charCodeAt(i)) & 0xffffffff;
    }
    
    // Convert hash to rarity percentage (1% to 50%)
    const rarity = Math.abs(hashValue) % 4900 / 100 + 1;
    return Math.min(rarity, 50);
  }, []);

  const metadata = useMemo(() => {
    const validAttributes = attributes.filter(attr => attr.trait_type.trim() && attr.value.trim());
    
    return {
      name: name.trim() || "Untitled NFT",
      description: description.trim() || "A unique digital collectible",
      image: image.trim() || "ipfs://QmYourImageHashHere",
      attributes: validAttributes.map(attr => ({
        trait_type: attr.trait_type.trim(),
        value: attr.value.trim(),
        rarity_score: calculateRarity(attr)
      })),
      external_url: externalUrl.trim() || undefined,
      background_color: null,
      animation_url: null
    };
  }, [name, description, image, attributes, externalUrl, calculateRarity]);

  const metadataJson = useMemo(() => {
    return JSON.stringify(metadata, null, 2);
  }, [metadata]);

  const downloadMetadata = useCallback(() => {
    try {
      const blob = new Blob([metadataJson], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${(name || 'nft').replace(/[^a-z0-9]/gi, '_').toLowerCase()}-metadata.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading metadata:', error);
      alert('Error creating download. Please try again.');
    }
  }, [metadataJson, name]);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(metadataJson);
      alert('Metadata copied to clipboard!');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      alert('Copy failed. Please select and copy manually.');
    }
  }, [metadataJson]);

  const totalRarityScore = useMemo(() => {
    return metadata.attributes.reduce((sum, attr) => sum + (attr.rarity_score || 0), 0);
  }, [metadata.attributes]);

  const presetTraits = {
    "Background": ["Blue", "Red", "Green", "Purple", "Gold", "Rainbow"],
    "Body": ["Human", "Robot", "Alien", "Zombie", "Angel", "Demon"],
    "Eyes": ["Normal", "Laser", "Glowing", "Closed", "Wink", "Rainbow"],
    "Mouth": ["Smile", "Frown", "Open", "Tongue", "Fangs", "Grin"],
    "Accessory": ["Hat", "Glasses", "Crown", "Earrings", "Necklace", "None"]
  };

  const addPresetAttribute = useCallback((traitType: string, value: string) => {
    setAttributes(prev => {
      const existing = prev.find(attr => attr.trait_type === traitType);
      if (existing) {
        return prev.map(attr => 
          attr.trait_type === traitType ? { ...attr, value } : attr
        );
      } else {
        return [...prev, { trait_type: traitType, value, rarity: 0 }];
      }
    });
  }, []);

  return (
    <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
        🎨 NFT Metadata Generator
        <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded">UTILITY</span>
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              NFT Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Cool NFT #1"
              className="w-full p-2 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-white text-sm focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A unique digital collectible with special properties..."
              rows={3}
              className="w-full p-2 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-white text-sm focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 outline-none transition-all resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Image URL/IPFS Hash
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="ipfs://QmYourImageHash"
              className="w-full p-2 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-white text-sm focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              External URL (optional)
            </label>
            <input
              type="url"
              value={externalUrl}
              onChange={(e) => setExternalUrl(e.target.value)}
              placeholder="https://your-website.com"
              className="w-full p-2 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-white text-sm focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 outline-none transition-all"
            />
          </div>

          {/* Quick Presets */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Quick Add Traits
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {Object.entries(presetTraits).map(([traitType, values]) => (
                <div key={traitType} className="space-y-1">
                  <div className="text-gray-400 font-medium">{traitType}</div>
                  <div className="flex flex-wrap gap-1">
                    {values.map(value => (
                      <button
                        key={value}
                        onClick={() => addPresetAttribute(traitType, value)}
                        className="px-2 py-1 bg-zinc-800/50 hover:bg-cyan-400/20 text-gray-300 hover:text-cyan-400 rounded transition-all"
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Attributes */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-300">
                Custom Attributes
              </label>
              <button
                onClick={addAttribute}
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-400/10 px-2 py-1 rounded"
              >
                + Add Custom
              </button>
            </div>
            
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {attributes.map((attr, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={attr.trait_type}
                    onChange={(e) => updateAttribute(index, 'trait_type', e.target.value)}
                    placeholder="Trait type"
                    className="flex-1 p-2 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-white text-sm focus:ring-1 focus:ring-cyan-400/50 outline-none"
                  />
                  <input
                    type="text"
                    value={attr.value}
                    onChange={(e) => updateAttribute(index, 'value', e.target.value)}
                    placeholder="Value"
                    className="flex-1 p-2 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-white text-sm focus:ring-1 focus:ring-cyan-400/50 outline-none"
                  />
                  <button
                    onClick={() => removeAttribute(index)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded transition-all"
                    title="Remove attribute"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-300">JSON Preview</h4>
              <button
                onClick={copyToClipboard}
                className="text-xs text-cyan-400 hover:text-cyan-300 bg-cyan-400/10 px-2 py-1 rounded transition-all"
                title="Copy to clipboard"
              >
                📋 Copy
              </button>
            </div>
            <div className="bg-zinc-800/30 rounded-lg p-4 h-80 overflow-y-auto">
              <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono">
                {metadataJson}
              </pre>
            </div>
          </div>

          {/* Rarity Analysis */}
          {metadata.attributes.length > 0 && (
            <div className="bg-zinc-800/30 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-300 mb-2 flex items-center justify-between">
                Rarity Analysis
                <span className="text-xs text-cyan-400">
                  Total: {totalRarityScore.toFixed(1)}%
                </span>
              </h4>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {metadata.attributes.map((attr, index) => (
                  <div key={index} className="flex justify-between text-xs">
                    <span className="text-gray-400 truncate flex-1">
                      {attr.trait_type}: {attr.value}
                    </span>
                    <span className="text-cyan-400 ml-2">
                      {attr.rarity_score?.toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <button
              onClick={downloadMetadata}
              disabled={!name.trim()}
              className="flex-1 p-3 bg-cyan-400/20 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              📥 Download JSON
            </button>
            <button
              onClick={copyToClipboard}
              className="px-4 py-3 bg-zinc-800/50 text-gray-300 rounded-lg hover:bg-zinc-700/50 transition-all"
              title="Copy JSON"
            >
              📋
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span>💡 Generate ERC-721 compatible metadata for your NFT collections</span>
        <span>{metadata.attributes.length} attributes</span>
      </div>
    </div>
  );
}
