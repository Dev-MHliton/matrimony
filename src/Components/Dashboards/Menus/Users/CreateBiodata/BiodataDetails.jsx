import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../../../../shared/Loading";

const BiodataDetails = () => {
    const { id } = useParams();
    const [biodata, setBiodata] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/biodata/${id}`)
            .then(res => res.json())
            .then(data => setBiodata(data))
            .catch(err => console.error(err));
    }, [id]);

    if (!biodata) return <Loading />;

    return (
        <div className="max-w-5xl mx-auto p-6 my-6 bg-white shadow-lg rounded-lg">
            {/* Header */}
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6 border-b pb-3">
                {biodata.name}
            </h1>

            {/* Profile Section */}
            <div className="flex flex-col md:flex-row gap-12">
                <img
                    src={biodata.profileImage}
                    alt={biodata.name}
                    className="w-full md:w-1/3 h-80 object-cover rounded-lg shadow-md"
                />

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 text-gray-700">
                    <p><span className="font-semibold">Profession:</span> {biodata.profession}</p>
                    <p><span className="font-semibold">Age:</span> {biodata.age}</p>
                    <p><span className="font-semibold">Marital Status:</span> {biodata.maritalStatus}</p>
                    <p><span className="font-semibold">Religion:</span> {biodata.religion}</p>
                    <p><span className="font-semibold">Location:</span> {biodata.district}, {biodata.country}</p>
                    <p><span className="font-semibold">Family Status:</span> {biodata.familyStatus}</p>
                    <p><span className="font-semibold">Education:</span> {biodata.highestEducation}</p>
                </div>

            </div>

            {/* About Section */}
            <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">About</h2>
                    <p className="bg-gray-50 p-1 rounded-md shadow-sm">{biodata.aboutMe}</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Expected Partner</h2>
                    <p className="bg-gray-50 p-1 rounded-md shadow-sm">{biodata.partnerPreferences}</p>
                </div>
            </div>
        </div>
    );
};

export default BiodataDetails;
