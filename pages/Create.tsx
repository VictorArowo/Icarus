import { useEffect, useState } from "react";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import Canvas from "../components/Canvas";
import Toolbox from "../components/Toolbox";
import Form, { FormState, Element } from "../utils/form";
import { onDragEnd } from "../utils/rbdHelpers";
import Layout from "../components/Layout/Layout";
import Topbar from "../components/CreateForm/Topbar";
import InputConfig from "../components/Layout/InputConfig";
import { FormContext } from "../context/FormContext";

const Create = () => {
  const [form, setForm] = useState(Form);

  const changeForm = (updated: { [key: string]: Element[] }) => {
    setForm(updated);
  };

  return (
    <FormContext.Provider value={{ form, changeForm }}>
      <div className="min-h-screen font-regular bg-sec-background">
        <Topbar />
        <div className="flex">
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, form, setForm)}
          >
            <Toolbox />
            <Canvas />
            <InputConfig />
          </DragDropContext>
        </div>
      </div>
    </FormContext.Provider>
  );
};

export default Create;
