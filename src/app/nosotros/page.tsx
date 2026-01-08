import TechShowcase from "@/components/TechShowcase";

export default function NosotrosPage() {
    return (
        <main className="min-h-screen pt-32">
            <div className="text-center mb-10 px-4">
                <h1 className="text-6xl md:text-9xl font-black uppercase text-white tracking-tighter mb-4 opacity-10">NOSOTROS</h1>
                <p className="text-neon-cyan font-bold tracking-widest text-sm uppercase -mt-10 relative z-10">Broken the Fourth Wall</p>
            </div>
            <TechShowcase />
        </main>
    );
}
