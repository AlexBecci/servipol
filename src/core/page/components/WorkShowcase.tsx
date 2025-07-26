// src/core/page/components/WorkCarousel.tsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const trabajos = [
  "/images/imagen_1.jpg",
  "/images/imagen_2.jpg",
  "/images/imagen_3.jpg",
  "/images/imagen_4.jpg",
  "/images/imagen_5.jpg",
  "/images/imagen_6.jpg",
  "/images/imagen_7.jpg",
  // agregá tantas rutas como imágenes tengas en public/images
];

export const WorkShowcase: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  // Parallax background
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0px", "200px"]);

  // Slider state
  const [index, setIndex] = useState(0);
  const length = trabajos.length;
  const prev = () => setIndex((i) => (i - 1 + length) % length);
  const next = () => setIndex((i) => (i + 1) % length);

  return (
    <section
      id="trabajos"
      ref={ref}
      className="relative py-12 text-white overflow-hidden max-w-4xl mx-auto"
    >
      {/* Fondo Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/fondo-trabajos.jpg")`, // poné un fondo industrial grisáceo
          y: yBg,
        }}
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Título */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nuestros Trabajos
        </motion.h2>

        {/* Carrusel */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          {/* Slides */}
          <motion.div
            className="flex w-[100vw] md:w-full"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {trabajos.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full px-2 md:px-4"
                style={{ width: "100%" }}
              >
                <motion.div
                  className="overflow-hidden rounded-lg shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={src}
                    alt={`Trabajo ${i + 1}`}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Botones prev/next */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full z-20 transition"
          >
            <BiChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full z-20 transition"
          >
            <BiChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {trabajos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${i === index ? "bg-yellow-500" : "bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
