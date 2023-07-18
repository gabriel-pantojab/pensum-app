import { Text, View, TextInput, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { saveStudent } from "../../storage/storage";
import { useContext, useState } from "react";
import { StudentContext } from "../../context/studentContext";
import { Course, Levels } from "../../storage/createInformatica";
import { Pressable } from "react-native";
import { theme } from "../../theme";
import Loading from "../Loading";
import { StatusBar } from "expo-status-bar";
import Eagle from "../icons/Eagle";
import Birrete from "../icons/Birrete";

export default function Register({ login }) {
  const [username, setUsername] = useState("");
  const [registrando, setRegistrando] = useState(false);
  const [emptyField, setEmptyField] = useState(false);
  const { setStudent, setCourse, setLevels, setCurrentSubjectsList } =
    useContext(StudentContext);
  const registrar = async () => {
    if (username === "") {
      setEmptyField(true);
      return;
    }
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
      login();
    });
  };
  const styInput = [
    styles.input,
    emptyField && { borderColor: theme.colors.redIinformatica },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={{ ...styles.title, color: theme.colors.primary }}>
          Universidad Mayor de San Simón
        </Text>
        <Text style={{ ...styles.title, color: theme.colors.redIinformatica }}>
          Pensum Ing. Informática
        </Text>
      </View>
      <View style={styles.register}>
        <Text style={{ ...styles.title, fontSize: 18 }}>Registro</Text>
        <TextInput
          style={styInput}
          value={username}
          onChangeText={(e) => {
            const regex = /^[a-zA-Z ]*$/;
            if (regex.test(e)) {
              setUsername(e);
              setEmptyField(false);
            }
          }}
          placeholder="Nombre"
        />
        {emptyField && (
          <Text style={{ fontSize: 12, color: theme.colors.redIinformatica }}>
            El nombre no puede estar vacío
          </Text>
        )}
        <Pressable onPress={registrar}>
          <Text style={styles.button}>Registrar</Text>
        </Pressable>
        {registrando && <Loading />}
        <View
          style={{
            marginTop: 30,
          }}
        >
          <Birrete
            color={theme.colors.redIinformatica}
            width={150}
            height={150}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
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
