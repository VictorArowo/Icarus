import React, { Dispatch, SetStateAction, useContext } from "react";
import uuid from "react-uuid";
import { Element } from "../../utils/form";
import { FormContext } from "../../context/FormContext";
import Button from "../Button";

interface Props {
  elem: Element;
}

const InputSpecificConfig: React.FC<Props> = ({ elem }) => {
  const context = useContext(FormContext);

  const { form, changeForm: setForm } = context;

  const handleChange = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const elementId = elem.id;

    setForm({
      "1": form["1"].map((e, idx) =>
        e.id === elementId
          ? {
              ...e,
              options: form["1"][idx].options!.map((opt) =>
                opt.id === id ? { id, name: event.target.value } : opt
              ),
            }
          : e
      ),
    });
  };

  const handleOptionAddition = () => {
    const elementId = elem.id;

    setForm({
      "1": form["1"].map((e, idx) =>
        e.id === elementId
          ? {
              ...e,
              options: [
                ...form["1"][idx].options!,
                { name: "New Input", id: uuid() },
              ],
            }
          : e
      ),
    });
  };

  return (
    <div className="py-5 pl-3 mb-1 font-bold border-b text-primary-text border-sec-background">
      <div className="mb-3 text-sm uppercase">Options</div>
      {form["1"]
        .find((b) => b.id === elem.id)!
        .options?.map((option) => (
          <div key={option.id}>
            <input
              type="text"
              value={option.name}
              onChange={(e) => handleChange(option.id, e)}
              className="mb-2 bg-transparent border border-gray-400 form-input"
            />
          </div>
        ))}
      <Button type="primary" onClick={handleOptionAddition} className="mt-3">
        Add option
      </Button>
    </div>
  );
};
export default InputSpecificConfig;
