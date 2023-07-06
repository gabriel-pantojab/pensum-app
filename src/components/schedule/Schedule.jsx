import { View, Dimensions } from "react-native";
import HeaderSchedule from "./HeaderSchedule";
import { getDateFormat } from "../../utils/utils";
import TimeTable from "./TimeTable";

function ScheduleContent({ date }) {
  const { day, monthName, dayName, year } = getDateFormat(date);
  return (
    <View
      style={{
        flex: 1,
        width: Dimensions.get("window").width,
      }}
    >
      <HeaderSchedule
        month={monthName}
        dayName={dayName}
        day={day}
        year={year}
      />
      <TimeTable />
    </View>
  );
}

export default function Schedule() {
  const date = new Date();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScheduleContent date={date} />
    </View>
  );
}
