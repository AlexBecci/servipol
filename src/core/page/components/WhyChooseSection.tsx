import { motion } from 'framer-motion';
import { BiShield, BiTrophy } from 'react-icons/bi';
import { CgLock } from 'react-icons/cg';
import { FaThumbsUp } from 'react-icons/fa';

export const WhyChooseSection = () => {
    const benefits = [
        {
            icon: BiShield,
            title: "Calidad Garantizada",
            description: "Certificaciones ISO y estándares internacionales en todos nuestros procesos y servicios."
        },
        {
            icon: BiTrophy,
            title: "Experiencia Comprobada",
            description: "Más de 15 años ejecutando proyectos exitosos en diversas industrias del país."
        },
        {
            icon: CgLock,
            title: "Respuesta Rápida",
            description: "Tiempos de respuesta optimizados y servicios de emergencia disponibles 24/7."
        },
        {
            icon: FaThumbsUp,
            title: "Satisfacción del Cliente",
            description: "95% de satisfacción del cliente y relaciones comerciales de largo plazo."
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg')] bg-cover bg-center bg-fixed"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 to-blue-600/30"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        ¿Por Qué <span className="text-secondary">Elegirnos?</span>
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Nos diferenciamos por nuestro compromiso con la excelencia y la innovación tecnológica
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <motion.div
                                className="backdrop-blur-xs bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 h-full"
                                whileHover={{
                                    y: -10,
                                    scale: 1.02
                                }}
                                style={{
                                    backdropFilter: 'blur(16px)',
                                    WebkitBackdropFilter: 'blur(16px)'
                                }}
                            >
                                <motion.div
                                    className="w-16 h-16 bg-gray-900/10 rounded-2xl flex items-center justify-center mb-6 mx-auto backdrop-blur-xs"
                                    whileHover={{
                                        /* rotate: 360, */
                                        scale: 1.1
                                    }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <benefit.icon className="w-8 h-8 text-yellow-500" />
                                </motion.div>

                                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center group-hover:text-amber-500 transition-colors duration-300">
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-100 text-center group-hover:text-white  leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
               {/*  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                >
                    {[
                        { number: "15+", label: "Años de Experiencia" },
                        { number: "200+", label: "Proyectos Completados" },
                        { number: "95%", label: "Satisfacción del Cliente" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <motion.div
                                className="text-4xl md:text-5xl font-bold text-secondary mb-2"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {stat.number}
                            </motion.div>
                            <div className="text-white/90 text-lg">{stat.label}</div>
                        </div>
                    ))}
                </motion.div> */}
            </div>
        </section>
    );
};
