import { useContext, useEffect } from "react";
import SelectProvider, { SelectContext } from "../../context/selectContext";
import { Pressable, ScrollView, View, StyleSheet } from "react-native";
import CaretDownIcon from "../icons/CaretDownIcon";
import CaretUpIcon from "../icons/CaretUpIcon";
import { theme } from "../../theme";
import TextStyle from "../TextStyle";

function SelectComponent({
  children,
  defaultValue = "",
  style = {},
  styleOptions = {},
  enable = true,
  textSize = 15,
}) {
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
        style={{ ...styles.select, ...style, opacity: enable ? 1 : 0.5 }}
        onPress={() => {
          if (!enable) return;
          setOpen(!open);
        }}
      >
        <TextStyle
          style={{
            fontSize: textSize,
          }}
        >
          {nameValue}
        </TextStyle>
        {open ? (
          <CaretUpIcon color={theme.colors.primary} width={20} height={20} />
        ) : (
          <CaretDownIcon color={theme.colors.primary} width={20} height={20} />
        )}
      </Pressable>
      {open && (
        <View
          style={{
            ...styles.options,
            ...styleOptions,
          }}
        >
          <ScrollView>{children}</ScrollView>
        </View>
      )}
    </View>
  );
}

export default function Select({
  children,
  defaultValue = "",
  style = {},
  styleOptions = {},
  enable = true,
  textSize = 15,
}) {
  return (
    <SelectProvider>
      <SelectComponent
        defaultValue={defaultValue}
        style={style}
        styleOptions={styleOptions}
        enable={enable}
        textSize={textSize}
      >
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
    minWidth: 100,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
});
