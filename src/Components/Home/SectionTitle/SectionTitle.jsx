const SectionTitle = ({ heading, subHeading, className }) => {
    return (
        <div className="text-center my-8 px-4">

            {/* Optional Subheading */}
            {subHeading && (
                <p className="text-sm tracking-widest uppercase text-green-600 font-semibold mb-3 animate-pulse">
                    {subHeading}
                </p>
            )}

            {/* Divider with gradient heading in the middle */}
            <div className="flex items-center justify-center w-full">
                {/* Left line */}
                <div className="grow border-t border-gray-300 opacity-50 animate-pulse"></div>

                {/* Heading */}
                <h2
                    className={`mx-4 text-xl
                    bg-linear-to-r from-yellow-400 via-orange-400 to-green-400
                    bg-clip-text text-transparent inline-block
                    transform transition-transform duration-500 hover:scale-105
                    ${className}`}
                >
                    {heading}
                </h2>

                {/* Right line */}
                <div className="grow border-t border-gray-300 opacity-50 animate-pulse"></div>
            </div>

        </div>
    );
};

export default SectionTitle;