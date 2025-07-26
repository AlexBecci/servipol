import React from 'react';
import { motion } from 'framer-motion';

interface ServiceBlock {
    type: 'image' | 'text';
    /** Solo para type=image */
    src?: string;
    alt?: string;
    /** Solo para type=text */
    title?: string;
    description?: string;
}

const serviceBlocks: ServiceBlock[] = [
    // 1. Equipos Compresores
    {
        type: 'image',
        src: '/images/imagen_1.jpg',
        alt: 'Equipos compresores',
    },
    {
        type: 'text',
        title: 'Equipos Compresores',
        description:
            'Diseño, instalación y mantenimiento de compresores industriales de alta eficiencia para amoníaco y otros gases.',
    },

    // 2. Control de Procesos
    {
        type: 'image',
        src: '/images/imagen_2.jpg',
        alt: 'Control de cámaras y procesos',
    },
    {
        type: 'text',
        title: 'Control de Procesos',
        description:
            'Programación e implementación de PLCs y SCADA para controlar temperatura, caudales y operaciones en tiempo real.',
    },

    // 3. Automatización y Cableado
    {
        type: 'image',
        src: '/images/imagen_3.jpg',
        alt: 'Instalación de sistemas de automatización',
    },
    {
        type: 'text',
        title: 'Automatización Industrial',
        description:
            'Integración de sensores, actuadores y lógica programable para optimizar líneas de producción y reducir tiempos muertos.',
    },

    // 4. Paneles Industriales
    {
        type: 'image',
        src: '/images/imagen_4.jpg',
        alt: 'Línea de envasado',
    },
    {
        type: 'text',
        title: 'Paneles de Control',
        description:
            'Diseño y montaje de tableros modulares con componentes IEC, protecciones magnetotérmicas y renovaciones de tablero.',
    },

    // 5. Compresores para amoníaco
    {
        type: 'image',
        src: '/images/imagen_5.jpg',
        alt: 'Compresores para amoníaco',
    },
    {
        type: 'text',
        title: 'Compresores de Amoníaco',
        description:
            'Suministro, puesta en marcha y mantenimiento de compresores refrigerantes con fluidos de amoníaco, con todas las normas de seguridad.',
    },

    // 6. Tuberías Industriales
    {
        type: 'image',
        src: '/images/imagen_6.jpg',
        alt: 'Paneles industriales',
    },
    {
        type: 'text',
        title: 'Tuberías y Caudalímetros',
        description:
            'Instalación de cañerías, válvulas y caudalímetros para líquidos y gases, con trazabilidad PN y pruebas hidrostáticas.',
    },

    // 7. Molinos y Trituración
    {
        type: 'image',
        src: '/images/imagen_7.jpg',
        alt: 'Molino de bolas',
    },
    {
        type: 'text',
        title: 'Molinos Industriales',
        description:
            'Mantenimiento y puesta a punto de molinos de bolas, trituradoras y sistemas de molienda en plantas metalúrgicas.',
    },

    // 8. Armado de Atomizadores
    {
        type: 'image',
        src: '/images/imagen_8.jpg',
        alt: 'Armado de atomizador',
    },
    {
        type: 'text',
        title: 'Armado de Atomizadores',
        description:
            'Montaje y alineación de atomizadores para procesos de secado y recubrimiento, con verificación de caudales y pulverización.',
    },

    // 9. Aspirado de Tableros Eléctricos
    {
        type: 'image',
        src: '/images/imagen_9.jpg',
        alt: 'Aspirado de tableros eléctricos',
    },
    {
        type: 'text',
        title: 'Aspirado de Tableros',
        description:
            'Limpieza interna y renovación de canalizaciones en tableros de fuerza y control, asegurando disipación térmica y fiabilidad.',
    },

    // 10. Ventilador de Combustión
    {
        type: 'image',
        src: '/images/imagen_10.jpg',
        alt: 'Ventilador de combustión',
    },
    {
        type: 'text',
        title: 'Ventiladores y Extractores',
        description:
            'Suministro y mantenimiento de ventiladores industriales para combustión, secado y extracción de humos, con balanceo dinámico.',
    },

    // 11. Cañería de Gas Industrial
    {
        type: 'image',
        src: '/images/imagen_11.jpg',
        alt: 'Cañería de gas industrial en Ilva',
    },
    {
        type: 'text',
        title: 'Cañerías de Gas',
        description:
            'Tendido y certificación de líneas de gas industrial, con control de fugas, pruebas de hermeticidad y ajustes finales en planta.',
    },
];

export const ServicesSection: React.FC = () => (
    <section id="servicios" className="py-4 pb-12 bg-gray-100">
        <div className="sm:container mx-auto px-4 max-h-[300px] overflow-y-auto ">
            {/*   <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Nuestros Servicios
      </h2> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {serviceBlocks.map((block, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className={
                            block.type === 'image'
                                ? 'overflow-hidden rounded-lg shadow-lg'
                                : 'flex flex-col justify-center bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-lg p-8 shadow-lg'
                        }
                    >
                        {block.type === 'image' ? (
                            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                                <img
                                    src={block.src}
                                    alt={block.alt}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                            </div>
                        ) : (
                            <>
                                <h3 className="text-base md:text-xl font-semibold mb-4">{block.title}</h3>
                                <p className="text-md md:text-base text-gray-300 leading-relaxed">{block.description}</p>
                            </>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);
