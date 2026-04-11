import loadingGif from "../assets/Loading-logo/transparent_fixed.gif";

const Loading = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">

            {/* GIF Loader */}
            <div className="w-64 h-64 md:w-40 md:h-40 flex items-center justify-center">
                <img
                    src={loadingGif}
                    alt="Loading..."
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Text */}
            <p className="text-gray-700 dark:text-gray-200 font-semibold text-lg animate-pulse">
                Please wait...
            </p>

        </div>
    );
};

export default Loading;