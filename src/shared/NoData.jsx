// NoData.jsx
import noDataVideo from "../assets/Nodata-logo/Warning.mp4";

const NoData = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full min-height:[300px] text-center px-4 py-10">
            {/* Video Illustration */}
            <video
                src={noDataVideo}
                autoPlay
                loop
                muted
                className="w-32 md:w-32 mb-8 rounded-lg opacity-90"
            >
                Your browser does not support the video tag.
            </video>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-amber-700 mb-2">
                No Data Found!
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md">
                We couldn’t find any matching profiles. Try adjusting your preferences or search again.
            </p>
        </div>
    );
};
export default NoData;