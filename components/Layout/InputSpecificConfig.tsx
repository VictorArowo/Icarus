import React, { Dispatch, SetStateAction } from "react";
import { Element } from "../../utils/form";

interface Props {
  elem: Element;
  form: { [key: string]: Element[] };
  setForm: Dispatch<
    SetStateAction<{
      [key: string]: Element[];
    }>
  >;
}

const InputSpecificConfig: React.FC<Props> = ({ elem, form, setForm }) => {
  const handleChange = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const elementId = elem.id;
    console.log(elementId);
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
    </div>
  );
};
export default InputSpecificConfig;
