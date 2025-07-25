import { motion } from "framer-motion"
import { FaBullseye, FaCheckCircle, FaCog, FaShieldAlt } from "react-icons/fa"

export const Benefits = () => {
    const benefits = [
        {
            icon: <FaBullseye className="h-12 w-12 text-yellow-400" />,
            title: "Un Solo Proveedor",
            description: "Solución integral con un único punto de contacto para todos sus servicios industriales.",
            delay: 0.2,
        },
        {
            icon: <FaCheckCircle className="h-12 w-12 text-yellow-400" />,
            title: "Seguimiento Continuo",
            description: "Monitoreo constante y seguimiento personalizado de todos nuestros servicios.",
            delay: 0.4,
        },
        {
            icon: <FaCog className="h-12 w-12 text-yellow-400" />,
            title: "Reducción de Costos",
            description: "Optimización de recursos y reducción significativa de costos operativos.",
            delay: 0.6,
        },
        {
            icon: <FaShieldAlt className="h-12 w-12 text-yellow-400" />,
            title: "Mayor Seguridad",
            description: "Cumplimiento estricto de normas de seguridad industrial y protocolos establecidos.",
            delay: 0.8,
        },
    ]

    return (
        <section id="beneficios" className="relative py-24 text-white overflow-hidden">
            {/* Fondo Parallax con bg-fixed */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed opacity-80"
                style={{
                    backgroundImage: `url("/images/electrical-equipment.png")`,
                }}
            />
            {/* Capa oscura */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-60 z-0" />

            {/* Contenido */}
            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por Qué Elegir Servipol?</h2>
                    <p className="text-xl text-blue-200">Las ventajas de trabajar con nosotros</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: benefit.delay, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center justify-center mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white text-center mb-2">{benefit.title}</h3>
                            <p className="text-sm text-blue-100 text-center">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
