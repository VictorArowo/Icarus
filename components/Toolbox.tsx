import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Columns, Variants, Tasks, Data } from "../utils/initialData";
import classNames from "../utils/classNames";
import elementAtoms from "../utils/elementAtoms";
import { getRenderItem } from "../utils/rbdHelpers";

interface Props {}

const Toolbox: React.FC<Props> = () => {
  return (
    <div className="mt-10 bg-primary-background">
      <Droppable
        droppableId="toolbox"
        isDropDisabled={true}
        renderClone={getRenderItem(elementAtoms)}
      >
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex flex-col"
          >
            {elementAtoms.map((elem, idx) => {
              const shouldRenderClone =
                elem.id === snapshot.draggingFromThisWith;
              return (
                <React.Fragment key={elem.id}>
                  {shouldRenderClone ? (
                    <div className="react-beatiful-dnd-copy">{elem.text}</div>
                  ) : (
                    <Draggable draggableId={elem.id} index={idx}>
                      {(provided, snapshot) => (
                        <>
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={snapshot.isDragging ? "dragging" : ""}
                          >
                            {elem.text}
                          </div>
                        </>
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
