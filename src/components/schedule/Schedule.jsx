import { View, StyleSheet } from "react-native";
import HeaderSchedule from "./HeaderSchedule";
import { currentDate } from "../../utils/utils";
import TimeTable from "./TimeTable";

export default function Schedule() {
  const { day, month, dayName, year } = currentDate();
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
        <HeaderSchedule month={month} dayName={dayName} day={day} year={year} />
        <TimeTable />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
