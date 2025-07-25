// src/core/page/components/AboutUs.tsx

import { motion } from "framer-motion";
import { LuUsers } from "react-icons/lu";
import useIsMobile from "../../hoook/IsMobile";

export const AboutUs = () => {

    const isMobile = useIsMobile();

    return (
        <section
            id="nosotros"
            className="min-h-screen py-24 bg-muted/30 flex items-center justify-center max-w-4xl mx-auto"
        >
            <div className="container mx-auto px-4">
                {/* Título con animación */}
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center text-primary mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    ¿Quiénes Somos?
                </motion.h2>

                {/* Contenido principal */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Texto */}
                    <motion.div
                        className="space-y-6 text-left"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Somos <strong>Servipol Group SRL</strong>, una empresa especializada en servicios industriales y
                            mantenimiento integral con más de 15 años de experiencia en el mercado.
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Nuestro equipo de profesionales altamente capacitados trabaja de manera coordinada para ofrecer{" "}
                            <strong>soluciones personalizadas</strong> que se adapten a las necesidades específicas de cada
                            cliente.
                        </p>

                        <motion.div
                            className="flex items-center space-x-4"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <LuUsers className="h-8 w-8 text-blue-600" />
                            <span className="text-lg font-semibold text-blue-600">Trabajo en Equipo</span>
                        </motion.div>
                    </motion.div>

                    {/* Imagen con efecto hover */}
                    <motion.div
                        className="relative rounded-lg overflow-hidden shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <img
                            src="/images/industrial-panels.png"
                            alt="Instalaciones industriales Servipol"
                            className="w-full h-auto object-cover rounded-lg"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
