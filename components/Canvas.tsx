import { Droppable, Draggable } from "react-beautiful-dnd";
import { FormState, Element } from "../utils/form";
import { Dispatch, SetStateAction } from "react";
import { v4 as uuid } from "uuid";

interface Props {
  elements: {
    [key: string]: Element[];
  };
  setForm: Dispatch<
    SetStateAction<{
      [key: string]: Element[];
    }>
  >;
}

const Canvas: React.FC<Props> = ({ elements, setForm }) => {
  const addSection = () => {
    setForm({ ...elements, [uuid()]: [] });
  };
  return (
    <div className="flex flex-col w-6/12 ml-3 bg-primary-background my-10 content-area overflow-auto ">
      <button onClick={addSection}>Add Section</button>
      <div>
        {Object.keys(elements).map((section) => {
          return (
            <Droppable droppableId={section}>
              {(provided) => {
                return (
                  <div
                    key={section}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="w-full  border border-red-500"
                  >
                    <div>{section}</div>
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
                            {elem.text}
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
    </div>
  );
};

export default Canvas;
