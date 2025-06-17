"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Ethereum from "./Technologies/Ethereum";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getLinkClassName = (href: string) => {
        const isActive = pathname === href;
        
        if (isActive) {
            return "text-cyan-400 hover:text-cyan-300 px-3 py-2 text-sm font-medium border-b-2 border-cyan-400";
        }
        
        return "text-gray-300 hover:text-white px-3 py-2 text-sm font-medium hover:border-b-2 hover:border-gray-300 transition-all duration-200";
    };

    const getMobileLinkClassName = (href: string) => {
        const isActive = pathname === href;
        
        if (isActive) {
            return "text-cyan-400 hover:text-cyan-300 block px-3 py-2 text-base font-medium border-l-4 border-cyan-400 bg-zinc-900/50";
        }
        
        return "text-gray-300 hover:text-white block px-3 py-2 text-base font-medium hover:bg-zinc-800/50 transition-all duration-200";
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-gray-800/50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex items-center space-x-3">
                        <Ethereum />
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
                            onClick={toggleMenu}
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden transition-all duration-300 ease-in-out">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-950/95 backdrop-blur-md border-t border-gray-800/50">
                            <Link 
                                href="/" 
                                className={getMobileLinkClassName("/")}
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/blog" 
                                className={getMobileLinkClassName("/blog")}
                                onClick={closeMenu}
                            >
                                Blog
                            </Link>
                            <Link 
                                href="/projects" 
                                className={getMobileLinkClassName("/projects")}
                                onClick={closeMenu}
                            >
                                Projects
                            </Link>
                            <Link 
                                href="/labs" 
                                className={getMobileLinkClassName("/labs")}
                                onClick={closeMenu}
                            >
                                Labs
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}