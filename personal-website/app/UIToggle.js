import { LuMoon, LuSun } from "react-icons/lu"; 

export default function UIToggle({ isDarkMode, setIsDarkMode }) {
    const bg = isDarkMode ? "bg-zinc-700" : "bg-zinc-200";
    const border = isDarkMode ? "border-zinc-600" : "border-zinc-300";
    const shadow = isDarkMode ? "shadow-zinc-900" : "shadow-zinc-200";
    return (
        <div className={`p-2 rounded-xl flex border ${bg} ${border} shadow-lg ${shadow}`}>
            <button
                className={`bg-transparent p-3 rounded-lg transition
                    ${isDarkMode ? "hover:bg-zinc-600" : "hover:bg-zinc-300"}
                    ${!isDarkMode ? "text-yellow-500" : "text-zinc-300"}
                `}
                onClick={() => setIsDarkMode(false)}
                aria-label="Light mode"
            >
                <LuSun />
            </button>
            <button
                className={`bg-transparent p-3 rounded-lg transition
    ${isDarkMode ? "hover:bg-zinc-600" : "hover:bg-zinc-300"}
    ${isDarkMode ? "text-blue-400" : "text-zinc-300"}
  `}
                onClick={() => setIsDarkMode(true)}
                aria-label="Dark mode"
            >
                <LuMoon />
            </button>
        </div>
    );
}