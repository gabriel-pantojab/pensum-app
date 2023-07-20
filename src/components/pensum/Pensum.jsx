import { View, Text, StyleSheet, FlatList } from "react-native";
import { Link } from "react-router-native";
import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../../context/studentContext";
import useLoading from "../../hooks/useLoading";
import { theme } from "../../theme";
import TextStyle from "../TextStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
    gap: 20,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 20,
    color: theme.colors.primary,
  },
  level: {
    position: "relative",
    borderWidth: 2,
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  progress: {
    alignSelf: "flex-start",
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundColor: "#b2f2bb",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  titleLevel: {
    fontSize: 18,
  },
});

function Level({ name, progress = 0, inProgress = false, index }) {
  const { levels } = useContext(StudentContext);
  const [approved, setApproved] = useState(0);
  const [subjectsInProgress, setSubjectsInProgress] = useState(0);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    const subjs = levels[index].subjects;
    const appro = subjs.filter((s) => s.state === "Aprobada").length;
    const inProg = subjs.filter((s) => s.state === "Cursando").length;
    const pendg = subjs.filter((s) => s.state === "No Cursada").length;
    setApproved(appro);
    setSubjectsInProgress(inProg);
    setPending(pendg);
  }, []);

  return (
    <Link
      to={`/main/pensum/${name}`}
      underlayColor={"transparent"}
      style={{
        ...styles.level,
        borderColor: progress > 0 || inProgress ? "#2f9e44" : "#ccc",
      }}
    >
      <>
        <View
          style={{
            ...styles.progress,
            width: `${progress}%`,
            borderBottomRightRadius: progress === 100 ? 8 : 0,
            borderTopRightRadius: progress === 100 ? 8 : 0,
          }}
        ></View>
        <TextStyle
          style={{
            ...styles.titleLevel,
            color: progress > 0 || inProgress ? "black" : "#ccc",
          }}
        >
          Nivel {name}
        </TextStyle>
        <View
          style={{
            alignSelf: "flex-start",
            padding: 10,
          }}
        >
          <Text
            style={{
              color: progress > 0 || inProgress ? "black" : "#ccc",
            }}
          >
            Aprobadas: {approved}
          </Text>
          <Text
            style={{
              color: progress > 0 || inProgress ? "black" : "#ccc",
            }}
          >
            Cursando: {subjectsInProgress}
          </Text>
          <Text
            style={{
              color: progress > 0 || inProgress ? "black" : "#ccc",
            }}
          >
            No Cursadas: {pending}
          </Text>
        </View>
      </>
    </Link>
  );
}

export default function Pensum() {
  const { levels } = useContext(StudentContext);

  const { loading, finishedRender } = useLoading();

  const styCont = [styles.container];
  return (
    <View style={styCont} onLayout={finishedRender}>
      <View style={styles.content}>
        <TextStyle style={styles.title}>
          Licenciatura en Ing. Informática
        </TextStyle>
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          data={levels}
          initialNumToRender={1}
          ListFooterComponent={loading}
          renderItem={({ item, index }) => (
            <Level
              key={item.id}
              progress={item.progress}
              name={item.name}
              inProgress={item.inProgress}
              index={index}
            />
          )}
        />
      </View>
    </View>
  );
}
