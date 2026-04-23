import Sidebar from "../../sidebar/Dashboard/Sidebar";
import userMenu from "../../Components/Dashboards/Menu/User/UserMenu";
import adminMenu from "../../Components/Dashboards/Menu/Admin/AdminMenu";
import { Outlet, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import DashboardNavbar from "../../shared/DashboardNavbar";

const Dashboard = ({ role }) => {
    const { logOut } = useContext(AuthContext);

    const [openSidebar, setOpenSidebar] = useState(false);
    const location = useLocation();

    const menus = role === "admin" ? adminMenu : userMenu;

    // close sidebar on route change
    useEffect(() => {
        setOpenSidebar(false);
    }, [location.pathname]);

    return (
        <section>
            <title>Dashboard - Matrimony</title>

            <div className="bg-gray-50 min-h-screen">

                {/* Overlay */}
                {openSidebar && (
                    <div
                        onClick={() => setOpenSidebar(false)}
                        className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    />
                )}

                {/* Sidebar */}
                <div
                    className={`
                        fixed top-0 left-0 z-50 h-screen
                        w-64 sm:w-72
                        transition-transform duration-300
                        ${openSidebar ? "translate-x-0" : "-translate-x-full"}
                        lg:translate-x-0
                    `}
                >
                    <Sidebar
                        name="Matrimony"
                        logOut={logOut}
                        menus={menus}
                    />
                </div>

                {/* Navbar */}
                <div className="fixed top-0 left-0 lg:left-72 w-full lg:w-[calc(100%-18rem)] z-30">
                    <div className="flex items-center bg-amber-100 hover:bg-green-950">
                        <button
                            onClick={() => setOpenSidebar(!openSidebar)}
                            className="lg:hidden px-4 text-2xl"
                        >
                            ☰
                        </button>

                        <div className="flex-1">
                            <DashboardNavbar />
                        </div>
                    </div>
                </div>

                {/* Outlet */}
                <div className="lg:ml-72 min-h-screen pt-28 px-3 sm:px-5">
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;