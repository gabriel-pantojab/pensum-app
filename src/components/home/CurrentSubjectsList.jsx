import { View, Text, StyleSheet } from "react-native";
import SubjectInpProgress from "./SubjectInpProgress";
import { getSchedule } from "../../storage/storage";
import { useEffect, useState } from "react";
import { theme } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    position: "relative",
    borderRadius: 10,
    borderWidth: 2,
    paddingTop: 20,
    padding: 10,
    marginBottom: 20,
  },
  title: {
    position: "absolute",
    top: -18,
    left: 10,
    fontSize: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.white,
  },
  list: {
    gap: 20,
  },
});

function getTeacherAndGroup(schedule, subjectName) {
  let teacher = "",
    group = "";
  schedule.map((subject) => {
    if (subject.subjectName === subjectName) {
      group = subject.grupo;
      if (subject.titular && subject.titular.docente) {
        teacher = subject.titular.docente;
      } else {
        if (subject.auxiliar && subject.auxiliar.nombre) {
          teacher = subject.auxiliar.nombre;
        }
      }
    }
  });
  return { teacher, group };
}

export default function CurrentSubjectsList({ subjects }) {
  const [schedule, setSchedule] = useState(null);
  useEffect(() => {
    getSchedule().then((res) => {
      if (res) {
        if (res.selectedSubjects) {
          setSchedule(res.selectedSubjects);
        }
      } else {
        setSchedule({});
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cursando</Text>
      {subjects.length > 0 ? (
        <View style={styles.list}>
          {schedule &&
            subjects.map((item) => {
              let teacher = "",
                group = "";
              if (Object.keys(schedule).length > 0) {
                const res = getTeacherAndGroup(schedule, item.name);
                teacher = res.teacher;
                group = res.group;
              }
              return (
                <SubjectInpProgress
                  name={item.name}
                  group={group}
                  teacher={teacher}
                  level={item.level}
                  key={item.name}
                />
              );
            })}
        </View>
      ) : (
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "#ccc",
            margin: 20,
          }}
        >
          No esta cursando ni una materia
        </Text>
      )}
    </View>
  );
}
