"use client";

import { useState, useEffect } from "react";
import { MoveRight, X, Home, Dumbbell, Calendar, BookOpen, Heart, Users, Clock, CreditCard, FileText, Shield, Mail, ArrowUpRight, Menu } from "lucide-react";
import gsap from "gsap";
import DumbbellAnimation from "./DumbbellAnimation";

const MENU_ITEMS = [
    { label: "Inicio", href: "/", icon: Home, accent: "from-neon-cyan/40 via-transparent to-transparent" },
    { label: "Nuestro Gym", href: "/nuestro-gym", icon: Dumbbell, accent: "from-neon-cyan/40 via-transparent to-transparent" },
    { label: "Clases", href: "/servicios", icon: Calendar, accent: "from-neon-green/40 via-transparent to-transparent" },
    { label: "Planes", href: "/planes", icon: Heart, accent: "from-neon-fuchsia/40 via-transparent to-transparent" },
    { label: "Blog", href: "/blog", icon: BookOpen, accent: "from-white/20 via-transparent to-transparent" },
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
                    <DumbbellAnimation width="60px" height="60px" />
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
                    <Menu className="text-white" size={20} />
                </button>
            </nav>

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-[320px] h-[320px] rounded-full bg-neon-cyan/20 blur-[120px]" />
                        <div className="absolute bottom-0 left-0 w-[280px] h-[280px] rounded-full bg-neon-green/20 blur-[120px]" />
                    </div>

                    <div className="relative z-10 max-w-md mx-auto px-6 py-8 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-8">
                            <a href="/" className="flex items-center gap-3 text-white">
                                <DumbbellAnimation width="60px" height="60px" />
                                <span className="text-xl font-black tracking-tight">PACHAGYM</span>
                            </a>
                            <button
                                className="w-10 h-10 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                                onClick={() => setIsOpen(false)}
                                aria-label="Cerrar menú"
                            >
                                <X className="text-white" size={20} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-3 flex-grow">
                            {MENU_ITEMS.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`relative group p-4 rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-neon-cyan/30`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-cyan/20 group-hover:border-neon-cyan/30 transition-colors">
                                            <item.icon className="w-5 h-5 text-white/60 group-hover:text-neon-cyan transition-colors" />
                                        </div>
                                        <span className="text-white font-medium text-sm">{item.label}</span>
                                        <MoveRight className="w-4 h-4 text-white/40 ml-auto group-hover:text-neon-cyan group-hover:translate-x-1 transition-all" />
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <a href="/turnos" onClick={() => setIsOpen(false)} className="block">
                                <button className="w-full px-6 py-3 bg-neon-green text-black font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)]">
                                    Reservar Turno
                                </button>
                            </a>
                            <p className="text-white/40 text-xs text-center mt-3">
                                Reservá tu clase en segundos
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
