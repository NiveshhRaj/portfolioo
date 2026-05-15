import {
    useEffect,
    useState
} from "react"

function CustomCursor() {

    const [position, setPosition] =
        useState({

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

        window.addEventListener(
            "mousemove",
            moveCursor
        )

        return () => {

            window.removeEventListener(
                "mousemove",
                moveCursor
            )
        }

    }, [])

    return (

        <div
            className="
            
            fixed
            
            top-0
            left-0
            
            w-6
            h-6
            
            rounded-full
            
            pointer-events-none
            
            z-[99999]
            
            border-2
            border-purple-400
            
            bg-purple-500/20
            
            backdrop-blur-md
            
            shadow-[0_0_20px_rgba(168,85,247,0.8)]
            
            transition-transform
            duration-75
            
            hidden
            md:block
            
            "
            style={{

                transform: `translate(
                
                    ${position.x - 12}px,
                    
                    ${position.y - 12}px
                    
                )`
            }}
        />
    )
}

export default CustomCursor