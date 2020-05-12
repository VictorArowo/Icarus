import {
  useContext,
  useEffect,
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { SelectedContext } from "../../context/SelectedContext";
import { Element } from "../../utils/form";
import elementAtoms from "../../utils/elementAtoms";
import DarkModeToggle from "./DarkModeToggle";
import InputSpecificConfig from "./InputSpecificConfig";
import { FormContext } from "../../context/FormContext";

interface Props {}

const InputConfig: React.FC<Props> = () => {
  const context = useContext(SelectedContext);
  const formContext = useContext(FormContext);

  const { form, changeForm: setForm } = formContext;

  const { selected } = context;
  const [data, setData] = useState<Element | undefined>(undefined);

  useEffect(() => {
    setData(form["1"].find((elem) => elem.id === selected));
  }, [selected]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.name);
    if (e.target.name === "title") {
      setData({ ...data!, title: e.target.value });
    } else {
      setData({ ...data!, supporting: e.target.value });
    }
  };

  useEffect(() => {
    setForm({
      ...form,
      "1": form["1"].map((elem) => (elem.id === selected ? data! : elem)),
    });
  }, [data]);

  return (
    <div className="min-h-full mt-10 ml-8 w-72 bg-primary-background">
      {data ? (
        <div className="flex flex-col ">
          <div className="w-full py-5 pl-3 mb-1 text-sm font-bold uppercase border-b text-primary-text border-sec-background">
            {data?.text}
          </div>
          <div className="py-5 pl-3 mb-1 font-bold border-b text-primary-text border-sec-background">
            <div className="text-xs uppercase">Question</div>
            <textarea
              value={data?.title}
              name="title"
              onChange={handleChange}
              className="mt-2 bg-transparent border border-gray-400 form-textarea"
            />
          </div>
          <div className="py-5 pl-3 mb-1 font-bold border-b text-primary-text border-sec-background">
            <div className="text-xs uppercase">More Details</div>
            <textarea
              value={data?.supporting}
              name="supporting"
              onChange={handleChange}
              className="mt-2 bg-transparent border border-gray-400 form-textarea"
            />
          </div>
          <div className="py-5 pl-3 mb-1 font-bold border-b text-primary-text border-sec-background">
            <div className="text-xs uppercase">Required</div>
            <DarkModeToggle />
          </div>
          <InputSpecificConfig elem={data} />
        </div>
      ) : (
        <div>Select an input to start editing</div>
      )}
    </div>
  );
};

export default InputConfig;
