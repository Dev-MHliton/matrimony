import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DashboardNavbar() {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/home"); // logout er por home e jabe
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <nav className="bg-amber-100 px-4 py-2 flex items-center justify-between">

            {/* Left side */}
            <div className="text-2xl font-bold bg-clip-text text-transparent
                bg-linear-to-r from-orange-700 via-red-700 to-yellow-900">
                {user?.role === "admin" ? "Admin Dashboard" : "User Dashboard"}
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
                {/* Notification */}
                <button className="relative text-gray-700 hover:text-gray-900">
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                        1
                    </span>
                    🔔
                </button>

                {/* Joined box */}
                <div className="flex items-center border rounded-full overflow-hidden bg-white shadow-sm">

                    {/* Avatar + Role */}
                    <div className="flex items-center gap-2 px-3 py-1">
                        {user?.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt="avatar"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        ) : (
                            <FaUserCircle className="w-8 h-8 text-gray-700" />
                        )}

                        <span className="font-medium text-gray-800">
                            {user?.role === "admin" ? "Admin" : "User"}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="h-6 w-px bg-gray-300"></div>

                    {/* Logout button */}
                    <button
                        onClick={handleLogout}
                        className="px-4 py-1 text-sm font-medium text-red-600 hover:bg-red-500 hover:text-white transition"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}