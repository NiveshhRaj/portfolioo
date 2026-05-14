import { useEffect, useState } from "react"
import API from "../services/api"

function Messages() {

    const [messages, setMessages] = useState([])

    useEffect(() => {

        fetchMessages()

    }, [])

    const fetchMessages = async () => {

        try {

            const response = await API.get("/contact")

            setMessages(response.data)

        } catch (error) {

            console.log(error)
        }
    }

    const deleteMessage = async (id) => {

        try {

            await API.delete(`/contact/${id}`)

            fetchMessages()

        } catch (error) {

            console.log(error)
        }
    }

    return (

        <div className="min-h-screen bg-black text-white p-10">

            <h1 className="text-5xl font-bold">

                Contact Messages

            </h1>

            {/* Messages Grid */}

            <div className="grid md:grid-cols-2 gap-8 mt-16">

                {messages.map((message) => (

                    <div
                        key={message.id}
                        className="bg-white/5 border border-gray-800 rounded-3xl p-8 backdrop-blur-lg"
                    >

                        {/* Name */}

                        <h2 className="text-2xl font-bold">

                            {message.name}

                        </h2>

                        {/* Email */}

                        <p className="text-purple-400 mt-3">

                            {message.email}

                        </p>

                        {/* Message */}

                        <p className="text-gray-400 mt-6 leading-8">

                            {message.message}

                        </p>

                        {/* Delete */}

                        <button
                            onClick={() => deleteMessage(message.id)}
                            className="mt-8 px-5 py-3 rounded-full bg-red-600 hover:bg-red-700 transition"
                        >

                            Delete

                        </button>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default Messages