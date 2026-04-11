import { FaCog, FaUsers, FaCrown, FaHome, FaHourglassHalf } from "react-icons/fa";

const AdminMenu = [
    {
        name: "Dashboard",
        path: "/home",
        icon: FaHome,
    },
    {
        name: "Manage Users",
        path: "/dashboard/admin/manage-users",
        icon: FaUsers,
    },
    {
        name: "Pending Approvals",
        path: "/dashboard/admin/premium-requests",
        icon: FaHourglassHalf,
    },
    {
        name: "SubscriptionS",
        path: "/dashboard/subscription",
        icon: FaCrown,
    },
    {
        name: "Settings",
        path: "/dashboard/admin/settings",
        icon: FaCog,
    },
];
export default AdminMenu;