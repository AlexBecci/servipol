import { FiZap } from 'react-icons/fi';
import {  BiWrench } from 'react-icons/bi';
import { FcFactory } from 'react-icons/fc';
import { LuBuilding2 } from 'react-icons/lu';

export const Projects = [
    {
        id: 1,
        title: "Modernización Sistema Eléctrico",
        company: "Industrias Saladillo S.A",
        location: "Buenos Aires",
        category: "Instalaciones Eléctricas",
        description: "Renovación completa del sistema eléctrico industrial, incluyendo tableros de control y distribución eléctrica.",
        icon: FiZap,
        image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
        year: "2024",
        status: "Completado"
    },
    {
        id: 2,
        title: "Automatización de Procesos",
        company: "Prosavic S.A",
        location: "Buenos Aires",
        category: "Automatización",
        description: "Implementación de sistemas PLC y SCADA para optimización de procesos productivos en planta cervecera.",
        icon: FcFactory,
        image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
        year: "2024",
        status: "Completado"
    },
    {
        id: 3,
        title: "Mantenimiento Integral Metalúrgica",
        company: "Diacrom Metalúrgica",
        location: "Buenos Aires",
        category: "Mantenimiento Industrial",
        description: "Programa de mantenimiento predictivo y preventivo para equipos de fundición y maquinaria pesada.",
        icon: BiWrench,
        image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg",
        year: "2023",
        status: "Completado"
    },
    {
        id: 4,
        title: "Operación de Planta Cerámica",
        company: "Ilva S.A",
        location: "Buenos Aires",
        category: "Operación de Plantas",
        description: "Gestión integral de operaciones y supervisión de procesos en planta de producción cerámica.",
        icon: LuBuilding2,
        image: "https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg",
        year: "2023",
        status: "En Progreso"
    },
    {
        id: 5,
        title: "Instalación Sistema de Control",
        company: "Maped Librería",
        location: "Buenos Aires",
        category: "Automatización",
        description: "Instalación de sistemas de control automatizado para optimización de procesos logísticos.",
        icon: FcFactory,
        image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
        year: "2024",
        status: "Completado"
    },
    {
        id: 6,
        title: "Mantenimiento Preventivo Industrial",
        company: "Industria Tomadoni",
        location: "Buenos Aires",
        category: "Mantenimiento Industrial",
        description: "Programa de mantenimiento de emergencias, predictivos y preventivos para maquinaria industrial.",
        icon: BiWrench,
        image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
        year: "2023",
        status: "Completado"
    }
];

export const Categories = [
    { name: "Todos", count: Projects.length },
    { name: "Mantenimiento Industrial", count: Projects.filter(p => p.category === "Mantenimiento Industrial").length },
    { name: "Automatización", count: Projects.filter(p => p.category === "Automatización").length },
    { name: "Instalaciones Eléctricas", count: Projects.filter(p => p.category === "Instalaciones Eléctricas").length },
    { name: "Operación de Plantas", count: Projects.filter(p => p.category === "Operación de Plantas").length }
];