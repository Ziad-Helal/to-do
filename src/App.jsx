import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    HomePage,
    LoginPage,
    RegistrationPage,
    ChangePasswordPage,
    WelcomePage,
    NotFoundPage,
} from "./pages";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/welcome" element={<WelcomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/change_password" element={<ChangePasswordPage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}
