import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import {
    HomePage,
    LoginPage,
    RegistrationPage,
    ChangePasswordPage,
    WelcomePage,
    NotFoundPage,
} from "./pages";
import { MainPageLayout } from "./layouts";
import ErrorBoundary from "./errorBoudaries/ErrorBoundary";

export default function App() {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <MainPageLayout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/welcome" element={<WelcomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegistrationPage />} />
                        <Route path="/change_password" element={<ChangePasswordPage />} />
                        <Route path="/*" element={<NotFoundPage />} />
                    </Routes>
                </MainPageLayout>
            </Provider>
        </ErrorBoundary>
    );
}
