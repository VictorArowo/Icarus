import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import classNames from "../../utils/classNames";
import MoonIcon from "../../icons/MoonIcon";
import SunIcon from "../../icons/SunIcon";

const DarkModeToggle = () => {
  const context = useContext(ThemeContext);
  const { theme, changeTheme } = context;

  const enabled = theme === "dark";

  return (
    <div className="flex items-center justify-between w-28 h-10 mb-5 ml-5">
      <div
        className={classNames(
          "w-5 h-5 ",
          enabled ? "text-gray-500" : "text-primary-text"
        )}
      >
        <SunIcon />
      </div>
      <div onClick={changeTheme} className="flex items-center">
        <span
          role="checkbox"
          tabIndex={0}
          aria-checked="false"
          className="group relative inline-flex items-center justify-center flex-shrink-0 h-5 w-10 cursor-pointer focus:outline-none"
        >
          <span
            aria-hidden="true"
            className={classNames(
              "bg-gray-200 absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200",
              enabled ? "bg-primary" : "bg-gray-200"
            )}
          ></span>
          <span
            aria-hidden="true"
            className={classNames(
              "translate-x-0 absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform group-focus:shadow-outline group-focus:border-blue-300 transition-transform ease-in-out duration-200",
              enabled ? "translate-x-5" : "translate-x-0"
            )}
          ></span>
        </span>
      </div>
      <div
        className={classNames(
          "w-5 h-5 ",
          enabled ? "text-primary-text" : "text-gray-300"
        )}
      >
        <MoonIcon />
      </div>
    </div>
  );
};

export default DarkModeToggle;
