"use client";

import { Check, Star, Zap } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 bg-black text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-cyan/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-fuchsia/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                        Tu Web al <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">Siguiente Nivel</span>
                    </h1>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto font-light">
                        Elige la potencia que tu marca necesita hoy. Sin letra chica, sin complicaciones.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                    {/* Plan 1: No Brainer */}
                    <div className="relative group p-8 bg-glass-dark rounded-[2rem] border border-neon-green/30 shadow-[0_0_40px_rgba(57,255,20,0.1)] hover:shadow-[0_0_60px_rgba(57,255,20,0.2)] transition-all duration-500 hover:-translate-y-2">
                        {/* Featured Badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-green text-black font-black uppercase text-xs tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(57,255,20,0.4)] flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            Oferta Limitada (5 Cupos)
                        </div>

                        <div className="mb-8 mt-4">
                            <h3 className="text-white/50 font-bold uppercase tracking-widest text-sm mb-2">Plan Despegue</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-black text-white">$120.000</span>
                                <span className="text-white/40 font-medium">/ pago único</span>
                            </div>
                            <p className="text-neon-green text-sm font-bold mt-2 flex items-center gap-2">
                                <Check className="w-4 h-4" /> incluye Hosting por 1 Año
                            </p>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Sitio Web Base (Demo Actual)",
                                "Diseño High-End Neon/Glass",
                                "Sección Hero + Servicios + Blog",
                                "Integración WhatsApp",
                                "Optimización Móvil Perfecta",
                                "Entrega Express (48-72hs)"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="https://wa.me/5491112345678?text=Hola,%20quiero%20el%20Plan%20Despegue%20de%20$120.000" target="_blank" className="block w-full">
                            <button className="w-full py-4 bg-neon-green text-black font-black uppercase tracking-widest rounded-xl hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(57,255,20,0.3)] group-hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] cursor-pointer">
                                Quiero Este Plan
                            </button>
                        </Link>
                    </div>

                    {/* Plan 2: Membership System */}
                    <div className="relative group p-8 bg-glass-dark rounded-[2rem] border border-white/5 hover:border-neon-cyan/50 hover:shadow-[0_0_40px_rgba(0,242,255,0.1)] transition-all duration-500 hover:-translate-y-2 md:mt-8">
                        <div className="mb-8">
                            <h3 className="text-white/50 font-bold uppercase tracking-widest text-sm mb-2">Escala</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-white">Consultar</span>
                            </div>
                            <p className="text-neon-cyan text-sm font-bold mt-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" /> Sistema PRO
                            </p>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Todo lo del Plan Despegue",
                                "Gestión de Contenidos (CMS)",
                                "WordPress Headless Integration",
                                "Sistema de Membresías",
                                "Panel de Admin Intuitivo",
                                "Blog Autogestionable"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="https://wa.me/5491112345678?text=Hola,%20me%20interesa%20el%20Plan%20Escala%20con%20WordPress" target="_blank" className="block w-full">
                            <button className="w-full py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest rounded-xl hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 cursor-pointer">
                                Consultar
                            </button>
                        </Link>
                    </div>

                    {/* Plan 3: Custom */}
                    <div className="relative group p-8 bg-glass-dark rounded-[2rem] border border-white/5 hover:border-neon-fuchsia/50 hover:shadow-[0_0_40px_rgba(255,0,255,0.1)] transition-all duration-500 hover:-translate-y-2 md:mt-16">
                        <div className="mb-8">
                            <h3 className="text-white/50 font-bold uppercase tracking-widest text-sm mb-2">Enterprise</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-white">A Medida</span>
                            </div>
                            <p className="text-neon-fuchsia text-sm font-bold mt-2 flex items-center gap-2">
                                <Star className="w-4 h-4" /> Soluciones Únicas
                            </p>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Desarrollo Full Stack a Medida",
                                "ACF - Advanced Custom Fields",
                                "Sistemas de Turnos Complejos",
                                "E-commerce Avanzado",
                                "Integraciones API Custom",
                                "Soporte Prioritario 24/7"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="https://wa.me/5491112345678?text=Hola,%20necesito%20una%20solucion%20custom%20para%20mi%20gym" target="_blank" className="block w-full">
                            <button className="w-full py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest rounded-xl hover:border-neon-fuchsia hover:text-neon-fuchsia transition-all duration-300 cursor-pointer">
                                Agendar Call
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
