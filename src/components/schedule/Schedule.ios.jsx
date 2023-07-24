import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import ScheduleProvider from "../express/context/scheduleContext";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { theme } from "../../theme";
import TextStyle from "../TextStyle";
import TimeTableEschedule from "../TimeTableSchedule/TimeTableSchedule";

export default function Schedule() {
  const orientation = useDeviceOrientation();
  const styCont = [
    styles.container,
    orientation === "landscape" && {
      paddingLeft: Constants.statusBarHeight,
    },
  ];
  return (
    <ScheduleProvider>
      <View style={styCont}>
        <View style={styles.content}>
          <TextStyle style={styles.title}>Horario</TextStyle>
          <View style={styles.containerTimeTable}>
            <TimeTableEschedule />
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
    backgroundColor: theme.colors.white,
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
