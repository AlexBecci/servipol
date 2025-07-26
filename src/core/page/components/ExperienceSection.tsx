// src/core/page/components/ExperienceSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { BiHardHat } from "react-icons/bi";
import { BsThermometer } from "react-icons/bs";
import { AnimatedSection } from "./AnimatedSection";
import { LuFactory } from "react-icons/lu";

const industries = [
    {
        icon: <BiHardHat className="h-12 w-12 text-primary" />,
        title: "Industria Alimenticia",
        description: "Servicios especializados para plantas de procesamiento de alimentos",
        badge: "Prosavic",
        delay: 0.2,
    },
    {
        icon: <BsThermometer className="h-12 w-12 text-primary" />,
        title: "Cerveza Artesanal",
        description: "Mantenimiento especializado para cervecerías y destilerías",
        badge: "Rabieta",
        delay: 0.4,
    },
    {
        icon: <LuFactory className="h-12 w-12 text-primary" />,
        title: "Metalúrgica",
        description: "Servicios para fábricas de caños y estructuras metálicas",
        badge: "Zaladillo",
        delay: 0.6,
    },
];

export const ExperienceSection: React.FC = () => {
    return (
        <section id="experiencia" className="py-24 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* Título y subtítulo */}
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
                        Nuestra <span className="text-blue-600">Experiencia</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Trabajamos para industrias alimenticias, cervecerías artesanales,
                        metalúrgicas y más, brindando servicios especializados en todo el país
                        e internacional.
                    </p>
                </AnimatedSection>

                {/* Grid de rubros */}
                <div className="grid md:grid-cols-3 gap-8 mb-12 ">
                    {industries.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white/90 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-md hover:shadow-lg transition-shadow duration-300"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: item.delay, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="flex text-blue-600 items-center justify-center mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-blue-600 text-center mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 text-center mb-4">
                                {item.description}
                            </p>
                            <span className="border-2 flex items-center justify-center mx-auto w-1/2 lg:w-1/3  border-blue-600 text-blue-600 text-xs font-semibold text-center px-2 py-1 rounded-full">
                                {item.badge}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Cobertura */}
                <AnimatedSection className="text-center" delay={0.8}>
                    <p className="text-lg text-foreground/80 mb-4">
                        <strong>Cobertura Nacional e Internacional:</strong> Podemos viajar
                        al interior del país y también al extranjero de ser necesario.
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
};
