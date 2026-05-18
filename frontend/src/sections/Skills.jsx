import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import API from "../services/api"
import ThemedCard from "../components/ThemedCard"

function Skills() {

    const [skills, setSkills] = useState([])

    useEffect(() => {

        fetchSkills()

    }, [])

    const fetchSkills = async () => {

        try {

            const response = await API.get("/skills")

            setSkills(response.data)

        } catch (error) {

            console.log(error)

        }
    }

    return (

        <section className="min-h-screen px-8 py-32" id="skills">

            <div className="max-w-6xl mx-auto">

                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-6xl font-bold text-center"
                >

                    <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                        Skills
                    </span>

                </motion.h1>

                <div className="grid md:grid-cols-2 gap-10 mt-24">

                    {skills.map((skill) => (

                        <motion.div
                            key={skill.id}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 border border-gray-800 p-8 rounded-3xl backdrop-blur-lg"
                        >

                            {/* Top */}

                            <div className="flex justify-between items-center">

                                <h2 className="text-2xl font-semibold">

                                    {skill.name}

                                </h2>

                                {/*<span className="text-purple-400">*/}

                                {/*    {skill.percentage}%*/}

                                {/*</span>*/}

                            </div>

                            {/* Category */}

                            <p className="text-gray-400 mt-2">

                                {skill.category}

                            </p>

                            {/* Progress Bar */}

                            {/*<div className="w-full h-3 bg-gray-800 rounded-full mt-6 overflow-hidden">*/}

                            {/*    <motion.div*/}
                            {/*        initial={{ width: 0 }}*/}
                            {/*        whileInView={{*/}
                            {/*            width: `${skill.percentage}%`*/}
                            {/*        }}*/}
                            {/*        transition={{ duration: 1.5 }}*/}
                            {/*        viewport={{ once: true }}*/}
                            {/*        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"*/}
                            {/*    />*/}

                            {/*</div>*/}

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Skills