import { View, StyleSheet } from "react-native";
import TimeTableExpress from "../express/TimeTableExpress";
import ScheduleProvider from "../express/context/scheduleContext";
import { theme } from "../../theme";
import TextStyle from "../TextStyle";

export default function Schedule() {
  return (
    <ScheduleProvider>
      <View style={styles.container}>
        <View style={styles.content}>
          <TextStyle style={styles.title}>Horario</TextStyle>
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
    color: theme.colors.primary,
  },
  containerTimeTable: {
    flex: 1,
  },
});
