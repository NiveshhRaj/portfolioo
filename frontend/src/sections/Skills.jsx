import { useEffect, useState } from "react"

import { motion } from "framer-motion"

import API from "../services/api"

function Skills() {

    const [skills, setSkills] = useState([])

    useEffect(() => {

        fetchSkills()

    }, [])

    const fetchSkills = async () => {

        try {

            const response =
                await API.get("/skills")

            console.log(response.data)

            if (
                Array.isArray(response.data)
            ) {

                setSkills(response.data)

            }

            else {

                setSkills([])
            }

        }

        catch (error) {

            console.log(error)

            setSkills([])
        }
    }

    return (

        <section
            className="

            min-h-screen

            px-6
            md:px-10

            py-32

            "
            id="skills"
        >

            <div className="max-w-6xl mx-auto">

                {/* Heading */}

                <motion.h1

                    initial={{
                        opacity: 0,
                        y: 80
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 1
                    }}

                    viewport={{
                        once: true
                    }}

                    className="

                    text-5xl
                    md:text-6xl

                    font-bold

                    text-center

                    "
                >

                    <span
                        className="

                        bg-gradient-to-r

                        from-purple-400
                        to-blue-500

                        bg-clip-text

                        text-transparent

                        "
                    >

                        Skills

                    </span>

                </motion.h1>

                {/* Grid */}

                <div
                    className="

                    grid

                    md:grid-cols-2

                    gap-8

                    mt-24

                    "
                >

                    {skills.map((skill, index) => (

                        <motion.div

                            key={skill.id}

                            initial={{
                                opacity: 0,
                                y: 50
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                duration: 0.6,
                                delay: index * 0.1
                            }}

                            viewport={{
                                once: true
                            }}

                            whileHover={{
                                scale: 1.03
                            }}

                            className="

                            relative

                            bg-white/5

                            border
                            border-gray-800

                            p-8

                            rounded-3xl

                            backdrop-blur-lg

                            overflow-hidden

                            hover:border-purple-500/40

                            transition

                            duration-300

                            "
                        >

                            {/* Glow */}

                            <div
                                className="

                                absolute

                                inset-0

                                bg-gradient-to-r

                                from-purple-500/5
                                to-blue-500/5

                                opacity-0

                                hover:opacity-100

                                transition

                                duration-300

                                "
                            />

                            {/* Top */}

                            <div
                                className="

                                flex
                                justify-between
                                items-center

                                relative
                                z-10

                                "
                            >

                                <div>

                                    <h2
                                        className="

                                        text-2xl

                                        font-semibold

                                        "
                                    >

                                        {skill.name}

                                    </h2>

                                    <p
                                        className="

                                        text-gray-400

                                        mt-2

                                        "
                                    >

                                        {skill.category}

                                    </p>

                                </div>

                                <span
                                    className="

                                    text-lg

                                    font-bold

                                    text-purple-400

                                    "
                                >

                                    {skill.percentage}%

                                </span>

                            </div>

                            {/* Progress Bar */}

                            <div
                                className="

                                w-full

                                h-3

                                bg-gray-800

                                rounded-full

                                mt-8

                                overflow-hidden

                                relative
                                z-10

                                "
                            >

                                <motion.div

                                    initial={{
                                        width: 0
                                    }}

                                    whileInView={{
                                        width:
                                            `${skill.percentage}%`
                                    }}

                                    transition={{
                                        duration: 1.5
                                    }}

                                    viewport={{
                                        once: true
                                    }}

                                    className="

                                    h-full

                                    bg-gradient-to-r

                                    from-purple-500
                                    to-blue-500

                                    rounded-full

                                    "
                                />

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Skills