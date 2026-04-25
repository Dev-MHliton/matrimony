import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    FaUsers,
    FaMale,
    FaFemale,
    FaCrown
} from "react-icons/fa";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts";

const AdminPanel = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/biodata")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const male = users.filter(u => u.biodataType === "Male").length;
    const female = users.filter(u => u.biodataType === "Female").length;
    const premium = users.filter(u => u.isPremium).length;

    const chartData = [
        { name: "Male", value: male },
        { name: "Female", value: female }
    ];

    const barData = [
        { name: "Users", count: users.length },
        { name: "Premium", count: premium }
    ];

    const COLORS = ["#3b82f6", "#ec4899"];

    return (
        <div className="bg-black text-white min-h-screen p-4 md:p-8">

            {/* HEADER */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-gray-400">Overview of your system</p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

                <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-600 p-5 rounded-xl flex justify-between">
                    <div>
                        <p>Total Users</p>
                        <h2 className="text-3xl font-bold">{users.length}</h2>
                    </div>
                    <FaUsers className="text-3xl" />
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="bg-green-600 p-5 rounded-xl flex justify-between">
                    <div>
                        <p>Male</p>
                        <h2 className="text-3xl font-bold">{male}</h2>
                    </div>
                    <FaMale className="text-3xl" />
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="bg-pink-600 p-5 rounded-xl flex justify-between">
                    <div>
                        <p>Female</p>
                        <h2 className="text-3xl font-bold">{female}</h2>
                    </div>
                    <FaFemale className="text-3xl" />
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="bg-yellow-500 text-black p-5 rounded-xl flex justify-between">
                    <div>
                        <p>Premium</p>
                        <h2 className="text-3xl font-bold">{premium}</h2>
                    </div>
                    <FaCrown className="text-3xl" />
                </motion.div>

            </div>

            {/* CHARTS */}
            <div className="grid md:grid-cols-2 gap-6">

                {/* PIE CHART */}
                <div className="bg-gray-900 p-5 rounded-xl h-80">
                    <h3 className="mb-3">Gender Distribution</h3>

                    <ResponsiveContainer>
                        <PieChart>
                            <Pie data={chartData} dataKey="value" outerRadius={100}>
                                {chartData.map((_, i) => (
                                    <Cell key={i} fill={COLORS[i]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                </div>

                {/* BAR CHART */}
                <div className="bg-gray-900 p-5 rounded-xl h-80">
                    <h3 className="mb-3">Overview</h3>

                    <ResponsiveContainer>
                        <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#3b82f6" />
                        </BarChart>
                    </ResponsiveContainer>

                </div>

            </div>

        </div>
    );
};

export default AdminPanel;