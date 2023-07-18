import { Text, StyleSheet } from "react-native";
import { theme } from "../theme";

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.holidayBudapest,
    letterSpacing: 1,
  },
});

export default function TextStyle({ children, style }) {
  const sty = [styles.text, style];
  return <Text style={sty}>{children}</Text>;
}
