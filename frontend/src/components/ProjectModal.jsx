import { motion } from "framer-motion"

function ProjectModal({
    project,
    closeModal
}) {

    if (!project) return null

    return (

        <div
            className="
            
            fixed
            inset-0
            
            bg-black/80
            
            backdrop-blur-md
            
            flex
            justify-center
            items-center
            
            z-[9999]
            
            p-4
            
            overflow-y-auto
            
            "
        >

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.8
                }}

                animate={{
                    opacity: 1,
                    scale: 1
                }}

                exit={{
                    opacity: 0
                }}

                className="
                
                relative
                
                bg-[#111]
                
                border
                border-gray-800
                
                rounded-3xl
                
                overflow-hidden
                
                w-full
                max-w-3xl
                
                max-h-[90vh]
                
                overflow-y-auto
                
                "
            >

                {/* Close Button */}

                <button
                    onClick={closeModal}
                    className="
                    
                    absolute
                    top-5
                    right-5
                    
                    z-50
                    
                    w-10
                    h-10
                    
                    rounded-full
                    
                    bg-black/60
                    
                    flex
                    items-center
                    justify-center
                    
                    text-xl
                    
                    hover:bg-red-600
                    
                    transition
                    
                    "
                >

                    ✕

                </button>

                {/* Image */}

                {
                    project.imageUrl && (

                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="
                            
                            w-full
                            
                            h-64
                            
                            object-cover
                            
                            "
                        />

                    )
                }

                {/* Content */}

                <div className="p-8">

                    {/* Title */}

                    <h1 className="text-4xl font-bold">

                        {project.title}

                    </h1>

                    {/* Description */}

                    <p
                        className="
                        
                        text-gray-400
                        
                        mt-6
                        
                        leading-8
                        
                        "
                    >

                        {project.description}

                    </p>

                    {/* Tech Stack */}

                    <div
                        className="
                        
                        flex
                        flex-wrap
                        
                        gap-3
                        
                        mt-8
                        
                        "
                    >

                        {
                            project.techStack
                                ?.split(",")
                                .map((tech, index) => (

                                    <span
                                        key={index}
                                        className="
                                        
                                        px-4
                                        py-2
                                        
                                        rounded-full
                                        
                                        text-sm
                                        
                                        bg-purple-500/10
                                        
                                        border
                                        border-purple-500/20
                                        
                                        "
                                    >

                                        {tech.trim()}

                                    </span>

                                ))
                        }

                    </div>

                    {/* Buttons */}

                    <div
                        className="
                        
                        flex
                        flex-wrap
                        
                        gap-4
                        
                        mt-10
                        
                        "
                    >

                        {
                            project.githubLink && (

                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                    
                                    px-6
                                    py-3
                                    
                                    rounded-full
                                    
                                    bg-purple-600
                                    
                                    hover:bg-purple-700
                                    
                                    transition
                                    
                                    "
                                >

                                    GitHub

                                </a>

                            )
                        }

                        {
                            project.liveLink &&
                            project.liveLink.trim() !== "" && (

                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                    
                                    px-6
                                    py-3
                                    
                                    rounded-full
                                    
                                    border
                                    border-gray-700
                                    
                                    hover:border-purple-500
                                    
                                    transition
                                    
                                    "
                                >

                                    Live Demo

                                </a>

                            )
                        }

                    </div>

                </div>

            </motion.div>

        </div>
    )
}

export default ProjectModal