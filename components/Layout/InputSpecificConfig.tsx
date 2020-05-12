import React, { Dispatch, SetStateAction, useContext } from "react";
import { v4 as uuid } from "uuid";
import { Element } from "../../utils/form";
import { FormContext } from "../../context/FormContext";

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
    <div>
      <h1>Options</h1>
      {form["1"]
        .find((b) => b.id === elem.id)!
        .options?.map((option) => (
          <label>
            <input
              type="text"
              value={option.name}
              onChange={(e) => handleChange(option.id, e)}
            />
          </label>
        ))}
      <button onClick={handleOptionAddition}>Add option</button>
    </div>
  );
};
export default InputSpecificConfig;
