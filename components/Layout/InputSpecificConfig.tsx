import React from "react";
import { Element } from "../../utils/form";

interface Props {
  elem: Element;
}

const InputSpecificConfig: React.FC<Props> = ({ elem }) => {
  return (
    <div>
      {elem.options?.map((option) => (
        <label>
          {option}
          <input type="option" />
        </label>
      ))}
    </div>
  );
};
export default InputSpecificConfig;
