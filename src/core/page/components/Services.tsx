import { motion } from "framer-motion"
import { FaEnvelope } from "react-icons/fa"
import { PiPhone } from "react-icons/pi"

export const Service = () => {
    return (
        /*  <section id="servicios" className="relative min-h-screen flex items-center justify-center overflow-hidden"> */
        <section id="servicios" className="relative min-h-screen flex items-start justify-center pt-12 overflow-hidden">

            {/* Fondo Parallax con bg-fixed */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-80 bg-fixed "
                style={{
                    backgroundImage: `url("/images/services-banner.png")`,
                }}
            />

            {/* Capa oscura */}
            <div className="absolute inset-0 bg-black/60 " />

            {/* Contenido */}
            <motion.div
                className="relative z-10 text-center max-w-4xl mx-auto px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Soluciones Integrales para{" "}
                    <span className="block text-yellow-400">Mantenimiento Industrial</span>
                </h2>
                <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
                    Más de 20 años brindando servicios especializados en mantenimiento, automatización e instalaciones
                    industriales con el más alto nivel de calidad y seguridad.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-amber-500 text-black font-semibold px-8 py-2 text-lg rounded-lg hover:scale-105 transition-all duration-300">
                        <PiPhone className="text-xl" />
                        Solicitar Presupuesto
                    </button>
                    <button className="flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-2 text-lg rounded-lg bg-transparent hover:scale-105 transition-all duration-300">
                        <FaEnvelope className="text-xl" />
                        Consultar por Email
                    </button>
                </div>

            </motion.div>
        </section>
    )
}
