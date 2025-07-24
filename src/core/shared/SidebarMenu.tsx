// src/page/components/ui/SidebarMenu.tsx
import type { FC } from "react"
import { NavLink } from "./ui/Navlink"

interface SidebarMenuProps {
    isOpen: boolean
    onClose: () => void
    onScrollToSection: (id: string) => void
}

export const SidebarMenu: FC<SidebarMenuProps> = ({ isOpen, onClose, onScrollToSection }) => {
    return (
        <>
            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-white dark:bg-background z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={onClose} className="text-xl font-bold">×</button>
                </div>
                <nav className="flex flex-col space-y-4 p-6">
                    <NavLink onClick={() => { onScrollToSection("servicios"); onClose(); }}>Servicios</NavLink>
                    <NavLink onClick={() => { onScrollToSection("nosotros"); onClose(); }}>Nosotros</NavLink>
                    <NavLink onClick={() => { onScrollToSection("experiencia"); onClose(); }}>Experiencia</NavLink>
                    <NavLink onClick={() => { onScrollToSection("contacto"); onClose(); }}>Contacto</NavLink>
                </nav>


            </div>
          
        </>
    )
}
