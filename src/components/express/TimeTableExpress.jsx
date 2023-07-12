import { ScrollView, View, Text, StyleSheet, FlatList } from "react-native";

function Day({ dayName }) {
  const activities = [
    "Actividades 1",
    "Actividades 2",
    "Actividades 3",
    "Actividades 4",
    "Actividades 5",
    "Actividades 6",
    "Actividades 7",
    "Actividades 8",
    "Actividades 9",
    "Actividades 10",
    "Actividades 11",
    "Actividades 12",
    "Actividades 13",
    "Actividades 14",
    "Actividades 15",
  ];
  return (
    <View style={styles.day}>
      <View style={styles.activities}>
        {activities.map((activity) => (
          <Text
            style={{
              padding: 5,
              borderColor: "#f9faf5",
              borderWidth: 1,
              textAlign: "center",
            }}
            key={activity}
          >
            {activity}
          </Text>
        ))}
      </View>
    </View>
  );
}

export default function TimeTableExpress() {
  const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerScroll} horizontal>
        <View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "red",
            }}
          >
            {days.map((day) => (
              <View key={day} style={styles.day}>
                <Text style={styles.dayName}>{day}</Text>
              </View>
            ))}
          </View>
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
            }}
          >
            {days.map((day) => (
              <Day key={day} dayName={day} />
            ))}
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
  },
  containerScroll: {
    alignItems: "flex-start",
  },
  day: {
    flex: 1,
  },
  dayName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 1,
  },
});
