import { motion } from 'framer-motion'
import { FaTools, FaClipboardList, FaCogs } from 'react-icons/fa'

interface StepProps {
    number: number
    title: string
    description: string
    icon: React.ReactNode
}

const steps: StepProps[] = [
    {
        number: 1,
        title: "Estudio Inicial",
        description: "Análisis detallado de sus necesidades y evaluación técnica de la situación actual.",
        icon: <FaClipboardList className="text-white text-3xl" />,
    },
    {
        number: 2,
        title: "Diagnóstico y Presupuesto",
        description: "Diagnóstico profesional y elaboración de presupuesto personalizado sin compromiso.",
        icon: <FaTools className="text-white text-3xl" />,
    },
    {
        number: 3,
        title: "Mantenimiento Adaptado",
        description: "Implementación de soluciones personalizadas adaptadas a cada cliente específico.",
        icon: <FaCogs className="text-white text-3xl" />,
    },
]

export const WorkProcessSection = () => {
    return (
        <section className="py-24 bg-muted/30 relative">
            <div className="container max-w-5xl mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">¿Cómo Trabajamos?</h2>
                    <p className="text-xl text-gray-600">Nuestro proceso de trabajo paso a paso</p>
                </motion.div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                    {steps.map((step) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay:  0.1, duration: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="group  p-8  transition-all duration-300 relative"
                        >
                            {/* Círculo con número */}
                            <motion.div
                                className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold text-white mb-6 mx-auto  transition-transform duration-500"
                            >
                                {step.icon}
                            </motion.div>

                            {/* Título */}
                            <h3 className="text-lg font-semibold text-center text-blue-600 mb-3">
                                {step.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-sm text-center text-gray-600">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
