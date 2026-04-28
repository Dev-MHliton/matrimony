import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/home");
        } catch (error) {
            console.error(error);
        }
    };

    const role = user?.email === "liton72524nk@gmail.com" ? "admin" : "user";
    return (
        <nav className="bg-amber-100 px-3 sm:px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">

            {/* Left side */}
            <div
                className="text-lg sm:text-2xl font-bold text-center sm:text-left bg-clip-text text-transparent
                bg-linear-to-r from-orange-700 via-red-700 to-yellow-900"
            >
                {/* {user?.role === "admin" ? "Admin" : "User"} */}
                {role === "admin" ? "Admin Dashboard" : "User Dashboard"}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center sm:justify-end">

                {/* Notification */}
                <button className="relative text-gray-700 hover:text-gray-900 text-lg">
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1">
                        1
                    </span>
                    🔔
                </button>

                {/* Joined box */}
                <div className="flex items-center border rounded-full overflow-hidden bg-white shadow-sm max-w-full">

                    {/* Avatar + Role */}
                    <div className="flex items-center gap-2 px-2 sm:px-3 py-1">

                        {user?.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt="avatar"
                                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                            />
                        ) : (
                            <FaUserCircle className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700" />
                        )}

                        <span className="font-medium text-gray-800 text-sm sm:text-base whitespace-nowrap">
                            {/* {user?.role === "admin" ? "Admin" : "User"} */}
                            {role === "admin" ? "Admin" : "User"}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="h-6 w-px bg-gray-300"></div>

                    {/* Logout button */}
                    <button
                        onClick={handleLogout}
                        className="px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-red-600 hover:bg-red-500 hover:text-white transition whitespace-nowrap"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}
export default DashboardNavbar;