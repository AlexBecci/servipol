import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
    children: React.ReactNode
    className?: string
    bgImage?: string
    speed?: number
}

export function ParallaxSection({ children, className, bgImage, speed = 0.5 }: ParallaxSectionProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return (
            <div className={className} ref={ref}>
                {children}
            </div>
        )
    }

    return (
        <div className={`relative overflow-hidden ${className}`} ref={ref}>
            {bgImage && (
                <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
                    <div
                        className="absolute inset-0 bg-cover bg-center w-full h-[120%]"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </motion.div>
            )}
            <div className="relative z-10">{children}</div>
        </div>
    )
}
