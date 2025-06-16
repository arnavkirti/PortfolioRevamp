"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Ethereum from "@/components/Technologies/Ethereum";
import Solidity from "@/components/Technologies/Solidity";
import Next from "@/components/Technologies/Next";
import Tailwind from "@/components/Technologies/Tailwind";
import Typescript from "@/components/Technologies/Typescript";
import ReactIcon from "@/components/Technologies/React";
import Javascript from "@/components/Technologies/Javascript";
import Git from "@/components/Technologies/Git";
import Hardhat from "@/components/Technologies/Hardhat";
import Docker from "@/components/Technologies/Docker";
import Go from "@/components/Technologies/Go";
import Graphql from "@/components/Technologies/Graphql";
import Mongo from "@/components/Technologies/Mongo";
import Postgresql from "@/components/Technologies/Postgresql";
import Rust from "@/components/Technologies/Rust";
import RecentPosts from "@/components/RecentPosts";
import { BlogPostProps } from "@/components/BlogPost";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = '"Building Web3 & AI-powered products with a passion for clean design."';

  // Sample blog posts data
  const samplePosts: BlogPostProps[] = [
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
    }
  ];

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 50; // milliseconds per character

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    };

    // Start typing after a brief delay
    const startDelay = setTimeout(typeText, 500);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <div className="max-w-2xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col items-center justify-center min-h-[45vh] text-center py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Arnav Kirti
          </h1>
          <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed min-h-[2.5rem] flex items-center justify-center">
            <span>
              {displayedText}
              {showCursor && <span className="animate-pulse text-cyan-400">|</span>}
            </span>
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 group text-sm"
          >
            View My Work
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* About Me Section */}
      <div className="max-w-2xl mx-auto px-6 sm:px-8 pb-20">
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-left">
            About Me
          </h2>
          <div className="space-y-4 text-left">
            <p className="text-gray-300 text-base leading-relaxed">
              I'm a passionate blockchain developer from IIT Roorkee. 
              I believe in clean, efficient code and user-centric design.
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              When I'm not coding, you'll find me travelling, or reading books. I thrive in collaborative environments and enjoy sharing knowledge with fellow developers.
            </p>
            
            {/* Availability Status */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-zinc-800">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-30"></div>
              </div>
              <span className="text-gray-300 text-sm font-medium">
                Available for new opportunities
              </span>
            </div>
            <SocialLinks />
          </div>

        </div>
        {/* Core Technologies */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-left mt-12">
            Core Technologies
          </h2>
          <div className="flex flex-wrap mt-6">
            <Solidity />
            <Ethereum />
            <Hardhat />
            <Javascript />
            <Typescript />
            <ReactIcon />
            <Next />
            <Tailwind />
            <Git />
            <Docker />
            <Go />
            <Graphql />
            <Mongo />
            <Postgresql />
            <Rust />
          </div>
          {/* Recent Posts */}
          <RecentPosts posts={samplePosts} maxPosts={3} />
          {/* Quote */}
          <div>
            <blockquote className="mt-16 border-l-4 border-cyan-400 pl-6 text-gray-300 italic">
              "Code is like humor. When you have to explain it, it’s bad."
              <span className="block mt-2 text-sm text-gray-500">– Cory House</span>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
