import { useSelector } from "../types/hooks";
import { Navigate, Outlet, useLocation } from "react-router-dom"

export const ProtectedRoute = () => {
    const {isLoaded, data} = useSelector((store) => store.userInformation);
    const location = useLocation();
    
    if(!isLoaded && !data.success){
        return <p>Загрузка...</p>
    }
    if(isLoaded && data.success){
        return <Outlet />
    }
    if(isLoaded && !data.success){
        return <Navigate to="/login" replace state={{ path: location.pathname }}  />
    }
    return <></>
}