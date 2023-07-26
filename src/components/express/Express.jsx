import { View, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { theme } from "../../theme";
import { StudentContext } from "../../context/studentContext";
import ScheduleProvider from "../timeTableSchedule/context/scheduleContext";
import TimeTableEschedule from "../timeTableSchedule/TimeTableSchedule";
import ExpressHeader from "./ExpressHeader";
import CareersList from "./CareersList";

export default function Express() {
  const { course } = useContext(StudentContext);
  const [showCarreras, setShowCarreras] = useState(false);
  return (
    <ScheduleProvider>
      <View style={styles.container}>
        <ExpressHeader
          action={() => {
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
