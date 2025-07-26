import { motion } from "framer-motion"
import { useState } from "react"
import { AiOutlineThunderbolt } from "react-icons/ai"
import { FaTools, FaIndustry, FaMicrochip, FaBolt } from "react-icons/fa"
import { HiOutlineChip } from "react-icons/hi"
import { LuFactory } from "react-icons/lu"
import { TbTool } from "react-icons/tb"

const services = [
    {
        icon: <TbTool className="h-10 w-10 text-blue-600" />,
        title: "Mantenimiento Integral",
        description: "Mantenimiento preventivo y correctivo de equipos industriales, maquinaria y sistemas completos.",
        delay: 0.2,
    },
    {
        icon: <LuFactory  className="h-10 w-10 text-blue-600" />,
        title: "Operación en Plantas",
        description: "Gestión y operación especializada de plantas industriales con personal técnico calificado.",
        delay: 0.4,
    },
    {
        icon: <HiOutlineChip className="h-10 w-10 text-blue-600" />,
        title: "Automatización",
        description: "Implementación de sistemas de automatización industrial para optimizar procesos productivos.",
        delay: 0.6,
    },
    {
        icon: <AiOutlineThunderbolt  className="h-10 w-10 text-blue-600" />,
        title: "Instalaciones Eléctricas",
        description: "Instalaciones eléctricas industriales, sistemas de seguridad y climatización especializada.",
        delay: 0.8,
    },
]

export const OurServices = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section id="servicios" className="py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Nuestros Servicios</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ofrecemos una amplia gama de servicios industriales especializados
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: service.delay, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg  hover:shadow-xl transition-shadow duration-300"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <motion.div
                                className="flex items-center justify-center mb-4"
                                animate={hoveredIndex === idx ? { rotate: [0, 15, -15, 0] } : { rotate: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                {service.icon}
                            </motion.div>
                            <h3 className="text-lg font-semibold text-blue-600 text-center mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-600 text-center">{service.description}</p>
                        </motion.div>


                    ))}
                </div>
            </div>
        </section>
    )
}
