import { View, Text, StyleSheet } from "react-native";
import TimeTableExpress from "../express/TimeTableExpress";
import ScheduleProvider from "../express/context/scheduleContext";
import { theme } from "../../theme";

export default function Schedule() {
  return (
    <ScheduleProvider>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Horario</Text>
          <View style={styles.containerTimeTable}>
            <TimeTableExpress />
          </View>
        </View>
      </View>
    </ScheduleProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ccc",
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  containerTimeTable: {
    flex: 1,
  },
});
