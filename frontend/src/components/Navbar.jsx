import { useContext, useState } from "react"

import { ThemeContext } from "../context/ThemeContext"

import {
    darkTheme,
    lightTheme
} from "../utils/theme"

import {
    HiMenuAlt3,
    HiX,
    HiSun,
    HiMoon
} from "react-icons/hi"

function Navbar() {

    const { theme, toggleTheme } =
        useContext(ThemeContext)

    const currentTheme =
        theme === "dark"
            ? darkTheme
            : lightTheme

    const [menuOpen, setMenuOpen] =
        useState(false)

    const closeMenu = () => {

        setMenuOpen(false)
    }

    return (

        <nav
            className={`
            
            fixed
            top-0
            left-0
            
            w-full
            
            z-50
            
            backdrop-blur-md
            
            border-b
            
            ${currentTheme.navbar}
            
            `}
        >

            <div
                className="
                
                max-w-7xl
                mx-auto
                
                px-6
                py-5
                
                flex
                justify-between
                items-center
                
                "
            >

                {/* Logo */}

                <h1
                    className={`
                    
                    text-2xl
                    font-bold
                    
                    ${currentTheme.text}
                    
                    `}
                >

                    Niveshhraj

                </h1>

                {/* Desktop Menu */}

                <div
                    className="
                    
                    hidden
                    md:flex
                    
                    items-center
                    gap-8
                    
                    "
                >

                    <ul
                        className={`
                        
                        flex
                        gap-8
                        
                        ${currentTheme.text}
                        
                        `}
                    >

                        <li>

                            <a
                                href="#home"
                                className="hover:text-purple-400 transition"
                            >

                                Home

                            </a>

                        </li>

                        <li>

                            <a
                                href="#timeline"
                                className="hover:text-purple-400 transition"
                            >

                                Timeline

                            </a>

                        </li>

                        <li>

                            <a
                                href="#projects"
                                className="hover:text-purple-400 transition"
                            >

                                Projects

                            </a>

                        </li>

                        <li>

                            <a
                                href="#skills"
                                className="hover:text-purple-400 transition"
                            >

                                Skills

                            </a>

                        </li>

                        <li>

                            <a
                                href="#contact"
                                className="hover:text-purple-400 transition"
                            >

                                Contact

                            </a>

                        </li>

                    </ul>

                    {/* Theme Toggle */}

                    <button
                        onClick={toggleTheme}
                        className="
                        
                        relative
                        
                        w-16
                        h-9
                        
                        flex
                        items-center
                        
                        rounded-full
                        
                        px-1
                        
                        transition-all
                        duration-500
                        
                        bg-gradient-to-r
                        
                        from-purple-500
                        to-blue-500
                        
                        "
                    >

                        <div
                            className={`
                            
                            absolute
                            
                            w-7
                            h-7
                            
                            rounded-full
                            
                            bg-white
                            
                            flex
                            items-center
                            justify-center
                            
                            text-black
                            
                            shadow-lg
                            
                            transition-all
                            duration-500
                            
                            ${
                                theme === "dark"
                                    ? "translate-x-0"
                                    : "translate-x-7"
                            }
                            
                            `}
                        >

                            {
                                theme === "dark"

                                    ? <HiMoon size={18} />

                                    : <HiSun size={18} />
                            }

                        </div>

                    </button>

                </div>

                {/* Mobile Menu Button */}

                <button
                    onClick={() =>
                        setMenuOpen(!menuOpen)
                    }
                    className={`
                    
                    md:hidden
                    
                    text-4xl
                    
                    ${currentTheme.text}
                    
                    `}
                >

                    {
                        menuOpen
                            ? <HiX />
                            : <HiMenuAlt3 />
                    }

                </button>

            </div>

            {/* Mobile Menu */}

            {
                menuOpen && (

                    <div
                        className={`
                        
                        md:hidden
                        
                        px-8
                        pb-8
                        
                        backdrop-blur-xl
                        
                        ${currentTheme.background}
                        
                        `}
                    >

                        <ul
                            className={`
                            
                            flex
                            flex-col
                            gap-6
                            
                            text-lg
                            
                            ${currentTheme.text}
                            
                            `}
                        >

                            <li>

                                <a
                                    href="#home"
                                    onClick={closeMenu}
                                    className="hover:text-purple-400 transition"
                                >

                                    Home

                                </a>

                            </li>

                            <li>

                                <a
                                    href="#timeline"
                                    onClick={closeMenu}
                                    className="hover:text-purple-400 transition"
                                >

                                    Timeline

                                </a>

                            </li>

                            <li>

                                <a
                                    href="#projects"
                                    onClick={closeMenu}
                                    className="hover:text-purple-400 transition"
                                >

                                    Projects

                                </a>

                            </li>

                            <li>

                                <a
                                    href="#skills"
                                    onClick={closeMenu}
                                    className="hover:text-purple-400 transition"
                                >

                                    Skills

                                </a>

                            </li>

                            <li>

                                <a
                                    href="#contact"
                                    onClick={closeMenu}
                                    className="hover:text-purple-400 transition"
                                >

                                    Contact

                                </a>

                            </li>

                            {/* Mobile Theme Toggle */}

                            <button
                                onClick={toggleTheme}
                                className="
                                
                                relative
                                
                                w-16
                                h-9
                                
                                flex
                                items-center
                                
                                rounded-full
                                
                                px-1
                                
                                transition-all
                                duration-500
                                
                                bg-gradient-to-r
                                
                                from-purple-500
                                to-blue-500
                                
                                "
                            >

                                <div
                                    className={`
                                    
                                    absolute
                                    
                                    w-7
                                    h-7
                                    
                                    rounded-full
                                    
                                    bg-white
                                    
                                    flex
                                    items-center
                                    justify-center
                                    
                                    text-black
                                    
                                    shadow-lg
                                    
                                    transition-all
                                    duration-500
                                    
                                    ${
                                        theme === "dark"
                                            ? "translate-x-0"
                                            : "translate-x-7"
                                    }
                                    
                                    `}
                                >

                                    {
                                        theme === "dark"

                                            ? <HiMoon size={18} />

                                            : <HiSun size={18} />
                                    }

                                </div>

                            </button>

                        </ul>

                    </div>

                )
            }

        </nav>
    )
}

export default Navbar