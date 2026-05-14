import { motion } from "framer-motion"

function FloatingBackground() {

    const particles = Array.from({ length: 15 })

    return (

        <div className="fixed inset-0 overflow-hidden -z-10">

            {particles.map((_, index) => (

                <motion.div
                    key={index}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, 50, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 10 + index,
                    }}
                    className="absolute w-72 h-72 rounded-full bg-purple-500/5 blur-3xl"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
                    }}
                />

            ))}

        </div>
    )
}

export default FloatingBackground