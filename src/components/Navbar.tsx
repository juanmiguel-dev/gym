"use client";

import { useState, useEffect } from "react";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import LogoAnimation from "./LogoAnimation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav
                className={`flex items-center justify-between w-full max-w-4xl px-4 py-2 rounded-full border border-white/10 transition-all duration-500
          ${scrolled ? "bg-black/60 backdrop-blur-xl shadow-2xl py-3" : "bg-black/20 backdrop-blur-md"}`}
            >
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 pl-2 hover:opacity-80 transition-opacity cursor-pointer">
                    <LogoAnimation />
                    <span className="text-white font-bold tracking-tighter text-xl hidden sm:block">PACHAGYM</span>
                </a>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60 uppercase tracking-widest">
                    <a href="/nuestro-gym" className="hover:text-white transition-colors cursor-pointer">Nuestro Gym</a>
                    <a href="/servicios" className="hover:text-white transition-colors cursor-pointer">Clases</a>

                    <a href="/blog" className="hover:text-white transition-colors cursor-pointer">Blog</a>
                </div>

                {/* CTA */}
                <a href="/turnos">
                    <button className="bg-neon-green text-black font-black uppercase text-sm tracking-widest px-6 py-2 rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all cursor-pointer">
                        TURNOS
                    </button>
                </a>
            </nav>
        </header>
    );
}
