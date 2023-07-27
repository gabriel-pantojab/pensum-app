import { useContext } from "react";
import { SelectContext } from "../../context/selectContext";
import { Pressable, StyleSheet } from "react-native";
import { theme } from "../../theme";

export function Option({ value, children, name, onChange }) {
  const { setValueSelected, valueSelected, setOpen, setNameValue } =
    useContext(SelectContext);
  const styOption = [
    styles.option,
    valueSelected === value && styles.optionSelected,
  ];
  return (
    <Pressable
      style={styOption}
      onPress={() => {
        setValueSelected(value);
        setNameValue(name);
        setOpen(false);
        onChange &&
          onChange({
            name,
            sis: value,
          });
      }}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
  },
  optionSelected: {
    backgroundColor: "#ccc",
  },
});
