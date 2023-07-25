import { View } from "react-native";
import HeaderClassesToday from "../../components/classestoday/HeaderClassesToday";
import TimeTable from "../../components/classestoday/timeTable/TimeTable";
import { getDateFormat } from "../../utils/utils";
import { theme } from "../../theme";

export default function ClassesTodayPage() {
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
