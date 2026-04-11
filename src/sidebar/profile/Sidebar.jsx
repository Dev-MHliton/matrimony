import { Link } from "react-router-dom";
import { FaUserCircle, FaUser, FaTachometerAlt, FaCog, FaSignOutAlt, FaLifeRing, FaHeadset, FaIdCard } from "react-icons/fa";

const Sidebar = ({ user, logOut, closeSidebar }) => {
    return (
        <div className="w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">

            {/* Top User Info */}
            <div className="flex items-center gap-4 p-5 border-b border-gray-200">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-3xl text-gray-500">
                    {user?.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt="User"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <FaUserCircle></FaUserCircle>
                    )}
                </div>

                <div>
                    <h2 className="text-lg font-bold text-gray-800">
                        {user?.displayName || "User"}
                    </h2>
                    <p className="text-sm text-gray-500 break-all">
                        {user?.email || "No Email"}
                    </p>
                    <span className="inline-block mt-2 text-xs font-semibold bg-yellow-400 text-black px-3 py-1 rounded-full">
                        Premium Member
                    </span>
                </div>
            </div>

            {/* Menu Items---------------------------------------------------------- */}
            <ul className="flex flex-col">
                <li>
                    <Link
                        to="/profile"
                        onClick={closeSidebar}
                        className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:bg-gray-100 transition border-b"
                    >
                        <FaUser className="text-lg" ></FaUser>
                        <span className="font-medium">My Profile</span>
                    </Link>
                </li>

                <li>
                    <Link
                        to="/biodata"
                        onClick={closeSidebar}
                        className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:bg-gray-100 transition border-b"
                    >
                        <FaIdCard className="text-lg" ></FaIdCard>
                        <span className="font-medium">Create Bio</span>
                    </Link>
                </li>

                <li>
                    <Link
                        to="/dashboard"
                        onClick={closeSidebar}
                        className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:bg-gray-100 transition border-b"
                    >
                        <FaTachometerAlt className="text-lg" ></FaTachometerAlt>
                        <span className="font-medium">Dashboard</span>
                    </Link>
                </li>

                <li>
                    <Link
                        to="/helpdesk"
                        onClick={closeSidebar}
                        className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:bg-gray-100 transition border-b"
                    >
                        <FaLifeRing className="text-lg" /> {/* Help Desk icon */}
                        <span className="font-medium">Help Desk</span>
                    </Link>
                </li>

                <li>
                    <Link
                        to="/support"
                        onClick={closeSidebar}
                        className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:bg-gray-100 transition border-b"
                    >
                        <FaHeadset className="text-lg" /> {/* Support icon */}
                        <span className="font-medium">Support</span>
                    </Link>
                </li>

                <li>
                    <Link
                        to="/settings"
                        onClick={closeSidebar}
                        className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:bg-gray-100 transition"
                    >
                        <FaCog className="text-lg" ></FaCog>
                        <span className="font-medium">Settings</span>
                    </Link>
                </li>
            </ul>

            {/* Logout Button */}
            <div className="p-4 border-t border-gray-200">
                <button
                    onClick={() => {
                        logOut();
                        closeSidebar();
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition"
                >
                    <FaSignOutAlt></FaSignOutAlt>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;