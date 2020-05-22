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
      className="w-full border-b text-primary-text border-sec-background"
      onClick={handleSelection}
      data-id={elem.id}
    >
      <div
        className={classNames(
          "flex p-5 pb-10 ",
          selected === elem.id
            ? "border-l-4 border-primary"
            : "border-l-4 border-transparent"
        )}
      >
        <div className="font-bold whitespace-no-wrap">Q {index + 1}</div>
        <div className="w-full ml-4">
          <div>{elem.title}</div>
          <div className="mt-3 text-sm opacity-75">{elem.supporting}</div>
          <div className="items-center py-2">
            <textarea
              className="w-full pt-4 mr-3 leading-tight bg-transparent form-textarea text-primary-text active:outline-none"
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
