"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const features = [
    "Sesiones de Reprogramación Semanal",
    "Mentoría 1 a 1 con Leila",
    "Clases grabadas y en vivo",
    "Material de Autovaloración",
    "Acceso a la comunidad privada",
    "Ejercicios de Biodecodificación",
];

export default function Offer() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-violet-900 via-purple-800 to-violet-900 text-white relative overflow-hidden">

            {/* Glow Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-[128px] opacity-30"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-violet-400 rounded-full mix-blend-screen filter blur-[128px] opacity-30"></div>
            </div>

            <div className="container px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white leading-tight">
                    Programa <span className="text-fuchsia-200">"La Ley del Amor"</span>
                </h2>
                <p className="text-violet-200 text-lg mb-12 max-w-2xl mx-auto">
                    Todo lo que necesitas para transformar el conflicto legal en una oportunidad de sanación y abundancia.
                </p>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-left mb-10">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-violet-500/50 flex items-center justify-center text-white shrink-0">
                                    <Check size={16} strokeWidth={3} />
                                </div>
                                <span className="text-lg font-medium text-violet-50">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-6">
                        <div className="text-center">
                            <p className="text-sm text-violet-300 uppercase tracking-widest font-semibold mb-2">
                                ¿Estás lista para dar el salto?
                            </p>
                        </div>
                        <Link href="https://wa.me/5493416297856" target="_blank">
                            <Button size="lg" className="rounded-full text-xl px-12 py-8 bg-white text-violet-900 hover:bg-violet-50 hover:scale-105 transition-all duration-300 shadow-xl font-bold">
                                Aplicar al Programa Ahora
                            </Button>
                        </Link>
                        <p className="text-sm text-violet-300">
                            *Cupos limitados para asegurar una atención personalizada.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
