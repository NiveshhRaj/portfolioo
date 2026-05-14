import { useState } from "react"
import { motion } from "framer-motion"
import API from "../services/api"

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            await API.post("/contact", formData)

            setSuccess(true)

            setFormData({
                name: "",
                email: "",
                message: ""
            })

        } catch (error) {

            console.log(error)
        }
    }

    return (

        <section className="min-h-screen px-8 py-32" id="contact">

            <div className="max-w-4xl mx-auto">

                {/* Heading */}

                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-6xl font-bold text-center"
                >

                    Contact{" "}

                    <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                        Me
                    </span>

                </motion.h1>

                {/* Form */}

                <motion.form
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="mt-20 bg-white/5 border border-gray-800 rounded-3xl p-10 backdrop-blur-lg"
                >

                    {/* Name */}

                    <div>

                        <label className="text-gray-400">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full mt-3 p-4 rounded-xl bg-black border border-gray-700 outline-none focus:border-purple-500"
                        />

                    </div>

                    {/* Email */}

                    <div className="mt-8">

                        <label className="text-gray-400">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full mt-3 p-4 rounded-xl bg-black border border-gray-700 outline-none focus:border-purple-500"
                        />

                    </div>

                    {/* Message */}

                    <div className="mt-8">

                        <label className="text-gray-400">
                            Message
                        </label>

                        <textarea
                            rows="6"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full mt-3 p-4 rounded-xl bg-black border border-gray-700 outline-none focus:border-purple-500"
                        />

                    </div>

                    {/* Button */}

                    <button
                        type="submit"
                        className="mt-10 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition"
                    >

                        Send Message

                    </button>

                    {/* Success */}

                    {success && (

                        <p className="text-green-400 mt-6">

                            Message sent successfully!

                        </p>

                    )}

                </motion.form>

            </div>

        </section>
    )
}

export default Contact