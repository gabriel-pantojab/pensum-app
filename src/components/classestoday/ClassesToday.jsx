import { View } from "react-native";
import { getDateFormat } from "../../utils/utils";
import TimeTable from "./timeTable/TimeTable";
import { theme } from "../../theme";
import HeaderClassesToday from "./HeaderClassesToday";

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
      <HeaderClassesToday
        month={monthName}
        dayName={dayName}
        day={day}
        year={year}
      />
      <TimeTable />
    </View>
  );
}
