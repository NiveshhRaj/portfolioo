import { motion } from "framer-motion"

function ProjectModal({ project, closeModal }) {

    if (!project) return null

    return (

        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-[9999] p-6">

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden max-w-4xl w-full"
            >

                {/* Image */}

                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-[350px] object-cover"
                />

                {/* Content */}

                <div className="p-10">

                    <div className="flex justify-between items-center">

                        <h1 className="text-4xl font-bold">

                            {project.title}

                        </h1>

                        <button
                            onClick={closeModal}
                            className="text-2xl"
                        >

                            ✕
                        </button>

                    </div>

                    {/* Description */}

                    <p className="text-gray-400 mt-8 leading-8">

                        {project.description}

                    </p>

                    {/* Tech Stack */}

                    <div className="flex flex-wrap gap-4 mt-10">

                        {project.techStack
                            .split(",")
                            .map((tech, index) => (

                                <span
                                    key={index}
                                    className="px-5 py-3 rounded-full bg-purple-500/10 border border-purple-500/20"
                                >

                                    {tech}

                                </span>

                            ))}

                    </div>

                    {/* Buttons */}

                    <div className="flex gap-5 mt-12">

                        <a
                            href={project.githubLink}
                            target="_blank"
                            className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition"
                        >

                            GitHub

                        </a>

                        <a
                            href={project.liveLink}
                            target="_blank"
                            className="px-8 py-4 rounded-full border border-gray-700 hover:border-purple-500 transition"
                        >

                            Live Demo

                        </a>

                    </div>

                </div>

            </motion.div>

        </div>
    )
}

export default ProjectModal