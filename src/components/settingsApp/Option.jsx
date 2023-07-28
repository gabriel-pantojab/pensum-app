import { View, StyleSheet } from "react-native";

export default function Option({ children, style = {} }) {
  return <View style={{ ...style, ...styles.container }}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
});
