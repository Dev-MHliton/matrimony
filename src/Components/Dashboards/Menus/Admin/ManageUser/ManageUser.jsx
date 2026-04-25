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
        <section className="p-2 md:p-4">

            <div className="bg-black p-3 md:p-6 rounded-xl">

                {/* TABLE WRAPPER */}
                <div className="overflow-x-auto">

                    <table className="min-w-[900px] w-full text-white text-sm md:text-base">

                        <thead className="bg-gray-800">
                            <tr>
                                <th className="p-2">Image</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Gender</th>
                                <th className="p-2">Age</th>
                                <th className="p-2">Religion</th>
                                <th className="p-2">Profession</th>
                                <th className="p-2">Country</th>
                                <th className="p-2">Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {users.map(user => (
                                <tr key={user._id} className="border-b border-gray-700">

                                    <td className="p-2">
                                        <img
                                            src={user.profileImage}
                                            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                                        />
                                    </td>

                                    <td className="p-2">{user.name}</td>
                                    <td className="p-2 break-all">{user.email}</td>
                                    <td className="p-2">{user.biodataType}</td>
                                    <td className="p-2">{user.age}</td>
                                    <td className="p-2">{user.religion}</td>
                                    <td className="p-2">{user.profession}</td>
                                    <td className="p-2">{user.country}</td>

                                    {/* ACTIONS */}
                                    <td className="p-2">
                                        <div className="flex flex-col md:flex-row gap-2">

                                            <button
                                                onClick={() => handleView(user)}
                                                className="bg-blue-600 p-2 rounded w-full md:w-auto"
                                            >
                                                <FaEye />
                                            </button>

                                            <button
                                                onClick={() => handleEdit(user)}
                                                className="bg-green-600 p-2 rounded w-full md:w-auto"
                                            >
                                                <FaEdit />
                                            </button>

                                            <button
                                                onClick={() => handleDelete(user._id)}
                                                className="bg-red-600 p-2 rounded w-full md:w-auto"
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
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4">

                    <div className="bg-white text-black p-4 md:p-6 rounded-xl w-full max-w-sm relative">

                        <button
                            onClick={() => setSelectedUser(null)}
                            className="absolute top-2 right-2"
                        >
                            <FaTimes />
                        </button>

                        <h2 className="text-lg md:text-xl font-bold">{selectedUser.name}</h2>
                        <p className="text-sm md:text-base">Email: {selectedUser.email}</p>
                        <p>Age: {selectedUser.age}</p>
                        <p>Country: {selectedUser.country}</p>

                    </div>

                </div>
            )}

            {/* EDIT MODAL */}
            {editUser && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4">

                    <div className="bg-white text-black p-4 md:p-6 rounded-xl w-full max-w-sm">

                        <h2 className="text-lg font-bold mb-3">Edit User</h2>

                        <input
                            className="border p-2 w-full mb-2"
                            value={editUser.name}
                            onChange={(e) =>
                                setEditUser({ ...editUser, name: e.target.value })
                            }
                        />

                        <input
                            className="border p-2 w-full mb-2"
                            value={editUser.age}
                            onChange={(e) =>
                                setEditUser({ ...editUser, age: e.target.value })
                            }
                        />

                        <input
                            className="border p-2 w-full mb-4"
                            value={editUser.country}
                            onChange={(e) =>
                                setEditUser({ ...editUser, country: e.target.value })
                            }
                        />

                        <div className="flex flex-col md:flex-row gap-2">

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