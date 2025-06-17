/**
 * Blog content management system
 * This provides a scalable way to manage blog post content without creating individual files
 */

export interface BlogContentSection {
  type: 'paragraph' | 'heading' | 'code' | 'list' | 'quote' | 'image';
  content?: string;
  level?: number; // For headings (h1, h2, h3, etc.)
  language?: string; // For code blocks
  items?: string[]; // For lists
  alt?: string; // For images
  caption?: string; // For images
}

export interface BlogContent {
  slug: string;
  sections: BlogContentSection[];
}

// Blog content database
const blogContent: BlogContent[] = [
  {
    slug: "building-decentralized-applications-solidity",
    sections: [
      {
        type: "paragraph",
        content: "Solidity is the backbone of Ethereum smart contract development, and mastering it is essential for building robust decentralized applications. In this comprehensive guide, we'll explore the fundamental concepts, best practices, and advanced patterns that will elevate your smart contract development skills."
      },
      {
        type: "heading",
        level: 2,
        content: "Getting Started with Solidity"
      },
      {
        type: "paragraph",
        content: "Before diving into complex smart contracts, it's crucial to understand the basic syntax and structure of Solidity. Unlike traditional programming languages, Solidity is designed specifically for the Ethereum Virtual Machine (EVM) and has unique characteristics that reflect the blockchain environment."
      },
      {
        type: "code",
        language: "solidity",
        content: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleStorage {
    uint256 private storedData;
    
    event DataUpdated(uint256 newValue);
    
    function set(uint256 x) public {
        storedData = x;
        emit DataUpdated(x);
    }
    
    function get() public view returns (uint256) {
        return storedData;
    }
}`
      },
      {
        type: "heading",
        level: 2,
        content: "Security Best Practices"
      },
      {
        type: "paragraph",
        content: "Security should be your top priority when developing smart contracts. The immutable nature of blockchain means that bugs can be extremely costly. Here are the essential security practices every Solidity developer should follow:"
      },
      {
        type: "list",
        items: [
          "Use the latest stable version of Solidity compiler",
          "Implement proper access controls with modifiers",
          "Follow the Checks-Effects-Interactions pattern",
          "Use OpenZeppelin's battle-tested contracts",
          "Conduct thorough testing and audits before deployment"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "Advanced Patterns and Optimization"
      },
      {
        type: "paragraph",
        content: "As you progress in your Solidity journey, understanding advanced patterns becomes crucial for building efficient and maintainable smart contracts. Gas optimization, in particular, can significantly impact the cost-effectiveness of your dApps."
      },
      {
        type: "quote",
        content: "The best smart contracts are not just functional, but also gas-efficient and secure. Every line of code should serve a purpose and be optimized for the blockchain environment."
      },
      {
        type: "paragraph",
        content: "This guide provides a solid foundation for smart contract development. Remember that practice and continuous learning are key to mastering Solidity and building successful decentralized applications."
      }
    ]
  },
  {
    slug: "nextjs-14-features-transform-development",
    sections: [
      {
        type: "paragraph",
        content: "Next.js 14 brings revolutionary changes to React development with improved performance, enhanced developer experience, and powerful new features. Let's explore how these updates can transform your development workflow."
      },
      {
        type: "heading",
        level: 2,
        content: "App Router Evolution"
      },
      {
        type: "paragraph",
        content: "The App Router in Next.js 14 has reached new levels of maturity, offering better performance and more intuitive file-based routing. The integration with React Server Components provides unprecedented optimization opportunities."
      },
      {
        type: "code",
        language: "typescript",
        content: `// app/dashboard/page.tsx
import { Suspense } from 'react';
import { UserProfile } from './components/UserProfile';
import { Analytics } from './components/Analytics';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Suspense fallback={<ProfileSkeleton />}>
        <UserProfile />
      </Suspense>
      <Suspense fallback={<AnalyticsSkeleton />}>
        <Analytics />
      </Suspense>
    </div>
  );
}`
      },
      {
        type: "heading",
        level: 2,
        content: "Performance Improvements"
      },
      {
        type: "list",
        items: [
          "Faster build times with Turbopack integration",
          "Improved hot reloading and development experience",
          "Enhanced image optimization with automatic WebP generation",
          "Better caching strategies for static and dynamic content",
          "Reduced JavaScript bundle sizes"
        ]
      },
      {
        type: "paragraph",
        content: "These improvements make Next.js 14 an excellent choice for both small projects and enterprise-scale applications, providing the tools needed for modern web development."
      }
    ]
  },
  {
    slug: "web3-integration-patterns-modern-applications",
    sections: [
      {
        type: "paragraph",
        content: "Integrating Web3 functionality into existing applications requires careful planning and consideration of user experience. This guide covers proven patterns and strategies for seamless Web3 integration."
      },
      {
        type: "heading",
        level: 2,
        content: "Progressive Web3 Enhancement"
      },
      {
        type: "paragraph",
        content: "The key to successful Web3 integration is progressive enhancement. Your application should work for users without Web3 capabilities while offering enhanced features for Web3-enabled users."
      },
      {
        type: "code",
        language: "typescript",
        content: `const useWeb3Integration = () => {
  const [isWeb3Available, setIsWeb3Available] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      setIsWeb3Available(true);
    }
  }, []);
  
  const connectWallet = async () => {
    if (!isWeb3Available) return;
    
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      setAccount(accounts[0]);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };
  
  return { isWeb3Available, account, connectWallet };
};`
      },
      {
        type: "heading",
        level: 2,
        content: "Architecture Considerations"
      },
      {
        type: "paragraph",
        content: "When designing Web3-integrated applications, consider separating blockchain logic from business logic to maintain clean architecture and testability."
      }
    ]
  }
];

export const getBlogContent = (slug: string): BlogContent | undefined => {
  return blogContent.find(content => content.slug === slug);
};

export const addBlogContent = (content: BlogContent): void => {
  const existingIndex = blogContent.findIndex(c => c.slug === content.slug);
  if (existingIndex >= 0) {
    blogContent[existingIndex] = content;
  } else {
    blogContent.push(content);
  }
};

export const getAllBlogContentSlugs = (): string[] => {
  return blogContent.map(content => content.slug);
};
