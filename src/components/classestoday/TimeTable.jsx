import { Text, View, StyleSheet, FlatList } from "react-native";
import useLoading from "../../hooks/useLoading";
import { useEffect, useState } from "react";
import { getSchedule } from "../../storage/storage";
import { getDateFormat } from "../../utils/utils";
import { formatHour } from "../express/utils";

function buildFreeDay() {
  let freeDay = [];
  let start = "06:45";
  while (start != "21:45") {
    freeDay.push({
      hour: start,
      subjects: [],
      periods: 0,
    });
    start = nextHour(start);
  }
  return freeDay;
}

const freeDay = buildFreeDay();

function nextHour(hour) {
  let [h, m] = hour.split(":");
  h = parseInt(h);
  m = parseInt(m);
  let totalMinutos = h * 60 + m + 45;
  let newHour = Math.floor(totalMinutos / 60);
  let newMinutes = totalMinutos % 60;
  const hourS = newHour < 10 ? `0${newHour}` : newHour;
  const minS = newMinutes < 10 ? `0${newMinutes}` : newMinutes;
  return `${hourS}:${minS}`;
}

function Cell({ hour, subjects, periods }) {
  let hours = [hour];
  let next = hour;
  let i = periods - 1;
  while (i > 0) {
    next = nextHour(next);
    hours.push(next);
    i--;
  }
  const height = periods ? 50 * periods : 50;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        paddingLeft: 10,
      }}
    >
      <View
        style={{
          ...styles.cellHour,
          height,
        }}
      >
        {hours.map((h) => (
          <Text key={h} style={styles.hour}>
            {parseInt(h.split(":")[0]) < 10
              ? `0${parseInt(h.split(":")[0])}:${h.split(":")[1]}`
              : h}
          </Text>
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

function Subject({ subjects }) {
  const bg = subjects.map((s) => s.color);
  const styC = [
    styles.subject,
    { backgroundColor: bg[0] },
    subjects.length > 1 && styles.choque,
  ];
  const styT = [styles.subjectText, subjects.length > 1 && styles.choqueText];
  return (
    <View style={styC}>
      {subjects.map((s) => (
        <View key={s.subjectName}>
          <Text style={styT}>{s.subjectName}</Text>
          <Text style={styT}>
            {s.classroom} G:{s.group}
          </Text>
        </View>
      ))}
    </View>
  );
}

function completeDay({ scheduleDay }) {
  let hoursComplete = [];
  let hours = Object.keys(scheduleDay);
  if (!hours.includes("645")) {
    hours = ["645", ...hours];
  }
  if (!hours.includes("2145")) {
    hours = [...hours, "2145"];
  }
  for (let i = 0; i < hours.length - 1; i++) {
    const current = hours[i];
    const next = hours[i + 1];
    let periods = scheduleDay[current] ? scheduleDay[current].periods : 0;
    let start = formatHour(current);
    if (periods)
      hoursComplete.push({
        hour: start,
        subjects: scheduleDay[current].subjects,
        periods,
      });
    else {
      hoursComplete.push({
        hour: start,
        subjects: [],
        periods: 0,
      });
    }
    while (periods - 1 > 0) {
      start = nextHour(start);
      periods--;
    }
    start = nextHour(start);
    while (start != formatHour(next) && start != "0" + formatHour(next)) {
      hoursComplete.push({
        hour: start,
        subjects: [],
        periods: 0,
      });
      start = nextHour(start);
    }
  }
  return hoursComplete;
}

export default function TimeTable() {
  const { loading, finishedRender } = useLoading();
  const [schedule, setSchedule] = useState(null);
  useEffect(() => {
    const { dayName } = getDateFormat(new Date());
    getSchedule().then((res) => {
      if (res) {
        day = dayName
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        if (res.schedule[day]) {
          const scheduleDay = res.schedule[day];
          const hoursComplete = completeDay({ scheduleDay });
          setSchedule(hoursComplete);
        } else {
          setSchedule(freeDay);
        }
      } else {
        setSchedule(freeDay);
      }
    });
  }, []);
  return (
    <View style={styles.container} onLayout={finishedRender}>
      {schedule && (
        <FlatList
          initialNumToRender={1}
          contentContainerStyle={{
            position: "relative",
            paddingVertical: 10,
          }}
          data={schedule}
          renderItem={({ item }) => (
            <Cell
              hour={item.hour}
              subjects={item.subjects}
              periods={item.periods}
            />
          )}
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
  hours: {
    padding: 10,
  },
  cellHour: {
    justifyContent: "center",
    alignItems: "center",
  },
  hour: {
    fontSize: 15,
    fontWeight: "bold",
    height: 50,
    textAlign: "center",
  },
  activities: {
    flex: 1,
    paddingVertical: 10,
  },
  cell: {
    position: "relative",
    flex: 1,
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
  subject: {
    position: "absolute",
    top: 1,
    left: 7,
    right: 0,
    bottom: 1,
    justifyContent: "center",
  },
  choque: {
    backgroundColor: "white",
  },
  subjectText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  choqueText: {
    color: "red",
  },
});
