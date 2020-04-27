import { v4 as uuid } from "uuid";

export interface FormState {
  sections: Column[];
  ColumnOrder: string[];
}

export interface Element {
  id: string;
  text: string;
  icon: () => JSX.Element;
  title: string;
  supporting: string;
}

export interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

const initialData: { [key: string]: Element[] } = {
  //   sections: [
  //     {
  //       id: "column-1",
  //       title: "Unititled section",
  //       taskIds: [],
  //     },
  //   ],
  //   ColumnOrder: [column-1"],
  "1": [],
};

export default initialData;
