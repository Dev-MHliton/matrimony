import { Outlet, NavLink } from "react-router-dom";

const UserSetting = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>

            {/* Sub Menu */}
            <div className="flex gap-4 mb-6">
                <NavLink to="profile">Profile</NavLink>
                <NavLink to="privacy">Privacy</NavLink>
                <NavLink to="notifications">Notifications</NavLink>
                <NavLink to="security">Security</NavLink>
            </div>

            {/* Page Content */}
            <Outlet />
        </div>
    );
};

export default UserSetting;