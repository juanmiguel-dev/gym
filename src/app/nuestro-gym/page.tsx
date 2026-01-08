"use client";

import Link from "next/link";
import { ArrowRight, Code, Layout, Smartphone, Zap } from "lucide-react";

export default function NuestroGymPage() {
    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-green/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-cyan/10 blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20">

                {/* Hero Section */}
                <div className="text-center mb-32">
                    <div className="inline-block px-4 py-1.5 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                        <span className="text-neon-cyan text-xs font-bold uppercase tracking-widest">Pachadev Concept Site</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                        Esto no es solo <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">
                            un sitio web.
                        </span>
                    </h1>
                    <p className="text-white/60 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                        Es el espejo digital de lo que tu gimnasio puede llegar a ser. <br />
                        <span className="text-white font-medium">Una demo técnica diseñada para demostrar el potencial increible de esta tecnología.</span>
                    </p>
                </div>

                {/* The "Why" Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">
                            Rompiendo la <span className="text-neon-green">Cuarta Pared</span>
                        </h2>
                        <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                            <p>
                                Estás navegando por una simulación. "PACHAGYM" no existe como lugar físico, pero la tecnología que ves aquí es 100% real y está lista para implementarse en tu negocio.
                            </p>
                            <p>
                                Desarrollé este sitio para demostrar que una web de gimnasio no tiene por qué ser aburrida: puede tener la misma energía, fuerza y dinamismo que tu mejor clase de HIIT.
                            </p>
                            <div className="pt-4">
                                <Link href="/planes">
                                    <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-neon-green transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] cursor-pointer">
                                        Ver Planes de Implementación
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Visual Feature List */}
                    <div className="order-1 md:order-2 grid grid-cols-1 gap-4">
                        {[
                            { icon: Zap, title: "Velocidad Extrema", desc: "Optimización Next.js para carga instantánea." },
                            { icon: Smartphone, title: "Mobile First", desc: "Diseñado para verse increíble en cualquier celular." },
                            { icon: Layout, title: "Diseño Premium", desc: "Estética Neon/Dark que eleva el valor percibido." },
                            { icon: Code, title: "Tecnología Moderna", desc: "React, Tailwind, GSAP. Nada de plantillas viejas." }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-cyan/50 transition-colors duration-300">
                                <div className="p-3 rounded-lg bg-black/50 text-neon-cyan">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white uppercase tracking-wide text-sm">{item.title}</h3>
                                    <p className="text-white/50 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="rounded-[3rem] bg-gradient-to-br from-gray-900 to-black border border-white/10 p-12 md:p-24 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <h2 className="relative z-10 text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-white">
                        ¿Tu Gimnasio Merece <br />
                        <span className="text-neon-cyan">Esta Calidad?</span>
                    </h2>

                    <p className="relative z-10 text-white/60 text-lg mb-10 max-w-xl mx-auto">
                         <br />
                        
                    </p>

                    <Link href="https://wa.me/542235451872?text=Hola,%20vi%20la%20demo%20de%20Pachagym%20y%20quiero%20algo%20así%20para%20mi%20negocio" target="_blank" className="relative z-10 inline-block">
                        <button className="px-10 py-5 bg-neon-cyan text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] cursor-pointer">
                            Quiero Mi Sitio Web
                        </button>
                    </Link>
                </div>

            </div>
        </main>
    );
}
