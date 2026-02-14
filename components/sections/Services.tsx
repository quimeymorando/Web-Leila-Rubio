"use client";

import { motion } from "framer-motion";
import { Users, Flower2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
    {
        icon: Users,
        title: "Acompañamiento Integral",
        description: "Trabajo interdisciplinario con expertos aliados.",
    },
    {
        icon: Flower2,
        title: "Meditación Guiada",
        description: "Respiración ovárica y conexión profunda.",
    },
];

export default function Services() {
    return (
        <section className="py-20 bg-violet-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-600 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-bold text-violet-100 mb-6"
                    >
                        Servicios
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg text-violet-200 font-light"
                    >
                        Acompaño tu camino interior para resolver conflictos con amor.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/20 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                                <CardContent className="p-8 flex flex-col items-center text-center space-y-6 relative z-10">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-violet-200 ring-1 ring-white/20 group-hover:bg-violet-600 group-hover:text-white group-hover:ring-violet-400 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                        <service.icon size={32} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-violet-100">
                                        {service.title}
                                    </h3>

                                    <p className="text-violet-200/80 text-lg leading-relaxed">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
