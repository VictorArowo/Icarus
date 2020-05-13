import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Columns, Variants, Tasks, Data } from "../utils/initialData";
import classNames from "../utils/classNames";
import elementAtoms from "../utils/elementAtoms";
import { getRenderItem } from "../utils/rbdHelpers";
import DragIcon from "../icons/DragIcon";
import IconRenderer from "./renderers/IconRenderer";

interface Props {}

const Toolbox: React.FC<Props> = () => {
  return (
    <div className="mt-10 rounded-md shadow-x bg-primary-background h-8/12 w-60">
      <Droppable
        droppableId="toolbox"
        isDropDisabled={true}
        renderClone={getRenderItem(elementAtoms)}
      >
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex flex-col border-t-2 border-b-2 rounded-md border-primary-background"
          >
            {elementAtoms.map((elem, idx) => {
              const shouldRenderClone =
                elem.id === snapshot.draggingFromThisWith;
              return (
                <React.Fragment key={elem.id}>
                  {shouldRenderClone ? (
                    <div className="flex px-5 my-4 react-beatiful-dnd-copy ">
                      <div className="w-6 h-6 text-primary">
                        <IconRenderer elem={elem} />
                      </div>
                      <span className="ml-3 text-sm font-bold text-primary-text">
                        {elem.text}
                      </span>
                    </div>
                  ) : (
                    <Draggable draggableId={elem.id} index={idx}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          // className={snapshot.isDragging ? "dragging" : ""}
                          className="flex justify-between py-4 pl-5 pr-3 transition duration-700 ease-in-out border-r-2 border-transparent rounded-lg group hover:bg-sec-background hover:border-primary-background"
                        >
                          <div className="flex">
                            <div className="w-6 h-6 text-primary">
                              <IconRenderer elem={elem} />
                            </div>
                            <span className="ml-3 text-sm font-bold whitespace-no-wrap text-primary-text">
                              {elem.text}
                            </span>
                          </div>
                          <div className="w-6 h-6 ml-3 transition duration-700 ease-in-out opacity-0 text-primary group-hover:opacity-100">
                            <DragIcon />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  )}
                </React.Fragment>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Toolbox;
