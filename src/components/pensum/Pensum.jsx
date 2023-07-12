import { View, Text, StyleSheet, FlatList } from "react-native";
import { Link } from "react-router-native";
import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../../context/studentContext";
import useLoading from "../../hooks/useLoading";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    padding: 10,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
    fontWeight: "bold",
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
      to={`/pensum/${name}`}
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
        <Text
          style={{
            ...styles.titleLevel,
            color: progress > 0 || inProgress ? "black" : "#ccc",
          }}
        >
          Nivel {name}
        </Text>
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
            Cursando:{subjectsInProgress}
          </Text>
          <Text
            style={{
              color: progress > 0 || inProgress ? "black" : "#ccc",
            }}
          >
            No Cursadas:{pending}
          </Text>
        </View>
      </>
    </Link>
  );
}

export default function Pensum() {
  const { levels } = useContext(StudentContext);

  const { loading, finishedRender } = useLoading();

  return (
    <View style={styles.container} onLayout={finishedRender}>
      <Text style={styles.title}>Licenciatura en Ing. Informática</Text>
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
  );
}