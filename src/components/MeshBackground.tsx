"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MeshBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const glow1Ref = useRef<HTMLDivElement>(null);
    const glow2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the main glow horizontally and vertically
            gsap.to(glow1Ref.current, {
                x: "20%",
                y: "10%",
                duration: 20,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(glow2Ref.current, {
                x: "-20%",
                y: "-10%",
                duration: 25,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 bg-black overflow-hidden"
        >
            {/* The Mesh/Dot Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Primary Glow (Cyan) */}
            <div
                ref={glow1Ref}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[50vh] bg-neon-cyan/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"
            />

            {/* Secondary Glow (Green) */}
            <div
                ref={glow2Ref}
                className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] bg-neon-green/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"
            />

            {/* Subtler Ambient Lights */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-fuchsia/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-red/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none brightness-150 contrast-150"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Tag filter='url(%23noise)'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3C/svg%3E")` }}
            />
        </div>
    );
}
