import { View, StyleSheet, FlatList } from "react-native";
import { Link, useParams } from "react-router-native";
import SubjectInLevel from "./SubjectInLevel";
import BackIcon from "../icons/BackIcon";
import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../../context/studentContext";
import useLoading from "../../hooks/useLoading";
import { theme } from "../../theme";
import TextStyle from "../TextStyle";
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
        <TextStyle>Aprobada</TextStyle>
      </View>
      <View style={styles.state}>
        <View
          style={{
            ...styles.circle,
            borderColor: "#fff842",
            backgroundColor: "#ffec99",
          }}
        ></View>
        <TextStyle>Cursando</TextStyle>
      </View>
      <View style={styles.state}>
        <View
          style={{
            ...styles.circle,
            borderColor: "#ccc",
            backgroundColor: "#ccc",
          }}
        ></View>
        <TextStyle>No Cursada</TextStyle>
      </View>
    </View>
  );
}

export default function SubjectsInLevelList() {
  const { levels } = useContext(StudentContext);
  const level = useParams().level;
  const index = level.charCodeAt(0) - "A".charCodeAt(0);
  const subjects = levels[index].subjects;

  const [approved, setApproved] = useState(0);
  const [inProgress, setInProgress] = useState(0);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    const subjs = levels[index].subjects;
    const appro = subjs.filter((s) => s.state === "Aprobada").length;
    const inProg = subjs.filter((s) => s.state === "Cursando").length;
    const pendg = subjs.filter((s) => s.state === "No Cursada").length;
    setApproved(appro);
    setInProgress(inProg);
    setPending(pendg);
  }, [levels]);

  const { loading, finishedRender } = useLoading();

  return (
    <View style={styles.container} onLayout={finishedRender}>
      <View style={styles.content}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextStyle style={styles.title}>
            Licenciatura en Ing. Informática
          </TextStyle>
          <Link
            underlayColor={"transparent"}
            style={{
              alignSelf: "flex-end",
            }}
            to="/main/pensum"
          >
            <BackIcon />
          </Link>
        </View>
        <View style={styles.info}>
          <TextStyle style={styles.level}>Nivel {level}</TextStyle>
          <StatesSubject />
        </View>
        <View style={styles.info}>
          <TextStyle>Aprobadas: {approved}</TextStyle>
          <TextStyle>Cursando: {inProgress}</TextStyle>
          <TextStyle>No Cursadas: {pending}</TextStyle>
        </View>
        <FlatList
          initialNumToRender={1}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          data={subjects}
          ListFooterComponent={loading}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
    padding: 10,
    gap: 10,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 20,
    color: theme.colors.primary,
  },
  level: {
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
