import { View, StyleSheet } from "react-native";

export default function Option({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
});
