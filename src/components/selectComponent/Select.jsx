import { useContext, useEffect } from "react";
import SelectProvider, { SelectContext } from "../../context/selectContext";
import { Pressable, ScrollView, Text, View, StyleSheet } from "react-native";
import CaretDownIcon from "../icons/CaretDownIcon";
import CaretUpIcon from "../icons/CaretUpIcon";
import { theme } from "../../theme";

function SelectComponent({ children, defaultValue = "", enabled = true }) {
  const { setValueSelected, open, setOpen, nameValue, setNameValue } =
    useContext(SelectContext);

  useEffect(() => {
    Object.values(children).forEach((child) => {
      if (child && child.props) {
        if (child.props.value === defaultValue) {
          setValueSelected(child.props.value);
          setNameValue(child.props.name);
        }
      }
    });
  }, []);

  return (
    <View>
      <Pressable
        style={styles.select}
        onPress={() => {
          if (!enabled) return;
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

export default function Select({
  children,
  defaultValue = "",
  enabled = true,
}) {
  return (
    <SelectProvider>
      <SelectComponent defaultValue={defaultValue} enabled={enabled}>
        {children}
      </SelectComponent>
    </SelectProvider>
  );
}

const styles = StyleSheet.create({
  select: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: 10,
    minWidth: 50,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  options: {
    minWidth: 50,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderTopWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: theme.colors.white,
    maxHeight: 200,
  },
});
