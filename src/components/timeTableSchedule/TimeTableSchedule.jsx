import { ScrollView, View, StyleSheet } from "react-native";
import { Hours } from "./Hours";
import { LoadingSchedule } from "./LoadingSchedule";
import { Day } from "./Day";
import { useContext } from "react";
import { ScheduleContext } from "./context/scheduleContext";
import { theme } from "../../theme";
import { getActivitiesDay, getHours } from "./utils/utils";

const ContainerTable = ({ scrollVertical, children }) => {
  if (scrollVertical) {
    return (
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          backgroundColor: theme.colors.white,
        }}
      >
        {children}
      </ScrollView>
    );
  } else {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: theme.colors.white,
        }}
      >
        {children}
      </View>
    );
  }
};

export default function TimeTableEschedule({ scrollVertical }) {
  const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  const { schedule } = useContext(ScheduleContext);
  const hours = getHours({ minPeriod: "645", maxPeriod: "2145" });
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerScroll} horizontal>
        <ContainerTable scrollVertical={scrollVertical}>
          {!schedule ? (
            <LoadingSchedule />
          ) : (
            <>
              <Hours hours={hours} />
              {days.map((day) => {
                let activities = getActivitiesDay({
                  dayName: day.toLowerCase(),
                  schedule,
                  minPeriod: "645",
                  maxPeriod: "2145",
                });
                return <Day key={day} dayName={day} activities={activities} />;
              })}
            </>
          )}
        </ContainerTable>
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
