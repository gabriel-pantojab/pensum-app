import { View } from "react-native";
import { getDateFormat } from "../../utils/utils";
import Constants from "expo-constants";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { theme } from "../../theme";
import HeaderClassesToday from "./HeaderClassesToday";
import TimeTable from "./timeTable/TimeTable";

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
