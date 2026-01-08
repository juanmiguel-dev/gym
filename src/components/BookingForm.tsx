"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar, Clock, Check, Dumbbell, Zap, Heart, Activity } from "lucide-react";
import gsap from "gsap";

const ACTIVITIES = [
    { id: "crossfit", name: "CrossFit", icon: Zap, color: "text-neon-cyan", border: "group-hover:border-neon-cyan" },
    { id: "musculacion", name: "Musculación", icon: Dumbbell, color: "text-neon-green", border: "group-hover:border-neon-green" },
    { id: "yoga", name: "Yoga Flow", icon: Heart, color: "text-neon-fuchsia", border: "group-hover:border-neon-fuchsia" },
    { id: "cardio", name: "Hiit Cardio", icon: Activity, color: "text-white", border: "group-hover:border-white" },
];

export default function BookingForm() {
    const formRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        activities: [] as string[]
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Entrance animation
        if (formRef.current) {
            gsap.fromTo(formRef.current.children,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
            );
        }
    }, []);

    const toggleActivity = (id: string) => {
        setFormData(prev => ({
            ...prev,
            activities: prev.activities.includes(id)
                ? prev.activities.filter(a => a !== id)
                : [...prev.activities, id]
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would normally send data to an API
    };

    if (submitted) {
        return (
            <div className="w-full max-w-4xl mx-auto min-h-[500px] flex items-center justify-center bg-zinc-900/50 backdrop-blur-md rounded-[2rem] border border-white/5 p-10 text-center animate-in fade-in duration-700">
                <div>
                    <div className="w-20 h-20 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_#39ff14]">
                        <Check className="w-10 h-10 text-black stroke-[3]" />
                    </div>
                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">¡Turno Confirmado!</h2>
                    <p className="text-white/60 text-lg">Te hemos enviado los detalles a <span className="text-neon-green">{formData.email}</span>.</p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
                    >
                        Agendar Otro
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div ref={formRef} className="w-full max-w-5xl mx-auto relative group">
            {/* Eternal Silver Gradient Border */}
            <div className="absolute -inset-[1px] rounded-[3rem] overflow-hidden">
                <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,255,255,0.5)_360deg)] animate-[spin_5s_linear_infinite] opacity-70" />
            </div>

            {/* Main Content Container */}
            <div className="relative bg-[#0a0a0a] rounded-[3rem] shadow-2xl overflow-hidden">
                {/* Neon Glow Effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-fuchsia/5 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 p-8 md:p-16">
                    <form onSubmit={handleSubmit} className="space-y-12">

                        {/* 1. Activities Selection */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white uppercase tracking-widest flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">01</span>
                                Elige tu Actividad
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
                                {ACTIVITIES.map((activity) => {
                                    const Icon = activity.icon;
                                    const isSelected = formData.activities.includes(activity.id);
                                    const highlightColor = activity.color.replace('text-', ''); // e.g. 'neon-cyan'

                                    return (
                                        <button
                                            key={activity.id}
                                            type="button"
                                            onClick={() => toggleActivity(activity.id)}
                                            className={`group relative p-8 rounded-[2rem] border transition-all duration-500 text-left overflow-hidden
                                        ${isSelected
                                                    ? `bg-glass-dark border-${highlightColor} shadow-[0_0_30px_rgba(0,0,0,0.5)] -translate-y-2`
                                                    : "bg-glass-dark border-white/5 hover:border-white/20 hover:-translate-y-2"
                                                }
                                    `}
                                        >
                                            {/* Gradient Background (Active on Select or Hover) */}
                                            <div className={`absolute inset-0 bg-gradient-to-br from-${highlightColor} to-transparent transition-opacity duration-700 
                                        ${isSelected ? 'opacity-10' : 'opacity-0 group-hover:opacity-10'}`}
                                            />

                                            {/* Icon Container */}
                                            <div className={`mb-6 inline-block p-4 rounded-2xl border transition-all duration-500 shadow-lg relative z-10
                                        ${isSelected
                                                    ? `bg-white text-black border-white shadow-${highlightColor}`
                                                    : "bg-white/5 border-white/10 text-white group-hover:bg-white group-hover:text-black"
                                                }
                                    `}>
                                                <Icon className="w-6 h-6" />
                                            </div>

                                            {/* Title */}
                                            <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 relative z-10
                                        ${isSelected ? activity.color : 'text-white group-hover:text-white'}
                                    `}>
                                                {activity.name}
                                            </h3>

                                            {/* Selection Indicator */}
                                            <div className={`absolute top-6 right-6 transition-all duration-500 ${isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${highlightColor} text-black shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                                                    <Check className="w-5 h-5 stroke-[3]" />
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 2. Date & Time */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white uppercase tracking-widest flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">02</span>
                                Fecha y Hora
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative group">
                                    <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 ml-4">Fecha Deseada</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-neon-cyan transition-colors" />
                                        <input
                                            type="date"
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-16 pr-6 text-white placeholder-white/20 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all appearance-none [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                                            onChange={e => setFormData({ ...formData, date: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="relative group">
                                    <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 ml-4">Hora Preferida</label>
                                    <div className="relative">
                                        <Clock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-neon-cyan transition-colors" />
                                        <select
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-16 pr-6 text-white appearance-none focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all cursor-pointer"
                                            onChange={e => setFormData({ ...formData, time: e.target.value })}
                                        >
                                            <option value="" className="bg-black">Seleccionar horario...</option>
                                            <option value="07:00" className="bg-black">07:00 AM</option>
                                            <option value="08:00" className="bg-black">08:00 AM</option>
                                            <option value="09:00" className="bg-black">09:00 AM</option>
                                            <option value="17:00" className="bg-black">05:00 PM</option>
                                            <option value="18:00" className="bg-black">06:00 PM</option>
                                            <option value="19:00" className="bg-black">07:00 PM</option>
                                            <option value="20:00" className="bg-black">08:00 PM</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Personal Info */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        placeholder="Nombre Completo"
                                        required
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/30 focus:outline-none focus:border-neon-fuchsia transition-all text-lg"
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <input
                                        type="email"
                                        placeholder="Tu Mejor Email"
                                        required
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/30 focus:outline-none focus:border-neon-fuchsia transition-all text-lg"
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Action */}
                        <div className="pt-8 flex justify-end">
                            <button
                                type="submit"
                                className="group relative px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Confirmar Reserva
                                    <Check className="w-5 h-5" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
