import React, { useState, useEffect } from "react";

export const SelectedContext = React.createContext({
  selected: "",
  changeSelected: (elem: string) => {},
});

const SelectedProvider: React.FC = ({ children }) => {
  const [selected, setSelected] = useState<string>("");

  const changeSelected = (element: string) => {
    setSelected(element);
  };

  return (
    <SelectedContext.Provider value={{ selected, changeSelected }}>
      {children}
    </SelectedContext.Provider>
  );
};

export default SelectedProvider;
