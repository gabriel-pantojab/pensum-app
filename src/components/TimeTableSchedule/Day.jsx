import { View, StyleSheet } from "react-native";
import { Activity } from "./Activity";
import TextStyle from "../TextStyle";

export function Day({ dayName, activities }) {
  if (activities.length === 0) return;
  return (
    <View style={styles.day}>
      <TextStyle style={styles.dayName}>{dayName}</TextStyle>
      <View style={styles.activitiesContainer}>
        {activities.map((activity) => (
          <Activity activity={activity} key={activity.period} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  day: {
    flex: 1,
  },
  dayName: {
    fontSize: 16,
    textAlign: "center",
    padding: 5,
  },
  activitiesContainer: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "#999",
  },
});
