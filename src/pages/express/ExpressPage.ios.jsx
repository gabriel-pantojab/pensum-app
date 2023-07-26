import { useContext, useState } from "react";
import { StudentContext } from "../../context/studentContext";
import useLoading from "../../hooks/useLoading";
import { useDeviceOrientation } from "@react-native-community/hooks";
import ScheduleProvider from "../../components/timeTableSchedule/context/scheduleContext";
import { View, StyleSheet } from "react-native";
import ExpressHeader from "../../components/express/ExpressHeader";
import CareersList from "../../components/express/CareersList";
import TimeTableEschedule from "../../components/timeTableSchedule/TimeTableSchedule";
import { theme } from "../../theme";

export default function ExpressPage() {
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
