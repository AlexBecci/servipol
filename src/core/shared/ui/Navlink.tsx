import { motion } from "framer-motion";

interface NavLinkProps {
    onClick: () => void;
    children: React.ReactNode;
}

export const NavLink = ({ onClick, children }: NavLinkProps) => {
    return (
        <button
            onClick={onClick}
            className="relative text-foreground/70 hover:text-primary transition-colors duration-300 group"
        >
            {children}

            {/* Barra inferior animada */}
            <motion.span
                layoutId="underline"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                className="absolute -bottom-1 left-0 h-0.5 bg-primary"
            />
        </button>
    );
};
