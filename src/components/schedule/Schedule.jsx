import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import TimeTableExpress from "../express/TimeTableExpress";
import ScheduleProvider from "../express/context/scheduleContext";
import { theme } from "../../theme";

export default function Schedule() {
  return (
    <ScheduleProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Horario</Text>
        <View style={styles.containerTimeTable}>
          <TimeTableExpress />
        </View>
      </View>
    </ScheduleProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
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
