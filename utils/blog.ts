import { BlogPostProps } from "@/components/BlogPost";

// Blog posts data
const blogPosts: BlogPostProps[] = [
  {
    title: "Building Decentralized Applications with Solidity",
    excerpt: "Learn how to create secure and efficient smart contracts using Solidity. This comprehensive guide covers best practices, common pitfalls, and advanced patterns for DApp development.",
    date: "2024-12-15",
    readTime: "8 min read",
    slug: "building-decentralized-applications-solidity",
    tags: ["Solidity", "Blockchain", "Smart Contracts", "Web3"]
  },
  {
    title: "Next.js 14 Features That Will Transform Your Development",
    excerpt: "Explore the latest features in Next.js 14 including improved app router, server components, and enhanced performance optimizations that make React development more efficient.",
    date: "2024-12-10",
    readTime: "6 min read",
    slug: "nextjs-14-features-transform-development",
    tags: ["Next.js", "React", "Web Development", "Performance"]
  },
  {
    title: "Web3 Integration Patterns for Modern Applications",
    excerpt: "Discover proven patterns and strategies for integrating Web3 functionality into existing applications. From wallet connections to smart contract interactions.",
    date: "2024-12-05",
    readTime: "10 min read",
    slug: "web3-integration-patterns-modern-applications",
    tags: ["Web3", "Integration", "DApps", "Architecture"]
  },
  {
    title: "TypeScript Best Practices for Blockchain Development",
    excerpt: "Enhance your blockchain development workflow with TypeScript. Learn about type safety for smart contracts, Web3 libraries, and frontend integration patterns.",
    date: "2024-11-28",
    readTime: "7 min read",
    slug: "typescript-best-practices-blockchain-development",
    tags: ["TypeScript", "Blockchain", "Best Practices", "Development"]
  },
  {
    title: "Gas Optimization Techniques in Smart Contracts",
    excerpt: "Master the art of writing gas-efficient smart contracts. This guide covers optimization strategies, common gas traps, and tools for measuring contract efficiency.",
    date: "2024-11-20",
    readTime: "12 min read",
    slug: "gas-optimization-techniques-smart-contracts",
    tags: ["Solidity", "Optimization", "Gas", "Smart Contracts"]
  },
  {
    title: "Building Responsive DApps with Tailwind CSS",
    excerpt: "Create beautiful, responsive decentralized applications using Tailwind CSS. Learn component design patterns and responsive strategies for Web3 interfaces.",
    date: "2024-11-15",
    readTime: "9 min read",
    slug: "building-responsive-dapps-tailwind-css",
    tags: ["Tailwind CSS", "DApps", "Frontend", "Responsive Design"]
  }
];

// Utility functions
export const getAllBlogPosts = (): BlogPostProps[] => blogPosts;

export const getRecentBlogPosts = (limit: number = 3): BlogPostProps[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getBlogPostBySlug = (slug: string): BlogPostProps | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByTag = (tag: string): BlogPostProps[] => {
  return blogPosts.filter(post => post.tags?.includes(tag));
};

export const getAllTags = (): string[] => {
  return Array.from(new Set(blogPosts.flatMap(post => post.tags || [])));
};

export const searchBlogPosts = (query: string): BlogPostProps[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const filterBlogPosts = (
  searchTerm: string = "",
  selectedTag: string | null = null
): BlogPostProps[] => {
  let filtered = blogPosts;

  // Apply search filter
  if (searchTerm) {
    filtered = searchBlogPosts(searchTerm);
  }

  // Apply tag filter
  if (selectedTag && !searchTerm) {
    filtered = getBlogPostsByTag(selectedTag);
  } else if (selectedTag && searchTerm) {
    filtered = filtered.filter(post => post.tags?.includes(selectedTag));
  }

  return filtered;
};

export const getBlogStats = () => {
  const totalPosts = blogPosts.length;
  const totalTags = getAllTags().length;
  const avgReadTime = Math.round(
    blogPosts.reduce((acc, post) => {
      const time = parseInt(post.readTime.replace(/\D/g, ''));
      return acc + time;
    }, 0) / totalPosts
  );

  const postsByMonth = blogPosts.reduce((acc, post) => {
    const month = new Date(post.date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    totalPosts,
    totalTags,
    avgReadTime,
    postsByMonth
  };
};
