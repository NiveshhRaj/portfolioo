import { motion } from "framer-motion"

function About() {

    const stats = [
        {
            number: "10+",
            title: "Projects"
        },
        {
            number: "2+",
            title: "Internships"
        },
        {
            number: "10+",
            title: "Technologies"
        }
    ]

    return (

        <section className="min-h-screen px-8 py-32" id="about">

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >

                {/* Heading */}

                <h1 className="text-6xl font-bold text-center">

                    About{" "}

                    <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                        Me
                    </span>

                </h1>

                {/* Description */}

                <p className="text-gray-400 text-center mt-10 max-w-3xl mx-auto text-lg leading-8">

                    I am a passionate Full Stack Developer focused on
                    building scalable backend systems and modern animated
                    frontend applications using Spring Boot, React, Next Js, MySQL, Node Js, Express Js, MongoDB, Tailwind CSS and modern web technologies.

                </p>

                {/* Cards */}

                <div className="grid md:grid-cols-3 gap-8 mt-20">

                    {stats.map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/5 border border-gray-800 backdrop-blur-lg rounded-3xl p-10 text-center"
                        >

                            <h1 className="text-5xl font-bold text-purple-400">

                                {item.number}

                            </h1>

                            <p className="mt-4 text-gray-400">

                                {item.title}

                            </p>

                        </motion.div>

                    ))}

                </div>

                {/* Tech Stack */}

                {/* <div className="mt-24">

                    <h2 className="text-4xl font-bold text-center">

                        Tech Stack

                    </h2>

                    <div className="flex flex-wrap justify-center gap-5 mt-12">

                        {[
                            "Java",
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "Python *",
                            "C++ *",
                            "C",
                            "Spring Boot",
                            "React",
                            "MySQL",
                            "Tailwind",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                            "Next.js",
                            "Nest.js *",
                            "Prisma *",
                            "Hibernate",
                            "postgreSQL *",
                            "Github"
                        ].map((tech, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20"
                            >

                                {tech}

                            </motion.div>

                        ))}

                    </div>

                </div> */}

            </motion.div>

        </section>
    )
}

export default About