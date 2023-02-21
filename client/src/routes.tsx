import { Navigate } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import DevicePage from "./pages/DevicePage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import { ADMIN_PAGE, DEVICE_PAGE, ERROR_PAGE, LOGIN_PAGE, MAIN_PAGE, PROFILE_PAGE } from "./utils/consts";

export const admin_routes = [
    {
        path: ADMIN_PAGE,
        Component: <AdminPage />
    },
]

export const auth_routes = [
    {
           path: PROFILE_PAGE,
           Component: <ProfilePage/>   
    },
]

export const public_routes = [
    {
        path: ERROR_PAGE,
        Component: <ErrorPage/>
    },
    {
        path: MAIN_PAGE,
        Component: <MainPage/>
    },
    {
        path: DEVICE_PAGE + '/:id',
        Component: <DevicePage />
    },
    {
        path: LOGIN_PAGE,
        Component: <LoginPage/>
    },
    {
        path: '*',
        Component: <Navigate to="/error" replace />
    }
]