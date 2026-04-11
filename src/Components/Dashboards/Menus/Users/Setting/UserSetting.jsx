import { useState } from "react";
import FileUpload from "../../../../UserToggle/FileUpload/FileUpload";
import NotificationToggle from "../../../../UserToggle/NotificationToggle/NotificationToggle";
import ThemeToggle from "../../../../UserToggle/ThemeToggle/ThemeToggle";

const UserSetting = () => {
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const [file, setFile] = useState(null);
    const [notifications, setNotifications] = useState(true);

    const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            profile,
            file,
            notifications,
        });

        // Backend API call can be added here
    };

    return (
        <div className="p-6 bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
            <h1 className="text-3xl font-bold mb-6">User Settings</h1>

            <div className="mb-6">
                <ThemeToggle></ThemeToggle>
            </div>

            <form
                onSubmit={handleSubmit}
                className="max-w-lg bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
            >
                <FileUpload file={file} setFile={setFile}></FileUpload>

                <div>
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={profile.password}
                        onChange={handleChange}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
                    />
                </div>

                <NotificationToggle enabled={notifications} setEnabled={setNotifications}></NotificationToggle>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                    Update Profile
                </button>
            </form>

        </div>
    );
};

export default UserSetting;