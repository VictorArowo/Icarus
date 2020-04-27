import React, { Dispatch, SetStateAction, useContext } from "react";
import { Element } from "../../utils/form";
import { SelectedContext } from "../../context/SelectedContext";
import classNames from "../../utils/classNames";

interface Props {
  elem: Element;
  index: number;
}

const MultiLineInput: React.FC<Props> = ({ elem, index }) => {
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
          <div className="items-center  py-2">
            <textarea
              className="form-textarea bg-transparent w-full text-primary-text mr-3 pt-4 leading-tight active:outline-none"
              placeholder="Enter your answer"
              aria-label="Multi Line Text"
              rows={5}
              value=""
              disabled
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiLineInput;
