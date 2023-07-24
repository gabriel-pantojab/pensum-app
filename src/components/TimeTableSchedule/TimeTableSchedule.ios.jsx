import { ScrollView, View, StyleSheet } from "react-native";
import { Hours } from "./Hours";
import { LoadingSchedule } from "./LoadingSchedule";
import { Day } from "./Day";
import { useContext } from "react";
import { ScheduleContext } from "./context/scheduleContext";
import { theme } from "../../theme";
import { getActivitiesDay, getHours } from "./utils/utils";
import { useDeviceOrientation } from "@react-native-community/hooks";
import Constants from "expo-constants";

export default function TimeTableEschedule() {
  const orientation = useDeviceOrientation();
  const styCont = [
    styles.container,
    orientation === "landscape" && {
      paddingLeft: Constants.statusBarHeight,
    },
  ];
  const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  const { schedule, minPeriod, maxPeriod } = useContext(ScheduleContext);
  const hours = getHours({ minPeriod, maxPeriod });
  return (
    <View style={styCont}>
      <ScrollView contentContainerStyle={styles.containerScroll} horizontal>
        <View>
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              backgroundColor: theme.colors.white,
            }}
          >
            {!schedule ? (
              <LoadingSchedule />
            ) : (
              <>
                <Hours hours={hours} />
                {days.map((day) => {
                  let activities = getActivitiesDay({
                    dayName: day.toLowerCase(),
                    schedule,
                    minPeriod,
                    maxPeriod,
                  });
                  return (
                    <Day key={day} dayName={day} activities={activities} />
                  );
                })}
              </>
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  containerScroll: {
    alignItems: "flex-start",
    backgroundColor: theme.colors.white,
  },
});
