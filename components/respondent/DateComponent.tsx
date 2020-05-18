import { useState, useEffect, SyntheticEvent } from "react";
import Transition from "../Transition";
import ReactDatePicker from "react-datepicker";

interface Props {
  values: Record<string, string>;
  setValues: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  elementId: string;
}

const DateComponent: React.FC<Props> = ({ values, setValues, elementId }) => {
  const handleChange = (
    date: Date | null,
    event: SyntheticEvent<any, Event> | undefined
  ) => {
    if (date)
      setValues({
        ...values,
        [elementId]: date.toISOString().substring(0, 10),
      });
  };

  return (
    <div>
      <ReactDatePicker
        className="form-input"
        selected={new Date(values[elementId])}
        onChange={handleChange}
      />
    </div>
  );
};

export default DateComponent;
