import { View, StyleSheet } from "react-native";
import { Activity } from "./Activity";

export default function ActivitiesList({ activities }) {
  return (
    <View style={styles.activitiesContainer}>
      {activities.map((activity) => (
        <Activity activity={activity} key={activity.period} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  activitiesContainer: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "#999",
  },
});
