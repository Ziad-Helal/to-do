import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import {
    HomePage,
    LoginPage,
    RegistrationPage,
    ChangePasswordPage,
    WelcomePage,
    ProfilePage,
    NotFoundPage,
} from "./pages";
import { MainPageLayout } from "./layouts";
import ErrorBoundary from "./errorBoudaries/ErrorBoundary";

export default function App() {
    const isLogged = useSelector((state) => state.user.isLogged);

    return (
        <ErrorBoundary>
            <Router>
                <MainPageLayout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/Welcome" element={<WelcomePage />} />
                        <Route path="/Profile" element={<ProfilePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegistrationPage />} />
                        {isLogged && (
                            <Route path="/change_password" element={<ChangePasswordPage />} />
                        )}
                        <Route path="/*" element={<NotFoundPage />} />
                    </Routes>
                </MainPageLayout>
            </Router>
        </ErrorBoundary>
    );
}
