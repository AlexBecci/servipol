import type { ReactNode } from "react";

interface NavLinkProps {
  onClick: () => void;
  children: ReactNode;
}

export function NavLink({ onClick, children }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className="text-foreground/70 hover:text-primary transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </button>
  );
}
