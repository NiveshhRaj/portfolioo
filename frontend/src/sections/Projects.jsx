import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import API from "../services/api";

import ProjectModal from "../components/ProjectModal";

function Projects() {
  const [projects, setProjects] = useState([]);

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await API.get("/projects");

      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen px-8 py-32" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h1>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={() => setSelectedProject(project)}
              className="
                            
                            flex
                            flex-col
                            justify-between
                            
                            h-full
                            
                            bg-white/5
                            border
                            border-gray-800
                            
                            rounded-3xl
                            overflow-hidden
                            
                            backdrop-blur-lg
                            
                            cursor-pointer
                            
                            hover:border-purple-500/40
                            
                            transition-all
                            duration-300
                            
                            "
            >
              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="
                                    
                                    w-full
                                    h-56
                                    object-cover
                                    
                                    hover:scale-110
                                    
                                    transition-transform
                                    duration-700
                                    
                                    "
                />
              </div>

              {/* Content */}

              <div className="p-8 flex flex-col flex-1">
                {/* Title */}

                <h2 className="text-2xl font-bold">{project.title}</h2>

                {/* Description */}

                <p
                  className="
                                    
                                    text-gray-400
                                    mt-4
                                    leading-7
                                    
                                    line-clamp-3
                                    
                                    "
                >
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.techStack
                    ?.split(",")
                    .slice(0, 4)
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
                    ))}

                  {project.techStack?.split(",").length > 4 && (
                    <span
                      className="
                                                    
                                                    px-4
                                                    py-2
                                                    
                                                    rounded-full
                                                    
                                                    text-sm
                                                    
                                                    bg-gray-800
                                                    
                                                    "
                    >
                      +{project.techStack.split(",").length - 4}
                    </span>
                  )}
                </div>

                {/* Spacer */}

                <div className="flex-1"></div>

                {/* Buttons */}

                <div
    className="
    
    flex
    flex-wrap
    
    gap-4
    
    mt-10
    
    "
>

    {/* GitHub Button */}

    {
        project.githubLink &&
        project.githubLink.trim() !== "" && (

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

    {/* Live Demo Button */}

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
          ))}
        </div>

        {/* Modal */}

        {
                    selectedProject && (

                        <ProjectModal
                            project={selectedProject}
                            closeModal={() => setSelectedProject(null)}
                        />

                    )
                }
      </div>
    </section>
  );
}

export default Projects;
