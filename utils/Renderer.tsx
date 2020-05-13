import { Element } from "./form";
import SingleLineInput from "../components/renderers/SingleLineInput";
import MultiLineInput from "../components/renderers/MultiLineInput";
import MultipleChoice from "../components/renderers/MultipleChoice";
import NumberInput from "../components/renderers/NumberInput";
import YesNoToggle from "../components/renderers/YesNoToggle";
import DropdownRenderer from "../components/renderers/DropdownRenderer";
import DateInput from "../components/renderers/DateInput";
import TimeInput from "../components/renderers/TimeInput";

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

  if (elem.text === "Number") {
    return <NumberInput elem={elem} index={index} />;
  }

  if (elem.text === "Yes/No") {
    return <YesNoToggle elem={elem} index={index} />;
  }

  if (elem.text === "Dropdown") {
    return <DropdownRenderer elem={elem} index={index} />;
  }

  if (elem.text === "Date") {
    return <DateInput elem={elem} index={index} />;
  }

  if (elem.text === "Time") {
    return <TimeInput elem={elem} index={index} />;
  }

  return <div>SIKE</div>;
};

export default Renderer;
