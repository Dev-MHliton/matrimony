import { useEffect, useState } from "react";

const ManageUser = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/api/biodata")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <section className="p-4">
            <title>Dashboard/Manage Users - Matrimony</title>

            <div className="bg-black rounded-xl p-4 md:p-6">

                <h2 className="text-2xl font-bold text-white mb-6">
                    Manage Users
                </h2>

                {/* Stats */}
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

                    <div className="bg-blue-600 rounded-xl p-5 text-white">
                        <h3 className="text-lg font-semibold">
                            Total Biodata
                        </h3>

                        <p className="text-4xl font-bold mt-2">
                            {users.length}
                        </p>
                    </div>

                    <div className="bg-green-600 rounded-xl p-5 text-white">
                        <h3 className="text-lg font-semibold">
                            Male Users
                        </h3>

                        <p className="text-4xl font-bold mt-2">
                            {
                                users.filter(
                                    user => user.biodataType === "Male"
                                ).length
                            }
                        </p>
                    </div>

                    <div className="bg-pink-600 rounded-xl p-5 text-white">
                        <h3 className="text-lg font-semibold">
                            Female Users
                        </h3>

                        <p className="text-4xl font-bold mt-2">
                            {
                                users.filter(
                                    user => user.biodataType === "Female"
                                ).length
                            }
                        </p>
                    </div>

                </div> */}

                {
                    loading ? (
                        <p className="text-white">
                            Loading...
                        </p>
                    ) : (
                        <div className="overflow-x-auto">

                            <table className="table w-full text-white">

                                <thead className="bg-gray-800 text-white">

                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>Age</th>
                                        <th>Religion</th>
                                        <th>Profession</th>
                                        <th>Country</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        users.map((user, index) => (

                                            <tr
                                                key={user._id}
                                                className="border-b border-gray-700"
                                            >

                                                <td>{index + 1}</td>

                                                <td>
                                                    <img
                                                        src={user.profileImage}
                                                        alt=""
                                                        className="w-12 h-12 rounded-full object-cover"
                                                    />
                                                </td>

                                                <td>
                                                    {user.name}
                                                </td>

                                                <td>
                                                    {user.email}
                                                </td>

                                                <td>
                                                    {user.biodataType}
                                                </td>

                                                <td>
                                                    {user.age}
                                                </td>

                                                <td>
                                                    {user.religion}
                                                </td>

                                                <td>
                                                    {user.profession}
                                                </td>

                                                <td>
                                                    {user.country}
                                                </td>

                                            </tr>

                                        ))
                                    }

                                </tbody>

                            </table>

                        </div>
                    )
                }

            </div>
        </section>
    );
};

export default ManageUser;