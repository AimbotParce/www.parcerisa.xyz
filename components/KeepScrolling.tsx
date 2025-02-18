"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function KeepScrolling() {
    return (
        <div className="flex flex-col items-center gap-1">
            <p>Keep scrolling</p>
            <motion.button
                whileHover={{ y: 15 }}
                transition={{ type: "spring", stiffness: 100, duration: 0.1 }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            >
                <Image aria-hidden src="/scroll-down.svg" alt="Scroll Down" width={40} height={40} />
            </motion.button>
        </div>
    )
}
