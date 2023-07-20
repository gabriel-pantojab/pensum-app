import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import { theme } from "../../theme";
import { StatusBar } from "expo-status-bar";
import { Link } from "react-router-native";
import Logo from "../Logo";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Pensum App</Text>
      <Logo
        widthBG={90}
        heightBG={90}
        topBirrete={32}
        widthBirrete={40}
        heightBirrete={40}
        leftBirrete={22}
      />
    </View>
  );
}

function UMSS() {
  return (
    <View style={styles.umss.container}>
      <Image
        style={{ width: 150, height: 250 }}
        source={require("../../../assets/LogoUMSS.png")}
      />
      <View style={styles.umss.nameContainer}>
        <Text style={styles.umss.name}>Univeridad Mayor de</Text>
        <Text style={styles.umss.name}>San Simón</Text>
      </View>
    </View>
  );
}

function OptionsRegister() {
  return (
    <View style={styles.optionsRegister}>
      <View style={styles.login}>
        <Link to="/login" style={styles.button} underlayColor={"#ff8787"}>
          <Text style={styles.text}>Ingresar</Text>
        </Link>
      </View>
      <View style={styles.signup}>
        <Text>¿No tienes una cuenta?</Text>
        <Link to="/signUp" underlayColor={"transparent"}>
          <Text
            style={{
              color: theme.colors.primary,
              fontWeight: "bold",
            }}
          >
            Registrarse
          </Text>
        </Link>
      </View>
    </View>
  );
}

export default function Register() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <UMSS />
      <OptionsRegister />
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
  login: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  signup: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 35,
    fontFamily: theme.fonts.goodDog,
    textAlign: "center",
    padding: 10,
    color: theme.colors.primary,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fa5252",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
  optionsRegister: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    gap: 30,
  },
  text: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  umss: {
    name: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.colors.primary,
    },
    nameContainer: {
      marginTop: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      marginTop: 20,
    },
  },
});
