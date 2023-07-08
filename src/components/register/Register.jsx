import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import { saveStudent } from "../../storage/storage";
import { useContext, useState } from "react";
import { StudentContext } from "../../context/studentContext";
import { Course, Levels } from "../../storage/createInformatica";

export default function Register() {
  const [username, setUsername] = useState("");
  const { setStudent, setCourse, setLevels } = useContext(StudentContext);
  const registrar = async () => {
    if (username === "") return;
    const newStudent = {
      name: username,
      description: "Estudiante de Ing. Informática",
      avatar: "",
    };
    setStudent(newStudent);
    saveStudent(newStudent);
    setCourse(Course);
    setLevels(Levels);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pensum Informática</Text>
      <Text style={styles.title}>Universidad Mayor de San Simón</Text>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <Button title="Registrar" onPress={registrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
});
