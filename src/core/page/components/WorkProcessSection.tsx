import { motion } from 'framer-motion'

interface StepProps {
    number: number
    title: string
    description: string
}

const steps: StepProps[] = [
    {
        number: 1,
        title: "Estudio Inicial",
        description: "Análisis detallado de sus necesidades y evaluación técnica de la situación actual.",
    },
    {
        number: 2,
        title: "Diagnóstico y Presupuesto",
        description: "Diagnóstico profesional y elaboración de presupuesto personalizado sin compromiso.",
    },
    {
        number: 3,
        title: "Mantenimiento Adaptado",
        description: "Implementación de soluciones personalizadas adaptadas a cada cliente específico.",
    },
]

export const WorkProcessSection = () => {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">¿Cómo Trabajamos?</h2>
                    <p className="text-xl text-muted-foreground">Nuestro proceso de trabajo paso a paso</p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-xl shadow-md border border-muted"
                        >
                            <div className="flex items-center justify-center w-12 h-12 text-white bg-primary rounded-full mx-auto mb-4 text-lg font-bold">
                                {step.number}
                            </div>
                            <h3 className="text-lg font-semibold text-center text-primary mb-2">{step.title}</h3>
                            <p className="text-sm text-center text-muted-foreground">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
