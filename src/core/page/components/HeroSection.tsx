import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import { PiPhone } from 'react-icons/pi';

export const HeroSection = () => {

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg')] bg-cover bg-center bg-fixed"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 to-blue-600/20"></div>
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

                            whileTap={{ scale: 0.95 }}
                        >
                            <PiPhone className="text-xl" />
                            Solicitar Presupuesto
                        </motion.button>

                        <motion.button
                            className="flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-2 text-lg rounded-lg bg-transparent hover:scale-105 transition-all duration-300"

                            whileTap={{ scale: 0.95 }}
                        >
                            <FaEnvelope className="text-xl" />
                            Consultar por Email
                        </motion.button>
                    </motion.div>
                    {/* Scroll Indicator */}
                    <motion.div
                        className="pt-16 flex justify-center"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="w-6 h-10 border-2 border-white rounded-3xl flex justify-center">
                            <div className="w-1 h-3 bg-white rounded-full mt-2" />
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};
