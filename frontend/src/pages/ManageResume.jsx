import { useState } from "react"

import API from "../services/api.js"

function ManageResume() {

    const [file, setFile] = useState(null)

    const handleUpload = async () => {

        const formData = new FormData()

        formData.append("file", file)

        try {

            await API.post(
                "/resume/upload",
                formData
            )

            alert("Resume Uploaded")

        } catch (error) {

            console.log(error)
        }
    }

    return (

        <div className="p-10">

            <h1 className="text-4xl font-bold mb-10">

                Upload Resume

            </h1>

            <input
                type="file"
                accept=".pdf"
                onChange={(e) =>
                    setFile(e.target.files[0])
                }
            />

            <button
                onClick={handleUpload}
                className="

                mt-6

                px-6
                py-3

                bg-purple-600

                rounded-xl

                "
            >

                Upload Resume

            </button>

        </div>
    )
}

export default ManageResume