import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/logo/Interlocked hands forming a heart.png";

const Sidebar = ({ name, menus }) => {
    const navigate = useNavigate();
    const [openSettings, setOpenSettings] = useState(false);

    const goHome = () => {
        navigate("/home", { replace: true });
    };

    return (
        <div className="fixed top-0 left-0 w-64 sm:w-72 h-screen bg-amber-100 border-r border-gray-200 shadow-sm flex flex-col overflow-y-auto z-50">

            {/* Top */}
            <div
                className="p-4 sm:p-5 border-b border-gray-200 flex items-center gap-2 cursor-pointer"
                onClick={goHome}
            >
                <img
                    src={logo}
                    alt=""
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />

                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 truncate">
                    {name}
                </h2>
            </div>

            {/* Menu */}
            <ul className="flex-1 p-3 sm:p-4 space-y-2 overflow-y-auto">
                {menus.map((item, index) => {
                    const Icon = item.icon;

                    // Home
                    if (item.path === "/home") {
                        return (
                            <li key={index}>
                                <button
                                    onClick={goHome}
                                    className="flex items-center gap-3 px-3 sm:px-4 py-2 rounded-xl transition text-gray-700 hover:bg-gray-100 w-full text-sm sm:text-base"
                                >
                                    <Icon className="text-base sm:text-lg shrink-0" />
                                    <span className="truncate">{item.name}</span>
                                </button>
                            </li>
                        );
                    }

                    // Settings
                    if (item.children) {
                        return (
                            <li key={index}>
                                <button
                                    onClick={() => setOpenSettings(!openSettings)}
                                    className="flex items-center gap-3 px-3 sm:px-4 py-2 rounded-xl transition text-gray-700 hover:bg-gray-100 w-full text-sm sm:text-base"
                                >
                                    <Icon className="text-base sm:text-lg shrink-0" />
                                    <span className="truncate">{item.name}</span>
                                </button>

                                {/* Sub menu */}
                                {openSettings && (
                                    <ul className="ml-5 sm:ml-8 mt-1 space-y-1">
                                        {item.children.map((sub, i) => {
                                            const SubIcon = sub.icon;

                                            return (
                                                <li key={i}>
                                                    <NavLink
                                                        to={sub.path}
                                                        className={({ isActive }) =>
                                                            `flex items-center gap-2 px-3 py-2 rounded-xl transition text-sm sm:text-base ${isActive
                                                                ? "bg-yellow-400 text-black"
                                                                : "text-gray-700 hover:bg-gray-100"
                                                            }`
                                                        }
                                                    >
                                                        <SubIcon className="text-sm shrink-0" />
                                                        <span className="truncate">
                                                            {sub.name}
                                                        </span>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </li>
                        );
                    }

                    // Normal menus
                    return (
                        <li key={index}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-3 sm:px-4 py-2 rounded-xl transition text-sm sm:text-base ${isActive
                                        ? "bg-yellow-400 text-black"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }`
                                }
                            >
                                <Icon className="text-base sm:text-lg shrink-0" />
                                <span className="truncate">{item.name}</span>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
};

export default Sidebar;