import { useEffect, useState } from "react";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import Canvas from "../components/Canvas";
import Toolbox from "../components/Toolbox";
import Form, { FormState } from "../utils/form";
import { onDragEnd } from "../utils/rbdHelpers";
import Layout from "../components/Layout/Layout";
import Topbar from "../components/CreateForm/Topbar";

const Create = () => {
  const [form, setForm] = useState(Form);

  return (
    <div className="flex flex-col font-regular bg-sec-background min-h-screen">
      <Topbar />
      <div className="flex">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, form, setForm)}
        >
          <Toolbox />
          <Canvas elements={form} setForm={setForm} />
        </DragDropContext>
      </div>
    </div>
  );
};

export default Create;
