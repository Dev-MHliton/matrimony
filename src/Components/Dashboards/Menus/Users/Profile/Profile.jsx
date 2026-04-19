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

    // =========================
    // LOAD PROFILE DATA
    // =========================
    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:5000/api/user?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBio(data));
    }, [user]);

    // =========================
    // IMAGE UPLOAD
    // =========================
    const handleImageUpload = (file) => {
        if (!file) return;

        setLoading(true);

        const storageRef = ref(storage, `profileImages/${user.uid}_${Date.now()}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                setProgress(
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
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
        <div className="min-h-screen p-6 bg-gray-100">

            {/* PROFILE IMAGE */}
            <div className="text-center">
                <img
                    src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                    className="w-32 h-32 rounded-full mx-auto"
                />

                <input
                    type="file"
                    hidden
                    id="img"
                    onChange={(e) => handleImageUpload(e.target.files[0])}
                />

                <button onClick={() => document.getElementById("img").click()}>
                    Change Image
                </button>

                {loading && <p>{progress}%</p>}
            </div>

            {/* PROFILE DATA */}
            <div className="mt-6 bg-white p-4 rounded">

                <p>Email: {user?.email}</p>

                <p>Name: {bio?.name}</p>
                <p>Phone: {bio?.phone}</p>
                <p>Age: {bio?.age}</p>
                <p>Gender: {bio?.gender}</p>
                <p>Religion: {bio?.religion}</p>
                <p>District: {bio?.district}</p>
                <p>About: {bio?.about}</p>

            </div>

        </div>
    );
};

export default Profile;