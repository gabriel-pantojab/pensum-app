import { View } from "react-native";
import HeaderSchedule from "./HeaderSchedule";
import { getDateFormat } from "../../utils/utils";
import TimeTable from "./TimeTable";
import Constants from "expo-constants";
import { theme } from "../../theme";
import Header from "../Header";

export default function ClassesToday() {
  const date = new Date();
  const { day, monthName, dayName, year } = getDateFormat(date);
  const styCont = [
    {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      backgroundColor: theme.colors.white,
    },
  ];
  return (
    <View style={styCont}>
      <Header />
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
