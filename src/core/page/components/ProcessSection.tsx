import { motion } from 'framer-motion';
import type { FC } from 'react';
import { BiCheckCircle, BiSearch, BiWrench } from 'react-icons/bi';
import { BsFileText } from 'react-icons/bs';
import type { ScrollDTO } from './Header';
import { LuHammer } from 'react-icons/lu';

const ProcessSection: FC<ScrollDTO> = ({ onScrollToSection }) => {
  const steps = [
    {
      number: "01",
      icon: BiSearch, // análisis y diagnóstico
      title: "Análisis y Diagnóstico",
      description:
        "Evaluamos tus necesidades específicas y realizamos un diagnóstico completo de tus instalaciones para diseñar la solución óptima."
    },
    {
      number: "02",
      icon: BsFileText, // planificación y presupuesto
      title: "Planificación y Presupuesto",
      description:
        "Desarrollamos un plan detallado del proyecto con cronograma, recursos necesarios y presupuesto transparente sin sorpresas."
    },
    {
      number: "03",
      icon: BiWrench, // optimización de repuestos
      title: "Optimización de Repuestos",
      description:
        "Analizamos la vida útil de los repuestos mediante sistemas de gestión técnica para reducir fallos repetitivos. Aplicamos mejoras en el desmontaje y montaje con herramientas especializadas, optimizando el tiempo de intervención y el costo-beneficio."
    },
    {
      number: "04",
      icon: LuHammer, // ejecución del proyecto (puede ser otro ícono de herramienta)
      title: "Ejecución del Proyecto",
      description:
        "Implementamos la solución con nuestro equipo especializado, siguiendo los más altos estándares de calidad y seguridad industrial."
    },
    {
      number: "05",
      icon: BiCheckCircle, // seguimiento y soporte
      title: "Seguimiento y Soporte",
      description:
        "Brindamos soporte continuo, mantenimiento programado y monitoreo para asegurar el óptimo funcionamiento a largo plazo."
    }
  ];


  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Section Separator */}


      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Cómo <span className="text-blue-600">Trabajamos?</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-800 font-semibold max-w-3xl mx-auto">
            Nuestro proceso estructurado garantiza resultados exitosos en cada proyecto
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2 * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 relative z-10 h-full"
                  whileHover={{
                    y: -15,
                    /* rotate: 2  */
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-secondary to-yellow-400 rounded-2xl flex items-center justify-center mb-6 mx-auto mt-4"
                    whileHover={{
                      /*   rotate: 360, */
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-8 h-8 text-gray-700" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-700 font-semibold text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connection Line - Only visible on larger screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-8 w-16 h-0.5 bg-primary/20 z-0"></div>
                  )}
                </motion.div>

                {/* Animated Background Circle */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full -z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-800 font-semibold mb-8">
              ¿Listo para comenzar tu proyecto industrial?
            </p>
            <motion.button
              onClick={() => onScrollToSection("servicios")}
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-600/90 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar Proyecto →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;