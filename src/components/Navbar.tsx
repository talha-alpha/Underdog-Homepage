"use client";

import { useState } from "react";
import Image from "next/image";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex justify-center items-center mx-auto bg-navy-800 backdrop-blur-xl">
            <div className="flex justify-between items-center w-full max-w-[1440px] px-24 py-5 h-[76px]">
                {/* Logo */}
                <div className="shrink-0">
                    <Image
                        src="/logo/UnderDog-Logo.png"
                        alt="Underdog Logo"
                        width={135}
                        height={24}
                        className="h-6 w-auto"
                        priority
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:w-full md:max-w-[447px] md:justify-between md:items-center md:gap-1">
                    <a href="#home" className="flex gap-2 transition-colors">
                        <p className="text-xs font-normal text-white/80 hover:text-white px-4 py-2 font-inter">HOME</p>
                    </a>
                    <a href="#parents" className="flex gap-2 transition-colors text-sm">
                        <p className="text-xs font-normal text-white/80 hover:text-white px-4 py-2 font-inter">PARENTS</p>
                    </a>
                    <a href="#trainers" className="flex gap-2 transition-colors text-sm">
                        <p className="text-xs font-normal text-white/80 hover:text-white px-4 py-2 font-inter">TRAINERS</p>
                    </a>
                    <a href="#academies" className="flex gap-2 transition-colors text-sm">
                        <p className="text-xs font-normal text-white/80 hover:text-white px-4 py-2 font-inter">ACADEMIES</p>
                    </a>
                    <a href="#pricing" className="flex gap-2 transition-colors text-sm">
                        <p className="text-xs font-normal text-white/80 hover:text-white px-4 py-2 font-inter">PRICING</p>
                    </a>
                </div>

                <button className="hidden md:flex w-full md:max-w-[120px] md:min-h-8 md:max-h-8 md:bg-blue-600 md:rounded-md md:hover:bg-blue-700 md:transition-colors">
                    <p className="flex justify-center items-center w-full text-xs font-normal text-white px-4 py-2 font-inter">JOIN WAITLIST</p>
                </button>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white hover:text-white/80"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {/* {isMenuOpen && (
                <div className="md:hidden bg-navy-900 backdrop-blur-xl">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        <a href="#home" className="block py-2 text-white/80 hover:text-white font-medium">
                            HOME
                        </a>
                        <a href="#parents" className="block py-2 text-white/80 hover:text-white font-medium">
                            PARENTS
                        </a>
                        <a href="#trainers" className="block py-2 text-white/80 hover:text-white font-medium">
                            TRAINERS
                        </a>
                        <a href="#academies" className="block py-2 text-white/80 hover:text-white font-medium">
                            ACADEMIES
                        </a>
                        <a href="#pricing" className="block py-2 text-white/80 hover:text-white font-medium">
                            PRICING
                        </a>
                        <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                            JOIN WAITLIST
                        </button>
                    </div>
                </div>
            )} */}
        </nav>
    );
}
