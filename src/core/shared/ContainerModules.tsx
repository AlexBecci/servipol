import type { FC, ReactNode } from "react";

interface ContainerModuleProps {
    children: ReactNode;
}

export const ContainerModule: FC<ContainerModuleProps> = ({ children }) => {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
            {children}
        </div>
    );
};
