import { Link } from "react-router-dom";
import error from '../../../assets/Error/404.mp4'

const Error = () => {
    return (
        <section className="h-screen w-full overflow-hidden">
            <title>
                404 - Page no found Matrimony
            </title>

            <video
                autoPlay
                loop
                muted
                className="h-full w-full object-cover"
            >
                <source src={error} type="video/mp4" />
            </video>

            {/* <Link
                to="/"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300 shadow-lg"
            >
                Go Back
            </Link> */}
        </section>
    );
};

export default Error;