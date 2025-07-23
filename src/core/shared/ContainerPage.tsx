import type { FC, ReactNode } from "react";

interface ContainerPageProps {
  children: ReactNode;
  className?: string; // opcional por si querés agregar estilos extra
}

export const ContainerPage: FC<ContainerPageProps> = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen w-full bg-gray-100 px-4 py-6 ${className}`}>
      {children}
    </div>
  );
};
