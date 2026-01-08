"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight, Zap } from "lucide-react";

export default function FeaturedPost() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);


    useEffect(() => {
        // Eternal subtle breathing glow
        const ctx = gsap.context(() => {
            if (containerRef.current) {
                gsap.to(containerRef.current, {
                    boxShadow: "0 0 20px rgba(255, 0, 255, 0.1)",
                    borderColor: "rgba(255, 0, 255, 0.3)",
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative w-full max-w-7xl mx-auto mb-24 px-4">
            {/* Container with Glow/Shadow (No Overflow Hidden) */}
            <div
                ref={containerRef}
                className="group relative rounded-[3rem] border border-white/10 shadow-2xl min-h-[60vh] cursor-pointer transition-all duration-500 hover:border-neon-fuchsia/50"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Inner Content Structure (Overflow Hidden) */}
                <div className="w-full h-full rounded-[3rem] overflow-hidden bg-[#080808] flex flex-col md:flex-row">

                    {/* Neon Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-fuchsia via-transparent to-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                    {/* Image Side (Left on Desktop) */}
                    <div className="relative w-full md:w-1/2 h-full min-h-[400px] overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: "url('/images/gym-strategy.png')" }}
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                        </div>

                        {/* Floating Tag */}
                        <div className="absolute top-8 left-8">
                            <span className="px-4 py-1.5 bg-neon-fuchsia text-black font-black uppercase tracking-widest text-xs rounded-full shadow-[0_0_20px_rgba(255,0,255,0.5)] flex items-center gap-2">
                                <Zap className="w-4 h-4 fill-current" />
                                Strategy
                            </span>
                        </div>
                    </div>

                    {/* Content Side (Right on Desktop) */}
                    <div className="relative w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center">
                        <div className="relative z-10">
                            <span className="text-white/40 font-mono text-sm mb-6 block">Featured Analysis &bull; 5 min read</span>

                            <h1 className="text-2xl md:text-[2.75rem] font-black uppercase text-white leading-[1.1] mb-8 tracking-tighter hover:text-white/90 transition-colors">
                                <a href="/blog/importancia-web-seo">
                                    Tu Gimnasio Tiene el <span className="text-neon-cyan">Mejor Equipo</span>. <br />
                                    ¿Por Qué Tu Web Sigue en el <span className="text-neon-fuchsia">Pasado</span>?
                                </a>
                            </h1>

                            <div className="w-20 h-1 bg-white/10 mb-8 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-neon-cyan group-hover:to-neon-fuchsia transition-all duration-700" />

                            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl group-hover:text-white/80 transition-colors">
                                Una presencia digital premium no es un lujo, es una posibilidad a tu alcance..
                            </p>

                            <a href="/blog/importancia-web-seo" className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-sm group-hover:text-neon-cyan transition-colors cursor-pointer w-fit">
                                <span>Leer Artículo Completo</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                            </a>
                        </div>

                        {/* Background Texture Detail */}
                        <div className="absolute bottom-0 right-0 p-20 opacity-5 pointer-events-none">
                            <div className="text-[200px] leading-none font-black text-white select-none">01</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
