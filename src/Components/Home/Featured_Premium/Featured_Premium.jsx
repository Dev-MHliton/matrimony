import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom";

const Featured_Premium = () => {
    const navigate = useNavigate();
    const [biodatas, setBiodatas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/biodata/featured")
            .then(res => res.json())
            .then(data => setBiodatas(data))
            .catch(err => console.error(err));
    }, []);

    const specialProfessions = ["doctor", "professor", "engineer", "actor", "sportsman"];

    return (
        <section className="pt-8 px-4 md:px-8 lg:px-16">
            <SectionTitle
                heading={
                    <>
                        <span className="font-semibold text-white">Featured</span> Premium Members
                    </>
                }
                className="text-center text-4xl"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {biodatas.map((item) => {
                    const isPremium = item.profession
                        ? specialProfessions.some(prof =>
                            item.profession.trim().toLowerCase().includes(prof.toLowerCase())
                        )
                        : false;

                    return (
                        <div
                            key={item._id}
                            className="bg-white rounded-lg shadow-md p-4 w-full max-w-xs flex flex-col hover:shadow-xl transition relative"
                        >
                            <div className="w-full overflow-hidden rounded-md mb-4 shrink-0">
                                {item.profileImage ? (
                                    <img
                                        src={item.profileImage}
                                        alt={item.name}
                                        className="w-full h-48 object-cover object-[center_25%] rounded-md"
                                    />
                                ) : (
                                    <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-500 rounded-md">
                                        Photo
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {item.name || "No Name"}
                                </h2>
                                <p className="text-sm text-gray-600">
                                    {item.profession || "N/A"}
                                </p>
                            </div>

                            {isPremium && (
                                <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded z-10">
                                    Premium
                                </span>
                            )}

                            <p className="text-xs text-gray-500 mb-2">
                                {item.aboutMe
                                    ? item.aboutMe.slice(0, 60) + "..."
                                    : "No description"}
                            </p>

                            <div className="flex items-center justify-between">
                                <p className="text-xs text-gray-500 mb-2">
                                    📍 {item.district || "Unknown"}, {item.country || ""}
                                </p>

                                <div className="text-yellow-500">★★★★★</div>
                            </div>

                            <button
                                onClick={() => navigate(`/biodata/${item._id.toString()}`)}
                                className="mt-auto w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 z-10 relative"
                            >
                                View Profile
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Featured_Premium;