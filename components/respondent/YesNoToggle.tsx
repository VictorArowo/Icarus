import React, { useState, useEffect } from "react";
import classNames from "../../utils/classNames";

interface Props {
  choices: string[];
  values: Record<string, string>;
  setValues: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  elementId: string;
}

const YesNoToggle: React.FC<Props> = ({
  values,
  setValues,
  elementId,
  choices,
}) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    setValues({ ...values, [elementId]: choices[0] });
  }, []);

  useEffect(() => {
    setValues({ ...values, [elementId]: checked ? choices[1] : choices[0] });
  }, [checked]);

  return (
    <div className="flex items-center mt-1 text-gray-200">
      <div>{choices[0]}</div>
      <span
        role="checkbox"
        tabIndex={0}
        onClick={handleClick}
        aria-checked={checked}
        className={classNames(
          "relative flex-shrink-0 mx-2 inline-block h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full w-11 focus:outline-none focus:shadow-outline",
          checked ? "bg-primary" : "bg-sec-background"
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
      <div>{choices[1]}</div>
    </div>
  );
};

export default YesNoToggle;
