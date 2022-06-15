import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export const ProtectedRoute = () => {
    const {isLoaded, data} = useSelector((store) => store.userInformation);
    const location = useLocation();
    
    if(!isLoaded && !data.success){
        return "Загрузка..."
    }
    if(isLoaded && data.success){
        return <Outlet />
    }
    if(isLoaded && !data.success){
        return <Navigate to="/login" replace state={{ path: location.pathname }}  />
    }
}