import { Link } from "react-router-dom";

// Banner import for landing
import Welcome_Banner from "../../assets/Banner/Welcome-Banner.png";

// logo import for landing 
import image_logo from "../../assets/logo/Interlocked hands forming a heart.png"
import { useState } from "react";
import Marquee from "react-fast-marquee";

const Landing = () => {

    const [age, setAge] = useState(18);

    return (
        <section

            style={{
                backgroundImage: `url(${Welcome_Banner})`,
                backgroundSize: "cover",
                backgroundPosition: "10% 15%",
                minHeight: "100vh",
            }}
            className="relative flex items-center justify-start px-6 md:px-12 lg:px-20"
        >

            {/* title means browser heading replace helmet because react 19 not using helmet using "Just title"  */}
            <title>Matrimony - Our Matrimony </title>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Marquee - Top Right */}
            <div className="absolute top-8 right-5 z-20 bg-teal-600 text-white px-8 py-2 rounded-xl w-1/3">
                <Marquee pauseOnHover={true} speed={50}>
                    <span className="mr-12">✔ Verified Profiles</span>
                    <span className="mr-12">✔ Privacy Protected</span>
                    <span className="mr-12">✔ Thousands of Success Stories</span>
                    <span className="mr-12">✔ Trusted Matrimony Platform</span>
                </Marquee>
            </div>

            {/* Content Card - Left Center */}
            <div className="relative z-10 bg-white rounded-xl shadow-xl w-full max-w-md p-6 text-center">
                <div className="flex flex-col gap-4">

                    {/* Logo */}
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <img className="h-16" src={image_logo} alt="image_logo" />
                        <h1 className="text-cyan-950 uppercase text-xl font-semibold">Matrimony</h1>
                    </div>

                    {/* Headline */}
                    <h2 className="text-black text-2xl font-medium">
                        Connecting Hearts, Creating Futures
                    </h2>

                    <p className="text-sm text-gray-500">
                        Trusted Site Used By Million Worldwide
                    </p>

                    {/* Gender Selection */}
                    <div className="flex justify-center gap-4 mt-2">
                        <button className="btn btn-primary btn-circle btn-sm">♂</button>
                        <button className="btn btn-primary btn-circle btn-sm">♀</button>
                    </div>

                    {/* Age Selector */}
                    <div className="mt-2">
                        <label className="text-gray-700 mr-2">How old are you?</label>
                        <select
                            value={age}
                            onChange={(e) => setAge(Number(e.target.value))}
                            className="select select-bordered select-sm">
                            {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                                <option key={age} value={age}>{age}</option>
                            ))}
                        </select>
                    </div>

                    {/* View Singles Button */}
                    <Link to={age >= 22 ? "/home" : "#"}>
                        <button
                            disabled={age < 22}
                            className={`mt-3 w-full text-white transition btn 
                            ${age < 22 ? "bg-gray-400 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700"}`}
                        >
                            Welcome Now
                        </button></Link>

                    {age < 22 && (
                        <p className="text-red-500 text-xs">
                            You must be at least 22 years old to continue
                        </p>
                    )}


                </div>
            </div>
        </section>
    );
};

export default Landing;
