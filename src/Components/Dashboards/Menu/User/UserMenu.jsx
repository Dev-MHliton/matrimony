import { FaUser, FaHeart, FaEnvelope, FaCrown, FaCog, FaHome, FaSearch, FaLock, FaBell, FaShieldAlt } from "react-icons/fa";

const UserMenu = [
    {
        name: "Dashboard",
        path: "/home",
        icon: FaHome,
    },
    {
        name: "Users",
        path: "/dashboard/profile",
        icon: FaUser,
    },
    {
        name: "Search Biodata",
        path: "/dashboard/search",
        icon: FaSearch,
    },
    {
        name: "My Favorites",
        path: "/dashboard/favorites",
        icon: FaHeart,
    },
    {
        name: "Message",
        path: "/dashboard/user/contact-requests",
        icon: FaEnvelope,
    },
    {
        name: "Premium Plan",
        path: "/dashboard/user/premium-plan",
        icon: FaCrown,
    },

    //Settings with sub-menu
    {
        name: "Settings",
        icon: FaCog,
        children: [
            {
                name: "Profile Settings",
                path: "/dashboard/settings/profile",
                icon: FaUser,
            },
            {
                name: "Privacy Settings",
                path: "/dashboard/settings/privacy",
                icon: FaLock,
            },
            {
                name: "Notifications",
                path: "/dashboard/settings/notifications",
                icon: FaBell,
            },
            {
                name: "Security",
                path: "/dashboard/settings/security",
                icon: FaShieldAlt,
            },
        ],
    },
];

export default UserMenu;