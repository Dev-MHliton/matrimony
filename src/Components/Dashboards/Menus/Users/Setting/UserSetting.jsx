import { Outlet, NavLink } from "react-router-dom";

const UserSetting = () => {
    return (
        <div className="p-6">
            {/* Page Content */}
            <Outlet />
        </div>
    );
};

export default UserSetting;