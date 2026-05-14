import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function CustomCursor() {

    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {

        const moveCursor = (e) => {

            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", moveCursor)

        return () => {

            window.removeEventListener("mousemove", moveCursor)
        }

    }, [])

    return (

        <motion.div
            animate={{
                x: position.x - 10,
                y: position.y - 10
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28
            }}
            className="fixed top-0 left-0 w-5 h-5 rounded-full bg-purple-500 pointer-events-none z-[9999] mix-blend-screen"
        />

    )
}

export default CustomCursor