import { View, Text, StyleSheet, FlatList } from "react-native";
import { Link, useParams } from "react-router-native";

import SubjectInLevel from "./SubjectInLevel";
import BackIcon from "./icons/BackIcon";
import { useContext } from "react";
import { StudentContext } from "../context/studentContext";

function StatesSubject() {
  return (
    <View style={styles.states}>
      <View style={styles.state}>
        <View
          style={{
            ...styles.circle,
            backgroundColor: "#b2f2bb",
            borderColor: "#2f9e44",
          }}
        ></View>
        <Text>Aprobada</Text>
      </View>
      <View style={styles.state}>
        <View
          style={{
            ...styles.circle,
            borderColor: "#fff842",
            backgroundColor: "#ffec99",
          }}
        ></View>
        <Text>Cursando</Text>
      </View>
      <View style={styles.state}>
        <View
          style={{
            ...styles.circle,
            borderColor: "#ccc",
            backgroundColor: "#ccc",
          }}
        ></View>
        <Text>No Cursada</Text>
      </View>
    </View>
  );
}

export default function SubjectsInLevel() {
  const { levels } = useContext(StudentContext);
  const level = useParams().level;
  const index = level.charCodeAt(0) - "A".charCodeAt(0);
  const subjects = levels[index].subjects;

  return (
    <View style={styles.container}>
      <Link
        underlayColor={"transparent"}
        style={{
          alignSelf: "flex-end",
        }}
        to="/pensum"
      >
        <BackIcon />
      </Link>
      <Text style={styles.title}>Licenciatura en Ing. Informática</Text>
      <View style={styles.info}>
        <Text style={styles.level}>Nivel {level}</Text>
        <StatesSubject />
      </View>
      <FlatList
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        data={subjects}
        renderItem={({ item }) => {
          return (
            <SubjectInLevel
              name={item.name}
              state={item.state}
              level={level}
              id={item.id}
              key={item.id}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  level: {
    fontWeight: "bold",
    fontSize: 18,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  states: {},
  state: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
});
