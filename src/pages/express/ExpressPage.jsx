import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";
import ScheduleProvider from "../../components/timeTableSchedule/context/scheduleContext";
import { View, StyleSheet, ScrollView } from "react-native";
import ExpressHeader from "../../components/express/ExpressHeader";
import CareersList from "../../components/express/CareersList";
import TimeTableEschedule from "../../components/timeTableSchedule/TimeTableSchedule";
import { theme } from "../../theme";

export default function ExpressPage() {
  const { course } = useContext(StudentContext);

  return (
    <ScheduleProvider>
      <View style={styles.container}>
        <ExpressHeader />
        <ScrollView style={styles.content}>
          <TimeTableEschedule />
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
