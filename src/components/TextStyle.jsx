import { Text, StyleSheet } from "react-native";
import { theme } from "../theme";

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.holidayBudapest,
    fontSize: 16,
    color: theme.colors.black,
  },
});

export default function TextStyle({ children, style }) {
  const sty = [styles.text, style];
  return <Text style={sty}>{children}</Text>;
}
