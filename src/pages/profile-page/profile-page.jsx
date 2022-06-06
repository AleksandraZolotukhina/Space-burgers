import style_page from "../page.module.css";
import styles from "./profile-page.module.css";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../../services/actions/user-information';

export const ProfilePage = () => {
    const dispatch = useDispatch();
    const {isLoadingLogOut, hasErrorLogOut, errorMessageLogOut, logOutSuccess, data} = useSelector(store => store.userInformation);
    const activeStyle = {
        color: "#F2F2F3",
    }

    return (
        <section className={`${styles.profile} mt-30`}>
            <div className={styles.main_navigation}>
                <nav className={`${styles.navigation} text_type_main-medium`}>
                    <NavLink className={styles.link} to="" style={({ isActive }) => isActive ? activeStyle : undefined} end>Профиль</NavLink>
                    <NavLink className={styles.link} to="orders" style={({ isActive }) => isActive ? activeStyle : undefined}>История заказов</NavLink>
                    <a className={styles.link} onClick={()=>dispatch(logoutRequest())}>{isLoadingLogOut ? "Выходим...": "Выход"}</a>
                    {logOutSuccess && <Navigate to="/" />}
                </nav>
                <p className={`text text_type_main-default text_color_inactive ${styles.message_tip}`}>В этом разделе вы можете изменить свои персональные данные</p>
            </div>
            <Outlet /> 
            {hasErrorLogOut && <p className={style_page.registration__error_request}>{errorMessageLogOut}</p>}
        </section>
    )
}