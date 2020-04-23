import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import Canvas from "../components/Canvas";
import Toolbox from "../components/Toolbox";
import { useEffect, useState } from "react";
import ITEMS, { Columns, Variants, Tasks, Data } from "../utils/initialData";

const Create = () => {
  const [data, setData] = useState(ITEMS);

  const onDragEnd: OnDragEndResponder = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId == source.droppableId &&
      destination.index == source.index
    ) {
      return;
    }
    const start = data.columns[source.droppableId as keyof Columns];
    const finish = data.columns[destination.droppableId as keyof Columns];

    if (start === finish) {
      const newTasksIds = Array.from(start.taskIds);
      newTasksIds.splice(source.index, 1);
      newTasksIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...start, taskIds: newTasksIds };

      const newState: Data = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };
      setData(newState);
      return;
    }
    const startTasksIds = Array.from(start.taskIds);
    startTasksIds.splice(source.index, 1);

    const newStart = { ...start, taskIds: startTasksIds };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = { ...finish, taskIds: finishTaskIds };

    const newState: Data = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setData(newState);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Toolbox data={data} />
        <Canvas />
      </DragDropContext>
    </div>
  );
};

export default Create;
