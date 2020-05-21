import uuid from "uuid/v4";

interface Option {
  name: string;
  id: string;
}
export interface Element {
  id: string;
  text: string;
  title: string;
  supporting: string;
  options?: Option[];
  choices?: string[];
}

export interface FormState {
  title: string;
  description: string;
  "1": Element[];
}

const initialData: FormState = {
  title: "Untitled Form",
  description: "More information about the form",
  "1": [],
};

export default initialData;
