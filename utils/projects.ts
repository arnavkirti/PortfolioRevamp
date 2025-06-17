import { ProjectProps } from "@/components/ProjectCard";

// Project data
const projects: ProjectProps[] = [
    // {
    //     title: "DeFi Yield Farming Protocol",
    //     description: "A decentralized yield farming platform built on Ethereum with automated market making and liquidity provision. Features include staking rewards, governance tokens, and advanced smart contract security.",
    //     technologies: ["Solidity", "React", "Web3.js", "Hardhat", "OpenZeppelin", "Chainlink"],
    //     githubUrl: "https://github.com",
    //     liveUrl: "https://example.com",
    //     status: "completed",
    //     featured: true
    // },
    // {
    //     title: "NFT Marketplace & Minting Platform",
    //     description: "Full-stack NFT marketplace with minting capabilities, royalty management, and cross-chain support. Built with modern Web3 technologies and optimized for gas efficiency.",
    //     technologies: ["Next.js", "TypeScript", "Solidity", "IPFS", "Polygon", "Tailwind CSS"],
    //     githubUrl: "https://github.com",
    //     liveUrl: "https://example.com",
    //     status: "completed",
    //     featured: true
    // },
    // {
    //     title: "Cross-Chain Bridge Protocol",
    //     description: "Secure cross-chain bridge enabling asset transfers between Ethereum and Polygon networks. Implements advanced cryptographic proofs and automated liquidity management.",
    //     technologies: ["Solidity", "Go", "Docker", "PostgreSQL", "Redis", "Grafana"],
    //     githubUrl: "https://github.com",
    //     status: "in-progress"
    // },
    // {
    //     title: "DAO Governance Platform",
    //     description: "Comprehensive DAO governance system with proposal creation, voting mechanisms, and treasury management. Features quadratic voting and time-locked execution.",
    //     technologies: ["React", "TypeScript", "Solidity", "The Graph", "Ceramic", "Arweave"],
    //     githubUrl: "https://github.com",
    //     status: "completed"
    // },
    // {
    //     title: "AI-Powered Portfolio Tracker",
    //     description: "Intelligent DeFi portfolio tracking application with AI-driven insights, yield optimization suggestions, and risk assessment tools for crypto investors.",
    //     technologies: ["Next.js", "Python", "TensorFlow", "GraphQL", "MongoDB", "Tailwind CSS"],
    //     githubUrl: "https://github.com",
    //     status: "in-progress"
    // },
    // {
    //     title: "Decentralized Identity System",
    //     description: "Self-sovereign identity platform using verifiable credentials and decentralized identifiers. Enables privacy-preserving authentication across Web3 applications.",
    //     technologies: ["Rust", "React", "DID", "Verifiable Credentials", "IPFS", "Ceramic"],
    //     githubUrl: "https://github.com",
    //     status: "planning"
    // },
    {
        title: "Defi-Dojo - Gamified DeFi Education",
        description: "Built a gamified DeFi education platform integrating AI tutors, risk-free simulations, and NFT rewards. Developed a sandboxed DeFi environment with Autonome and The Graph for strategy validation and real-time data. Reduced onboarding friction by 70% using Privy for passwordless wallets and social logins.",
        technologies: [
            "Next.js",
            "Autonome",
            "Coinbase AgentKit",
            "The Graph",
            "Privy",
            "IPFS",
            "Solidity",
            "Foundry"
        ],
        githubUrl: "https://github.com/arnavkirti/Defi-Dojo",
        status: "completed",
        imageUrl: "/projects/defi-dojo.png",
        featured: true
    },
    {
        title: "Aura-Land - Multiplayer NFT Game",
        description: "Developed a multiplayer NFT game with ERC-20 in-game economy, enabling players to mint, trade, battle NPCs, and earn Soulbound Tokens (SBTs). Implemented cross-chain NFT transfers via burn-and-mint logic and real-time multiplayer interactions with Socket.io. Integrated Privy authentication for seamless wallet access and IPFS for decentralized NFT storage.",
        technologies: [
            "Next.js",
            "Phaser.js",
            "Three.js",
            "Privy",
            "Socket.io",
            "Pinata",
            "Foundry",
            "Solidity"
        ],
        githubUrl: "https://github.com/arnavkirti/Aura-Land",
        status: "completed",
        imageUrl: "/projects/aura-land.png",
        featured: true,
    },
    {
        title: "Crypto Advisor - AI-Powered Investment Platform",
        description: "Built a cryptocurrency investment platform offering personalized advice & diversification strategies with AI analysis. Integrated Mira Flows for AI-driven investment insights and CoinGecko API for real-time market data.",
        technologies: ["React.js", "Mira Flows", "CoinGecko API"],
        githubUrl: "https://github.com/arnavkirti/Crypto-Advisor",
        liveUrl: "https://crypto-advisor-eosin.vercel.app/",
        status: "completed",
        imageUrl: "/projects/crypto-advisor.png",
        featured: true
    },
    {
        title: "FitKnight - Rise of the Fitness Crusaders",
        description: "Developed a full-stack fitness application that connects users with fitness buddies and groups based on location, offering a seamless group chat experience and a personalized dashboard with notification system. Implemented secure user authentication with JWT and bcrypt.js, profile management with photo upload using Multer and Cloudinary, and real-time group chat functionality with Socket.io.",
        technologies: [
            "React.js",
            "Express",
            "Node.js",
            "Socket.io",
            "Zod",
            "bcrypt.js",
            "JWT",
            "Multer",
            "Cloudinary",
            "MongoDB"
        ],
        githubUrl: "https://github.com/arnavkirti/Fit-Knight",
        imageUrl: "/projects/fit-knight.png",
        status: "completed",
    },
    {
        title: "HelixScan - Solana Indexing System",
        description: "Built a Solana-to-PostgreSQL indexing system using Helius webhooks, eliminating the need to manage RPC/validator infrastructure, with real-time NFT/token data sync. Reduced blockchain integration complexity for 10+ early testers while achieving 99% data delivery reliability via automated webhooks.",
        technologies: [
            "Next.js",
            "Helius Webhooks",
            "Go",
            "Fiber",
            "GORM",
            "PostgreSQL",
            "Docker"
        ],
        githubUrl: "https://github.com/arnavkirti/HelixScan",
        status: "completed",
        imageUrl: "/projects/helixscan.png"
    },
    {
        title: "Decentralized Social Media",
        description: "A censorship-resistant social media platform built on IPFS and Ethereum, allowing users to share content, interact with posts, and earn tokens for engagement.",
        technologies: ["React", "IPFS", "Ethereum", "Solidity", "Hardhat", "Material UI", "Tailwind CSS", "Ethers.js"],
        githubUrl: "https://github.com/arnavkirti/Decentralized-social-media",
        imageUrl: "/projects/decSoc.png",
        status: "completed"
    },
    {
        title: "UnifyERP - Universal ERP Integration Framework",
        description: "Built a universal API framework for seamless ERP integration across SAP, Oracle, and Microsoft Dynamics, reducing integration time by 60%. Automated data mapping and dynamic update systems, enabling seamless transformation of ERP data into a unified schema.",
        technologies: [
            "Python",
            "Express.js",
            "React",
            "Machine Learning",
            "Node.js",
            "OAuth2.0",
            "JSON Schema",
            "Shell"
        ],
        githubUrl: "https://github.com/arnavkirti/UnifyERP",
        liveUrl: "unify-erp.vercel.app",
        status: "completed",
        imageUrl: "/projects/unifyerp.png"
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
