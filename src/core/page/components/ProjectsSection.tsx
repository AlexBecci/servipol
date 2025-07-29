import React, { type FC } from 'react';
import { motion } from 'framer-motion';
import {  BiMapPin } from 'react-icons/bi';
import { LuBuilding2 } from 'react-icons/lu';
import { Categories, Projects } from '../../data/projects';
import type { ScrollDTO } from './Header';

const ProjectsSection:FC<ScrollDTO> = ({onScrollToSection}) => {
    const [activeCategory, setActiveCategory] = React.useState("Todos");
    const [filteredProjects, setFilteredProjects] = React.useState(Projects);

    React.useEffect(() => {
        if (activeCategory === "Todos") {
            setFilteredProjects(Projects);
        } else {
            setFilteredProjects(Projects.filter(project => project.category === activeCategory));
        }
    }, [activeCategory]);

    return (
        <section id='experiencia' className="py-24 bg-gray-100 relative overflow-hidden">
            {/* Section Separator */}
            <div className="absolute top-0 left-0 w-full h-20 bg-industrial-50" style={{
                clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)'
            }}></div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nuestros <span className="text-blue-600">Proyectos</span>
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-800 font-bold max-w-3xl mx-auto">
                        Conoce algunos de los proyectos industriales que hemos desarrollado con éxito para nuestros clientes
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {Categories.map((category, index) => (
                        <motion.button
                            key={category.name}
                            onClick={() => setActiveCategory(category.name)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.name
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-industrial-100 text-industrial-600 hover:bg-industrial-200'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {category.name} ({category.count})
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <motion.div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 h-full"
                                whileHover={{ y: -10 }}
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-900/60 to-transparent"></div>

                                    {/* Status Badge */}
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${project.status === 'Completado'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-yellow-500 text-industrial-900'
                                        }`}>
                                        {project.status}
                                    </div>

                                    {/* Category Icon */}
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-12 h-12 bg-blue-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                            <project.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-semibold text-blue-600 bg-blue-600/10 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                        <span className="text-sm text-industrial-500">{project.year}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-industrial-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <div className="flex items-center gap-2 mb-3">
                                        <LuBuilding2 className="w-4 h-4 text-industrial-400" />
                                        <span className="text-industrial-600 font-medium">{project.company}</span>
                                    </div>

                                    <div className="flex items-center gap-2 mb-4">
                                        <BiMapPin className="w-4 h-4 text-industrial-400" />
                                        <span className="text-industrial-500 text-sm">{project.location}</span>
                                    </div>

                                    <p className="text-industrial-600 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                   {/*  <motion.div
                                        className="flex items-center gap-2 text-blue-600 font-semibold text-sm"
                                        whileHover={{ x: 5 }}
                                    >
                                        <BiCheckCircle className="w-4 h-4" />
                                        <span>Ver detalles</span>
                                    </motion.div> */}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-industrial-600 mb-8">
                        ¿Tienes un proyecto industrial en mente?
                    </p>
                    <motion.button
                    onClick={()=>onScrollToSection("contacto")}
                        className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-600/90 transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Consultar Proyecto →
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;