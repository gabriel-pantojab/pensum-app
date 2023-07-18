import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Link } from "react-router-native";
import BackIcon from "../icons/BackIcon";
import { theme } from "../../theme";
import Constants from "expo-constants";
import { useState } from "react";

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

export default function Login({ login }) {
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
    </View>
  );
}
