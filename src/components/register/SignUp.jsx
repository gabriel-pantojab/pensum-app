import { Text, View, TextInput, StyleSheet, Alert } from "react-native";
import { saveStudent } from "../../storage/storage";
import { useContext, useState } from "react";
import { StudentContext } from "../../context/studentContext";
import { Course, Levels } from "../../storage/createInformatica";
import { Pressable } from "react-native";
import { theme } from "../../theme";
import Loading from "../Loading";
import { crearUsuario } from "../../../firebaseconfig";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import BackIcon from "../icons/BackIcon";

const styles = StyleSheet.create({
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
  register: {
    marginTop: Constants.statusBarHeight,
    position: "relative",
    flex: 1,
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "#0C134F",
  },
});

export default function SignUp({ login }) {
  const [username, setUsername] = useState("");
  const [registrando, setRegistrando] = useState(false);
  const [emptyFieldUserName, setEmptyFieldUserName] = useState(false);

  const [nickname, setNickname] = useState("");
  const [emptyFieldNickName, setEmptyFieldNickName] = useState(false);

  const [password, setPassword] = useState("");
  const [emptyFieldPassword, setEmptyFieldPassword] = useState(false);

  const { setStudent, setCourse, setLevels, setCurrentSubjectsList } =
    useContext(StudentContext);
  const registrar = async () => {
    if (username === "") {
      setEmptyFieldUserName(true);
      return;
    }
    if (nickname === "") {
      setEmptyFieldNickName(true);
      return;
    }
    if (password === "" || password.length < 6) {
      setEmptyFieldPassword(true);
      return;
    }
    setRegistrando(true);
    const newStudent = {
      name: username,
      description: "Estudiante de Ing. Informática",
      avatar: "",
    };

    Promise.all([
      crearUsuario({
        nickname,
        password,
        username,
      }),
      setStudent(newStudent),
      saveStudent(newStudent),
      setCourse(Course),
      setLevels(Levels),
      setCurrentSubjectsList([]),
    ])
      .then(() => {
        setRegistrando(false);
        login();
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          Alert.alert("Error", "El usuario ya existe", [
            {
              text: "OK",
              onPress: () => {
                setNickname("");
                setPassword("");
                setUsername("");
              },
            },
          ]);
        }
        setRegistrando(false);
      });
  };

  const styInputUserName = [
    styles.input,
    emptyFieldUserName && { borderColor: theme.colors.redIinformatica },
  ];

  const styInputNickName = [
    styles.input,
    emptyFieldNickName && { borderColor: theme.colors.redIinformatica },
  ];

  const styInputPassword = [
    styles.input,
    emptyFieldPassword && { borderColor: theme.colors.redIinformatica },
  ];

  return (
    <View style={styles.register}>
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
      <Text style={{ ...styles.title, fontSize: 18 }}>Registro</Text>
      <TextInput
        style={styInputUserName}
        value={username}
        onChangeText={(e) => {
          const regex = /^[a-zA-Z ]*$/;
          if (regex.test(e)) {
            setUsername(e);
            setEmptyFieldUserName(false);
          }
        }}
        placeholder="Nombre"
      />
      {emptyFieldUserName && (
        <Text style={{ fontSize: 12, color: theme.colors.redIinformatica }}>
          campo obligatorio
        </Text>
      )}
      <TextInput
        style={styInputNickName}
        value={nickname}
        onChangeText={(e) => {
          const regex = /^[a-zA-Z0-9]*$/;
          if (regex.test(e)) {
            setNickname(e);
            setEmptyFieldNickName(false);
          }
        }}
        placeholder="Nickname"
      />
      {emptyFieldNickName && (
        <Text style={{ fontSize: 12, color: theme.colors.redIinformatica }}>
          campo obligatorio
        </Text>
      )}
      <TextInput
        style={styInputPassword}
        value={password}
        onChangeText={(e) => {
          const regex = /^[a-zA-Z]*$/;
          if (regex.test(e)) {
            setPassword(e);
            setEmptyFieldPassword(false);
          }
        }}
        placeholder="password"
      />
      {emptyFieldPassword && (
        <Text style={{ fontSize: 12, color: theme.colors.redIinformatica }}>
          contraseña invalida
        </Text>
      )}
      <Pressable onPress={registrar}>
        <Text style={styles.button}>Registrar</Text>
      </Pressable>
      {registrando && <Loading />}
    </View>
  );
}
