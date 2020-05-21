import React, { useState } from "react";
import Form, { Element } from "../utils/form";

interface Type {
  [key: string]: Element[];
}

export const FormContext = React.createContext({
  form: Form,
  changeForm: (updated: Type) => {},
});

const FormProvider: React.FC = ({ children }) => {
  const [form, setForm] = useState(Form);

  const changeForm = (updated: { [key: string]: Element[] }) => {
    setForm(updated);
  };

  return (
    <FormContext.Provider value={{ form, changeForm }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
