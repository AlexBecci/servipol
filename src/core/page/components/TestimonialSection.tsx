import { AnimatedSection } from './AnimatedSection';
import TestimonialCarousel from './TestimonialCarrousel';

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-industrial-50 relative overflow-hidden">
            {/* Section Separator */}
            <div className="absolute top-0 left-0 w-full h-20 bg-industrial-50" style={{
                clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)'
            }}></div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-4 h-4 bg-secondary rounded-full animate-float"></div>
                <div className="absolute top-60 right-20 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-6">
                        Lo Que Dicen Nuestros <span className="text-primary">Clientes</span>
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                    <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
                        Testimonios de empresas que confían en nuestros servicios industriales especializados
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                    <TestimonialCarousel />
                </AnimatedSection>
            </div>
        </section>
    );
};

export default TestimonialsSection;