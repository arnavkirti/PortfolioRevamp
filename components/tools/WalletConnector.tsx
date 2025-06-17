import React, { useState } from "react";

export default function WalletConnector() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("ethereum");
  const [balance, setBalance] = useState("0.0");

  const networks = [
    { id: "ethereum", name: "Ethereum", color: "text-blue-400", symbol: "ETH" },
    { id: "polygon", name: "Polygon", color: "text-purple-400", symbol: "MATIC" },
    { id: "arbitrum", name: "Arbitrum", color: "text-cyan-400", symbol: "ETH" },
    { id: "optimism", name: "Optimism", color: "text-red-400", symbol: "ETH" }
  ];

  const walletTypes = [
    { name: "MetaMask", icon: "🦊", available: true },
    { name: "WalletConnect", icon: "🔗", available: true },
    { name: "Coinbase", icon: "🔵", available: false },
    { name: "Phantom", icon: "👻", available: false }
  ];

  const simulateConnection = () => {
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnected(true);
      setWalletAddress("0x742d...a8b9");
      setBalance((Math.random() * 10).toFixed(4));
    }, 1000);
  };

  const disconnect = () => {
    setIsConnected(false);
    setWalletAddress("");
    setBalance("0.0");
  };

  const currentNetwork = networks.find(n => n.id === selectedNetwork);

  return (
    <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2 flex-wrap">
        🔗 Wallet Connector Demo
        <span className="text-xs bg-purple-400/20 text-purple-400 px-2 py-1 rounded">DEMO</span>
      </h3>

      {!isConnected ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select Network
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {networks.map((network) => (
                <button
                  key={network.id}
                  onClick={() => setSelectedNetwork(network.id)}
                  className={`p-3 rounded-lg border transition-all text-left ${
                    selectedNetwork === network.id
                      ? `border-cyan-400/50 bg-cyan-400/10`
                      : 'border-zinc-700/50 bg-zinc-800/30 hover:bg-zinc-700/30'
                  }`}
                >
                  <div className={`font-medium ${network.color}`}>{network.name}</div>
                  <div className="text-xs text-gray-400">{network.symbol}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Choose Wallet
            </label>
            <div className="space-y-2">
              {walletTypes.map((wallet) => (
                <button
                  key={wallet.name}
                  onClick={() => wallet.available && simulateConnection()}
                  disabled={!wallet.available}
                  className={`w-full p-3 rounded-lg border transition-all flex items-center gap-3 ${
                    wallet.available
                      ? 'border-zinc-700/50 bg-zinc-800/30 hover:bg-zinc-700/30 hover:border-cyan-400/50'
                      : 'border-zinc-800/30 bg-zinc-900/30 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <span className="text-xl">{wallet.icon}</span>
                  <div className="flex-1 text-left min-w-0">
                    <div className="text-white font-medium">{wallet.name}</div>
                    <div className="text-xs text-gray-400">
                      {wallet.available ? 'Connect' : 'Coming Soon'}
                    </div>
                  </div>
                  {wallet.available && (
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Connected State */}
          <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-400 font-medium text-sm">Connected</span>
            </div>
            <div className="text-white font-mono text-sm">{walletAddress}</div>
          </div>

          {/* Network Info */}
          <div className="bg-zinc-800/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Network</span>
              <span className={`font-medium ${currentNetwork?.color}`}>
                {currentNetwork?.name}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Balance</span>
              <span className="text-white font-mono">
                {balance} {currentNetwork?.symbol}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-2">
            <button className="p-2 bg-cyan-400/20 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400/30 transition-all">
              Send
            </button>
            <button className="p-2 bg-zinc-800/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-zinc-700/50 transition-all">
              Receive
            </button>
          </div>

          <button
            onClick={disconnect}
            className="w-full p-2 bg-red-400/20 text-red-400 rounded-lg text-sm font-medium hover:bg-red-400/30 transition-all"
          >
            Disconnect
          </button>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500">
        💡 This is a demo - no real wallet connections are made
      </div>
    </div>
  );
}
