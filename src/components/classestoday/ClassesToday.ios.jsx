import { View } from "react-native";
import HeaderSchedule from "./HeaderSchedule";
import { getDateFormat } from "../../utils/utils";
import TimeTable from "./TimeTable";
import Constants from "expo-constants";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { theme } from "../../theme";

export default function ClassesToday() {
  const orientation = useDeviceOrientation();
  const date = new Date();
  const { day, monthName, dayName, year } = getDateFormat(date);
  const styCont = [
    {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    orientation === "landscape" && {
      paddingLeft: Constants.statusBarHeight,
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
