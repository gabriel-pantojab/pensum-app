import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Link } from "react-router-native";
import BackIcon from "../icons/BackIcon";
import { theme } from "../../theme";
import Constants from "expo-constants";
import { useContext, useState } from "react";
import { getUser, login as loginFirebase } from "../../../firebaseconfig";
import { Alert } from "react-native";
import { StudentContext } from "../../context/studentContext";
import {
  saveCourse,
  saveCurrentSubjectsList,
  saveLevels,
  saveSchedule,
  saveStudent,
} from "../../storage/storage";
import Loading from "../Loading";

const styles = StyleSheet.create({
  login: {
    marginTop: Constants.statusBarHeight,
    position: "relative",
    flex: 1,
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "#0C134F",
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
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

export default function Login() {
  const [iniciando, setIniciando] = useState(false);
  const { setStudent, setCourse, setCurrentSubjectsList, setLevels } =
    useContext(StudentContext);
  const [nickname, setNickname] = useState("");
  const [emptyFieldNickName, setEmptyFieldNickName] = useState(false);

  const [password, setPassword] = useState("");
  const [emptyFieldPassword, setEmptyFieldPassword] = useState(false);

  const iniciarSesion = async () => {
    if (nickname === "") {
      setEmptyFieldNickName(true);
      return;
    }
    if (password === "") {
      setEmptyFieldPassword(true);
      return;
    }
    setIniciando(true);
    loginFirebase({
      nickname,
      password,
    })
      .then((res) => {
        const uid = res.user.uid;
        getUser({ uid }).then(async (resp) => {
          const user = resp.user;
          const course = resp.course;
          const currentSubjectsList = resp.currentSubjectsList;
          const levels = resp.levels;
          const schedule = resp.schedule;
          if (user) {
            setStudent(user);
            await saveStudent(user);
          }
          if (course) {
            setCourse(course);
            await saveCourse(course);
          }
          if (currentSubjectsList) {
            setCurrentSubjectsList(currentSubjectsList);
            await saveCurrentSubjectsList(currentSubjectsList);
          }
          if (levels) {
            setLevels(levels);
            await saveLevels(levels);
          }
          if (schedule) {
            await saveSchedule(schedule);
          }
          setIniciando(false);
        });
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found") {
          Alert.alert(
            "Usuario no encontrado",
            "El usuario ingresado no existe",
            [
              {
                text: "Aceptar",
                onPress: () => {
                  setNickname("");
                  setPassword("");
                },
              },
            ]
          );
        } else if (err.code === "auth/wrong-password") {
          Alert.alert("Datos incorrectos", "Usuario o contraseña incorrectos", [
            {
              text: "Aceptar",
              onPress: () => {
                setPassword("");
                setNickname("");
              },
            },
          ]);
        }
        setIniciando(false);
      });
  };

  const styInputNickName = [
    styles.input,
    emptyFieldNickName && { borderColor: theme.colors.redIinformatica },
  ];

  const styInputPassword = [
    styles.input,
    emptyFieldPassword && { borderColor: theme.colors.redIinformatica },
  ];

  return (
    <View style={styles.login}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
          padding: 10,
        }}
      >
        <Link to="/" underlayColor="transparent">
          <BackIcon />
        </Link>
      </View>
      <Text style={styles.title}>Inicio se Sesión</Text>
      <TextInput
        style={styInputNickName}
        placeholder="NickName"
        onChangeText={(text) => {
          setNickname(text);
          setEmptyFieldNickName(false);
        }}
        value={nickname}
      />
      {emptyFieldNickName && (
        <Text style={{ fontSize: 12, color: theme.colors.redIinformatica }}>
          Debe ingresar su NickName
        </Text>
      )}
      <TextInput
        style={styInputPassword}
        placeholder="Contraseña"
        onChangeText={(text) => {
          setPassword(text);
          setEmptyFieldPassword(false);
        }}
        secureTextEntry
        value={password}
      />
      {emptyFieldPassword && (
        <Text style={{ fontSize: 12, color: theme.colors.redIinformatica }}>
          Debe ingresar una contraseña
        </Text>
      )}
      <Pressable onPress={iniciarSesion}>
        <Text style={styles.button}>Ingresar</Text>
      </Pressable>
      {iniciando && <Loading />}
    </View>
  );
}
