"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LogoAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const barsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Equalizer / Pulse animation
        const ctx = gsap.context(() => {
            barsRef.current.forEach((bar, i) => {
                if (!bar) return;

                gsap.to(bar, {
                    height: () => gsap.utils.random(8, 24),
                    duration: 0.4,
                    ease: "power1.inOut",
                    yoyo: true,
                    repeat: -1,
                    delay: i * 0.1,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-10 h-10 bg-black rounded-lg flex items-center justify-center gap-1 border border-neon-green/30 shadow-[0_0_15px_rgba(57,255,20,0.3)] overflow-hidden"
        >
            {[...Array(3)].map((_, i) => (
                <div
                    key={i}
                    ref={el => { barsRef.current[i] = el }}
                    className="w-1.5 bg-neon-green rounded-full shadow-[0_0_5px_#39ff14]"
                    style={{ height: 12 + i * 4 }}
                />
            ))}
        </div>
    );
}
