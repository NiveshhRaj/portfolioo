import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../services/api"

function AdminLogin() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e) => {

        e.preventDefault()

        try {

            const response = await API.post(
                "/auth/login",
                formData
            )

            if (response.data === "Login Successful") {

                localStorage.setItem("adminLoggedIn", "true")

                navigate("/dashboard")
            }

        } catch (error) {

            console.log(error)
        }
    }

    return (

        <div className="min-h-screen bg-black text-white flex justify-center items-center">

            <form
                onSubmit={handleLogin}
                className="bg-white/5 border border-gray-800 p-10 rounded-3xl w-[400px]"
            >

                <h1 className="text-4xl font-bold text-center">

                    Admin Login

                </h1>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full mt-10 p-4 rounded-xl bg-black border border-gray-700 outline-none"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full mt-6 p-4 rounded-xl bg-black border border-gray-700 outline-none"
                />

                <button
                    className="w-full mt-8 p-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
                >

                    Login

                </button>

            </form>

        </div>
    )
}

export default AdminLogin