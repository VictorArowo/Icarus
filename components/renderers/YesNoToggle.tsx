import React, { Dispatch, SetStateAction, useContext } from "react";
import { Element } from "../../utils/form";
import { SelectedContext } from "../../context/SelectedContext";
import classNames from "../../utils/classNames";
import Toggle from "../Toggle";

interface Props {
  elem: Element;
  index: number;
}

const YesNoToggle: React.FC<Props> = ({ elem, index }) => {
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
          <div className="flex items-center py-2 border-primary-text">
            <div>{elem.choices![0]}</div>
            <div className="mx-3">
              <Toggle disabled />
            </div>
            <div>{elem.choices![1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YesNoToggle;
