import React, { Dispatch, SetStateAction, useContext } from "react";
import DatePicker from "react-datepicker";
import { Element } from "../../utils/form";
import { SelectedContext } from "../../context/SelectedContext";
import classNames from "../../utils/classNames";

interface Props {
  elem: Element;
  index: number;
}

const TimeInput: React.FC<Props> = ({ elem, index }) => {
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
          <div className="items-center py-2 ">
            <DatePicker
              onChange={() => {}}
              disabled
              selected={new Date()}
              showTimeSelect
              showTimeSelectOnly
              dateFormat="h:mm aa"
              className="bg-transparent form-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeInput;
