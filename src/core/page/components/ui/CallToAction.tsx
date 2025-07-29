import { motion } from 'framer-motion';
import { PiPhone } from 'react-icons/pi';
import { FaEnvelope } from 'react-icons/fa';

const iconVariants = {
    rest: { x: 0 },
    hover: {
        x: [0, -4, 4, 0],    // mueve el icono a izquierda, derecha y vuelta
        transition: {        // duración total y easing
            duration: 0.6,
        }
    }
};

export const CallToAction: React.FC = () => (
    <motion.div
        className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
    >
        {/* Botón Presupuesto */}
        <motion.button
            className="group flex items-center justify-center gap-2 bg-yellow-500 hover:bg-amber-500 text-black font-semibold px-8 py-2 text-lg rounded-lg transition-all duration-300"
            whileHover="hover"
            initial="rest"
            animate="rest"
            whileTap={{ scale: 0.95 }}
        >
            <motion.span
                variants={iconVariants}
                className="text-xl"
            >
                <PiPhone />
            </motion.span>
            Solicitar Presupuesto
        </motion.button>

        {/* Botón Email */}
        <motion.button
            className="group flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-2 text-lg rounded-lg bg-transparent transition-all duration-300"
            whileHover="hover"
            initial="rest"
            animate="rest"
            whileTap={{ scale: 0.95 }}
        >
            <motion.span
                variants={iconVariants}
                className="text-xl"
            >
                <FaEnvelope />
            </motion.span>
            Consultar por Email
        </motion.button>
    </motion.div>
);
