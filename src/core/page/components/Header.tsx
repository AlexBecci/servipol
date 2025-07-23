import type { FC } from "react";
import Logo from "../../../assets/servipol-logo.png"; // si usás Vite, mejor importar la imagen directamente
import { NavLink } from "./ui/Navlink";
interface HeaderProps {
    onScrollToSection: (id: string) => void
}

export const Header: FC<HeaderProps> = ({ onScrollToSection }) => {



    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-lg border-b border-border/40 border-stone-400 transition-all duration-300">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="Servipol Group SRL" className="h-10 w-10" />
                    <span className="text-2xl font-bold text-primary">Servipol Group SRL</span>
                </div>
                <nav className="hidden md:flex space-x-6">
                    <NavLink onClick={() => onScrollToSection("servicios")}>Servicios</NavLink>
                    <NavLink onClick={() => onScrollToSection("nosotros")}>Nosotros</NavLink>
                    <NavLink onClick={() => onScrollToSection("experiencia")}>Experiencia</NavLink>
                    <NavLink onClick={() => onScrollToSection("contacto")}>Contacto</NavLink>
                </nav>

                {/*  <ThemeToggle /> */}
            </div>
        </header>
    );
};
