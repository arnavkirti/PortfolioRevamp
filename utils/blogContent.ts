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
  },
  {
    slug: "practical-guide-writing-gas-efficient-solidity-smart-contracts",
    sections: [
      {
        type: "heading",
        level: 2,
        content: "🧠 Why Gas Optimization Matters"
      },
      {
        type: "paragraph",
        content: "Every operation in Ethereum consumes gas, a unit that represents computational cost. Efficient contracts cost users less to interact with, improve UX, and help your dApp scale. Plus, gas optimization often aligns with better logic and cleaner code."
      },
      {
        type: "paragraph",
        content: "In this blog, we'll walk through:"
      },
      {
        type: "list",
        items: [
          "Common gas inefficiencies and how to fix them",
          "Tools like Foundry for gas benchmarking",
          "Real Solidity code examples",
          "Practical optimization patterns"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "⚒️ Setup: Foundry for Gas Benchmarking"
      },
      {
        type: "paragraph",
        content: "We'll use Foundry, a powerful tool for Ethereum development, to benchmark gas usage. Install it with:"
      },
      {
        type: "code",
        language: "bash",
        content: `curl -L https://foundry.paradigm.xyz | bash 
foundryup`
      },
      {
        type: "paragraph",
        content: "Create a new project:"
      },
      {
        type: "code",
        language: "bash",
        content: `forge init GasOptimization
cd GasOptimization
`
      },
      {
        type: 'heading',
        level: 2,
        content: "⚠️ Common Gas Pitfalls and Fixes"
      },
      {
        type: "list",
        items: [
          "🔁 Avoid Unbounded Loops"
        ]
      },
      {
        type: "code",
        language: "solidity",
        content: `// ❌ Bad
function sum(uint[] memory arr) public pure returns (uint) {
    uint total;
    for (uint i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}`
      },
      {
        type: "paragraph",
        content: "Why it's bad: The loop depends on input size. Gas costs become unbounded."
      },
      {
        type: "paragraph",
        content: "✅ Fix: Avoid loops for storage/memory writes. Offload to frontends or batch with limits."
      },
      {
        type: "list",
        items: [
          "📦 Use uint256 Over Smaller Types"
        ]
      },
      {
        type: "code",
        language: "solidity",
        content: `// ❌ Bad
uint8 a = 1;
uint8 b = 2;`
      },
      {
        type: "paragraph",
        content: "Why it's bad: EVM reads in 32-byte words. Mixing types causes inefficient packing."
      },
      {
        type: "paragraph",
        content: "✅ Fix: Use uint256 everywhere. It’s the EVM’s native word size and avoids packing issues."
      },
      {
        type: "code",
        language: "solidity",
        content: `uint256 a = 1;
uint256 b = 2;
`
      },
      {
        type: "list",
        items: [
          "💾 Pack Storage Variables"
        ]
      },
      {
        type: "code",
        language: "solidity",
        content: `// ❌ Unpacked
uint256 a;
bool b;
uint256 c;
`
      },
      {
        type: "paragraph",
        content: "Why it's bad: Each storage slot costs 20,000 gas. Unpacked variables waste space."
      },
      {
        type: "paragraph",
        content: "✅ Fix: Pack variables into fewer slots. Use structs or arrays to group related data."
      },
      {
        type: "code",
        language: "solidity",
        content: `// ✅ Packed
unint256 a;
unint256 b;
bool c;
`
      },
      {
        type: "list",
        items: [
          "🗂️ Use calldata for External Function Parameters"
        ]
      },
      {
        type: "code",
        language: "solidity",
        content: `// ❌ Memory
function process(uint[] memory data) external {}

// ✅ Calldata
function process(uint[] calldata data) external {}
`
      },
      {
        type: "paragraph",
        content: "calldata is cheaper for external functions since it avoids memory allocation."
      },
      {
        type: "list",
        items: [
          "🧠 Short-Circuit Booleans"
        ]
      },
      {
        type: "code",
        language: "solidity",
        content: `// ❌ Evaluates both
if (checkA() && checkB()) {}

// ✅ Short-circuits if checkA() is false
if (!checkA()) return;
if (checkB()) {}
`
      },
      {
        type: "heading",
        level: 2,
        content: "🧪 Benchmarking With Foundry"
      },
      {
        type: "paragraph",
        content: "Let’s create a simple test to compare gas."
      },
      {
        type: "heading",
        level: 3,
        content: "Example Contract"
      },
      {
        type: "code",
        language: "solidity",
        content: `// SPDX-License-Identifier: MIT
// src/GasExample.sol
pragma solidity ^0.8.24;

contract GasExample {
    // Inefficient
    function sumMemory(uint[] memory arr) external pure returns (uint total) {
        for (uint i = 0; i < arr.length; i++) {
            total += arr[i];
        }
    }

    // Efficient (calldata)
    function sumCalldata(uint[] calldata arr) external pure returns (uint total) {
        for (uint i = 0; i < arr.length; i++) {
            total += arr[i];
        }
    }
}
`
      },
      {
        type: "heading",
        level: 3,
        content: "Test File"
      },
      {
        type: "code",
        language: "solidity",
        content: `// SPDX-License-Identifier: MIT
// test/GasExample.t.sol
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/GasExample.sol";

contract GasExampleTest is Test {
    GasExample gasExample;

    function setUp() public {
        gasExample = new GasExample();
    }

    function testGasSumMemory() public view {
        uint[] memory arr = new uint[](5);
        for (uint i = 0; i < 5; i++) {
            arr[i] = i;
        }
        uint result = gasExample.sumMemory(arr);
        // Expected result: 0 + 1 + 2 + 3 + 4 = 10
        assertEq(result, 10);
    }

    function testGasSumCalldata() public view {
        uint[] memory arr = new uint[](5);
        for (uint i = 0; i < 5; i++) {
            arr[i] = i;
        }
        uint result = gasExample.sumCalldata(arr);
        // Expected result: 0 + 1 + 2 + 3 + 4 = 10
        assertEq(result, 10);
    }
}
`
      },
      {
        type: "heading",
        level: 3,
        content: "Run Benchmark"
      },
      {
        type: "code",
        language: "bash",
        content: `forge test --gas-report`
      },
      {
        type: "paragraph",
        content: "You will see gas usage for each function. Compare the results to see the impact of optimizations."
      },
      {
        type: "code",
        content: `| Function Name        | Max   |
|----------------------|-------|
| testGasSumCalldata   | 2226  |
| testGasSumMemory     | 3699  |
`
      },
      {
        type: "paragraph",
        content: "calldata saved us over 1,000 gas compared to memory!"
      },
      {
        type: "heading",
        level: 2,
        content: "✅ General Optimization Checklist"
      },
      {
        type: "list",
        items: [
          "Use the latest Solidity version for optimizations",
          "Avoid unbounded loops and recursion",
          "Use calldata for external function parameters",
          "Pack storage variables efficiently",
          "Short-circuit boolean expressions",
          "Minimize state changes in functions",
          "Leverage libraries like OpenZeppelin for common patterns"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "🧠 Final Thoughts"
      },
      {
        type: "paragraph",
        content: "Gas optimization isn't about micro-obsessing — it’s about knowing where it matters. If your contract will be called millions of times or touches expensive opcodes, optimize. Otherwise, prioritize readability and security first."
      },
      {
        type: "heading",
        level: 2,
        content: "📚 Further Reading"
      },
      {
        type: "list",
        items: [
          "https://ethereum.org/en/developers/docs/gas/",
          "https://www.rareskills.io/post/gas-optimization",
          "Foundry Documentation for Testing and Benchmarking"
        ]
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
