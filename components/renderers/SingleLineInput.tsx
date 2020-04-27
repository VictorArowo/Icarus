import React, { Dispatch, SetStateAction, useContext } from "react";
import { Element } from "../../utils/form";
import { SelectedContext } from "../../context/SelectedContext";
import classNames from "../../utils/classNames";

interface Props {
  elem: Element;
  index: number;
}

const SingleLineInput: React.FC<Props> = ({ elem, index }) => {
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
          <div className="items-center border-b border-b-2 border-primary-text py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-primary-text mr-3 py-1 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter your answer"
              aria-label="Single Line Text"
              value=""
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLineInput;
