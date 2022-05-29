import styles from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { MainPage } from "../../pages/main-page/main-page";
import { LoginPage } from "../../pages/login-page";
import { RegisterPage } from "../../pages/register-page";
import { ForgotPasswordPage } from "../../pages/forgot-password-page";
import { ResetPasswordPage } from "../../pages/reset-password-page";
import { ProfilePage } from "../../pages/profile-page/profile-page";
import { NotFoundPage } from "../../pages/no-found-page/not-found-page";
import { ProtectedRoute } from "../protected-route";
import { getUserInformationRequest } from "../../services/actions/user-information";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Modal } from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { IngredientPage } from "../../pages/ingredient-page";
import { getDataIngredients } from "../../services/actions/data-ingredients";

export function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const background = location.state?.backgroundLocation;
    const navigate = useNavigate();
    const { ingredients } = useSelector(store => store.listIngredients);
    
    useEffect(() => {
        dispatch(getUserInformationRequest());
        dispatch(getDataIngredients());
    }, [])

    return (
        <>
            <AppHeader />
            <main className={`${styles.main}`}>
                {!ingredients.length && "Загрузка..."}
                <Routes location={background || location}>
                    {ingredients.length && <Route path="/" element={<MainPage />} />}
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="reset-password" element={<ResetPasswordPage />} />
                    <Route path="/" element={<ProtectedRoute />}>
                        <Route path='profile' element={<ProfilePage />} />
                    </Route>
                    {ingredients.length && <Route path="ingredients/:id" element={<IngredientPage />} />}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>

                {background && ingredients.length && (
                    <Routes>
                        <Route path="ingredients/:id" element={
                            <Modal closeModal={() => {
                                navigate(-1);
                            }}>
                                <IngredientDetails />
                            </Modal>
                        } />
                    </Routes>
                )}
            </main>
        </>
    );
}