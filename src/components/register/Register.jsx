import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { theme } from "../../theme";
import { StatusBar } from "expo-status-bar";
import Birrete from "../icons/Birrete";
import { Link } from "react-router-native";
import Logo from "../Logo";

export default function Register() {
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
      <View style={styles.buttonsRegister}>
        <Link to="/login" style={styles.button}>
          <Text style={styles.text}>Ingresar</Text>
        </Link>
        <Link to="/signUp" style={styles.button}>
          <Text style={styles.text}>Registrarse</Text>
        </Link>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Birrete
          color={theme.colors.redIinformatica}
          width={150}
          height={150}
        />
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
    backgroundColor: "#0C134F",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
  },
  buttonsRegister: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  text: {
    color: theme.colors.white,
  },
});
