import type { FC, ReactNode } from "react";

interface ContainerPageProps {
    children: ReactNode;
    className?: string; // opcional por si querés agregar estilos extra
}

export const ContainerPage: FC<ContainerPageProps> = ({ children, className = "" }) => {
    return (
        <div className={`min-h-screen w-full text-black tracking-wide bg-gray-100 inter-bold items-center justify-center  ${className}`}>
            {children}
        </div>
    );
};
