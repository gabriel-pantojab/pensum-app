import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";
import { useDeviceOrientation } from "@react-native-community/hooks";
import ScheduleProvider from "../../components/timeTableSchedule/context/scheduleContext";
import { View, StyleSheet, ScrollView } from "react-native";
import ExpressHeader from "../../components/express/ExpressHeader";
import CareersList from "../../components/express/CareersList";
import TimeTableEschedule from "../../components/timeTableSchedule/TimeTableSchedule";
import { theme } from "../../theme";

export default function ExpressPage() {
  const { course } = useContext(StudentContext);
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
        <ExpressHeader />
        <ScrollView style={styles.content}>
          <TimeTableEschedule scrollVertical={false} />
          <CareersList
            carreraStudent={{
              name: course.name.toUpperCase(),
              sis: course.sis,
            }}
          />
        </ScrollView>
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
  },
});
