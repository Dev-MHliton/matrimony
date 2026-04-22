import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import { storage } from "../../../../../firebase/Firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";

const Profile = () => {
    const { user, setUser } = useContext(AuthContext);

    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    // Load profile data
    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:5000/api/user?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setBio(data));
    }, [user]);

    // image upload
    const handleImageUpload = (file) => {
        if (!file) return;

        setLoading(true);

        const storageRef = ref(
            storage,
            `profileImages/${user.uid}_${Date.now()}`
        );

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                setProgress(
                    Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    )
                );
            },
            () => {
                setLoading(false);
            },
            async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref);

                await updateProfile(user, { photoURL: url });

                setUser({ ...user, photoURL: url });

                setLoading(false);
                setProgress(0);
            }
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-3 sm:px-4 md:px-6 py-6 sm:py-10 flex justify-center">

            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 sm:p-6">

                {/* Main section */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

                    {/* PROFILE IMAGE */}
                    <div className="relative text-center w-full md:w-auto">

                        <img
                            src={
                                user?.photoURL ||
                                "https://i.ibb.co/4pDNDk1/avatar.png"
                            }
                            alt="Profile"
                            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-blue-500 mx-auto"
                        />

                        <input
                            type="file"
                            hidden
                            id="img"
                            onChange={(e) =>
                                handleImageUpload(e.target.files[0])
                            }
                        />

                        <button
                            onClick={() =>
                                document.getElementById("img").click()
                            }
                            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition w-full sm:w-auto"
                        >
                            {loading
                                ? `Uploading ${progress}%`
                                : "Change Photo"}
                        </button>

                        {loading && (
                            <div className="w-28 sm:w-32 h-2 bg-gray-300 rounded-full mt-2 mx-auto">
                                <div
                                    className="h-2 bg-blue-500 rounded-full"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        )}
                    </div>

                    {/* USER INFO */}
                    <div className="text-center md:text-left flex-1 break-words">

                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                            {bio?.name || "No Name"}
                        </h2>

                        <p className="text-gray-500 text-sm sm:text-base break-all">
                            {user?.email}
                        </p>

                        <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                            Premium Member
                        </span>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="my-6 border-t border-gray-200 dark:border-gray-700"></div>

                {/* Profile details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <Info label="Phone" value={bio?.phone} />
                    <Info label="Age" value={bio?.age} />
                    <Info label="Gender" value={bio?.gender} />
                    <Info label="Religion" value={bio?.religion} />
                    <Info label="Country" value={bio?.country} />
                    <Info label="District" value={bio?.district} />

                </div>

                {/* ABOUT SECTION */}
                <div className="mt-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">

                    <h3 className="text-sm text-gray-500 mb-1">
                        About Me
                    </h3>

                    <p className="text-gray-800 dark:text-white text-sm sm:text-base break-words">
                        {bio?.about || "No description available"}
                    </p>

                </div>

            </div>
        </div>
    );
};

// Small reusable card
const Info = ({ label, value }) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-sm">

            <p className="text-gray-500 text-sm">
                {label}
            </p>

            <p className="font-semibold text-gray-800 dark:text-white break-words text-sm sm:text-base">
                {value || "N/A"}
            </p>

        </div>
    );
};

export default Profile;