"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "Carla Quintana",
        image: "/FOTOTESTIMONIOLEILA.jpeg",
        text: "Profesora de Yoga, Meditación y Acompañamiento Corporal Consciente. Soy terapeuta holística con más de 10 años de experiencia en prácticas de reconexión cuerpo–mente. Acompaño principalmente a mujeres que desean salir del piloto automático y volver a habitarse con presencia, calma y coherencia. Mi enfoque integra yoga terapéutico, respiración consciente, regulación del sistema nervioso y meditación guiada, desde una mirada amorosa, posible y profundamente humana. En este programa de 10 semanas, guiaré prácticas grabadas diseñadas para que cada participante pueda realizarlas a su propio ritmo y en el horario que mejor se adapte a su vida cotidiana.",
        focus: "Profesora de Yoga & Meditación",
    },
    {
        name: "Carlos M.",
        image: "/images/testimonial_2.png",
        text: "Al trabajar mi interior, el dinero que estaba retenido en el juicio finalmente se liberó. Gracias Leila por tu guía impecable.",
        focus: "Desbloqueo Financiero",
    },
    {
        name: "Ana S.",
        image: "/images/testimonial_3.png",
        text: "Aprendí a habitar mi cuerpo y soltar la tensión. No solo gané mi caso, gané mi salud y mi tranquilidad.",
        focus: "Salud y Bienestar",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 md:py-32 bg-purple-50/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-violet-900 mb-4">
                        Historias de Transformación Real
                    </h2>
                    <p className="text-slate-600">
                        Mujeres y hombres que eligieron la paz sobre el conflicto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border border-violet-100 shadow-lg bg-white/80 backdrop-blur-sm hover:border-violet-300 hover:shadow-xl transition-all duration-300">
                                <CardContent className="pt-8 px-6 pb-8 flex flex-col items-center text-center space-y-4">
                                    <div className="w-20 h-20 relative mb-2">
                                        <div className="absolute inset-0 rounded-full bg-violet-100 animate-pulse-slow opacity-50"></div>
                                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-md">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-1 justify-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    <p className="text-slate-600 italic leading-relaxed">
                                        "{item.text}"
                                    </p>

                                    <div className="pt-4 border-t border-violet-100 w-full">
                                        <h4 className="font-bold text-violet-900">{item.name}</h4>
                                        <span className="text-xs text-violet-500 uppercase tracking-widest font-medium">{item.focus}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
