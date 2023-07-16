import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";

export default function HeaderSchedule({ month, dayName, day, year }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{year}</Text>
      <View style={styles.dayContainer}>
        <Text style={styles.text}>{dayName}</Text>
        <Text style={styles.text}>{day}</Text>
      </View>
      <Text style={styles.text}>{month}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: theme.colors.primary,
  },
  dayContainer: {
    flexDirection: "row",
    gap: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.white,
  },
});
