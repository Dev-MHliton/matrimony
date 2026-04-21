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
import Favorites from "../Components/Dashboards/Menus/Users/Favorites/Favorites";
import Profile_Settings_Page from "../Components/Dashboards/User_Submenus/Profile Settings Page/Profile_Settings_Page";

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
            { path: "favorites", Component: Favorites },

            //Settings Nested Routes
            {
                path: "settings",
                Component: UserSetting, // parent layout
                children: [
                    { path: "profile", Component: Profile_Settings_Page },
                    { path: "privacy", element: <div>Privacy Settings Page</div> },
                    { path: "notifications", element: <div>Notification Settings Page</div> },
                    { path: "security", element: <div>Security Settings Page</div> },
                ]
            },
        ]
    },

    { path: "*", Component: Error },


]);

export default router;