import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../../context/AuthContext";

const UserSetting = () => {
    const { user } = useContext(AuthContext);

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        religion: "",
        country: "",
        district: "",
        about: ""
    });

    const [loading, setLoading] = useState(false);

    // Load user data
    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:5000/api/user?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setProfile({
                    name: data?.name || "",
                    email: user.email,
                    phone: data?.phone || "",
                    age: data?.age || "",
                    gender: data?.gender || "",
                    religion: data?.religion || "",
                    country: data?.country || "",
                    district: data?.district || "",
                    about: data?.about || ""
                });
            });
    }, [user]);

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    };

    //Save profile
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        await fetch("http://localhost:5000/api/user", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(profile)
        });

        setLoading(false);
        alert("Profile Updated Successfully ✅");
    };

    return (
        <section>
            <title>User Dashboard - Setting</title>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 py-10">

                <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6">

                    {/* TITLE */}
                    <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
                        Settings
                    </h1>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* GRID INPUTS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <input
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full p-3 rounded-lg border bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                name="email"
                                value={profile.email}
                                disabled
                                className="w-full p-3 rounded-lg border bg-gray-200 dark:bg-gray-600 dark:text-white cursor-not-allowed"
                            />

                            <input
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full p-3 rounded-lg border bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                name="age"
                                value={profile.age}
                                onChange={handleChange}
                                placeholder="Age"
                                className="w-full p-3 rounded-lg border bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                name="gender"
                                value={profile.gender}
                                onChange={handleChange}
                                placeholder="Gender"
                                className="w-full p-3 rounded-lg border bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                name="religion"
                                value={profile.religion}
                                onChange={handleChange}
                                placeholder="Religion"
                                className="w-full p-3 rounded-lg border bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                name="country"
                                value={profile.country}
                                onChange={handleChange}
                                placeholder="Country"
                                className="w-full p-3 rounded-lg border bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                name="district"
                                value={profile.district}
                                onChange={handleChange}
                                placeholder="District"
                                className="w-full p-3 rounded-lg border bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </div>

                        {/* ABOUT */}
                        <textarea
                            name="about"
                            value={profile.about}
                            onChange={handleChange}
                            placeholder="Write something about yourself..."
                            rows="4"
                            className="w-full p-3 rounded-lg border bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* BUTTON */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-200"
                        >
                            {loading ? "Saving..." : "Save Profile"}
                        </button>

                    </form>

                </div>
            </div>
        </section>
    );
};

export default UserSetting;