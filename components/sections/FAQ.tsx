"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "¿Necesito conocimientos legales previos?",
        answer: "No, el programa está diseñado para que cualquier persona, independientemente de su formación, pueda comprender y aplicar las herramientas para su propio proceso.",
    },
    {
        question: "¿Sirve si mi juicio ya está avanzado?",
        answer: "Absolutamente. De hecho, es el momento ideal para intervenir energéticamente y destrabar lo que la justicia ordinaria puede estar demorando.",
    },
    {
        question: "¿Cuánto tiempo necesito dedicarle?",
        answer: "El programa requiere aproximadamente 3-4 horas semanales, incluyendo las sesiones en vivo y el trabajo personal.",
    },
    {
        question: "¿Es terapia psicológica?",
        answer: "No, es un abordaje complementario basado en constelaciones, biodecodificación y leyes sistémicas. No reemplaza terapia ni asesoramiento legal técnico.",
    },
];

export default function FAQ() {
    return (
        <section className="py-20 bg-white">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-violet-900 mb-12">
                    Preguntas Frecuentes
                </h2>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-violet-100">
                            <AccordionTrigger className="text-lg font-medium text-violet-800 hover:text-violet-600 hover:no-underline py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
