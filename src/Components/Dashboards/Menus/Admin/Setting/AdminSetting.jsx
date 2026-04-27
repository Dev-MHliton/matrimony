const AdminSetting = () => {
    const settings = [
        {
            title: "General Settings",
            desc: "Update site name, logo, contact information and footer details.",
            icon: "⚙️",
        },
        {
            title: "Premium Settings",
            desc: "Manage premium membership plans and featured member rules.",
            icon: "👑",
        },
        {
            title: "User Settings",
            desc: "Control registration, email verification and user limits.",
            icon: "👤",
        },
        {
            title: "Security Settings",
            desc: "Manage admin security, login attempts and blocked users.",
            icon: "🛡️",
        },
        {
            title: "Biodata Settings",
            desc: "Set approval system and profile visibility options.",
            icon: "📋",
        },
        {
            title: "Notification Settings",
            desc: "Configure email notifications and alerts.",
            icon: "🔔",
        },
        {
            title: "Matchmaking Settings",
            desc: "Set age limits, religion and location filters.",
            icon: "💞",
        },
        {
            title: "Payment Settings",
            desc: "Configure payment gateways and subscription plans.",
            icon: "💳",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white flex">
            {/* Sidebar */}
            <div className="w-72 bg-[#efe7c2] text-black p-5 hidden md:flex flex-col justify-between">
                <div>
                    <h1 className="text-2xl font-bold mb-10">💍 Matrimony Admin</h1>

                    <div className="space-y-3">
                        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-yellow-400 transition">
                            🏠 Dashboard
                        </button>

                        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-yellow-400 transition">
                            👥 Manage Users
                        </button>

                        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-yellow-400 transition">
                            ⏳ Pending Approvals
                        </button>

                        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-yellow-400 transition">
                            👑 Subscriptions
                        </button>

                        <button className="w-full text-left px-4 py-3 rounded-xl bg-yellow-400 font-semibold">
                            ⚙️ Settings
                        </button>
                    </div>
                </div>

                <div className="border-t pt-4 mt-6">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://i.ibb.co/4pDNDk1/avatar.png"
                            alt="admin"
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h3 className="font-semibold">Admin</h3>
                            <p className="text-sm text-gray-700">admin@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold">Settings</h2>
                    <p className="text-gray-400 mt-2">
                        Manage all settings of your matrimony website
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {settings.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#1b1b1b] border border-gray-800 rounded-2xl p-5 hover:border-yellow-400 transition duration-300 flex items-start justify-between"
                        >
                            <div className="flex gap-4">
                                <div className="w-16 h-16 rounded-full bg-yellow-400 text-black flex items-center justify-center text-3xl">
                                    {item.icon}
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            <button className="text-2xl text-gray-400 hover:text-yellow-400">
                                →
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="bg-[#1b1b1b] border border-gray-800 rounded-2xl mt-8 p-5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h3 className="text-xl font-semibold">Settings Overview</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Adjust all important settings of your matrimony platform.
                        </p>
                    </div>

                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold transition">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
export default AdminSetting;