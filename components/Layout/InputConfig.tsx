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

interface Props {
  form: { [key: string]: Element[] };
  setForm: Dispatch<
    SetStateAction<{
      [key: string]: Element[];
    }>
  >;
}

const InputConfig: React.FC<Props> = ({ form, setForm }) => {
  const context = useContext(SelectedContext);
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
    <div className="w-72 min-h-full bg-primary-background mt-10 ml-8">
      {data ? (
        <div className="flex flex-col ">
          <div className="text-primary-text font-bold py-5 border-b border-sec-background mb-1 pl-3 w-full uppercase text-sm">
            {data?.text}
          </div>
          <div className="text-primary-text font-bold py-5 border-b border-sec-background mb-1 pl-3">
            <div className="uppercase text-xs">Question</div>
            <textarea
              value={data?.title}
              name="title"
              onChange={handleChange}
              className="form-textarea border-gray-400 border bg-transparent mt-2"
            />
          </div>
          <div className="text-primary-text font-bold py-5 border-b border-sec-background mb-1 pl-3">
            <div className="uppercase text-xs">More Details</div>
            <textarea
              value={data?.supporting}
              name="supporting"
              onChange={handleChange}
              className="form-textarea border-gray-400 border bg-transparent mt-2"
            />
          </div>
          <div className="text-primary-text font-bold py-5 border-b border-sec-background mb-1 pl-3">
            <div className="uppercase text-xs">Required</div>
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
