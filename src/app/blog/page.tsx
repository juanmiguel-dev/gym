import FeaturedPost from "@/components/FeaturedPost";

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-32 px-4 bg-black">
            <div className="text-center mb-16">
                <span className="text-neon-red font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Gym Business Intelligence</span>
                <h1 className="text-6xl md:text-9xl font-black uppercase text-white tracking-tighter mb-4 opacity-10">BLOG</h1>
            </div>

            <FeaturedPost />

            {/* Placeholder for future posts grid */}
            <div className="max-w-7xl mx-auto py-20 border-t border-white/5 text-center">
                <p className="text-white/40 italic">Más artículos próximamente...</p>
            </div>
        </main>
    );
}
