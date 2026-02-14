"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Heart, Feather, Sun, Droplets, Zap } from "lucide-react";

const benefits = [
    { icon: Heart, text: "Habitar el cuerpo como espacio seguro." },
    { icon: Feather, text: "Regular el sistema nervioso y la respiración." },
    { icon: Zap, text: "Reconocer tensiones físicas del conflicto interno." },
    { icon: Sun, text: "Desarrollar presencia y conciencia corporal." },
    { icon: Droplets, text: "Transformar el conflicto en autoconocimiento." },
    { icon: CheckCircle2, text: "Desbloquear la energía del dinero." },
];

export default function Solution() {
    return (
        <section className="py-20 md:py-32 bg-violet-900 text-white relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">

                <div className="flex-1 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-violet-100">
                            ¿Qué abordaremos en estas 10 semanas?
                        </h2>
                        <p className="text-violet-200 text-lg leading-relaxed max-w-xl">
                            Un viaje profundo hacia tu interior para que el proceso legal externo sea un reflejo de tu paz interna.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        {benefits.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-start gap-3"
                            >
                                <div className="mt-1 p-1 bg-violet-800 rounded-full">
                                    <item.icon className="w-5 h-5 text-violet-300" />
                                </div>
                                <span className="text-violet-100 font-light text-lg">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 mt-8"
                    >
                        <p className="text-violet-200 italic font-serif text-center">
                            "No se trata de 'hacer yoga perfecto', sino de aprender a estar presentes en medio de la tormenta."
                        </p>
                    </motion.div>
                </div>

                <div className="flex-1 relative">
                    {/* Abstract visual representation of peace/balance */}
                    <div className="aspect-square rounded-full border border-white/20 relative flex items-center justify-center animate-spin-slow">
                        <div className="w-[80%] h-[80%] rounded-full border border-white/10 flex items-center justify-center animate-reverse-spin relative">
                            <div className="w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-violet-400 to-fuchsia-400 opacity-20 blur-xl"></div>

                            {/* Minimalist Lotus Flower - Centered & Stable (counter-rotated to appear static if parent spins, or just placed absolutely) */}
                            <div className="absolute inset-0 flex items-center justify-center animate-spin-slow" style={{ animationDirection: 'normal' }}>
                                {/* Parent animate-reverse-spin rotates CCW. We rotate CW here to stabilize? 
                            Actually, if parent is reverse-spin, this child will spin with it. 
                            If we want it static relative to page, we should put it outside or counteract.
                            Let's try putting it inside but outside the moving parts? 
                            The user said "inside the smallest circle". 
                            The smallest circle is the 60% one (blur).
                            Let's place it absolutely in the center of the 80% container, but outside the blurred div?
                            Actually, to make it static, best to place it as sibling to the rotating containers if possible, 
                            BUT the user said "inside the smallest circle". 
                            If I place it in the hierarchy:
                            Outer (spin slow) -> Inner (reverse spin) -> Lotus
                            Spin + Reverse Spin ~ Static if speeds match?
                            Let's try placing it inside the Inner div. 
                            Outer: animate-spin-slow (assume 20s?)
                            Inner: animate-reverse-spin.
                            If they have same duration/easing, the inner content might be static relative to page?
                            Let's check tailwind config or assume standard spin.
                            Usually 'animate-spin' is linear infinite. 'reverse-spin' is just direction.
                            So yes, it should be static-ish.
                        */}
                                <img
                                    src="/LOGO-FLOR.png"
                                    alt="Flor de Loto"
                                    className="w-24 h-24 object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] opacity-90"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
