import React, { useState } from "react";
import { Element } from "../utils/form";

interface Form {
  body: Element[];
  _id: string;
  created: string;
  title: string;
  description: string;
  responses: { formId: string; response: Record<string, string> };
}

interface Context {
  selected: Form;
  changeSelected: (form: Form) => void;
}
export const SelectedFormContext = React.createContext<Context>({} as Context);

const SelectedFormProvider: React.FC = ({ children }) => {
  const [selected, setSelected] = useState<Form>({} as Form);

  const changeSelected = (form: Form) => {
    console.log("sike");
    setSelected(form);
  };

  return (
    <SelectedFormContext.Provider value={{ selected, changeSelected }}>
      {children}
    </SelectedFormContext.Provider>
  );
};

export default SelectedFormProvider;
