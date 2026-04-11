import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Error from "../Components/Error/Errors/Error";
import Profile from "../Components/Dashboards/Menus/Users/Profile/Profile";
import Dashboard from "../layouts/Dashboard/Dashboard";
import CreateBiodata from "../Components/Dashboards/Menus/Users/CreateBiodata/CreateBiodata";
import Setting from "../pages/Setting/Setting";
import UserSetting from "../Components/Dashboards/Menus/Users/Setting/UserSetting";
import BiodataDetails from "../Components/Dashboards/Menus/Users/CreateBiodata/BiodataDetails";
import SecureRoute from "./Secure/SecureRoute";
import SearchBiodata from "../Components/Dashboards/Menus/Users/SearchBiodata/SearchBiodata";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        children: [
            { path: "/", Component: Landing },
            { path: "home", Component: Home },
            { path: "login", Component: Login },
            { path: "signup", Component: SignUp },
            { path: "settings", Component: Setting },
            { path: "biodata", Component: CreateBiodata },

            { path: "biodata/:id", element: (<SecureRoute> <BiodataDetails></BiodataDetails> </SecureRoute>) },

        ]
    },
    {
        path: "dashboard",
        Component: Dashboard,
        children: [
            { path: "profile", Component: Profile },
            { path: "search", Component: SearchBiodata },
            { path: "settings", Component: UserSetting },
        ]
    },

    { path: "*", Component: Error },


]);

export default router;