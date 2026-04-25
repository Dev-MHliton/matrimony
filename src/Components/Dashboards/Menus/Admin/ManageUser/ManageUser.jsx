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

    // 🗑 DELETE
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

    // 👁 VIEW
    const handleView = (user) => {
        setSelectedUser(user);
    };

    // ✏️ EDIT OPEN
    const handleEdit = (user) => {
        setEditUser(user);
    };

    // ✏️ EDIT SAVE
    const handleUpdate = async () => {

        const res = await fetch(`http://localhost:5000/api/biodata/${editUser._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
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
        <section className="p-4">

            <div className="bg-black p-4 md:p-6 rounded-xl overflow-x-auto">

                <table className="table w-full text-white">

                    <thead className="bg-gray-800">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Religion</th>
                            <th>Profession</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {users.map(user => (
                            <tr key={user._id} className="border-b border-gray-700">

                                <td>
                                    <img src={user.profileImage}
                                        className="w-12 h-12 rounded-full"
                                    />
                                </td>

                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.biodataType}</td>
                                <td>{user.age}</td>
                                <td>{user.religion}</td>
                                <td>{user.profession}</td>
                                <td>{user.country}</td>

                                <td className="flex gap-2">

                                    <button
                                        onClick={() => handleView(user)}
                                        className="bg-blue-600 p-2 rounded"
                                    >
                                        <FaEye />
                                    </button>

                                    <button
                                        onClick={() => handleEdit(user)}
                                        className="bg-green-600 p-2 rounded"
                                    >
                                        <FaEdit />
                                    </button>

                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="bg-red-600 p-2 rounded"
                                    >
                                        <FaTrash />
                                    </button>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

            {/* ================= VIEW MODAL ================= */}
            {selectedUser && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">

                    <div className="bg-white text-black p-6 rounded-xl w-96 relative">

                        <button
                            onClick={() => setSelectedUser(null)}
                            className="absolute top-2 right-2"
                        >
                            <FaTimes />
                        </button>

                        <h2 className="text-xl font-bold mb-2">{selectedUser.name}</h2>
                        <p>Email: {selectedUser.email}</p>
                        <p>Age: {selectedUser.age}</p>
                        <p>Country: {selectedUser.country}</p>

                    </div>

                </div>
            )}

            {/* ================= EDIT MODAL ================= */}
            {editUser && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">

                    <div className="bg-white text-black p-6 rounded-xl w-96">

                        <h2 className="text-xl font-bold mb-3">Edit User</h2>

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

                        <div className="flex justify-between">

                            <button
                                onClick={() => setEditUser(null)}
                                className="bg-gray-500 text-white px-3 py-1 rounded"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleUpdate}
                                className="bg-green-600 text-white px-3 py-1 rounded"
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