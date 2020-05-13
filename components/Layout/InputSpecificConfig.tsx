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

  const handleOptionChange = (
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

  const handleChoiceChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const elementId = elem.id;

    setForm({
      "1": form["1"].map((e, idx) =>
        e.id === elementId
          ? {
              ...e,
              choices: form["1"][idx].choices!.map((opt, optIdx) =>
                optIdx === index ? event.target.value : opt
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

  if (elem.text === "Multiple Choice") {
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
                onChange={(e) => handleOptionChange(option.id, e)}
                className="mb-2 bg-transparent border border-gray-400 form-input"
              />
            </div>
          ))}
        <Button type="primary" onClick={handleOptionAddition}>
          Add option
        </Button>
      </div>
    );
  }

  if (elem.text === "Yes/No") {
    return (
      <div className="py-5 pl-3 mb-1 font-bold border-b text-primary-text border-sec-background">
        <div className="mb-3 text-sm uppercase">Choices</div>
        {form["1"]
          .find((b) => b.id === elem.id)!
          .choices?.map((choice, idx) => (
            <div key={idx}>
              <input
                type="text"
                value={choice}
                onChange={(e) => handleChoiceChange(idx, e)}
                className="mb-2 bg-transparent border border-gray-400 form-input"
              />
            </div>
          ))}
      </div>
    );
  }

  if (elem.text === "Dropdown") {
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
                onChange={(e) => handleOptionChange(option.id, e)}
                className="mb-2 bg-transparent border border-gray-400 form-input"
              />
            </div>
          ))}
        <Button type="primary" onClick={handleOptionAddition}>
          Add option
        </Button>
      </div>
    );
  }

  return <div></div>;
};
export default InputSpecificConfig;
