import React, { Dispatch, SetStateAction, useContext } from "react";
import { Element } from "../../utils/form";
import { SelectedContext } from "../../context/SelectedContext";
import classNames from "../../utils/classNames";

interface Props {
  elem: Element;
  index: number;
}

const MultipleChoice: React.FC<Props> = ({ elem, index }) => {
  const context = useContext(SelectedContext);
  const { changeSelected, selected } = context;
  const handleSelection = () => {
    changeSelected(elem.id);
  };
  return (
    <div
      className="w-full text-primary-text border-b border-sec-background"
      onClick={handleSelection}
      data-id={elem.id}
    >
      <div
        className={classNames(
          "flex p-5 pb-10 ",
          selected === elem.id ? "border-l-4 border-primary" : ""
        )}
      >
        <div className="whitespace-no-wrap font-bold">Q {index + 1}</div>
        <div className="ml-4 w-full">
          <div>{elem.title}</div>
          <div className="text-sm opacity-75 mt-3">{elem.supporting}</div>
          <div>
            <label htmlFor="">
              Option 1
              <input type="radio" name="option1" id="" />
            </label>
            <label htmlFor="">
              Option 2
              <input type="radio" name="option2" id="" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleChoice;
