import { Link } from "react-router-dom";
import error from '../../../assets/Error/404.mp4'

const Error = () => {
    return (
        <section>
            <title>
                404 - Page no found Matrimony
            </title>

            <video autoPlay loop muted className="h-full">
                <source src={error} type="video/mp4" />
            </video>


            {/* <Link
                to="/"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300 shadow-lg"
            >
                Back to Home
            </Link> */}
        </section>
    );
};

export default Error;