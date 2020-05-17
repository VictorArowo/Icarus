import React, { Dispatch, SetStateAction, useContext } from "react";
import { Element } from "../../utils/form";
import { SelectedContext } from "../../context/SelectedContext";
import classNames from "../../utils/classNames";
import Dropdown from "../Dropdown";

interface Props {
  elem: Element;
  index: number;
}

const DropdownRenderer: React.FC<Props> = ({ elem, index }) => {
  const context = useContext(SelectedContext);
  const { changeSelected, selected } = context;
  const handleSelection = () => {
    changeSelected(elem.id);
  };
  return (
    <div
      className="w-full border-b text-primary-text border-sec-background"
      onClick={handleSelection}
      data-id={elem.id}
    >
      <div
        className={classNames(
          "flex p-5 pb-10 ",
          selected === elem.id ? "border-l-4 border-primary" : ""
        )}
      >
        <div className="font-bold whitespace-no-wrap">Q {index + 1}</div>
        <div className="w-full ml-4">
          <div>{elem.title}</div>
          <div className="mt-3 text-sm opacity-75">{elem.supporting}</div>
          <div className="py-2 border-primary-text">
            <div className="relative inline-block text-left">
              <div>
                <span className="rounded-md shadow-sm">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md pointer-events-none focus:outline-none"
                  >
                    Pick an option
                    <svg
                      className="w-5 h-5 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownRenderer;
