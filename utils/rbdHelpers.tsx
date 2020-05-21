import uuid from "react-uuid";
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
import { Element, FormState } from "./form";
import { Dispatch, SetStateAction } from "react";
import elementAtoms from "./elementAtoms";
import DragIcon from "../icons/DragIcon";
import populateElement from "./populateElement";
import IconRenderer from "../components/renderers/IconRenderer";

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
  const copied = populateElement(sourceClone[droppableSource.index]);

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
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      className="flex items-center justify-between px-5 py-6 border border-gray-500 rounded bg-primary-background font-regular"
    >
      <div className="flex">
        <div className="w-6 h-6 text-primary">
          <IconRenderer elem={item} />
        </div>
        <span className="ml-3 text-sm font-bold whitespace-no-wrap text-primary-text">
          {item.text}
        </span>
      </div>
      <div className="w-6 h-6 ml-3 text-primary">
        <DragIcon />
      </div>
    </div>
  );
};

interface OnDragEndProps {
  (
    result: DropResult,
    form: FormState,
    setForm: (updated: FormState) => void
  ): void;
}

export const onDragEnd: OnDragEndProps = (result, form, setForm) => {
  const { source, destination } = result;

  if (!destination) {
    return;
  }

  switch (source.droppableId) {
    case destination.droppableId:
      setForm({
        ...form,
        "1": reorder(form["1"], source.index, destination.index),
      });
      break;

    case "toolbox":
      const response = copy(elementAtoms, form["1"], source, destination);
      setForm({
        ...form,
        [destination.droppableId]: response,
      });
      break;

    default:
      // setForm({
      //   ...form,
      //   ...move(
      //     form[source.droppableId],
      //     form[destination.droppableId],
      //     source,
      //     destination
      //   ),
      // });
      break;
  }
};
