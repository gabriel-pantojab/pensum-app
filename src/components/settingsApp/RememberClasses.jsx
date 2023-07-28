import { useState } from "react";
import { View, StyleSheet } from "react-native";
import TextStyle from "../TextStyle";
import CheckBox from "../express/CheckBox";
import Option from "./Option";

export default function RememberClasses() {
  const [checked, setChecked] = useState(false);
  const styContent = [
    styles.content,
    checked ? { opacity: 1 } : { opacity: 0.5 },
  ];
  return (
    <Option>
      <CheckBox value={checked} onChange={() => setChecked(!checked)}>
        <TextStyle>Recordar Clases</TextStyle>
      </CheckBox>
      <View style={styContent}>
        <TextStyle>15 minutos antes.</TextStyle>
      </View>
    </Option>
  );
}

const styles = StyleSheet.create({
  content: {
    marginLeft: 50,
  },
});
