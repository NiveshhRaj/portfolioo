import { useEffect, useState } from "react"
import API from "../services/api"

function ManageProjects() {

    const [projects, setProjects] = useState([])

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        techStack: "",
        githubLink: "",
        liveLink: "",
        imageUrl: ""
    })

    useEffect(() => {

        fetchProjects()

    }, [])

    const fetchProjects = async () => {

        try {

            const response = await API.get("/projects")

            setProjects(response.data)

        } catch (error) {

            console.log(error)
        }
    }

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            await API.post("/projects", formData)

            fetchProjects()

            setFormData({
                title: "",
                description: "",
                techStack: "",
                githubLink: "",
                liveLink: "",
                imageUrl: ""
            })

        } catch (error) {

            console.log(error)
        }
    }

    const deleteProject = async (id) => {

        try {

            await API.delete(`/projects/${id}`)

            fetchProjects()

        } catch (error) {

            console.log(error)
        }
    }

    return (

        <div className="min-h-screen bg-black text-white p-10">

            <h1 className="text-5xl font-bold">

                Manage Projects

            </h1>

            {/* Form */}

            <form
                onSubmit={handleSubmit}
                className="mt-12 bg-white/5 border border-gray-800 p-10 rounded-3xl"
            >

                <div className="grid md:grid-cols-2 gap-6">

                    <input
                        type="text"
                        name="title"
                        placeholder="Project Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="p-4 rounded-xl bg-black border border-gray-700 outline-none"
                    />

                    <input
                        type="text"
                        name="techStack"
                        placeholder="Tech Stack"
                        value={formData.techStack}
                        onChange={handleChange}
                        className="p-4 rounded-xl bg-black border border-gray-700 outline-none"
                    />

                </div>

                <textarea
                    rows="5"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full mt-6 p-4 rounded-xl bg-black border border-gray-700 outline-none"
                />

                <input
                    type="text"
                    name="githubLink"
                    placeholder="GitHub Link"
                    value={formData.githubLink}
                    onChange={handleChange}
                    className="w-full mt-6 p-4 rounded-xl bg-black border border-gray-700 outline-none"
                />

                <input
                    type="text"
                    name="liveLink"
                    placeholder="Live Link"
                    value={formData.liveLink}
                    onChange={handleChange}
                    className="w-full mt-6 p-4 rounded-xl bg-black border border-gray-700 outline-none"
                />

                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="w-full mt-6 p-4 rounded-xl bg-black border border-gray-700 outline-none"
                />

                <button
                    className="mt-8 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition"
                >

                    Add Project

                </button>

            </form>

            {/* Projects List */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

                {projects.map((project) => (

                    <div
                        key={project.id}
                        className="bg-white/5 border border-gray-800 rounded-3xl overflow-hidden"
                    >

                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-52 object-cover"
                        />

                        <div className="p-6">

                            <h2 className="text-2xl font-bold">

                                {project.title}

                            </h2>

                            <p className="text-gray-400 mt-4">

                                {project.description}

                            </p>

                            <button
                                onClick={() => deleteProject(project.id)}
                                className="mt-6 px-5 py-3 rounded-full bg-red-600 hover:bg-red-700 transition"
                            >

                                Delete

                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default ManageProjects