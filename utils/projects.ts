import { ProjectProps } from "@/components/ProjectCard";

// Project data
const projects: ProjectProps[] = [
  {
    title: "DeFi Yield Farming Protocol",
    description: "A decentralized yield farming platform built on Ethereum with automated market making and liquidity provision. Features include staking rewards, governance tokens, and advanced smart contract security.",
    technologies: ["Solidity", "React", "Web3.js", "Hardhat", "OpenZeppelin", "Chainlink"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    status: "completed",
    featured: true
  },
  {
    title: "NFT Marketplace & Minting Platform",
    description: "Full-stack NFT marketplace with minting capabilities, royalty management, and cross-chain support. Built with modern Web3 technologies and optimized for gas efficiency.",
    technologies: ["Next.js", "TypeScript", "Solidity", "IPFS", "Polygon", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    status: "completed",
    featured: true
  },
  {
    title: "Cross-Chain Bridge Protocol",
    description: "Secure cross-chain bridge enabling asset transfers between Ethereum and Polygon networks. Implements advanced cryptographic proofs and automated liquidity management.",
    technologies: ["Solidity", "Go", "Docker", "PostgreSQL", "Redis", "Grafana"],
    githubUrl: "https://github.com",
    status: "in-progress"
  },
  {
    title: "DAO Governance Platform",
    description: "Comprehensive DAO governance system with proposal creation, voting mechanisms, and treasury management. Features quadratic voting and time-locked execution.",
    technologies: ["React", "TypeScript", "Solidity", "The Graph", "Ceramic", "Arweave"],
    githubUrl: "https://github.com",
    status: "completed"
  },
  {
    title: "AI-Powered Portfolio Tracker",
    description: "Intelligent DeFi portfolio tracking application with AI-driven insights, yield optimization suggestions, and risk assessment tools for crypto investors.",
    technologies: ["Next.js", "Python", "TensorFlow", "GraphQL", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com",
    status: "in-progress"
  },
  {
    title: "Decentralized Identity System",
    description: "Self-sovereign identity platform using verifiable credentials and decentralized identifiers. Enables privacy-preserving authentication across Web3 applications.",
    technologies: ["Rust", "React", "DID", "Verifiable Credentials", "IPFS", "Ceramic"],
    githubUrl: "https://github.com",
    status: "planning"
  }
];

// Categories configuration
export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "defi", label: "DeFi" },
  { id: "nft", label: "NFTs" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "governance", label: "Governance" },
  { id: "tools", label: "Tools" }
];

// Utility functions
export const getAllProjects = (): ProjectProps[] => projects;

export const getFeaturedProjects = (): ProjectProps[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByStatus = (status: ProjectProps['status']): ProjectProps[] => {
  return projects.filter(project => project.status === status);
};

export const getProjectsByCategory = (categoryId: string): ProjectProps[] => {
  if (categoryId === "all") return projects;
  
  return projects.filter(project => {
    const title = project.title.toLowerCase();
    switch (categoryId) {
      case "defi":
        return title.includes("defi") || title.includes("yield");
      case "nft":
        return title.includes("nft");
      case "infrastructure":
        return title.includes("bridge") || title.includes("protocol");
      case "governance":
        return title.includes("dao");
      case "tools":
        return title.includes("tracker");
      default:
        return false;
    }
  });
};

export const getProjectsByTechnology = (technology: string): ProjectProps[] => {
  return projects.filter(project => 
    project.technologies.includes(technology)
  );
};

export const filterProjects = (
  categoryId: string, 
  technology?: string | null
): ProjectProps[] => {
  let filtered = getProjectsByCategory(categoryId);
  
  if (technology) {
    filtered = filtered.filter(project => 
      project.technologies.includes(technology)
    );
  }
  
  return filtered;
};

export const getAllTechnologies = (): string[] => {
  return Array.from(new Set(projects.flatMap(project => project.technologies)));
};

export const getProjectStats = () => {
  const total = projects.length;
  const completed = getProjectsByStatus("completed").length;
  const inProgress = getProjectsByStatus("in-progress").length;
  const planning = getProjectsByStatus("planning").length;
  const featured = getFeaturedProjects().length;
  
  return {
    total,
    completed,
    inProgress,
    planning,
    featured
  };
};

// Search functionality
export const searchProjects = (query: string): ProjectProps[] => {
  const lowercaseQuery = query.toLowerCase();
  return projects.filter(project =>
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.technologies.some(tech => 
      tech.toLowerCase().includes(lowercaseQuery)
    )
  );
};
