"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Database, Globe, Cpu, Layout, Edit3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TechShowcase() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial fade in
            gsap.fromTo(cardsRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative overflow-hidden px-4">
            {/* Background Tech Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-green/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <span className="text-neon-cyan font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Arquitectura Moderna</span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-8 tracking-tighter">
                        La Potencia del <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green">Headless CMS</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                        Este sitio es una <strong className="text-white">Demo Técnica</strong>. Combina la velocidad extrema de Next.js en el frontend con la facilidad de gestión de WordPress en el backend.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Frontend Card */}
                    <div
                        ref={el => { cardsRef.current[0] = el }}
                        className="group relative p-10 bg-[#0a0a0a] border border-white/5 rounded-[3rem] overflow-hidden hover:border-neon-cyan/50 transition-colors duration-500"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                            <Cpu className="w-24 h-24 text-neon-cyan" />
                        </div>

                        <h3 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                            <Globe className="w-8 h-8 text-neon-cyan" />
                            FRONTEND <span className="text-neon-cyan">NEXT.JS</span>
                        </h3>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-neon-cyan/10 rounded-lg text-neon-cyan">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Velocidad Extrema</h4>
                                    <p className="text-white/50 text-sm">Carga instantánea y navegación fluida tipo SPA.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-neon-cyan/10 rounded-lg text-neon-cyan">
                                    <Layout className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Diseño Premium</h4>
                                    <p className="text-white/50 text-sm">Animaciones GSAP, Glassmorphism y control total del pixel.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Backend Card */}
                    <div
                        ref={el => { cardsRef.current[1] = el }}
                        className="group relative p-10 bg-[#0a0a0a] border border-white/5 rounded-[3rem] overflow-hidden hover:border-neon-green/50 transition-colors duration-500"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                            <Database className="w-24 h-24 text-neon-green" />
                        </div>

                        <h3 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                            <Edit3 className="w-8 h-8 text-neon-green" />
                            BACKEND <span className="text-neon-green">WORDPRESS</span>
                        </h3>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-neon-green/10 rounded-lg text-neon-green">
                                    <Layout className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Autoadministrable</h4>
                                    <p className="text-white/50 text-sm">Gestiona clases, horarios y posts desde el panel de WordPress que ya conoces.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-neon-green/10 rounded-lg text-neon-green">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">API REST / GraphQL</h4>
                                    <p className="text-white/50 text-sm">El contenido viaja por API hasta el frontend, desacoplando la seguridad.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA Bar */}
                <div className="mt-20 p-1 bg-gradient-to-r from-neon-cyan via-white to-neon-green rounded-full shadow-[0_0_50px_rgba(0,242,255,0.2)]">
                    <div className="bg-black rounded-full px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-white font-bold text-center md:text-left">
                            ¿Querés una web como esta para tu negocio?
                        </p>
                        <a href="https://pachadev.com" target="_blank" className="px-8 py-3 bg-white text-black font-black uppercase tracking-wider rounded-full hover:bg-neon-cyan hover:scale-105 transition-all duration-300">
                            Contactar a Pachadev
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
