import uuid from "react-uuid";
import { Element } from "./form";

export default (element: Element) => {
  if (element.text === "Multiple Choice") {
    return {
      ...element,
      options: [
        { name: "Option 1", id: uuid() },
        { name: "Option 2", id: uuid() },
      ],
    };
  }

  if (element.text === "Yes/No") {
    return {
      ...element,
      choices: ["Choice 1", "Choice 2"],
    };
  }

  if (element.text === "Dropdown") {
    return {
      ...element,
      options: [
        { name: "Option 1", id: uuid() },
        { name: "Option 2", id: uuid() },
      ],
    };
  }

  return element;
};
