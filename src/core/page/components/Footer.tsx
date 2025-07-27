import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Columna 1: Logo + descripción + redes */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <img
                                src="/images/servipol-logo.png"
                                alt="Servipol Group SRL"
                                className="h-6 w-6 invert"
                            />
                            <span className="text-xl font-bold">Servipol Group SRL</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Servicios industriales y mantenimiento integral con más de 15 años de experiencia en el mercado.
                        </p>
                        <div className="flex gap-4 text-white/80">
                            <a href="#" className="hover:text-white"><FaFacebookF /></a>
                            <a href="#" className="hover:text-white"><FaInstagram /></a>
                            <a href="#" className="hover:text-white"><FaTwitter /></a>
                            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
                            <a href="#" className="hover:text-white"><FaYoutube /></a>
                        </div>
                    </div>

                    {/* Columna 2: Enlaces */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">
                                    Nuestros Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#nosotros" className="text-gray-400 hover:text-white transition-colors">
                                    Quiénes Somos
                                </a>
                            </li>
                            <li>
                                <a href="#experiencia" className="text-gray-400 hover:text-white transition-colors">
                                    Experiencia
                                </a>
                            </li>
                            <li>
                                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Información de contacto */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                        <address className="not-italic text-gray-400">
                            <p className="mb-2">Av. Industrial 1234</p>
                            <p className="mb-2">Buenos Aires, Argentina</p>
                            <p className="mb-2">+54 11 1234-5678</p>
                            <p>info@servipolgroup.com</p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Servipol Group SRL. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
