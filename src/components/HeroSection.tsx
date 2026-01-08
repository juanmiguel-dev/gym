"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

import ScrollParallaxEffects from "./ScrollParallaxEffects";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Neon "flicker" effect constant duration
      const flickerTl = gsap.timeline({ repeat: 2 });
      flickerTl.to(titleRef.current, { opacity: 0.2, duration: 0.1 })
        .to(titleRef.current, { opacity: 1, duration: 0.1 });

      // Final neon glow state
      gsap.to(titleRef.current, {
        opacity: 1,
        duration: 0.5,
        delay: 0.6
      });

      // Fade-in for subtitle
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" }
      );

      // Scale-up for CTA
      gsap.fromTo(
        ctaRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, delay: 1.2, ease: "back.out(1.7)" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20"
    >
      {/* Scroll-based neon lines and effects */}
      <ScrollParallaxEffects />

      <div className="relative z-10 w-full flex justify-center">
        {/* Main Lumina Card */}
        <div className="bg-[#050505] rounded-[3rem] border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden relative group w-full max-w-[70vw]">

          <div className="p-10 md:p-24 text-center">
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/30 px-4 py-1 rounded-full mb-10 animate-pulse">
              <div className="w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_8px_#39ff14]" />
              <span className="text-neon-green text-[10px] font-bold uppercase tracking-[0.2em]">El futuro del fitness es hoy</span>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl md:text-[5.4rem] font-black uppercase tracking-[-0.04em] mb-10 text-white leading-[0.85] select-none"
            >
              TRANSFORMA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-green">TU LÍMITE</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-2xl text-white/90 font-light mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              Experimenta la máxima sinergia entre entrenamiento de vanguardia y estética inspiradora. <br className="hidden md:block" />

            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/servicios" className="w-full sm:w-auto">
                <button
                  ref={ctaRef}
                  className="w-full px-12 py-5 bg-white text-black font-black text-xl uppercase tracking-tighter transition-all hover:bg-neon-cyan hover:shadow-[0_0_50px_rgba(0,242,255,0.4)] active:scale-95 rounded-2xl cursor-pointer"
                >
                  EMPEZAR AHORA
                </button>
              </a>
              <a href="/servicios" className="w-full sm:w-auto">
                <button className="w-full px-12 py-5 bg-white/5 text-white border border-white/10 font-bold text-xl uppercase tracking-tighter transition-all hover:bg-white/10 active:scale-95 rounded-2xl backdrop-blur-md cursor-pointer">
                  VER PLANES
                </button>
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="border-t border-white/5 bg-black/40 backdrop-blur-md px-10 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
              <div>
                <h4 className="text-4xl md:text-5xl font-black text-white mb-2">99.9%</h4>
                <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Salud Optimizada</p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-black text-white mb-2">2.5M+</h4>
                <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Kilos Levantados</p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-black text-white mb-2">150+</h4>
                <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Clases Semanales</p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-black text-white mb-2 text-neon-green">A+</h4>
                <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Nivel de Excelencia</p>
              </div>
            </div>
          </div>

          {/* Decorative gradients inside the card */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent opacity-30" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-neon-cyan/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />
        </div>
      </div>

      {/* Background depth elements */}
      <div className="absolute top-[10%] left-[5%] w-[80vw] h-[60vh] bg-neon-cyan/5 blur-[150px] rounded-full -z-10 animate-pulse" />
    </section>
  );
}
