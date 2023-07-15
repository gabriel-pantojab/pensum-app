import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import TimeTableExpress from "../express/TimeTableExpress";
import ScheduleProvider from "../express/context/scheduleContext";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function Schedule() {
  const orientation = useDeviceOrientation();
  const styCont = [
    styles.container,
    orientation === "landscape" && {
      marginTop: 0,
      paddingLeft: Constants.statusBarHeight,
    },
  ];
  return (
    <ScheduleProvider>
      <View style={styCont}>
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
    color: "#24263e",
  },
  containerTimeTable: {
    flex: 1,
  },
});
