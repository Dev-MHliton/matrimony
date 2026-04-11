import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(() =>
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    useEffect(() => {
        if (darkMode) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
        >
            {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    );
};

export default ThemeToggle;