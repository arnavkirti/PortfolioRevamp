export interface LabProjectProps {
  title: string;
  description: string;
  category: 'dev-tool' | 'experiment' | 'mini-app' | 'prototype' | 'utility';
  status: 'live' | 'development' | 'experimental' | 'archived';
  demoUrl?: string;
  featured?: boolean;
  dateCreated: string;
  tags?: string[];
}

// Lab projects data
const labProjects: LabProjectProps[] = [
  {
    title: "Gas Fee Calculator",
    description: "Real-time Ethereum gas fee calculator with network congestion analysis and transaction cost estimation for different priority levels.",
    category: "dev-tool",
    status: "live",
    demoUrl: "https://gas-calculator.example.com",
    featured: true,
    dateCreated: "2025-06-17",
    tags: ["ethereum", "gas", "calculator", "web3"]
  },
  {
    title: "Smart Contract Debugger",
    description: "Interactive debugger for Solidity smart contracts with step-by-step execution, state variable tracking, and gas consumption analysis.",
    category: "dev-tool",
    status: "development",
    featured: true,
    dateCreated: "2025-06-17",
    tags: ["solidity", "debugging", "smart-contracts", "development"]
  },
  {
    title: "NFT Metadata Generator",
    description: "Automated tool for generating NFT metadata with trait rarity calculations, IPFS upload integration, and collection management features.",
    category: "utility",
    status: "live",
    demoUrl: "https://nft-generator.example.com",
    dateCreated: "2025-06-17",
    tags: ["nft", "metadata", "ipfs", "generator"]
  },
  {
    title: "DeFi Yield Optimizer",
    description: "Experimental algorithm for optimizing DeFi yield farming strategies across multiple protocols with risk assessment and automated rebalancing.",
    category: "experiment",
    status: "experimental",
    dateCreated: "2025-06-17",
    tags: ["defi", "yield", "optimization", "algorithm"]
  },
  {
    title: "Blockchain Explorer Mini",
    description: "Lightweight blockchain explorer for viewing transactions, blocks, and account details with real-time updates and search functionality.",
    category: "mini-app",
    status: "live",
    demoUrl: "https://explorer-mini.example.com",
    dateCreated: "2025-06-17",
    tags: ["blockchain", "explorer", "transactions", "real-time"]
  },
  {
    title: "DAO Proposal Analyzer",
    description: "AI-powered tool for analyzing DAO proposals with sentiment analysis, outcome prediction, and voting pattern insights.",
    category: "prototype",
    status: "experimental",
    featured: true,
    dateCreated: "2025-06-17",
    tags: ["dao", "ai", "analysis", "governance"]
  },
  {
    title: "Wallet Connector Widget",
    description: "Universal wallet connection widget supporting multiple Web3 wallets with auto-detection, connection management, and network switching.",
    category: "utility",
    status: "live",
    demoUrl: "https://wallet-widget.example.com",
    dateCreated: "2025-06-17",
    tags: ["wallet", "web3", "connection", "widget"]
  },
  {
    title: "Solidity Code Formatter",
    description: "Online formatter for Solidity code with syntax highlighting, auto-indentation, and best practices suggestions for clean contract code.",
    category: "dev-tool",
    status: "development",
    dateCreated: "2025-06-17",
    tags: ["solidity", "formatter", "code", "development"]
  }
];

// Categories configuration
export const labCategories = [
  { id: "all", label: "All Labs", icon: "🧪" },
  { id: "dev-tool", label: "Dev Tools", icon: "🛠️" },
  { id: "mini-app", label: "Mini Apps", icon: "📱" },
  { id: "experiment", label: "Experiments", icon: "⚗️" },
  { id: "prototype", label: "Prototypes", icon: "🎯" },
  { id: "utility", label: "Utilities", icon: "⚙️" }
];

// Status configuration
export const statusConfig = {
  live: { label: "Live", color: "green", icon: "✅" },
  development: { label: "In Development", color: "yellow", icon: "🚧" },
  experimental: { label: "Experimental", color: "purple", icon: "🧪" },
  archived: { label: "Archived", color: "gray", icon: "📦" }
};

// Utility functions
export const getAllLabProjects = (): LabProjectProps[] => labProjects;

export const getFeaturedLabProjects = (): LabProjectProps[] => {
  return labProjects.filter(project => project.featured);
};

export const getLabProjectsByCategory = (categoryId: string): LabProjectProps[] => {
  if (categoryId === "all") return labProjects;
  return labProjects.filter(project => project.category === categoryId);
};

export const getLabProjectsByStatus = (status: LabProjectProps['status']): LabProjectProps[] => {
  return labProjects.filter(project => project.status === status);
};


export const filterLabProjects = (
  categoryId: string = "all",
  status?: LabProjectProps['status'] | null
): LabProjectProps[] => {
  let filtered = getLabProjectsByCategory(categoryId);
  
  if (status) {
    filtered = filtered.filter(project => project.status === status);
  }
  
  return filtered;
};

export const searchLabProjects = (query: string): LabProjectProps[] => {
  const lowercaseQuery = query.toLowerCase();
  return labProjects.filter(project =>
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getLabStats = () => {
  const total = labProjects.length;
  const live = getLabProjectsByStatus("live").length;
  const development = getLabProjectsByStatus("development").length;
  const experimental = getLabProjectsByStatus("experimental").length;
  const featured = getFeaturedLabProjects().length;
  
  const byCategory = labCategories.reduce((acc, category) => {
    if (category.id !== "all") {
      acc[category.id] = getLabProjectsByCategory(category.id).length;
    }
    return acc;
  }, {} as Record<string, number>);
  
  return {
    total,
    live,
    development,
    experimental,
    featured,
    byCategory
  };
};

export const getAllTags = (): string[] => {
  return Array.from(new Set(labProjects.flatMap(project => project.tags || [])));
};
