import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {

    // const isAdmin = localStorage.getItem("admin")
    //
    // if (!isAdmin) {
    //
    //     return <Navigate to="/admin" />
    // }

    const isLoggesIn = localStorage.getItem("adminLoggedIn");

    if(!isLoggesIn){
        return <Navigate to={"/admin"} />
    }

    return children
}

export default ProtectedRoute