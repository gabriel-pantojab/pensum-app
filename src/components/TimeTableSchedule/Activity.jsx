import { useContext } from "react";
import { ScheduleContext } from "./context/scheduleContext";
import { PERIOD_HEIGHT, formatHour, nextHour } from "./utils/utils";
import { View, StyleSheet } from "react-native";
import { Subject } from "./Subject";

export function Activity({ activity }) {
  const { schedule } = useContext(ScheduleContext);
  let HEIGHTTOTAL = 0;
  let hoursPeriods = [activity.period];
  let start = formatHour(activity.period);
  let i = activity.periods;
  while (i - 1) {
    start = nextHour(start);
    let h = start.split(":");
    hoursPeriods.push(parseInt(h[0]) + "" + h[1]);
    i--;
  }
  hoursPeriods.forEach((hr) => {
    HEIGHTTOTAL += getHeigthPeriod({ period: hr, schedule });
  });
  HEIGHTTOTAL =
    (2 * activity.subjects.length * PERIOD_HEIGHT) / activity.periods <
    HEIGHTTOTAL
      ? HEIGHTTOTAL
      : (2 * activity.subjects.length * PERIOD_HEIGHT) / activity.periods;
  const styleActivity = [
    styles.activity,
    {
      height: HEIGHTTOTAL,
    },
    activity.subjects.length > 1 && { backgroundColor: theme.colors.white },
  ];
  return (
    <View style={styleActivity}>
      {activity.subjects.map((subject) => (
        <Subject
          key={`${subject.sis ? subject.sis : Date.now() + Math.random()}`}
          subject={{ ...subject, periods: activity.periods }}
          choque={activity.subjects.length > 1}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  activity: {
    borderColor: "#999",
    borderBottomWidth: 1,
    justifyContent: "center",
  },
});
