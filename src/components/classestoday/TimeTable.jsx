import { Text, View, StyleSheet, FlatList } from "react-native";
import useLoading from "../../hooks/useLoading";

const hours = [
  "06:45",

  "08:15",

  "09:45",

  "11:15",

  "12:45",

  "14:15",

  "15:45",

  "17:15",

  "18:45",

  "20:15",
];

//TODO: traer los datos de la base de datos
const borrar = [
  {
    name: "ALGORITMOS AVANZADOS",
    start: "06:45",
    end: "08:15",
    group: 1,
    classroom: "691D",
    backgroundColor: "#999",
    teacher: "",
  },
  {
    name: "REDES DE COMPUTADORAS",
    start: "09:45",
    end: "11:15",
    group: 2,
    classroom: "693D",
    backgroundColor: "green",
    teacher: "",
  },
  {
    name: "ESTRUCTURA Y SEMANTICA DE LENGUAJES DE PROGRAMACION",
    start: "09:45",
    end: "11:15",
    group: 1,
    classroom: "625C",
    teacher: "",
    backgroundColor: "red",
  },
];

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

function Cell({ hour }) {
  const end = nextHour(hour);
  const subjects = borrar.filter((b) => b.start === hour);
  const styContSubjects = [
    {
      flex: 1,
      position: "relative",
    },
    subjects.length > 1 && {
      height: 100 + 30 * subjects.length - 1,
    },
  ];
  const styCellHour = [
    styles.cellHour,
    subjects.length > 1 && {
      height: (100 + 30 * subjects.length - 1) / 2,
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        paddingLeft: 10,
      }}
    >
      <View>
        <View style={styCellHour}>
          <Text style={styles.hour}>{hour}</Text>
        </View>
        <View style={styCellHour}>
          <Text style={styles.hour}>{end}</Text>
        </View>
      </View>
      <View style={styContSubjects}>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        {subjects.length > 0 && <Subject subjects={subjects} />}
      </View>
    </View>
  );
}

function Subject({ subjects }) {
  const bg = subjects.map((s) => s.backgroundColor);
  const styC = [
    styles.subject,
    { backgroundColor: bg[0] },
    subjects.length > 1 && styles.choque,
    subjects.length > 1 && {
      height: 100 + 30 * subjects.length - 1,
    },
  ];
  const styT = [styles.subjectText, subjects.length > 1 && styles.choqueText];
  return (
    <View style={styC}>
      {subjects.map((s) => (
        <View key={s.name}>
          <Text style={styT}>{s.name}</Text>
          <Text style={styT}>
            {s.classroom} G:{s.group}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default function TimeTable() {
  const { loading, finishedRender } = useLoading();
  return (
    <View style={styles.container} onLayout={finishedRender}>
      <FlatList
        initialNumToRender={1}
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
  subject: {
    position: "absolute",
    height: 100,
    top: 1,
    left: 9,
    right: 0,
    bottom: 3,
    justifyContent: "center",
  },
  choque: {
    backgroundColor: "white",
  },
  subjectText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
  },
  choqueText: {
    color: "red",
  },
});
