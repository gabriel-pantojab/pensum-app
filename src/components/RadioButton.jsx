import { useState } from "react";
import { Pressable, View, StyleSheet } from "react-native";
import TextStyle from "./TextStyle";

export default function RadioButton({ initValue, values, action }) {
  const [currentValue, setCurrentValue] = useState(initValue);
  return values.map((value) => (
    <Pressable
      key={value}
      onPress={() => {
        setCurrentValue(value);
        action(value);
      }}
    >
      <View style={styles.radioButton}>
        <View
          style={{
            ...styles.radioButtonCircle,
            backgroundColor: value === currentValue ? "blue" : "white",
          }}
        />
        <TextStyle>{value}</TextStyle>
      </View>
    </Pressable>
  ));
}

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radioButtonCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
