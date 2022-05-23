import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { getUserInformationRequest } from "../services/actions/user-information"

export const ProtectedRoute = () => {

    const {isLoading, data} = useSelector((store) => store.userInformation);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserInformationRequest());
    }, [])
    if(data.success){
        return <Outlet/>
    }
    else{
        return <Navigate to="/login" />
    }
}