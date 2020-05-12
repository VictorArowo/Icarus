import { Element } from "./form";
import SingleLineInput from "../components/renderers/SingleLineInput";
import MultiLineInput from "../components/renderers/MultiLineInput";
import { Dispatch, SetStateAction } from "react";
import MultipleChoice from "../components/renderers/MultipleChoice";

interface Props {
  elem: Element;
  index: number;
  form: { [key: string]: Element[] };
}

const Renderer: React.FC<Props> = ({ elem, index, form }) => {
  if (elem.text === "Single-Line Text") {
    return <SingleLineInput elem={elem} index={index} />;
  }

  if (elem.text === "Multi-Line Text") {
    return <MultiLineInput elem={elem} index={index} />;
  }

  if (elem.text === "Multiple Choice") {
    return <MultipleChoice elem={elem} index={index} form={form} />;
  }

  return <div>SIKE</div>;
};

export default Renderer;
