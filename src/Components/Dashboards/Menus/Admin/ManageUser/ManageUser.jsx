import { useEffect, useState } from "react";
import Loading from "../../../../../shared/Loading";
import { FaEye, FaEdit, FaTrash, FaTimes } from "react-icons/fa";

const ManageUser = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedUser, setSelectedUser] = useState(null);
    const [editUser, setEditUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/biodata")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const handleDelete = async (id) => {

        const confirm = window.confirm("Delete this user?");
        if (!confirm) return;

        const res = await fetch(`http://localhost:5000/api/biodata/${id}`, {
            method: "DELETE",
        });

        const data = await res.json();

        if (data.success) {
            setUsers(prev => prev.filter(u => u._id !== id));
        }
    };

    const handleView = (user) => setSelectedUser(user);
    const handleEdit = (user) => setEditUser(user);

    const handleUpdate = async () => {

        const res = await fetch(`http://localhost:5000/api/biodata/${editUser._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editUser)
        });

        const data = await res.json();

        if (data.success) {
            setUsers(prev =>
                prev.map(u => u._id === editUser._id ? editUser : u)
            );
            setEditUser(null);
        }
    };

    if (loading) return <Loading />;

    return (
        <section className="p-2 md:p-4 w-full overflow-hidden">

            <div className="bg-black p-2 sm:p-3 md:p-6 rounded-xl overflow-hidden">

                {/* TABLE WRAPPER */}
                <div className="w-full overflow-x-auto scrollbar-thin">

                    <table className="min-w-[900px] w-full text-white text-xs sm:text-sm md:text-base">

                        <thead className="bg-gray-800 sticky top-0 z-10">
                            <tr>
                                <th className="p-2 whitespace-nowrap">Image</th>
                                <th className="p-2 whitespace-nowrap">Name</th>
                                <th className="p-2 whitespace-nowrap">Email</th>
                                <th className="p-2 whitespace-nowrap">Gender</th>
                                <th className="p-2 whitespace-nowrap">Age</th>
                                <th className="p-2 whitespace-nowrap">Religion</th>
                                <th className="p-2 whitespace-nowrap">Profession</th>
                                <th className="p-2 whitespace-nowrap">Country</th>
                                <th className="p-2 whitespace-nowrap">Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {users.map(user => (
                                <tr
                                    key={user._id}
                                    className="border-b border-gray-700 hover:bg-gray-900 transition"
                                >

                                    <td className="p-2">
                                        <img
                                            src={user.profileImage}
                                            alt={user.name}
                                            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover min-w-[40px]"
                                        />
                                    </td>

                                    <td className="p-2 whitespace-nowrap">
                                        {user.name}
                                    </td>

                                    <td className="p-2 break-all max-w-[180px]">
                                        {user.email}
                                    </td>

                                    <td className="p-2 whitespace-nowrap">
                                        {user.biodataType}
                                    </td>

                                    <td className="p-2 whitespace-nowrap">
                                        {user.age}
                                    </td>

                                    <td className="p-2 whitespace-nowrap">
                                        {user.religion}
                                    </td>

                                    <td className="p-2 whitespace-nowrap">
                                        {user.profession}
                                    </td>

                                    <td className="p-2 whitespace-nowrap">
                                        {user.country}
                                    </td>

                                    {/* ACTIONS */}
                                    <td className="p-2">
                                        <div className="flex flex-row gap-2 min-w-[120px]">

                                            <button
                                                onClick={() => handleView(user)}
                                                className="bg-blue-600 hover:bg-blue-700 p-2 rounded flex items-center justify-center"
                                            >
                                                <FaEye />
                                            </button>

                                            <button
                                                onClick={() => handleEdit(user)}
                                                className="bg-green-600 hover:bg-green-700 p-2 rounded flex items-center justify-center"
                                            >
                                                <FaEdit />
                                            </button>

                                            <button
                                                onClick={() => handleDelete(user._id)}
                                                className="bg-red-600 hover:bg-red-700 p-2 rounded flex items-center justify-center"
                                            >
                                                <FaTrash />
                                            </button>

                                        </div>
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

            {/* VIEW MODAL */}
            {selectedUser && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-3 z-50">

                    <div className="bg-white text-black p-4 md:p-6 rounded-xl w-full max-w-sm relative max-h-[90vh] overflow-y-auto">

                        <button
                            onClick={() => setSelectedUser(null)}
                            className="absolute top-3 right-3 text-lg"
                        >
                            <FaTimes />
                        </button>

                        <div className="flex flex-col items-center text-center">

                            <img
                                src={selectedUser.profileImage}
                                alt={selectedUser.name}
                                className="w-20 h-20 rounded-full object-cover mb-3"
                            />

                            <h2 className="text-lg md:text-xl font-bold wrap-break-words">
                                {selectedUser.name}
                            </h2>

                            <p className="text-sm break-all">
                                {selectedUser.email}
                            </p>

                        </div>

                        <div className="mt-4 space-y-2 text-sm md:text-base">
                            <p><strong>Age:</strong> {selectedUser.age}</p>
                            <p><strong>Country:</strong> {selectedUser.country}</p>
                            <p><strong>Religion:</strong> {selectedUser.religion}</p>
                            <p><strong>Profession:</strong> {selectedUser.profession}</p>
                        </div>

                    </div>

                </div>
            )}

            {/* EDIT MODAL */}
            {editUser && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-3 z-50">

                    <div className="bg-white text-black p-4 md:p-6 rounded-xl w-full max-w-sm max-h-[90vh] overflow-y-auto">

                        <h2 className="text-lg font-bold mb-4">
                            Edit User
                        </h2>

                        <input
                            className="border p-2 w-full mb-3 rounded outline-none"
                            value={editUser.name}
                            onChange={(e) =>
                                setEditUser({
                                    ...editUser,
                                    name: e.target.value
                                })
                            }
                        />

                        <input
                            className="border p-2 w-full mb-3 rounded outline-none"
                            value={editUser.age}
                            onChange={(e) =>
                                setEditUser({
                                    ...editUser,
                                    age: e.target.value
                                })
                            }
                        />

                        <input
                            className="border p-2 w-full mb-4 rounded outline-none"
                            value={editUser.country}
                            onChange={(e) =>
                                setEditUser({
                                    ...editUser,
                                    country: e.target.value
                                })
                            }
                        />

                        <div className="flex flex-col sm:flex-row gap-2">

                            <button
                                onClick={() => setEditUser(null)}
                                className="bg-gray-500 text-white px-3 py-2 rounded w-full"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleUpdate}
                                className="bg-green-600 text-white px-3 py-2 rounded w-full"
                            >
                                Save
                            </button>

                        </div>

                    </div>

                </div>
            )}

        </section>
    );
};

export default ManageUser;