import { v4 as uuid } from "uuid";
import {
  DraggableLocation,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableRubric,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  OnDragEndResponder,
  DropResult,
} from "react-beautiful-dnd";
import { Data, Column, Columns } from "./initialData";
import { Element } from "./form";
import { Dispatch, SetStateAction } from "react";
import elementAtoms from "./elementAtoms";

interface Reorder {
  (list: Element[], startIndex: number, endIndex: number): Element[];
}

export const reorder: Reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

interface Copy {
  (
    source: Element[],
    destination: Element[],
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation
  ): Element[];
}

export const copy: Copy = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const copied = sourceClone[droppableSource.index];

  destClone.splice(droppableDestination.index, 0, { ...copied, id: uuid() });
  return destClone;
};

interface Move {
  (
    source: Element[],
    destination: Element[],
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation
  ): { [key: string]: Element[] };
}

export const move: Move = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
  console.log(source, destination, droppableSource, droppableDestination);
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: { [key: string]: Element[] } = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

export const getRenderItem = (items: Element[]) => (
  provided: DraggableProvided,
  snapshot: DraggableStateSnapshot,
  rubric: DraggableRubric
) => {
  const item = items[rubric.source.index];
  return (
    <>
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className={snapshot.isDragging ? "dragging" : ""}
      >
        {item.text}
      </div>
    </>
  );
};

interface OnDragEndProps {
  (
    result: DropResult,
    form: {
      [key: string]: Element[];
    },
    setForm: Dispatch<
      SetStateAction<{
        [key: string]: Element[];
      }>
    >
  ): void;
}

export const onDragEnd: OnDragEndProps = (result, form, setForm) => {
  const { source, destination } = result;
  console.log(source, destination);
  if (!destination) {
    console.log("did not bang");
    return;
  }

  switch (source.droppableId) {
    case destination.droppableId:
      setForm({
        ...form,
        [destination.droppableId]: reorder(
          form[source.droppableId],
          source.index,
          destination.index
        ),
      });
      break;

    case "toolbox":
      setForm({
        ...form,
        [destination.droppableId]: copy(
          elementAtoms,
          form[destination.droppableId],
          source,
          destination
        ),
      });
      break;

    default:
      setForm({
        ...form,
        ...move(
          form[source.droppableId],
          form[destination.droppableId],
          source,
          destination
        ),
      });
      break;
  }
};
