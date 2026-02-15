"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-purple-50/50 to-purple-100/30 -z-20" />

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-200/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2E1065] mb-6 leading-tight"
                    >
                        Una historia que podría ser la tuya.
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl font-sans font-light text-slate-500 max-w-2xl mx-auto"
                    >
                        Así se ve la vida cuando dejas de luchar contra el conflicto y empiezas a sanarlo.
                    </motion.h3>
                </div>

                {/* Central Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <Card className="overflow-hidden border border-violet-100 bg-white/60 backdrop-blur-md shadow-2xl shadow-violet-200/40 rounded-3xl">
                        <CardContent className="p-0 flex flex-col md:flex-row">
                            {/* Image Container */}
                            <div className="w-full md:w-2/5 min-h-[400px] bg-violet-100 relative group overflow-hidden">
                                <Image
                                    src="/FOTOTESTIMONIOLEILA.jpeg"
                                    alt="Carla Quintana - Testimonio"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 to-transparent mix-blend-overlay" />
                            </div>

                            {/* Content Container */}
                            <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-14 flex flex-col justify-center relative">
                                {/* Decorative Quote Icon */}
                                <Quote className="absolute top-8 right-8 text-violet-100 w-12 h-12 md:w-16 md:h-16 transform rotate-180" />

                                <div className="space-y-2 mb-8">
                                    <h4 className="text-3xl font-bold text-slate-800">Carla Quintana</h4>
                                    <p className="text-lg text-violet-600 font-medium italic">
                                        Profesora de Yoga, Meditación y Acompañamiento Corporal Consciente.
                                    </p>
                                </div>

                                <blockquote className="relative z-10">
                                    <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-light">
                                        "Soy terapeuta holística con más de 10 años de experiencia en prácticas de reconexión cuerpo–mente. Acompaño principalmente a mujeres que desean salir del piloto automático y volver a habitarse con presencia, calma y coherencia.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-light mt-6">
                                        Mi enfoque integra yoga terapéutico, respiración consciente, regulación del sistema nervioso y meditación guiada, desde una mirada amorosa, posible y profundamente humana. En este programa de 10 semanas, guiaré prácticas grabadas diseñadas para que cada participante pueda realizarlas a su propio ritmo y en el horario que mejor se adapte a su vida cotidiana."
                                    </p>
                                </blockquote>

                                {/* Optional: Signature or nice closing element could go here */}
                                <div className="mt-8 pt-8 border-t border-violet-100 flex items-center gap-2">
                                    <div className="h-0.5 w-12 bg-gradient-to-r from-violet-400 to-transparent rounded-full" />
                                    <span className="text-sm text-violet-400 uppercase tracking-widest font-semibold">Caso de Éxito</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
