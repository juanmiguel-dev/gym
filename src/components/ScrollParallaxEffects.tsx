'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const ScrollParallaxEffects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const neonGreenLineRef = useRef<HTMLDivElement>(null);
    const neonFuchsiaLineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom center",
                scrub: 1, // Smooth scrolling
            }
        });

        // Animation for the neon green line
        tl.to(neonGreenLineRef.current, {
            xPercent: 150,
            opacity: 0.8,
            ease: 'none',
        }, 0);

        // Animation for the neon fuchsia line
        tl.to(neonFuchsiaLineRef.current, {
            xPercent: -150,
            opacity: 0.8,
            ease: 'none',
        }, 0);

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Neon Green Line */}
            <div
                ref={neonGreenLineRef}
                className="absolute top-1/4 -left-full w-full h-[2px] bg-neon-green opacity-0 blur-[4px] shadow-[0_0_15px_#39ff14]"
            />

            {/* Neon Fuchsia Line */}
            <div
                ref={neonFuchsiaLineRef}
                className="absolute bottom-1/4 -right-full w-full h-[2px] bg-neon-fuchsia opacity-0 blur-[4px] shadow-[0_0_15px_#ff00ff]"
            />

            {/* Extra subtle particles or accents */}
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-neon-green rounded-full blur-[1px] opacity-20" />
            <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-neon-fuchsia rounded-full blur-[1px] opacity-20" />
        </div>
    );
};

export default ScrollParallaxEffects;
