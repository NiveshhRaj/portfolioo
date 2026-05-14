import { motion } from "framer-motion"
import { FaCode } from "react-icons/fa"

function CodingStats() {

    const stats = [

        {
            title: "LeetCode Problems",
            value: "150+"
        },

        // {
        //     title: "HackerRank Badges",
        //     value: "3★"
        // },

        {
            title: "GeeksForGeeks",
            value: "60+"
        }

    ]

    return (

        <section className="px-8 py-32">

            <div className="max-w-6xl mx-auto">

                <h1 className="text-6xl font-bold text-center">

                    Coding{" "}

                    <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">

                        Stats

                    </span>

                </h1>

                <div className="grid md:grid-cols-2 gap-8 mt-24">

                    {stats.map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/5 border border-gray-800 rounded-3xl p-10 text-center"
                        >

                            <FaCode className="text-5xl mx-auto text-purple-400" />

                            <h1 className="text-5xl font-bold mt-8">

                                {item.value}

                            </h1>

                            <p className="text-gray-400 mt-5">

                                {item.title}

                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default CodingStats