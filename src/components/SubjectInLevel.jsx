import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function SubjectInLevel({ name, state }) {
  const [stateSubject, setStateSubject] = useState(state);
  const stylesSubject = [
    styles.container,
    stateSubject === "No Cursada" && styles.noCursada,
    stateSubject === "Aprobada" && styles.aprobada,
    stateSubject === "Cursando" && styles.cursando,
  ];
  return (
    <View style={stylesSubject}>
      <Text
        style={{
          ...styles.title,
          color: stateSubject === "No Cursada" ? "#ccc" : "black",
        }}
      >
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    height: 100,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  noCursada: {
    borderColor: "#ccc",
    // backgroundColor: "#ccc",
  },
  aprobada: {
    backgroundColor: "#b2f2bb",
    borderColor: "#2f9e44",
  },
  cursando: {
    borderColor: "#fff842",
    backgroundColor: "#ffec99",
  },
});
