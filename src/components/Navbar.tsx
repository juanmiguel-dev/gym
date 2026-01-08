"use client";

import { useState, useEffect } from "react";
import { MoveRight, X } from "lucide-react";
import gsap from "gsap";
import LogoAnimation from "./LogoAnimation";

const MENU_ITEMS = [
    { label: "Nuestro Gym", href: "/nuestro-gym", accent: "from-neon-cyan/40 via-transparent to-transparent" },
    { label: "Clases", href: "/servicios", accent: "from-neon-green/40 via-transparent to-transparent" },
    { label: "Planes", href: "/planes", accent: "from-neon-fuchsia/40 via-transparent to-transparent" },
    { label: "Blog", href: "/blog", accent: "from-white/20 via-transparent to-transparent" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav
                className={`relative flex items-center justify-between w-full max-w-4xl px-4 py-2 rounded-full border border-white/10 transition-all duration-500
          ${scrolled ? "bg-black/60 backdrop-blur-xl shadow-2xl py-3" : "bg-black/20 backdrop-blur-md"}`}
            >
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 pl-2 hover:opacity-80 transition-opacity cursor-pointer">
                    <LogoAnimation />
                    <span className="text-white font-bold tracking-tighter text-xl hidden sm:block">PACHAGYM</span>
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60 uppercase tracking-widest">
                    {MENU_ITEMS.slice(0, 4).map((item) => (
                        <a key={item.label} href={item.href} className="hover:text-white transition-colors cursor-pointer">
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <a href="/turnos" className="hidden md:block">
                    <button className="bg-neon-green text-black font-black uppercase text-sm tracking-widest px-6 py-2 rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all cursor-pointer">
                        TURNOS
                    </button>
                </a>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden flex justify-center items-center w-10 h-10 bg-white/10 rounded-full border border-white/10 hover:bg-white/20 transition-all cursor-pointer"
                    onClick={() => setIsOpen(true)}
                    aria-label="Abrir menú"
                >
                    <MoveRight className="text-white" size={20} />
                </button>
            </nav>

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-[320px] h-[320px] rounded-full bg-neon-cyan/20 blur-[120px]" />
                        <div className="absolute bottom-0 left-0 w-[280px] h-[280px] rounded-full bg-neon-green/20 blur-[120px]" />
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-12">
                            <a href="/" className="flex items-center gap-3 text-white">
                                <LogoAnimation />
                                <span className="text-2xl font-black tracking-tight">PACHAGYM</span>
                            </a>
                            <button
                                className="w-12 h-12 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                                onClick={() => setIsOpen(false)}
                                aria-label="Cerrar menú"
                            >
                                <X className="text-white" size={26} />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:gap-6 flex-grow">
                            {MENU_ITEMS.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`relative group p-8 rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-neon-cyan/40`}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                                        <h3 className="text-3xl font-black text-white tracking-tight">{item.label}</h3>
                                        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/60">
                                            Ingresar
                                            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                            <p className="text-white/40 text-sm uppercase tracking-[0.4em] text-center sm:text-left">
                                Reservá tu clase ahora mismo
                            </p>
                            <a href="/turnos" onClick={() => setIsOpen(false)}>
                                <button className="w-full sm:w-auto px-8 py-4 bg-neon-green text-black font-black uppercase tracking-[0.4em] rounded-2xl hover:bg-white transition-all">
                                    Turnos Express
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
