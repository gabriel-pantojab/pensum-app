import { View, StyleSheet } from "react-native";
import TextStyle from "../TextStyle";
import ActivitiesList from "./ActivitiesList";

export function Day({ dayName, activities }) {
  if (activities.length === 0) return;
  return (
    <View style={styles.day}>
      <TextStyle style={styles.dayName}>{dayName}</TextStyle>
      <ActivitiesList activities={activities} />
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
});
