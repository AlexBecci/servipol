import { motion } from 'framer-motion';
import { PiPhone } from 'react-icons/pi';
import { FaEnvelope } from 'react-icons/fa';

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-blue-900/90">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg')] bg-cover bg-center opacity-30"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-10 w-2 h-2 bg-secondary rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-40 right-20 w-3 h-3 bg-secondary rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.9, 0.4]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="block">SERVIPOL</span>
                        <span className="text-yellow-500">GROUP SRL</span>
                    </h1>

                    <motion.p
                        className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Soluciones integrales en <span className="text-secondary font-semibold">mantenimiento industrial</span>,
                        automatización y operación de plantas con más de 15 años de experiencia
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.button
                            className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-amber-500 text-black font-semibold px-8 py-2 text-lg rounded-lg hover:scale-105 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <PiPhone className="text-xl" />
                            Solicitar Presupuesto
                        </motion.button>

                        <motion.button
                            className="flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-2 text-lg rounded-lg bg-transparent hover:scale-105 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaEnvelope className="text-xl" />
                            Consultar por Email
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-3xl flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                </div>
            </motion.div>
        </section>
    );
};
