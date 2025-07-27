// src/core/page/components/AboutUs.tsx

import React from "react";
import { motion } from "framer-motion";
import { LuUsers } from "react-icons/lu";
import useIsMobile from "../../hoook/IsMobile";

export const AboutUs: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="nosotros"
      className="min-h-screen py-24 flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Título */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ¿Quiénes <span className="text-blue-600">Somos?</span>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 mb-6" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            className="space-y-6 text-center sm:text-left"
            initial={isMobile ? { opacity: 0, scale: 0.95 } : { opacity: 0, x: 0 }}
            whileInView={isMobile ? { opacity: 1, scale: 1 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-800">
              Somos <strong>Servipol Group SRL</strong>, una empresa especializada en servicios industriales y
              mantenimiento integral con más de 15 años de experiencia en el mercado.
            </p>
            <p className="text-lg text-gray-800">
              Nuestro equipo de profesionales altamente capacitados trabaja de manera coordinada para ofrecer{" "}
              <strong>soluciones personalizadas</strong> que se adapten a las necesidades específicas de cada cliente.
            </p>

            <motion.div
              className="flex items-center space-x-4 justify-center sm:justify-start"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <LuUsers className="h-8 w-8 text-blue-600" />
              <span className="text-lg font-semibold text-blue-600">Trabajo en Equipo</span>
            </motion.div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg"
            initial={isMobile ? { opacity: 0, y: 30 } : { opacity: 0, x: 0 }}
            whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={isMobile ? {} : { scale: 1.02 }}
            viewport={{ once: true }}
          >
            {/* usar aspecto dinámico según tamaño */}
            <div className="relative w-full aspect-video sm:aspect-[4/3] md:aspect-video">
              <img
                src="/images/servipol-ia.png"
                alt="Instalaciones industriales Servipol"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
