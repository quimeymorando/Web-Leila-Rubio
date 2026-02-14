"use client";

import { motion } from "framer-motion";
import { CopyX, ZapOff, HeartCrack, PiggyBank } from "lucide-react";

const problems = [
    {
        icon: CopyX,
        question: "¿Sientes que tus juicios legales están estancados?",
        description: "La burocracia parece interminable y no ves avances concretos.",
    },
    {
        icon: ZapOff,
        question: "¿El conflicto drena tu energía vital?",
        description: "Te despiertas cansada, sin motivación y con la mente rumiando el problema.",
    },
    {
        icon: HeartCrack,
        question: "¿Sientes tensiones físicas inexplicables?",
        description: "Dolores de cabeza, contracturas y malestar que los médicos no logran explicar.",
    },
    {
        icon: PiggyBank,
        question: "¿El dinero está 'congelado' y no fluye?",
        description: "Sientes que la abundancia está bloqueada por este proceso legal pendiente.",
    },
];

export default function Problem() {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-violet-900 mb-6">
                        ¿Te resuena alguna de estas situaciones?
                    </h2>
                    <p className="text-lg text-slate-600">
                        El conflicto legal no es solo un trámite, es una carga emocional y física.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/40 backdrop-blur-md border border-violet-200 hover:border-violet-300 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-6 text-violet-600 group-hover:scale-110 transition-transform duration-300">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-violet-900 mb-3 leading-tight">
                                {item.question}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
