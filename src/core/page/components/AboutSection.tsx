// src/components/AboutSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {  BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface Slide {
    title: string;
    image: string;
}

const slides: Slide[] = [
    {
        "title": "Equipos compresores",
        "image": "/images/imagen_1.jpg"
    },
    {
        "title": "Sistema de controles de temperatura en cámaras y proceso de producción",
        "image": "/images/imagen_2.jpg"
    },
    {
        "title": "Control y telemetría Ethernet",
        "image": "/images/imagen_3.jpg"
    },
    {
        "title": "Instalaciones de tuberías y soportes industriales",
        "image": "/images/imagen_4.jpg"
    },
    {
        "title": "Compresores para amoníaco",
        "image": "/images/imagen_5.jpg"
    },
    {
        "title": "Línea de eviscerado y envasado industrial",
        "image": "/images/imagen_6.jpg"
    },
    {
        "title": "Cableado y canalización en armarios de control",
        "image": "/images/imagen_7.jpg"
    },
    {
        "title": "Armado de atomizador",
        "image": "/images/imagen_8.jpg"
    },
    {
        "title": "Aspirado de tableros eléctricos",
        "image": "/images/imagen_9.jpg"
    },
    {
        "title": "Ventilador de combustión",
        "image": "/images/imagen_10.jpg"
    },
    {
        "title": "Cañería de gas industrial en ILVA",
        "image": "/images/imagen_11.jpg"
    }
]


const AboutSection: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((c) => (c + 1) % slides.length);
    const prev = () =>
        setCurrent((c) => (c - 1 + slides.length) % slides.length);

    return (
        <section className="pb-2 bg-gray-100 relative overflow-hidden">
            {/* Separador superior */}

            <div className="container mx-auto px-6">
                {/* Carrusel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col lg:flex-row">
                        {/* Texto + navegación */}
                        <motion.div
                            key={`text-${current}`}
                            className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {(() => {
                                return (
                                    <>
                                        <div className="flex items-center gap-4 mb-6">
                                            {/*   <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                                                <SlideIcon className="w-8 h-8 text-primary" />
                                            </div> */}
                                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                                {slides[current].title}
                                            </h3>
                                        </div>
                                        {/*     <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                            {slides[current].content}
                                        </p> */}
                                        {/* Controles */}
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={prev}
                                                className="w-12 h-12 bg-blue-600/10 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                                            >
                                                <BiChevronLeft className="w-6 h-6" />
                                            </button>
                                            <div className="flex gap-2">
                                                {slides.map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setCurrent(i)}
                                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-blue-600' : 'bg-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <button
                                                onClick={next}
                                                className="w-12 h-12 bg-blue-600/10 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                                            >
                                                <BiChevronRight className="w-6 h-6" />
                                            </button>
                                        </div>
                                    </>
                                );
                            })()}
                        </motion.div>

                        {/* Imagen con aspecto fijo 16:9 */}
                        <motion.div
                            key={`img-${current}`}
                            className="lg:w-1/2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="relative sm:w-1/2 mx-auto" style={{ paddingTop: '56.25%' }}>
                                <img
                                    src={slides[current].image}
                                    alt={slides[current].title}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                // si quieres centrar siempre:
                                // className="absolute top-0 left-0 w-full h-full object-contain object-center"
                                />
                                {/* ligera capa para contraste, la puedes animar en scale sin tocar la img */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-gray-300/10 rounded-br-2xl"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
