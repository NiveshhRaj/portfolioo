import axios from "axios"

const API = axios.create({
    baseURL: "https://portfolio-backend-zv3z.onrender.com/api"
})

export default API