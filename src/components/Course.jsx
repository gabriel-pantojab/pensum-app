import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: "90%",
    borderRadius: 10,
    position: "relative",
    paddingTop: 20,
    padding: 10,
    gap: 15,
  },
  title: {
    position: "absolute",
    top: -18,
    left: 10,
    fontSize: 20,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  infoSubjects: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default function Course() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrera</Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        Ing. Informática
      </Text>
      <Text>Total Materias: 48</Text>
      <View style={styles.infoSubjects}>
        <Text>Aprobadas: 2</Text>
        <Text>Cursando: 2</Text>
        <Text>Restantes: 46</Text>
      </View>
    </View>
  );
}
