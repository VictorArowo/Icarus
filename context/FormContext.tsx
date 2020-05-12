import React, { useState } from "react";
import Form, { Element } from "../utils/form";

interface Type {
  [key: string]: Element[];
}

export const FormContext = React.createContext({
  form: Form,
  changeForm: (updated: Type) => {},
});
