import { View, StyleSheet } from "react-native";
import { theme } from "../../theme";
import TextStyle from "../TextStyle";

export default function HeaderSchedule({ month, dayName, day, year }) {
  return (
    <View style={styles.container}>
      <TextStyle style={styles.text}>{year}</TextStyle>
      <View style={styles.dayContainer}>
        <TextStyle style={styles.text}>{dayName}</TextStyle>
        <TextStyle style={styles.text}>{day}</TextStyle>
      </View>
      <TextStyle style={styles.text}>{month}</TextStyle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: theme.colors.white,
  },
  dayContainer: {
    flexDirection: "row",
    gap: 10,
  },
  text: {
    fontSize: 20,
    color: theme.colors.primary,
  },
});
