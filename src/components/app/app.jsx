import "./app.css";
import styles from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "../../pages/main";
import { LoginPage } from "../../pages/login";
import { RegisterPage } from "../../pages/register";
import { ForgotPasswordPage } from "../../pages/forgot-password";
import { ResetPasswordPage } from "../../pages/reset-password";
import { ProfilePage } from "../../pages/profile-page";
import { NotFoundPage } from "../../pages/not-found-page";
import { ProtectedRoute } from "../protected-route";

export function App() {
    return (
        <>
            <AppHeader />
            <main className={`${styles.main}`}>
                <Routes>
                    <Route path="/" element={ <MainPage /> } />
                    <Route path="login" element={ <LoginPage /> } />
                    <Route path="register" element={ <RegisterPage /> } />
                    <Route path="forgot-password" element={ <ForgotPasswordPage /> } />
                    <Route path="reset-password" element={ <ResetPasswordPage /> } />
                    <Route path="/" element={ <ProtectedRoute /> }>
                        <Route path='profile' element={<ProfilePage/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
        </>
    );
}