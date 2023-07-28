import { useState } from "react";
import { View, StyleSheet } from "react-native";
import TextStyle from "../TextStyle";
import CheckBox from "../express/CheckBox";
import Option from "./Option";
import Select from "../selectComponent/Select";
import SelectOption from "../selectComponent/Option";
import { theme } from "../../theme";

export default function RememberClasses() {
  const [checked, setChecked] = useState(false);
  const styContent = [
    styles.content,
    checked ? { opacity: 1 } : { opacity: 0.5 },
  ];
  return (
    <Option
      style={{
        backgroundColor: theme.colors.white,
      }}
    >
      <CheckBox value={checked} onChange={() => setChecked(!checked)}>
        <TextStyle>Recordar Clases</TextStyle>
      </CheckBox>
      <View style={styContent}>
        <Select defaultValue={15} enabled={checked}>
          <SelectOption
            value={15}
            name="15 minutos antes"
            onChange={(data) => {}}
          >
            <TextStyle>15 minutos antes</TextStyle>
          </SelectOption>
          <SelectOption
            value={30}
            name="30 minutos antes"
            onChange={(data) => {}}
          >
            <TextStyle>30 minutos antes</TextStyle>
          </SelectOption>
          <SelectOption value={60} name="1 hora antes" onChange={(data) => {}}>
            <TextStyle>1 hora antes</TextStyle>
          </SelectOption>
        </Select>
      </View>
    </Option>
  );
}

const styles = StyleSheet.create({
  content: {
    marginLeft: 50,
    width: 170,
  },
});
