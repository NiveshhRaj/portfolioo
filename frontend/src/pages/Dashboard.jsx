import { Link, useNavigate } from "react-router-dom"

function Dashboard() {

    const navigate = useNavigate()

    const logout = () => {

        localStorage.removeItem("admin")

        navigate("/admin")
    }

    return (

        <div className="min-h-screen bg-black text-white p-10">

            {/* Top */}

            <div className="flex justify-between items-center">

                <h1 className="text-5xl font-bold">

                    Admin Dashboard

                </h1>

                <button
                    onClick={logout}
                    className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition"
                >

                    Logout

                </button>

            </div>

            {/* Cards */}

            <div className="grid md:grid-cols-3 gap-8 mt-16">

                <Link
                    to="/manageprojects"
                    className="bg-white/5 border border-gray-800 p-10 rounded-3xl hover:border-purple-500 transition"
                >

                    Manage Projects

                </Link>

                <Link
                    to="/manageskills"
                    className="bg-white/5 border border-gray-800 p-10 rounded-3xl hover:border-purple-500 transition"
                >

                    Manage Skills

                </Link>


                <Link
                    to="/messages"
                    className="bg-white/5 border border-gray-800 p-10 rounded-3xl hover:border-purple-500 transition"
                >

                    Contact Messages

                </Link>

                <Link
                    to="/resume"
                    className="bg-white/5 border border-gray-800 p-10 rounded-3xl hover:border-purple-500 transition"
                >

                    Resume

                </Link>
            </div>

        </div>
    )
}

export default Dashboard