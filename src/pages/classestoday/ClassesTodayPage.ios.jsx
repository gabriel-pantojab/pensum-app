import { useDeviceOrientation } from "@react-native-community/hooks";
import { getDateFormat } from "../../utils/utils";
import { View } from "react-native";
import HeaderClassesToday from "../../components/classestoday/HeaderClassesToday";
import TimeTable from "../../components/classestoday/TimeTable/TimeTable";
import { theme } from "../../theme";
import Constants from "expo-constants";

export default function ClassesTodayPage() {
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
