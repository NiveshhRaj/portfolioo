import { motion } from "framer-motion"
import API from "../services/api.js";

function Resume() {

    const downloadResume = async () => {

        const response =
            await API.get("/resume")

        window.open(

            `${import.meta.env.VITE_API_URL}/uploads/resume/${response.data.fileName}`

        )
    }

    return (

        <section className="px-8 py-32">

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/20 rounded-3xl p-16 text-center backdrop-blur-lg"
            >

                {/* Heading */}

                <h1 className="text-6xl font-bold">

                    Download{" "}

                    <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">

                        Resume

                    </span>

                </h1>

                {/* Description */}

                <p className="text-gray-400 mt-8 max-w-2xl mx-auto leading-8">

                    Explore my experience, projects, technical skills,
                    internships and achievements in my professional resume.

                </p>

                {/* Button */}

                {/*<a*/}
                {/*    href="/resume.pdf"*/}
                {/*    download*/}
                {/*    className="inline-block mt-12 px-10 py-5 rounded-full bg-purple-600 hover:bg-purple-700 transition text-lg font-semibold"*/}
                {/*>*/}

                {/*    Download CV*/}

                {/*</a>*/}

                <button onClick={downloadResume}
                        className="inline-block mt-12 px-10 py-5 rounded-full bg-purple-600 hover:bg-purple-700 transition text-lg font-semibold"
                >

                    Download Resume

                </button>

            </motion.div>

        </section>
    )
}

export default Resume