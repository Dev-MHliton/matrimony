import SectionTitle from "../SectionTitle/SectionTitle";

const Why_it_Works = () => {
    return (
        <section className="">

            <SectionTitle
                heading={"Why It Works"}
            ></SectionTitle>

            <div className="justify-around gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                <div className="relative bg-amber-200 rounded-lg shadow-md p-6 w-full max-w-sm mx-auto 
                   [clip-path:polygon(0_0,calc(100%-50px)_0,100%_50%,calc(100%-50px)_100%,0_100%)]">
                    
                    {/* Step Number */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
                            1
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">Create Account</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mt-2 text-sm">
                        Sign up to get started.
                    </p>
                </div>

                <div className="relative bg-amber-200 rounded-lg shadow-md p-6 w-full max-w-md mx-auto 
                   [clip-path:polygon(0_0,calc(100%-50px)_0,100%_50%,calc(100%-50px)_100%,0_100%)]">
                    {/* Step Number */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
                            2
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">Complete Profile</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mt-2 text-sm">
                        Add your personal details to build your profile.
                    </p>
                </div>

                <div className="relative bg-amber-200 rounded-lg shadow-md p-6 w-full max-w-md mx-auto 
                   [clip-path:polygon(0_0,calc(100%-50px)_0,100%_50%,calc(100%-50px)_100%,0_100%)]">
                    {/* Step Number */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
                            3
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">Get Verified</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mt-2 text-sm">
                        Verify your identity.
                    </p>
                </div>

                <div className="relative bg-amber-200 rounded-lg shadow-md p-6 w-full max-w-md mx-auto 
                   [clip-path:polygon(0_0,calc(100%)_0,100%_50%,calc(100%)_100%,0_100%)]">
                    {/* Step Number */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
                            4
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">Start Connecting</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mt-2 text-sm">
                        Connect with your matches.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Why_it_Works;