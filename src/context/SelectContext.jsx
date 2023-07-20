import { createContext, useState } from "react";

const SelectContext = createContext();

function SelectProvider({ children }) {
  const [valueSelected, setValueSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [nameValue, setNameValue] = useState("");
  return (
    <SelectContext.Provider
      value={{
        valueSelected,
        setValueSelected,
        open,
        setOpen,
        nameValue,
        setNameValue,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
}

export { SelectContext };
export default SelectProvider;
