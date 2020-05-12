import { Droppable, Draggable } from "react-beautiful-dnd";
import { FormState, Element } from "../utils/form";
import { Dispatch, SetStateAction, useContext } from "react";
import { v4 as uuid } from "uuid";
import Renderer from "../utils/Renderer";
import classNames from "../utils/classNames";
import { FormContext } from "../context/FormContext";

interface Props {}

const Canvas: React.FC<Props> = () => {
  const context = useContext(FormContext);
  const { form: elements, changeForm: setForm } = context;

  const addSection = () => {
    setForm({ ...elements, [uuid()]: [] });
  };
  return (
    <div className="flex flex-col w-8/12 h-full my-10 ml-5 overflow-auto shadow-xl bg-primary-background content-area">
      {Object.keys(elements).map((section) => {
        return (
          <Droppable droppableId={section}>
            {(provided, snapshot) => {
              return (
                <div
                  key={section}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={classNames(
                    "h-full w-full transition ease-in-out flex-grow duration-150 pb-24",
                    snapshot.isDraggingOver ? "bg-gray-700" : ""
                  )}
                >
                  {elements[section].map((elem, index) => (
                    <Draggable
                      draggableId={elem.id}
                      key={elem.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <Renderer elem={elem} form={elements} index={index} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        );
      })}
    </div>
  );
};

export default Canvas;
