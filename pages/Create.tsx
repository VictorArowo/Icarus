import { useEffect, useState, useContext } from "react";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import Canvas from "../components/Canvas";
import Toolbox from "../components/Toolbox";
import Form, { FormState, Element } from "../utils/form";
import { onDragEnd } from "../utils/rbdHelpers";
import Layout from "../components/Layout/Layout";
import Topbar from "../components/createForm/Topbar";
import InputConfig from "../components/Layout/InputConfig";
import { FormContext } from "../context/FormContext";

const Create = () => {
  const context = useContext(FormContext);
  const { form, changeForm } = context;

  return (
    <FormContext.Provider value={{ form, changeForm }}>
      <div className="min-h-screen font-regular bg-sec-background">
        <Topbar />
        <div className="flex">
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, form, changeForm)}
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
