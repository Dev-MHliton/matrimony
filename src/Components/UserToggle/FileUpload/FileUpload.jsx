const FileUpload = ({ file, setFile }) => {
    const handleChange = (e) => {
        if (e.target.files.length > 0) setFile(e.target.files[0]);
    };

    return (
        <div>
            <label className="block mb-2 font-medium">Profile Picture</label>
            <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="w-full text-gray-700 dark:text-gray-200"
            />
            {file && (
                <img
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                    className="mt-2 w-32 h-32 object-cover rounded-full border border-gray-300"
                />
            )}
        </div>
    );
};

export default FileUpload;