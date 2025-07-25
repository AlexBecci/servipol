import { useEffect, type FC } from "react";
import { LuLoader } from "react-icons/lu"; // o cualquier ícono de carga

interface RedirectModuleProps {
    setLoading: (state: boolean) => void;
}

export const RedirectModule: FC<RedirectModuleProps> = ({ setLoading }) => {
    // const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            // navigate('/');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-60">
            <LuLoader className="text-white animate-spin text-6xl mb-4" />
            <p className="text-white text-lg">Cargando...</p>
        </div>
    );
};
