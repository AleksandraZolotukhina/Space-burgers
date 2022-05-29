import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = () => {
    const {isLoaded, data} = useSelector((store) => store.userInformation);
    if(!isLoaded && !data.success){
        return "Загрузка..."
    }
    if(isLoaded && data.success){
        return <Outlet />
    }
    if(isLoaded && !data.success){
        return <Navigate to="/login" />
    }
}