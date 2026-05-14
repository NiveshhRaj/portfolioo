import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

function SmoothScroll() {

    useEffect(() => {

        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true
        })

        function raf(time) {

            lenis.raf(time)

            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

    }, [])

    return null
}

export default SmoothScroll