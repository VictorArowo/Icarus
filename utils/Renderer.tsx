import { Element } from "./form";
import SingleLineInput from "../components/renderers/SingleLineInput";
import MultiLineInput from "../components/renderers/MultiLineInput";
import { Dispatch, SetStateAction } from "react";

interface Props {
  elem: Element;
  index: number;
}

const Renderer: React.FC<Props> = ({ elem, index }) => {
  if (elem.text === "Single-Line Text") {
    return <SingleLineInput elem={elem} index={index} />;
  }

  if (elem.text === "Multi-Line Text") {
    return <MultiLineInput elem={elem} index={index} />;
  }

  return <div>SIKE</div>;
};

export default Renderer;
