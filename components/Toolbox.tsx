import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Columns, Variants, Tasks, Data } from "../utils/initialData";
import classNames from "../utils/classNames";
import elementAtoms from "../utils/elementAtoms";
import { getRenderItem } from "../utils/rbdHelpers";
import DragIcon from "../icons/DragIcon";

interface Props {}

const Toolbox: React.FC<Props> = () => {
  return (
    <div className="mt-10 bg-primary-background h-8/12 shadow-xl w-60">
      <Droppable
        droppableId="toolbox"
        isDropDisabled={true}
        renderClone={getRenderItem(elementAtoms)}
      >
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex flex-col border-primary-background border-t-2 border-b-2"
          >
            {elementAtoms.map((elem, idx) => {
              const shouldRenderClone =
                elem.id === snapshot.draggingFromThisWith;
              return (
                <React.Fragment key={elem.id}>
                  {shouldRenderClone ? (
                    <div className="react-beatiful-dnd-copy flex px-5 my-4 ">
                      <div className="w-6 h-6 text-primary">
                        {<elem.icon />}
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
                          className="flex group pl-5 pr-3 py-4 rounded-lg  justify-between hover:bg-sec-background border-transparent hover:border-primary-background border-r-2 transition duration-700 ease-in-out"
                        >
                          <div className="flex">
                            <div className="w-6 h-6 text-primary">
                              {<elem.icon />}
                            </div>
                            <span className="ml-3 text-sm font-bold text-primary-text whitespace-no-wrap">
                              {elem.text}
                            </span>
                          </div>
                          <div className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out ml-3">
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
