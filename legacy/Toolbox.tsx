import { Droppable, Draggable } from "react-beautiful-dnd";
import { Columns, Variants, Tasks, Data } from "../utils/initialData";
import classNames from "../utils/classNames";

interface Props {
  data: Data;
}

const Toolbox: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div className="flex border border-red-500">
        {data.ColumnOrder?.map((columnId) => {
          const column = data.columns[columnId as keyof Columns];
          const tasks = column.taskIds.map(
            (taskId) => data.tasks[taskId as keyof Tasks]
          );

          return (
            <div className="flex flex-col w-64 border border-gray-800 h-64">
              <div>{column.title}</div>
              <Droppable key={column.id} droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={classNames(
                      "h-full",
                      snapshot.isDraggingOver ? "bg-gray-900" : "bg-gray-100"
                    )}
                  >
                    {tasks.map((task, idx) => {
                      return (
                        <Draggable
                          draggableId={task.id}
                          key={task.id}
                          index={idx}
                        >
                          {(provided, snapshot) => (
                            <div
                              className={classNames(
                                "w-full border border-red-500",
                                snapshot.isDragging
                                  ? "bg-green-500"
                                  : "bg-blue-500"
                              )}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              {task.content}
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Toolbox;
