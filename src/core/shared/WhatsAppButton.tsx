import type { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
    phoneNumber: string;
}

export const WhatsAppButton: FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-110 active:scale-95"
            >
                <FaWhatsapp className="h-6 w-6" />
            </a>
        </div>
    );
};
