// Background 
import { Link } from 'react-router-dom'
import BgBanner from '../../../assets/BG/BG-Banner.png'

// Image 
import main_matrimony_banner from '../../../assets/Banner/main-matrimony-banner.png'


const Banner = () => {
    return (
        <section className="relative flex flex-col md:flex-row justify-between items-center md:items-start pt-12 px-4 md:px-20 overflow-hidden">

            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${BgBanner})` }}
            ></div>

            <div className="absolute inset-0 bg-linear-to-r from-white/70 via-white/50 to-transparent"></div>

            <div className="relative z-10 pt-20 max-w-xl text-center md:text-left">
                <h3 className='font-[Playfair_Display] text-3xl sm:text-4xl md:text-4xl font-bold leading-tight text-amber-950'>
                    Find Your Perfect Match for a <br />
                    <span className="bg-linear-to-r from-yellow-500 via-orange-500 to-green-600 bg-clip-text text-transparent">
                        Halal & Happy Marriage
                    </span>
                </h3>

                <p className="mt-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                    Join the leading matrimony platform for Muslims. Connect with
                    genuine, verified profiles worldwide. and start your beautiful
                    journey today.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 pt-3 justify-center md:justify-start">
                    <Link to={"/extra"} className="btn btn-outline btn-secondary w-full sm:w-auto">
                        Create Free Profile
                    </Link>
                    <button className="btn btn-outline btn-secondary w-full sm:w-auto">
                        Browse Profile
                    </button>
                </div>
            </div>

            <div className="relative z-10 mt-6 md:mt-0 md:self-end">
                <img
                    src={main_matrimony_banner}
                    alt="Muslim Couple"
                    className='w-full max-w-xs sm:max-w-md md:max-w-full h-auto object-cover mx-auto md:mx-0'
                />
            </div>

        </section>
    )
}

export default Banner