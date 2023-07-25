import { View, StyleSheet } from "react-native";
import TextStyle from "../../TextStyle";
import { nextHour } from "./utils";
import Subject from "./Subject";

export default function Cell({ hour, subjects, periods }) {
  let hours = [hour];
  let next = hour;
  let i = periods - 1;
  while (i > 0) {
    next = nextHour(next);
    hours.push(next);
    i--;
  }
  const height = periods
    ? subjects.length > 1
      ? 50 * subjects.length
      : 50 * periods
    : 50;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        paddingLeft: 15,
      }}
    >
      <View
        style={{
          ...styles.cellHour,
          height,
        }}
      >
        {hours.map((h) => (
          <TextStyle key={h} style={styles.hour}>
            {parseInt(h.split(":")[0]) < 10
              ? `0${parseInt(h.split(":")[0])}:${h.split(":")[1]}`
              : h}
          </TextStyle>
        ))}
      </View>
      <View style={{ flex: 1, position: "relative" }}>
        <View
          style={{
            ...styles.cell,
            height,
          }}
        />
        {subjects.length > 0 && (
          <Subject subjects={subjects} periods={periods} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  cellHour: {
    justifyContent: "center",
    alignItems: "center",
  },
  hour: {
    fontSize: 15,
    height: 50,
    textAlign: "center",
  },
  cell: {
    position: "relative",
    flex: 1,
    borderColor: "#ccc",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});
