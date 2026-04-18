import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../../Home/SectionTitle/SectionTitle";
import Loading from "../../../../../shared/Loading";
import NoData from "../../../../../shared/NoData";

const SearchBiodata = () => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        fetchAllBiodata();

        fetch("http://localhost:5000/api/favorites?email=test@gmail.com")
            .then(res => res.json())
            .then(data => {
                const ids = data.map(item => item.biodataId);
                setFavorites(ids);
            })
            .catch(err => console.error(err));

    }, []);

    const [biodatas, setBiodatas] = useState([]);
    const [filters, setFilters] = useState({
        age: "",
        profession: "",
        district: "",
        gender: "",
        religion: "",
    });
    const [loading, setLoading] = useState(false);

    // Load all biodata on mount
    useEffect(() => {
        fetchAllBiodata();
    }, []);

    const fetchAllBiodata = () => {
        setLoading(true);
        fetch("http://localhost:5000/api/biodata")
            .then((res) => res.json())
            .then((data) => setBiodatas(data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    };

    // Search function
    const handleSearch = () => {
        setLoading(true);
        const query = new URLSearchParams(filters).toString();
        fetch(`http://localhost:5000/api/biodata/search?${query}`)
            .then((res) => res.json())
            .then((data) => setBiodatas(data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    };

    // Reset filter.......................................................!
    const handleReset = () => {
        setFilters({ age: "", profession: "", district: "", gender: "", religion: "" });
        fetchAllBiodata();
    };


    const handleFavorite = (id) => {
        const isFav = favorites.includes(id);

        if (isFav) {
            // REMOVE FAVORITE
            fetch("http://localhost:5000/api/favorites", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    biodataId: id,
                    email: "test@gmail.com",
                }),
            })
                .then(() => {
                    setFavorites(prev => prev.filter(item => item !== id));
                })
                .catch(err => console.error(err));

        } else {
            // ADD FAVORITE
            fetch("http://localhost:5000/api/favorites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    biodataId: id,
                    email: "test@gmail.com",
                }),
            })
                .then(res => res.json())
                .then(() => {
                    setFavorites(prev => [...prev, id]);
                })
                .catch(err => console.error(err));
        }
    };
    return (
        <section className="px-6 pb-4 md:px-12 relative">

            {/* Section title */}
            <SectionTitle heading={"Search Biodata"} />

            {/* Filter Box */}
            <div className="bg-gray-400 text-gray-800 border border-gray-200 shadow-md rounded-lg p-6 mb-6 pr-12 grid grid-cols-1 md:grid-cols-6 gap-4 items-end">

                {/* Age */}
                <input
                    type="number"
                    placeholder="Age"
                    value={filters.age}
                    onChange={(e) => setFilters({ ...filters, age: e.target.value })}
                    className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* Profession */}
                <input
                    type="text"
                    placeholder="Profession"
                    value={filters.profession}
                    onChange={(e) => setFilters({ ...filters, profession: e.target.value })}
                    className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* District */}
                <input
                    type="text"
                    placeholder="District"
                    value={filters.district}
                    onChange={(e) => setFilters({ ...filters, district: e.target.value })}
                    className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* Gender */}
                <select
                    value={filters.gender}
                    onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
                    className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                {/* Religion */}
                <select
                    value={filters.religion}
                    onChange={(e) => setFilters({ ...filters, religion: e.target.value })}
                    className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option value="">Religion</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Christian">Christian</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Other">Other</option>
                </select>

                {/* Buttons */}
                <div className="flex gap-2 col-span-1 md:col-span-1">
                    <button
                        onClick={handleSearch}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                    >
                        Search
                    </button>
                    <button
                        onClick={handleReset}
                        className="bg-gray-700 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition"
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/*Loading */}
            {loading && <Loading />}

            {/* Card Start Now here---------------------------------------------------------------------------------------! */}

            {/* Result Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                {!loading && biodatas.length === 0 && (
                    <div className="col-span-full flex flex-col items-center justify-center">
                        <NoData />
                    </div>
                )}

                {biodatas.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition flex overflow-hidden"
                    >

                        {/* Image */}
                        <div className="w-1/3">
                            {item.profileImage ? (
                                <img
                                    src={item.profileImage}
                                    alt={item.name}
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
                                    {item.name || "No Name"}
                                </h3>

                                <p className="text-sm text-gray-600">
                                    💼 {item.profession || "N/A"}
                                </p>

                                <p className="text-sm text-gray-600">
                                    📍 {item.district || "Unknown"}, {item.country || ""}
                                </p>

                                <p className="text-xs text-gray-500 mt-2">
                                    {item.aboutMe ? item.aboutMe.slice(0, 60) + "..." : "No description"}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-2 mt-3">

                                <button
                                    onClick={() => navigate(`/biodata/${item._id}`)}
                                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                                >
                                    View
                                </button>

                                <button
                                    onClick={() => handleFavorite(item._id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                                >
                                    {favorites.includes(item._id) ? "❤️ Remove" : "🤍 Favorite"}
                                </button>

                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default SearchBiodata;