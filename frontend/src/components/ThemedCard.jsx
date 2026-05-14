import { useContext } from "react"

import { ThemeContext } from "../context/ThemeContext"

import {
    darkTheme,
    lightTheme
} from "../utils/theme"

function ThemedCard({ children, className = "" }) {

    const { theme } = useContext(ThemeContext)

    const currentTheme =
        theme === "dark"
            ? darkTheme
            : lightTheme

    return (

        <div
            className={`
                
                rounded-3xl
                transition-all
                duration-500
                backdrop-blur-lg
                
                ${currentTheme.card}
                
                ${className}
            `}
        >

            {children}

        </div>
    )
}

export default ThemedCard