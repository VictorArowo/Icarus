import React, { useState } from "react";
import Form, { Element, FormState } from "../utils/form";

export const FormContext = React.createContext({
  form: Form,
  changeForm: (updated: FormState) => {},
});

const FormProvider: React.FC = ({ children }) => {
  const [form, setForm] = useState(Form);

  const changeForm = (updated: FormState) => {
    setForm(updated);
  };

  return (
    <FormContext.Provider value={{ form, changeForm }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
