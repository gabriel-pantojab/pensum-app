import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useContext, useState } from "react";
import useLoading from "../../hooks/useLoading";
import ScheduleProvider from "../timeTableSchedule/context/scheduleContext";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { theme } from "../../theme";
import TimeTableEschedule from "../timeTableSchedule/TimeTableSchedule";
import ExpressHeader from "./ExpressHeader.ios";
import CareersList from "./CareersList.ios";
import { StudentContext } from "../../context/studentContext";

export default function Express() {
  const { course } = useContext(StudentContext);
  const [showCarreras, setShowCarreras] = useState(false);
  const { initLoading } = useLoading();
  const orientation = useDeviceOrientation();

  const styCont = [
    styles.container,
    orientation === "landscape" && {
      paddingLeft: Constants.statusBarHeight,
    },
  ];

  return (
    <ScheduleProvider>
      <View style={styCont}>
        <ExpressHeader
          action={() => {
            initLoading(true);
            setShowCarreras(!showCarreras);
          }}
          showCarreras={showCarreras}
        />
        <View style={styles.content}>
          {showCarreras && (
            <CareersList
              carreraStudent={{
                name: course.name.toUpperCase(),
                sis: course.sis,
              }}
            />
          )}
          <TimeTableEschedule />
        </View>
      </View>
    </ScheduleProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
});
