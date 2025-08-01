import { useState, type FC } from "react";
// si usás Vite, mejor importar la imagen directamente
import img from '/images/servipol-logo.png'
import { NavLink } from "../../shared/ui/Navlink";
import { MobileMenuButton } from "../../shared/ui/MobileMenuButton";
import { SidebarMenu } from "../../shared/SidebarMenu";
export interface ScrollDTO {
    onScrollToSection: (id: string) => void
}

export const Header: FC<ScrollDTO> = ({ onScrollToSection }) => {

    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)
    const toggleSidebar = () => setIsSideBarOpen(!isSideBarOpen)

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-30 bg-gray-100/60 backdrop-blur-lg border-b border-border/40 border-gray-300 transition-all duration-300 h-[72px]">
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img src={img} alt="Servipol Group SRL" className="h-12 w-12 rounded-full" />
                        <span className="text-2xl font-bold text-blue-600">Servipol Group SRL</span>
                    </div>
                    <nav className="hidden md:flex  space-x-6">
                        <NavLink onClick={() => onScrollToSection("servicios")}>Servicios</NavLink>
                        <NavLink onClick={() => onScrollToSection("nosotros")}>Nosotros</NavLink>
                        <NavLink onClick={() => onScrollToSection("experiencia")}>Experiencia</NavLink>
                        <NavLink onClick={() => onScrollToSection("contacto")}>Contacto</NavLink>
                    </nav>
                    <MobileMenuButton onClick={toggleSidebar} />
                </div>
            </header>

            {/* Espaciador para compensar el header fixed */}
            <div className="h-[150px]" />

            {/* Overlay para mobile menu */}
            {isSideBarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleSidebar} />
            )}
            <SidebarMenu isOpen={isSideBarOpen} onClose={toggleSidebar} onScrollToSection={onScrollToSection} />
        </>
    )


};
