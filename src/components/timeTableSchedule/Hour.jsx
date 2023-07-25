import { useContext } from "react";
import { ScheduleContext } from "./context/scheduleContext";
import { View, StyleSheet } from "react-native";
import TextStyle from "../TextStyle";
import { getHeigthPeriod } from "./utils/utils";

export function Hour({ hr }) {
  const { schedule } = useContext(ScheduleContext);
  hr =
    parseInt(hr.split(":")[0]) < 10
      ? "0" + parseInt(hr.split(":")[0]) + ":" + hr.split(":")[1]
      : hr;
  let height = getHeigthPeriod({ period: hr, schedule });
  const styleHour = {
    ...styles.hour,
    height,
  };
  return (
    <View key={hr} style={styleHour}>
      <TextStyle style={styles.hourValue}>{hr}</TextStyle>
    </View>
  );
}

const styles = StyleSheet.create({
  hour: {
    borderColor: "#999",
    borderBottomWidth: 1,
    padding: 3,
  },
  hourValue: {
    fontSize: 10,
    textAlign: "center",
  },
});
