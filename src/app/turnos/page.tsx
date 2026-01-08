

"use client";

import BookingForm from "@/components/BookingForm";

export default function TurnosPage() {
    return (
        <main className="min-h-screen pt-32 px-4 pb-32 bg-black flex flex-col items-center">
            <div className="text-center mb-16">
                <span className="text-neon-fuchsia font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
                    Comienza tu Transformación
                </span>
                <h1 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter mb-6">
                    RESERVA <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">TU CLASE</span>
                </h1>
                <p className="text-white/60 max-w-2xl mx-auto text-lg">
                    Sin llamadas, sin esperas. Elige tu disciplina, tu horario y prepárate para sudar.
                </p>
            </div>

            <BookingForm />
        </main>
    );
}


