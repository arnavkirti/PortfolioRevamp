export interface LabProjectProps {
  title: string;
  description: string;
  category: 'dev-tool' | 'experiment' | 'mini-app' | 'prototype' | 'utility';
  technologies: string[];
  status: 'live' | 'development' | 'experimental' | 'archived';
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  complexity: 'simple' | 'medium' | 'advanced';
  dateCreated: string;
  tags?: string[];
}

// Lab projects data
const labProjects: LabProjectProps[] = [
  {
    title: "Gas Fee Calculator",
    description: "Real-time Ethereum gas fee calculator with network congestion analysis and transaction cost estimation for different priority levels.",
    category: "dev-tool",
    technologies: ["React", "Web3.js", "Ethers.js", "Chart.js"],
    status: "live",
    demoUrl: "https://gas-calculator.example.com",
    githubUrl: "https://github.com",
    featured: true,
    complexity: "medium",
    dateCreated: "2024-12-01",
    tags: ["ethereum", "gas", "calculator", "web3"]
  },
  {
    title: "Smart Contract Debugger",
    description: "Interactive debugger for Solidity smart contracts with step-by-step execution, state variable tracking, and gas consumption analysis.",
    category: "dev-tool",
    technologies: ["Next.js", "TypeScript", "Hardhat", "Web3.js"],
    status: "development",
    githubUrl: "https://github.com",
    featured: true,
    complexity: "advanced",
    dateCreated: "2024-11-15",
    tags: ["solidity", "debugging", "smart-contracts", "development"]
  },
  {
    title: "NFT Metadata Generator",
    description: "Automated tool for generating NFT metadata with trait rarity calculations, IPFS upload integration, and collection management features.",
    category: "utility",
    technologies: ["React", "IPFS", "Node.js", "MongoDB"],
    status: "live",
    demoUrl: "https://nft-generator.example.com",
    githubUrl: "https://github.com",
    complexity: "medium",
    dateCreated: "2024-10-20",
    tags: ["nft", "metadata", "ipfs", "generator"]
  },
  {
    title: "DeFi Yield Optimizer",
    description: "Experimental algorithm for optimizing DeFi yield farming strategies across multiple protocols with risk assessment and automated rebalancing.",
    category: "experiment",
    technologies: ["Python", "Web3.py", "Pandas", "Flask"],
    status: "experimental",
    githubUrl: "https://github.com",
    complexity: "advanced",
    dateCreated: "2024-09-10",
    tags: ["defi", "yield", "optimization", "algorithm"]
  },
  {
    title: "Blockchain Explorer Mini",
    description: "Lightweight blockchain explorer for viewing transactions, blocks, and account details with real-time updates and search functionality.",
    category: "mini-app",
    technologies: ["Vue.js", "Web3.js", "TailwindCSS", "WebSocket"],
    status: "live",
    demoUrl: "https://explorer-mini.example.com",
    githubUrl: "https://github.com",
    complexity: "medium",
    dateCreated: "2024-08-25",
    tags: ["blockchain", "explorer", "transactions", "real-time"]
  },
  {
    title: "DAO Proposal Analyzer",
    description: "AI-powered tool for analyzing DAO proposals with sentiment analysis, outcome prediction, and voting pattern insights.",
    category: "prototype",
    technologies: ["Python", "TensorFlow", "React", "GraphQL"],
    status: "experimental",
    githubUrl: "https://github.com",
    featured: true,
    complexity: "advanced",
    dateCreated: "2024-07-15",
    tags: ["dao", "ai", "analysis", "governance"]
  },
  {
    title: "Wallet Connector Widget",
    description: "Universal wallet connection widget supporting multiple Web3 wallets with auto-detection, connection management, and network switching.",
    category: "utility",
    technologies: ["TypeScript", "Web3Modal", "Wagmi", "React"],
    status: "live",
    demoUrl: "https://wallet-widget.example.com",
    githubUrl: "https://github.com",
    complexity: "simple",
    dateCreated: "2024-06-30",
    tags: ["wallet", "web3", "connection", "widget"]
  },
  {
    title: "Solidity Code Formatter",
    description: "Online formatter for Solidity code with syntax highlighting, auto-indentation, and best practices suggestions for clean contract code.",
    category: "dev-tool",
    technologies: ["Monaco Editor", "TypeScript", "Prettier", "React"],
    status: "development",
    githubUrl: "https://github.com",
    complexity: "medium",
    dateCreated: "2024-06-01",
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

// Complexity configuration
export const complexityConfig = {
  simple: { label: "Simple", color: "green" },
  medium: { label: "Medium", color: "yellow" },
  advanced: { label: "Advanced", color: "red" }
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

export const getLabProjectsByComplexity = (complexity: LabProjectProps['complexity']): LabProjectProps[] => {
  return labProjects.filter(project => project.complexity === complexity);
};

export const filterLabProjects = (
  categoryId: string = "all",
  status?: LabProjectProps['status'] | null,
  complexity?: LabProjectProps['complexity'] | null
): LabProjectProps[] => {
  let filtered = getLabProjectsByCategory(categoryId);
  
  if (status) {
    filtered = filtered.filter(project => project.status === status);
  }
  
  if (complexity) {
    filtered = filtered.filter(project => project.complexity === complexity);
  }
  
  return filtered;
};

export const searchLabProjects = (query: string): LabProjectProps[] => {
  const lowercaseQuery = query.toLowerCase();
  return labProjects.filter(project =>
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery)) ||
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
  
  const byComplexity = {
    simple: getLabProjectsByComplexity("simple").length,
    medium: getLabProjectsByComplexity("medium").length,
    advanced: getLabProjectsByComplexity("advanced").length
  };
  
  return {
    total,
    live,
    development,
    experimental,
    featured,
    byCategory,
    byComplexity
  };
};

export const getAllTags = (): string[] => {
  return Array.from(new Set(labProjects.flatMap(project => project.tags || [])));
};
