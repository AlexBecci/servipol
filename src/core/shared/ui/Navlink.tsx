interface NavLinkProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const NavLink = ({ onClick, children }: NavLinkProps) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-block text-gray-900 hover:text-blue-500 font-semibold transition-colors duration-300 group"
    >
      <span className="relative z-10">{children}</span>

      {/* Barra inferior animada solo debajo del texto */}
      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 delay-200 group-hover:w-full"></span>
    </button>
  );
};
