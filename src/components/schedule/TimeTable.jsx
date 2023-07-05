import React from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import useLoading from "../../hooks/useLoading";

const hours = [
  "06:45",
  "07:30",
  "08:15",
  "09:00",
  "09:45",
  "10:30",
  "11:15",
  "12:00",
  "12:45",
  "13:30",
  "14:15",
  "15:00",
  "15:45",
  "16:30",
  "17:15",
  "18:00",
  "18:45",
  "19:30",
  "20:15",
  "21:00",
];

function Cell({ hour }) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingLeft: 10,
      }}
    >
      <View style={styles.cellHour}>
        <Text style={styles.hour}>{hour}</Text>
      </View>
      <View style={styles.cell}></View>
    </View>
  );
}

export default function TimeTable() {
  const { loading, finishedRender } = useLoading();
  return (
    <View style={styles.container} onLayout={finishedRender}>
      <FlatList
        initialNumToRender={5}
        contentContainerStyle={{
          position: "relative",
          paddingVertical: 10,
        }}
        data={hours}
        renderItem={({ item }) => <Cell hour={item} />}
        keyExtractor={(item) => item}
        ListFooterComponent={loading}
      />
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  hours: {
    padding: 10,
  },
  cellHour: {
    height: 50,
    justifyContent: "center",
  },
  hour: {
    fontSize: 15,
    fontWeight: "bold",
  },
  activities: {
    flex: 1,
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    height: 50,
    borderColor: "#ccc",
    borderTopWidth: 1,
    borderBottomWidth: 1,
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
