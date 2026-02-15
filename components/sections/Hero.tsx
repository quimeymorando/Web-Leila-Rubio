"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-50 via-white to-purple-50 pb-24 md:pb-0">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left space-y-6 pt-20 md:pt-0"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-tight bg-gradient-to-r from-violet-900 via-violet-400 to-violet-900 bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
                        Transforma el Conflicto Legal en <span className="italic">Paz y Abundancia</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto md:mx-0 font-light">
                        Un programa de 10 semanas de Abogacía Holística para desbloquear tu dinero, sanar tus vínculos y habitar tu cuerpo como un espacio seguro.
                    </p>
                    <div className="pt-4 hidden md:block">
                        <Link href="https://wa.me/5493416297856" target="_blank">
                            <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-violet-600 hover:bg-violet-700 shadow-lg hover:shadow-xl transition-all duration-300">
                                Aplicar al Programa
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 relative flex flex-col items-center justify-center md:justify-center"
                >
                    <div className="relative w-full max-w-[320px]"> {/* More compact and harmonious */}
                        {/* Ethereal Glow */}
                        {/* Ethereal Glow - Vibrant & Spiritual */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-400 to-amber-200 opacity-60 blur-2xl transform scale-105 animate-pulse-slow"></div>

                        {/* Delicate Outer Ring with Tint */}
                        <div className="absolute -inset-4 rounded-[2.5rem] border-2 border-violet-300/50 opacity-100 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.3)]"></div>

                        {/* Inner Decorative Border */}
                        <div className="absolute -inset-1.5 rounded-[2.2rem] border border-fuchsia-200/60 opacity-80"></div>

                        {/* Video Container */}
                        <div className="relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-black/5 ring-1 ring-violet-400/50">
                            <video
                                src="https://storage.googleapis.com/msgsndr/uuaiNCJCRvymWQ2ejuex/media/698fbc611afc8e44d5acb785.mp4"
                                controls
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Mobile Button - Below Video */}
                    <div className="mt-12 md:hidden w-full flex justify-center">
                        <Link href="https://wa.me/5493416297856" target="_blank">
                            <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-violet-600 hover:bg-violet-700 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[320px]">
                                Aplicar al Programa
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
