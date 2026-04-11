import Sidebar from "../../sidebar/Dashboard/Sidebar";
import userMenu from "../../Components/Dashboards/Menu/User/UserMenu";
import adminMenu from "../../Components/Dashboards/Menu/Admin/AdminMenu";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import DashboardNavbar from "../../shared/DashboardNavbar";

const Dashboard = ({ role }) => {
    const { logOut } = useContext(AuthContext);

    // const role = "admin";   //Just showing manually admin dashboard

    const menus = role === "admin" ? adminMenu : userMenu;

    return (
        <section>
            <title>Dashboard - Matrimony</title>

            <div className="bg-gray-50 min-h-screen">
                {/* Sidebar with just normal text */}
                <Sidebar name="Matrimony" logOut={logOut} menus={menus} />

                {/* Navbar fixed */}
                <div style={{ flex: 1, position: "relative" }}>
                    <div style={{
                        position: "fixed",
                        top: 0,
                        left: 288,
                        width: "calc(100% - 288px)",
                        backgroundColor: "#333",
                        color: "#fff",
                        zIndex: 1000
                    }}>
                        <DashboardNavbar />
                    </div>
                </div>

                {/* Outlet */}
                <div className="ml-72 min-h-screen pt-24">
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;