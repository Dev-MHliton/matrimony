import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../../Home/SectionTitle/SectionTitle";
import Loading from "../../../../../shared/Loading";
import NoData from "../../../../../shared/NoData";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const userEmail = "test@gmail.com";

    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = () => {
        setLoading(true);

        fetch(`http://localhost:5000/api/favorites?email=${userEmail}`)
            .then(res => res.json())
            .then(data => setFavorites(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    };

    // REMOVE FAVORITE
    const handleRemove = (id) => {
        fetch("http://localhost:5000/api/favorites", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                biodataId: id,
                email: userEmail,
            }),
        })
            .then(() => {
                setFavorites(prev => prev.filter(f => f.biodataId !== id));
            })
            .catch(err => console.error(err));
    };

    return (
        <section className="px-6 md:px-12 py-6">

            {/* Title */}
            <SectionTitle heading={"My Favorites"} />

            {/* Loading */}
            {loading && (
                <Loading></Loading>
            )}

            {/* Empty State */}
            {!loading && favorites.length === 0 && (
                <div className="text-center mt-10 text-gray-500">
                    <NoData></NoData>
                </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                {favorites.map((fav) => (
                    <div
                        key={fav._id}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition flex overflow-hidden"
                    >

                        {/* Image */}
                        <div className="w-1/3">
                            {fav.biodata?.profileImage ? (
                                <img
                                    src={fav.biodata.profileImage}
                                    alt={fav.biodata?.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                    No Image
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-4 flex flex-col justify-between">

                            <div>
                                <h3 className="font-bold text-lg text-gray-800">
                                    {fav.biodata?.name || "No Name"}
                                </h3>

                                <p className="text-sm text-gray-600">
                                    💼 {fav.biodata?.profession || "N/A"}
                                </p>

                                <p className="text-sm text-gray-600">
                                    📍 {fav.biodata?.district || "Unknown"}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-2 mt-3">

                                <button
                                    onClick={() => navigate(`/biodata/${fav.biodataId}`)}
                                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                                >
                                    View
                                </button>

                                <button
                                    onClick={() => handleRemove(fav.biodataId)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                                >
                                    Remove
                                </button>

                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default Favorites;