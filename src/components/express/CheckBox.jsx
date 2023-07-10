import { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import CheckIcon from "../icons/CheckIcon";
export default function CheckBox({
  name = "",
  width = 20,
  value,
  onChange,
  children,
}) {
  const styContainer = {
    ...styles.container,
  };
  const styCheckbox = {
    ...styles.checkbox,
    width,
    height: width,
    borderRadius: Math.random(width / 4),
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
        {children}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkbox: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  pressCheckbox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
