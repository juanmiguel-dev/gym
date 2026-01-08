"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Twitter, Facebook, ExternalLink, ArrowUpRight } from "lucide-react";
import LogoAnimation from "./LogoAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal animation for the massive text
            gsap.fromTo(
                textRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 80%",
                    },
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="relative bg-black pt-32 pb-10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Massive CTA */}
                <div className="mb-24 text-center">
                    <h2 ref={textRef} className="text-[10vw] font-black uppercase leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 tracking-tighter mix-blend-overlay opacity-50 select-none">
                        PACHAGYM
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <a href="/" className="flex items-center gap-2 mb-6 w-fit hover:opacity-80 transition-opacity cursor-pointer">
                            <LogoAnimation />
                            <span className="text-white font-bold tracking-tighter text-2xl">PACHAGYM</span>
                        </a>
                        <p className="text-white/50 max-w-sm text-lg leading-relaxed mb-8">
                            Redefiniendo el límite humano a través de tecnología, diseño y sudor honesto.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-black hover:bg-neon-green hover:border-transparent transition-all duration-300 hover:scale-110 cursor-pointer">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        {/* Planes Button */}
                        <div className="mt-8">
                            <a href="/nosotros">
                                <button className="px-6 py-3 border border-neon-cyan/50 text-neon-cyan font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-neon-cyan hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,242,255,0.1)] hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] cursor-pointer">
                                    PLANES & VALORES
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6">Explora</h4>
                        <ul className="space-y-4">
                            {["Clases", "Entrenadores", "Horarios", "Membresías"].map((item) => (
                                <li key={item}>
                                    <a href={item === "Clases" ? "/servicios" : "#"} className="text-white/50 hover:text-neon-cyan transition-colors flex items-center gap-2 group cursor-pointer">
                                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        <span>{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal/Contact Column */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {["Términos", "Privacidad", "Cookies", "Contacto"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-white/50 hover:text-white transition-colors cursor-pointer">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/30 text-sm font-medium">
                        &copy; 2026 GYM NEXTJS + WORDPRESS
                    </p>

                    <a
                        href="https://pachadev.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-6 py-2 bg-white/5 rounded-full border border-white/5 hover:border-neon-green/50 transition-all duration-500 cursor-pointer"
                    >
                        <span className="text-white/40 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Premium Website by</span>
                        <span className="text-neon-green font-black tracking-wider shadow-neon-green drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">PACHADEV</span>
                        <ExternalLink className="w-3 h-3 text-white/30 group-hover:text-neon-green transition-colors" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
