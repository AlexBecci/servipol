import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaArrowRight } from 'react-icons/fa';

export const ContactParalax = () => {
    return (
        <section id='contacto' className="py-20 relative overflow-hidden">
            {/* Fondo con parallax y overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/images/imagen_8.jpg')] bg-cover bg-center bg-fixed"></div>
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
                        Contáctanos
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Solicita tu presupuesto personalizado sin compromiso
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {/* Información de contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-blue-900/20 backdrop-blur-md text-white p-8 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <FiPhone className="text-yellow-400 text-xl mt-1" />
                                <div>
                                    <p className="font-semibold">Teléfono</p>
                                    <p>+54 11 1234-5678</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FiMail className="text-yellow-400 text-xl mt-1" />
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p>info@servipolgroup.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FiMapPin className="text-yellow-400 text-xl mt-1" />
                                <div>
                                    <p className="font-semibold">Dirección</p>
                                    <p>Av. Industrial 1234, Buenos Aires, Argentina</p>
                                </div>
                            </div>
                        </div>

                        <p className="mt-8 font-semibold">Síguenos en redes sociales</p>
                        <div className="flex gap-4 mt-3 text-xl text-white/80">
                            <FaFacebookF className="hover:text-white cursor-pointer" />
                            <FaInstagram className="hover:text-white cursor-pointer" />
                            <FaTwitter className="hover:text-white cursor-pointer" />
                            <FaLinkedinIn className="hover:text-white cursor-pointer" />
                            <FaYoutube className="hover:text-white cursor-pointer" />
                        </div>
                    </motion.div>

                    {/* Formulario de contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-gray-300">Solicitar Presupuesto</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Nombre completo" className={`${inputStyle}`} />
                                <input type="text" placeholder="Empresa" className={`${inputStyle}`} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="email" placeholder="Email" className={`${inputStyle}`} />
                                <input type="text" placeholder="Teléfono" className={`${inputStyle}`} />
                            </div>
                            <textarea rows={4} placeholder="Describe tu proyecto o necesidad..." className={`${inputStyle} resize-none`}></textarea>
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-gray-800 hover:bg-yellow-600 hover:text-gray-200 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition duration-300"
                            >
                                <span>Enviar Consulta</span>
                                <FaArrowRight className="text-lg" />
                            </button>

                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Tailwind helper (puedes ponerlo en globals o usar className directa)
const inputStyle = `w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900/50 placeholder-gray-500 text-gray-300`;

