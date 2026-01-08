"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, Flame, ArrowRight } from "lucide-react";

interface ServiceCardProps {
    title: string;
    category: string;
    duration: string;
    intensity: "Baja" | "Media" | "Alta";
    description: string;
    image: string;
    color: "cyan" | "green";
}

export default function ServiceCard({
    title,
    category,
    duration,
    intensity,
    description,
    image,
    color,
}: ServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const intensityColor = {
        Baja: "text-neon-green",
        Media: "text-yellow-400",
        Alta: "text-neon-red",
    };

    const borderColor = color === "cyan" ? "border-neon-cyan" : "border-neon-green";
    const textColor = color === "cyan" ? "text-neon-cyan" : "text-neon-green";

    return (
        <div
            className="group relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${image})` }}
                />

                {/* Glassmorphism Overlay on Hover */}
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest">
                        {category}
                    </span>
                </div>

                {/* Content Overlay */}
                <div className={`absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}>
                    <h3 className={`text-4xl font-black uppercase mb-4 ${textColor} leading-tight`}>
                        {title}
                    </h3>

                    <p className="text-white/80 text-base mb-6 leading-relaxed">
                        {description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-6 mb-6">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-white/60" />
                            <span className="text-white/80 text-sm font-medium">{duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Flame className={`w-5 h-5 ${intensityColor[intensity]}`} />
                            <span className={`text-sm font-bold ${intensityColor[intensity]}`}>{intensity}</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className={`flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-${color === "cyan" ? "neon-cyan" : "neon-green"} transition-all duration-300 w-fit`}>
                        <span>Reservar Clase</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Neon Border on Hover */}
                <div className={`absolute inset-0 border-2 ${borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none`} />
            </div>
        </div>
    );
}
