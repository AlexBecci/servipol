import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsQuote } from 'react-icons/bs';
import { BiChevronLeft, BiChevronRight, BiStar } from 'react-icons/bi';

const TestimonialCarousel = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Carlos Mendoza",
            position: "Gerente de Producción",
            company: "Industrias Metalúrgicas SA",
            content: "Servipol Group transformó completamente nuestro sistema de mantenimiento. La reducción de paradas no programadas fue del 85% en el primer año.",
            rating: 5,
            image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
        },
        {
            name: "María Elena Rodríguez",
            position: "Directora de Operaciones",
            company: "Química Industrial del Sur",
            content: "La automatización implementada por Servipol optimizó nuestros procesos de manera excepcional. El ROI se vio reflejado en menos de 8 meses.",
            rating: 5,
            image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        },
        {
            name: "Roberto Silva",
            position: "Jefe de Mantenimiento",
            company: "Textil Argentina SRL",
            content: "El servicio 24/7 de Servipol nos da la tranquilidad de saber que nuestras líneas de producción están siempre protegidas. Profesionalismo excepcional.",
            rating: 5,
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 lg:p-12"
                    >
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            {/* Quote Icon */}
                            <div className="absolute top-6 left-6 opacity-10">
                                <BsQuote className="w-16 h-16 text-blue-600" />
                            </div>

                            {/* Avatar */}
                            <motion.div
                                className="flex-shrink-0"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <img
                                    src={testimonials[currentTestimonial].image}
                                    alt={testimonials[currentTestimonial].name}
                                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-yellow-500 shadow-lg"
                                />
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1 text-center lg:text-left">
                                {/* Stars */}
                                <motion.div
                                    className="flex justify-center lg:justify-start gap-1 mb-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                        <BiStar key={i} className="w-5 h-5 fill-secondary text-yellow-500" />
                                    ))}
                                </motion.div>

                                {/* Testimonial Text */}
                                <motion.p
                                    className="text-base text-gray-700 mb-6 leading-relaxed italic"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    "{testimonials[currentTestimonial].content}"
                                </motion.p>

                                {/* Author Info */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <h4 className="text-base font-bold text-gray-900 mb-1">
                                        {testimonials[currentTestimonial].name}
                                    </h4>
                                    <p className="text-blue-600 text-sm font-semibold mb-1">
                                        {testimonials[currentTestimonial].position}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {testimonials[currentTestimonial].company}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                {/*  <div className="absolute bottom-6 right-6 flex items-center gap-4"> */}
                <div className="flex items-center gap-4 mt-6 sm:absolute sm:bottom-6 sm:right-6 justify-center">
                    <button
                        onClick={prevTestimonial}
                        className="w-12 h-12 bg-blue-600/10 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                    >
                        <BiChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextTestimonial}
                        className="w-12 h-12 bg-blue-600/10 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                    >
                        <BiChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;