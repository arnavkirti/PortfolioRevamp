"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const getLinkClassName = (href: string) => {
        const isActive = pathname === href;
        
        if (isActive) {
            return "text-cyan-400 hover:text-cyan-300 px-3 py-2 text-sm font-medium border-b-2 border-cyan-400";
        }
        
        return "text-gray-300 hover:text-white px-3 py-2 text-sm font-medium hover:border-b-2 hover:border-gray-300 transition-all duration-200";
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-gray-800/50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex items-center space-x-3">
                        <Image src="/vercel.svg" alt="xyz" width={40} height={40}></Image>
                        <div className="text-xl font-bold text-white">
                            Ar3s
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link 
                                href="/" 
                                className={getLinkClassName("/")}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/blog" 
                                className={getLinkClassName("/blog")}
                            >
                                Blog
                            </Link>
                            <Link 
                                href="/projects" 
                                className={getLinkClassName("/projects")}
                            >
                                Projects
                            </Link>
                            <Link 
                                href="/labs" 
                                className={getLinkClassName("/labs")}
                            >
                                Labs
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}