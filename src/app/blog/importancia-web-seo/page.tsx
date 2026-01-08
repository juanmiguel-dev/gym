import Image from "next/image";
import { ArrowLeft, CheckCircle, BarChart3, Globe, Shield } from "lucide-react";

export default function BlogPostPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 bg-black text-white selection:bg-neon-cyan selection:text-black">
            {/* Navigation */}
            <div className="max-w-3xl mx-auto mb-12">
                <a href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-neon-cyan transition-colors cursor-pointer group">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="uppercase tracking-widest text-xs font-bold">Volver al Blog</span>
                </a>
            </div>

            {/* Article Header */}
            <article className="max-w-3xl mx-auto">
                <header className="mb-16 text-center">
                    <span className="inline-block px-4 py-1 mb-6 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-xs font-black uppercase tracking-widest">
                        Estrategia Digital
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                        Tu Gimnasio Tiene el Mejor Equipo. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-white via-white to-gray-400">¿Y Tu Web?</span>
                    </h1>
                    <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
                        Olvídate de las "tendencias". Hablemos de datos. Por qué un sitio web no es un gasto, sino el único activo digital que realmente te pertenece.
                    </p>
                </header>

                {/* Featured Image */}
                <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden mb-16 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <Image
                        src="/images/gym-strategy.png"
                        alt="Gym digital strategy"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Content Body */}
                <div className="prose prose-invert prose-lg max-w-none">

                    <h2 className="text-3xl font-black text-white mt-16 mb-6 flex items-center gap-3">
                        <Globe className="w-8 h-8 text-neon-cyan" />
                        1. El "Efecto Mapa": SEO Local
                    </h2>
                    <p className="text-white/70 mb-6">
                        Cuando alguien se muda a tu barrio o decide empezar a entrenar, lo primero que hace no es salir a caminar mirando carteles. Saca su teléfono y busca: <strong>"Gimnasio cerca de mí"</strong>.
                    </p>
                    <ul className="space-y-4 mb-8 bg-white/5 p-8 rounded-2xl border border-white/5">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-neon-green shrink-0 mt-1" />
                            <span className="text-white/80"><strong>Google Maps</strong> prioriza negocios con sitios web verificados y optimizados.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-neon-green shrink-0 mt-1" />
                            <span className="text-white/80">Sin web, dependes solo de tu ficha de Maps, que es limitada y competís visualmente igual que el gimnasio "low cost" de al lado.</span>
                        </li>
                    </ul>

                    <h2 className="text-3xl font-black text-white mt-16 mb-6 flex items-center gap-3">
                        <Shield className="w-8 h-8 text-neon-cyan" />
                        2. La Trampa de las Redes Sociales
                    </h2>
                    <p className="text-white/70 mb-6">
                        <em>"Pero ya tengo Instagram y Facebook."</em> Esa es la objeción número uno. Y es peligrosa.
                    </p>
                    <p className="text-white/70 mb-6">
                        En Instagram, <strong>no eres dueño de tu audiencia</strong>. Eres un inquilino. Si mañana el algoritmo cambia (como pasa siempre) y decide que tus posts solo los vea el 2% de tus seguidores, tu negocio se vuelve invisible.
                    </p>
                    <div className="bg-neon-fuchsia/10 border border-neon-fuchsia/20 p-6 rounded-xl mb-8">
                        <p className="text-neon-fuchsia font-bold uppercase tracking-widest text-sm mb-2">Dato Crudo</p>
                        <p className="text-white font-medium">
                            Un sitio web es <strong>Tierra Propia</strong>. Tú controlas el mensaje, tú controlas los datos, y nadie te puede "bajar el alcance" porque no pagaste publicidad ese día.
                        </p>
                    </div>

                    <h2 className="text-3xl font-black text-white mt-16 mb-6 flex items-center gap-3">
                        <BarChart3 className="w-8 h-8 text-neon-cyan" />
                        3. Credibilidad y Primera Impresión
                    </h2>
                    <p className="text-white/70 mb-6">
                        Imagina que un cliente potencial entra a tu Instagram y ve fotos increíbles. Se motiva. Quiere ver precios y horarios.
                        ¿Qué encuentra? ¿Un link a WhatsApp? ¿Una foto borrosa de un horario en historias destacadas?
                    </p>
                    <p className="text-white/70 mb-8">
                        Ahí es donde pierdes la venta. Un sitio web moderno dice: <strong>"Nos tomamos esto en serio"</strong>.
                    </p>

                    <h3 className="text-xl font-bold text-white mb-4">Lo que tu web debe responder en 5 segundos:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        {[
                            "¿Qué tipo de entrenamiento ofrecen?",
                            "¿Es para principiantes o avanzados?",
                            "¿Dónde están ubicados exactamente?",
                            "¿Cómo me inscribo AHORA?"
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 px-6 py-4 rounded-lg text-white/80 border border-white/5">
                                {item}
                            </div>
                        ))}
                    </div>


                </div>


            </article>
        </main>
    );
}
