import { FaUser, FaHeart, FaEnvelope, FaCrown, FaCog, FaHome, FaSearch } from "react-icons/fa";

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
        path: "/dashboard/user/favorites",
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
    {
        name: "Profile Settings",
        path: "/dashboard/settings",
        icon: FaCog,
    },
];

export default UserMenu;