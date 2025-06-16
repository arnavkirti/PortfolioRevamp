"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const fullText = '"Building Web3 & AI-powered products with a passion for clean design."';
    
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
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
                <div className="flex flex-col items-center justify-center min-h-[45vh] text-center">
                    <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-8 tracking-tight">
                        Arnav Kirti
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed min-h-[3rem] flex items-center justify-center">
                        <span>
                            {displayedText}
                            {showCursor && <span className="animate-pulse text-cyan-400">|</span>}
                        </span>
                    </p>
                    <Link 
                        href="/projects"
                        className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 group"
                    >
                        View My Work
                        <svg 
                            className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
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
            <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Icon */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-64 h-64 bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl flex items-center justify-center shadow-2xl">
                            <div className="w-32 h-32 bg-teal-500 rounded-2xl flex items-center justify-center">
                                <svg 
                                    className="w-16 h-16 text-white" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            About Me
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I'm a passionate blockchain developer with over 5 years of experience building decentralized applications and smart contracts. My expertise spans across multiple blockchain ecosystems, with a focus on Ethereum, Polygon, and emerging Layer 2 solutions.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            When I'm not coding smart contracts, you'll find me exploring the latest in AI/ML technologies and how they can be integrated with blockchain to create innovative solutions. I believe in clean, efficient code and user-centric design.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
