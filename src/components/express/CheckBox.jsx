import { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import CheckIcon from "../icons/CheckIcon";
export default function CheckBox({ name = "", width = 20, value, onChange }) {
  const styContainer = {
    ...styles.container,
    width,
  };
  const styCheckbox = {
    ...styles.checkbox,
    width,
    height: width,
  };
  return (
    <View style={styContainer}>
      <Pressable
        style={styles.pressCheckbox}
        onPress={() => {
          onChange();
        }}
      >
        <View style={styCheckbox}>
          {value && (
            <CheckIcon width={width - 2} height={width - 2} color={"#1493ff"} />
          )}
        </View>
        <Text>{name}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  checkbox: {
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  pressCheckbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
