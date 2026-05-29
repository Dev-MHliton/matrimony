// Background import for safety and privacy 
import Bg_data_encryption from "../../../assets/BG/Bg-data-encryption.jpg";
import Bg_safe_secure from "../../../assets/BG/Bg-safe-secure.jpg";

// Image import for safety and privacy
import Couple_data_encryption from "../../../assets/Safety_&_privacy/couple-data-encryption.png"
import Couple_safe_secure from "../../../assets/Safety_&_privacy/Couple-Safe and secure.png"

// Section title 
import SectionTitle from "../SectionTitle/SectionTitle";

const Safety_and_Privacy = () => {
    return (
        <section>
            {/* Section Heading  */}
            <SectionTitle
                heading={"Safety & Privacy"}
            ></SectionTitle>

            {/* Main content start  */}
            <div className="relative gap-2 grid sm:grid-cols-1 md:grid-cols-1 lg:flex">
                {/* Content number Data Encryption .................................... */}
                <div className="relative w-full flex items-center justify-between bg-linear-to-br from-green-900 via-green-700 to-green-300 rounded-lg shadow-lg overflow-hidden">

                    {/* Optional background image behind gradient */}
                    <img
                        src={Bg_data_encryption}
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />

                    {/* Text Content */}
                    <div className="relative z-10 text-center">
                        <h2 className="text-white text-4xl font-bold flex items-center justify-center gap-2">
                            <span role="img" aria-label="shield">🛡️</span> Data Encryption
                        </h2>
                        <p className="text-gray-200 mt-4 text-lg">
                            Your information is secure
                        </p>
                    </div>

                    <img src={Couple_data_encryption} alt="" className="h-40 w-40 object-cover rounded-full" />
                </div>

                {/* Divider  */}
                <div className="divider divider-horizontal"></div>

                {/* Content number Safe and Secure .................................... */}
                <div
                    className="relative w-full flex items-center justify-between rounded-lg shadow-lg overflow-hidden bg-linear-to-br from-[#000E24] to-[#000E24]"
                >
                    {/* Optional background image behind gradient */}
                    <img
                        src={Bg_safe_secure}
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />

                    {/* Text Content */}
                    <div className="relative z-10 text-center">
                        <h2 className="text-white text-4xl font-bold flex items-center justify-center gap-2">
                            <span role="img" aria-label="shield">🛡️</span> Safe and Secure
                        </h2>
                        <p className="text-gray-200 mt-4 text-lg">
                            Trusted and Confidential
                        </p>
                    </div>

                    <img src={Couple_safe_secure} alt="" className="h-40 w-40 object-cover rounded-full" />
                </div>
            </div>
        </section >


    );
}
export default Safety_and_Privacy;