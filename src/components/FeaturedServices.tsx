"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Users, Dumbbell, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Entrenamiento Personalizado",
        description: "Alcanza tus metas con planes diseñados exclusivamente para tu cuerpo y ritmo. Enfoque en resultados reales.",
        icon: <Dumbbell className="w-8 h-8" />,
        color: "neon-red",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    },
    {
        title: "Clases Grupales",
        description: "Siente la energía de la comunidad. HIIT, Yoga, Funcional y más, en un ambiente vibrante y motivador.",
        icon: <Users className="w-8 h-8" />,
        color: "neon-green",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    },
    {
        title: "Bienestar Holístico",
        description: "Equilibrio total. Nutrición consciente y recuperación física para una salud integral duradera.",
        icon: <Heart className="w-8 h-8" />,
        color: "neon-red", // Using red as primary neon
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    },
];

export default function FeaturedServices() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden px-4">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
                        IMPULSA TU <span className="text-neon-cyan">BIENESTAR</span>
                    </h2>
                    <div className="w-40 h-1.5 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.5)]" />
                    <p className="text-white/60 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                        Descubre las claves para una vida más fuerte, sana y equilibrada. <br />
                        <span className="text-white/80 font-medium">Resultados honestos basados en tu propio progreso.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="group relative p-10 bg-glass-dark rounded-[2rem] border border-white/5 transition-all duration-700 hover:-translate-y-4 hover:border-white/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden cursor-pointer"
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 opacity-0 group-hover:opacity-10 
                                ${service.color === 'neon-green' ? 'from-neon-green to-transparent' : 'from-neon-cyan to-transparent'}`}
                            />

                            <div className={`mb-8 inline-block p-5 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl
                                ${service.color === 'neon-green' ? 'group-hover:shadow-neon-green' : 'group-hover:shadow-neon-cyan'}`}>
                                {service.icon}
                            </div>

                            <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-neon-cyan transition-colors duration-500">
                                {service.title}
                            </h3>

                            <p className="text-white/50 mb-10 text-lg leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                                {service.description}
                            </p>

                            <button className={`flex items-center gap-3 font-bold uppercase tracking-widest text-sm transition-all duration-500 cursor-pointer
                                ${service.color === 'neon-green' ? 'text-neon-green hover:text-white' : 'text-neon-cyan hover:text-white'}`}>
                                <Play className="w-5 h-5 fill-current" />
                                <span className="border-b border-transparent group-hover:border-current">Ver Experiencia</span>
                            </button>

                            {/* Corner Glow Accent */}
                            <div className={`absolute -top-10 -right-10 w-24 h-24 blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-full
                                ${service.color === 'neon-green' ? 'bg-neon-green' : 'bg-neon-cyan'}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
