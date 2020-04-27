import { Droppable, Draggable } from "react-beautiful-dnd";
import { FormState, Element } from "../utils/form";
import { Dispatch, SetStateAction } from "react";
import { v4 as uuid } from "uuid";
import Renderer from "../utils/Renderer";
import classNames from "../utils/classNames";

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
    <div className="flex flex-col w-8/12 bg-primary-background h-full ml-5 my-10 content-area overflow-auto shadow-xl">
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
                          <Renderer elem={elem} index={index} />
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
