import { useContext, useEffect } from "react";
import { Pressable, Text, StyleSheet, ScrollView } from "react-native";
import { View } from "react-native";
import { theme } from "../theme";
import CaretUpIcon from "./icons/CaretUpIcon";
import CaretDownIcon from "./icons/CaretDownIcon";
import SelectProvider, { SelectContext } from "../context/SelectContext";

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

function SelectComponent({ children, defaultValue = "" }) {
  const { setValueSelected, open, setOpen, nameValue, setNameValue } =
    useContext(SelectContext);
  useEffect(() => {
    Object.values(children).forEach((child) => {
      if (child.props.value === defaultValue) {
        setValueSelected(child.props.value);
        setNameValue(child.props.name);
      }
    });
  }, []);
  return (
    <View>
      <Pressable
        style={styles.select}
        onPress={() => {
          setOpen(!open);
        }}
      >
        <Text>{nameValue}</Text>
        {open ? (
          <CaretUpIcon color={theme.colors.primary} width={20} height={20} />
        ) : (
          <CaretDownIcon color={theme.colors.primary} width={20} height={20} />
        )}
      </Pressable>
      {open && (
        <View style={styles.options}>
          <ScrollView>{children}</ScrollView>
        </View>
      )}
    </View>
  );
}

export default function Select({ children, defaultValue = "" }) {
  return (
    <SelectProvider>
      <SelectComponent defaultValue={defaultValue}>{children}</SelectComponent>
    </SelectProvider>
  );
}

const styles = StyleSheet.create({
  select: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: 10,
    minWidth: 200,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  options: {
    minWidth: 200,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderTopWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: theme.colors.white,
    maxHeight: 200,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
  },
  optionSelected: {
    backgroundColor: "#ccc",
  },
});
