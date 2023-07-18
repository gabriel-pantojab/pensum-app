import { View } from "react-native";
import HeaderSchedule from "./HeaderSchedule";
import { getDateFormat } from "../../utils/utils";
import TimeTable from "./TimeTable";
import { theme } from "../../theme";

export default function ClassesToday() {
  const date = new Date();
  const { day, monthName, dayName, year } = getDateFormat(date);
  const styCont = [
    {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
  ];
  return (
    <View style={styCont}>
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
