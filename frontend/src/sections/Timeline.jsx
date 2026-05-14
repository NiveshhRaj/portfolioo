    import { motion } from "framer-motion"

    function Timeline() {

    const timeline = [

        {
            year: "2023-2024",
            title: "Front-End Developer Intern",
            company: "Stigmata Techno Solutions pvt ltd",
            description:
                "Worked with React.js, Next.js on production projects."
        },

        {
            year: "2024-2025",
            title: "Full Stack Intern",
            company: "Senthuron Tech",
            description:
                "Worked With MERN Stack and other animation Technologies.Completed 3 Client projects."
        },

        {
            year: "2025",
            title: "AI Content Moderation",
            company: "Techgium",
            description:
                "Participated in Techgium Competetion and Finalists in Techgium 2025."
        },

        {
            year:"2025 - 2026",
            title: "Full Stack Intern",
            company: "Mist Software Solutions pvt ltd",
            description: "Worked with Mern Stack and Springboot and developed client projects."
        }

    ]

    return (

        <section className="min-h-screen px-8 py-32" id="timeline">

            <div className="max-w-5xl mx-auto">

                <h1 className="text-6xl font-bold text-center">

                    Experience{" "}

                    <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">

                        Timeline

                    </span>

                </h1>

                <div className="relative mt-24 border-l border-purple-500">

                    {timeline.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="ml-10 mb-20"
                        >

                            <div className="absolute w-5 h-5 bg-purple-500 rounded-full -left-[11px]"></div>

                            <p className="text-purple-400 font-bold">

                                {item.year}

                            </p>

                            <h2 className="text-3xl font-bold mt-3">

                                {item.title}

                            </h2>

                            <p className="text-gray-400 mt-2">

                                {item.company}

                            </p>

                            <p className="text-gray-500 mt-5 leading-8">

                                {item.description}

                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Timeline