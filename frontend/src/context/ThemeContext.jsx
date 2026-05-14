import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

function ThemeProvider({ children }) {

    const [theme, setTheme] = useState("dark")

    useEffect(() => {

        const savedTheme = localStorage.getItem("theme")

        if (savedTheme) {

            setTheme(savedTheme)
        }

    }, [])

    useEffect(() => {

        localStorage.setItem("theme", theme)

        document.documentElement.className = theme

    }, [theme])

    const toggleTheme = () => {

        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (

        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >

            {children}

        </ThemeContext.Provider>
    )
}

export default ThemeProvider