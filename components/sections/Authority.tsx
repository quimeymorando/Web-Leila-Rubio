"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Authority() {
    return (
        <section className="py-20 md:py-32 bg-white relative">
            <div className="container px-4 md:px-6 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center">
                        {/* Fixed Violet Halo / Beam of Light */}
                        <div className="absolute inset-0 rounded-full bg-violet-500 blur-[60px] opacity-60 z-0"></div>

                        {/* Distinct Violet Circle Ring */}
                        <div className="absolute -inset-2 rounded-full border-4 border-violet-500/80 z-10 shadow-[0_0_40px_rgba(139,92,246,0.6)]"></div>

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white z-20">
                            <Image
                                src="/FOTO LEILA.jpg"
                                alt="Leila Andrea Rubio"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-violet-900">
                        Soy Leila Andrea Rubio
                    </h2>
                    <h3 className="text-lg md:text-xl text-violet-600 font-medium uppercase tracking-wider">
                        Abogada · Consteladora · Biodecodificadora
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        "Mi misión es acompañarte a pasar del dolor al placer, y de la escasez a la abundancia. Entiendo el lenguaje de la ley y el lenguaje del alma, y estoy aquí para traducir esa tensión en libertad."
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
