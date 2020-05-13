import { useState } from "react";
import classNames from "../utils/classNames";

interface Props {
  disabled?: boolean;
}

const Toggle: React.FC<Props> = ({ disabled = false }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    !disabled && setChecked(!checked);
  };

  return (
    <span
      role="checkbox"
      tabIndex={0}
      onClick={handleClick}
      aria-checked="false"
      className={classNames(
        "relative flex-shrink-0 inline-block h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full w-11 focus:outline-none focus:shadow-outline",
        checked ? "bg-primary" : "bg-sec-background",
        !disabled ? "cursor-pointer" : ""
      )}
    >
      <span
        aria-hidden="true"
        className={classNames(
          "inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow",
          checked ? "translate-x-5" : "translate-x-0"
        )}
      ></span>
    </span>
  );
};

export default Toggle;
