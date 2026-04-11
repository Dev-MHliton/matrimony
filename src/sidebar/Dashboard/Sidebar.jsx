import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/logo/Interlocked hands forming a heart.png"

const Sidebar = ({ name, menus }) => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/home", { replace: true });
    };

    return (
        <div className="fixed top-0 left-0 w-72 h-screen bg-amber-100 border-r border-gray-200 shadow-sm flex flex-col">

            {/* Top: Website name + logo */}
            <div className="p-5 border-b border-gray-200 flex items-center gap-1 cursor-pointer" onClick={goHome}>
                {/* Logo/User Icon */}
                <img src={logo} alt="" className="w-10 h-10" />

                {/* Website Name */}
                <h2 className="text-2xl font-bold text-gray-800">
                    {name}
                </h2>
            </div>

            {/* Menu Items */}
            <ul className="flex-1 p-4 space-y-2">
                {menus.map((item) => {
                    const Icon = item.icon;

                    if (item.path === "/home") {
                        return (
                            <li key={item.path}>
                                <button
                                    onClick={goHome}
                                    className="flex items-center gap-3 px-4 py-1 rounded-xl transition text-gray-700 hover:bg-gray-100 w-full"
                                >
                                    <Icon className="text-lg" />
                                    <span>{item.name}</span>
                                </button>
                            </li>
                        );
                    }

                    return (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-1 rounded-xl transition ${isActive
                                        ? "bg-yellow-400 text-black"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }`
                                }
                            >
                                <Icon className="text-lg" />
                                <span>{item.name}</span>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;