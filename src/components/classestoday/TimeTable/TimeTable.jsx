import { FlatList, View, StyleSheet } from "react-native";
import Cell from "./Cell";
import useLoading from "../../../hooks/useLoading";
import { useEffect, useState } from "react";
import { getSchedule } from "../../../storage/storage";
import { completeDay, freeDay } from "./utils";
import { getDateFormat } from "../../../utils/utils";

export default function TimeTable() {
  const { loading, finishedRender } = useLoading();
  const [schedule, setSchedule] = useState(null);
  useEffect(() => {
    const { dayName } = getDateFormat(new Date());
    getSchedule().then((res) => {
      day = dayName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (res && res.schedule[day]) {
        const scheduleDay = res.schedule[day];
        const hoursComplete = completeDay({ scheduleDay });
        setSchedule(hoursComplete);
      } else {
        setSchedule(freeDay);
      }
    });
  }, []);
  return (
    <View style={styles.container} onLayout={finishedRender}>
      {schedule && (
        <FlatList
          // initialNumToRender={1}
          contentContainerStyle={{
            position: "relative",
            paddingVertical: 10,
          }}
          data={schedule}
          renderItem={({ item }) => {
            return (
              <Cell
                hour={item.hour}
                subjects={item.subjects}
                periods={item.periods}
              />
            );
          }}
          keyExtractor={(item) => item.hour}
          ListFooterComponent={loading}
        />
      )}

      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  line: {
    position: "absolute",
    top: 5,
    bottom: 0,
    width: 2,
    left: 55,
    backgroundColor: "#ccc",
    zIndex: 1,
  },
});
