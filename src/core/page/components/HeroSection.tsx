import { motion } from 'framer-motion';
import { CallToAction } from './ui/CallToAction';

export const HeroSection = () => {

    return (
        <section id='servicios' className="py-20 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg')] bg-cover bg-center bg-fixed"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 to-blue-600/70"></div>
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
                        className="text-xl  md:text-2xl mb-8 max-w-3xl text-white font-bold mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Soluciones integrales en <span className="text-yellow-500 font-semibold">mantenimiento industrial</span>,
                        automatización y operación de plantas con más de 20 años de experiencia
                    </motion.p>
                    <CallToAction/>
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
