// src/page/components/ui/MobileMenuButton.tsx
import type { FC } from "react"
import { HiMenu } from "react-icons/hi"

interface Props {
    onClick: () => void
}

export const MobileMenuButton: FC<Props> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="md:hidden text-3xl text-primary focus:outline-none"
        aria-label="Abrir menú"
    >
        <HiMenu />
    </button>
)
