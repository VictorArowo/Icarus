import uuid from "uuid/v4";

export interface FormState {
  sections: Column[];
  ColumnOrder: string[];
}

interface Option {
  name: string;
  id: string;
}
export interface Element {
  id: string;
  text: string;
  icon: () => JSX.Element;
  title: string;
  supporting: string;
  options?: Option[];
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
