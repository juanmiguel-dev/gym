"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "HIIT POWER",
        category: "Cardio",
        duration: "45 min",
        intensity: "Alta" as const,
        description: "Entrenamiento de alta intensidad que combina ejercicios cardiovasculares y de fuerza para maximizar la quema de calorías.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        color: "cyan" as const,
    },
    {
        title: "YOGA FLOW",
        category: "Mindfulness",
        duration: "60 min",
        intensity: "Baja" as const,
        description: "Sesión de yoga dinámico que conecta respiración y movimiento para mejorar flexibilidad y equilibrio mental.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
        color: "green" as const,
    },
    {
        title: "FUNCTIONAL TRAINING",
        category: "Fuerza",
        duration: "50 min",
        intensity: "Media" as const,
        description: "Entrenamiento funcional que mejora la fuerza, movilidad y coordinación usando movimientos naturales del cuerpo.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        color: "cyan" as const,
    },
    {
        title: "SPINNING EXTREME",
        category: "Cardio",
        duration: "45 min",
        intensity: "Alta" as const,
        description: "Clase de ciclismo indoor de alta energía con música motivadora y entrenamiento por intervalos.",
        image: "https://images.unsplash.com/photo-1558017487-06bf9f82613a?w=800&q=80",
        color: "green" as const,
    },
    {
        title: "PILATES CORE",
        category: "Tonificación",
        duration: "55 min",
        intensity: "Media" as const,
        description: "Fortalece tu core y mejora la postura con ejercicios controlados que trabajan todo el cuerpo.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
        color: "cyan" as const,
    },
    {
        title: "BOXING FITNESS",
        category: "Cardio",
        duration: "50 min",
        intensity: "Alta" as const,
        description: "Combina técnicas de boxeo con acondicionamiento físico para un entrenamiento completo y liberador.",
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
        color: "green" as const,
    },
];

export default function ServicesGrid() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
                        NUESTRAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green">CLASES</span>
                    </h1>
                    <div className="w-40 h-1.5 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.5)]" />
                    <p className="text-white/60 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                        Descubre la clase perfecta para tu estilo de vida. <br />
                        <span className="text-white/80 font-medium">Desde alta intensidad hasta mindfulness total.</span>
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                cardsRef.current[index] = el;
                            }}
                        >
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
