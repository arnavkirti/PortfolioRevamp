import React, { useState } from "react";

export default function GasFeeCalculator() {
  const [gasPrice, setGasPrice] = useState(20);
  const [gasLimit, setGasLimit] = useState(21000);
  const [ethPrice, setEthPrice] = useState(2300);
  const [priority, setPriority] = useState<'slow' | 'standard' | 'fast'>('standard');

  const priorityMultipliers = {
    slow: 0.8,
    standard: 1.0,
    fast: 1.4
  };

  const calculateFee = () => {
    const adjustedGasPrice = gasPrice * priorityMultipliers[priority];
    const feeInGwei = adjustedGasPrice * gasLimit;
    const feeInEth = feeInGwei / 1000000000;
    const feeInUsd = feeInEth * ethPrice;
    
    return {
      gwei: feeInGwei,
      eth: feeInEth,
      usd: feeInUsd
    };
  };

  const fee = calculateFee();

  const transactionTypes = [
    { name: "Simple Transfer", gas: 21000 },
    { name: "ERC-20 Transfer", gas: 65000 },
    { name: "Uniswap Swap", gas: 150000 },
    { name: "NFT Mint", gas: 80000 },
    { name: "Contract Deploy", gas: 2000000 }
  ];

  return (
    <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
        ⛽ Gas Fee Calculator
        <span className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded">LIVE</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Gas Price (Gwei)
            </label>
            <input
              type="range"
              min="1"
              max="200"
              value={gasPrice}
              onChange={(e) => setGasPrice(Number(e.target.value))}
              className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span className="text-cyan-400 font-medium">{gasPrice}</span>
              <span>200</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Priority Level
            </label>
            <div className="flex gap-2">
              {(['slow', 'standard', 'fast'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setPriority(level)}
                  className={`flex-1 py-2 px-3 text-xs rounded-md border transition-all ${
                    priority === level
                      ? 'bg-cyan-400/20 text-cyan-400 border-cyan-400/50'
                      : 'bg-zinc-800/50 text-gray-400 border-zinc-700/50 hover:bg-zinc-700/50'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Quick Select Transaction Type
            </label>
            <select
              value={gasLimit}
              onChange={(e) => setGasLimit(Number(e.target.value))}
              className="w-full p-2 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-white text-sm"
            >
              {transactionTypes.map((type) => (
                <option key={type.name} value={type.gas}>
                  {type.name} ({type.gas.toLocaleString()} gas)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              ETH Price (USD)
            </label>
            <input
              type="number"
              value={ethPrice}
              onChange={(e) => setEthPrice(Number(e.target.value))}
              className="w-full p-2 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-white text-sm"
              placeholder="2300"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="bg-zinc-800/30 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Transaction Cost</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Gas:</span>
                <span className="text-white font-mono text-sm">{fee.gwei.toFixed(0)} Gwei</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">ETH:</span>
                <span className="text-cyan-400 font-mono text-sm">{fee.eth.toFixed(6)} ETH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">USD:</span>
                <span className="text-green-400 font-mono text-sm font-bold">${fee.usd.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800/30 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Breakdown</h4>
            <div className="space-y-1 text-xs text-gray-400">
              <div>Gas Limit: {gasLimit.toLocaleString()}</div>
              <div>Base Gas Price: {gasPrice} Gwei</div>
              <div>Priority Multiplier: {priorityMultipliers[priority]}x</div>
              <div>Final Gas Price: {(gasPrice * priorityMultipliers[priority]).toFixed(1)} Gwei</div>
            </div>
          </div>

          <div className="text-xs text-gray-500">
            💡 Tip: Higher gas prices = faster confirmation
          </div>
        </div>
      </div>
    </div>
  );
}
