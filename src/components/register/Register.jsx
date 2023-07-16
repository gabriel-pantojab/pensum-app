import { Text, View, TextInput, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import { saveStudent } from "../../storage/storage";
import { useContext, useState } from "react";
import { StudentContext } from "../../context/studentContext";
import { Course, Levels } from "../../storage/createInformatica";
import { Pressable } from "react-native";
import { theme } from "../../theme";
import Loading from "../Loading";

function Devs() {
  const styGab = {
    fontWeight: "bold",
    color: "#1971c2",
  };
  const styTher = {
    fontWeight: "bold",
    color: "#c080ff",
  };
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 50,
        flexDirection: "row",
        transform: [{ rotate: "-40deg" }],
      }}
    >
      <Text style={styGab}>gab</Text>
      <Text style={styTher}>ther</Text>
      <Text style={styGab}>+</Text>
      <Text style={styTher}>+</Text>
    </View>
  );
}

export default function Register() {
  const [username, setUsername] = useState("");
  const [registrando, setRegistrando] = useState(false);
  const { setStudent, setCourse, setLevels, setCurrentSubjectsList } =
    useContext(StudentContext);
  const registrar = async () => {
    if (username === "") return;
    setRegistrando(true);
    const newStudent = {
      name: username,
      description: "Estudiante de Ing. Informática",
      avatar: "",
    };

    Promise.all([
      setStudent(newStudent),
      saveStudent(newStudent),
      setCourse(Course),
      setLevels(Levels),
      setCurrentSubjectsList([]),
    ]).then(() => {
      setRegistrando(false);
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ ...styles.title, color: "#073476" }}>
          Universidad Mayor de San Simón
        </Text>
        <Text style={{ ...styles.title, color: "#dc3545" }}>
          Pensum Informática
        </Text>
      </View>
      <View style={styles.register}>
        <Text style={{ ...styles.title, fontSize: 18 }}>Registro</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Nombre"
        />
        <Pressable onPress={registrar}>
          <Text style={styles.button}>Registrar</Text>
        </Pressable>
        {registrando && <Loading />}
        <Devs />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    backgroundColor: theme.colors.white,
    gap: 20,
  },
  register: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "#0C134F",
  },
  header: {},
  button: {
    width: 300,
    backgroundColor: "#0C134F",
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
  },
});
