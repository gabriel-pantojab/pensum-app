import { View, Text, StyleSheet, Image } from "react-native";
import { theme } from "../../theme";
import { useEffect, useState } from "react";
import Logo from "../Logo";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "#0C134F",
  },
});

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

export default function Intro() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 300);
  }, []);
  return (
    <View style={styles.container}>
      {show && (
        <>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 30,
            }}
          >
            <Logo
              widthBG={200}
              heightBG={200}
              widthBirrete={100}
              heightBirrete={100}
              topBirrete={65}
              leftBirrete={40}
            />
            {/* <Text style={{ ...styles.title, color: theme.colors.primary }}>
              Universidad Mayor de San Simón
            </Text>
            <Text
              style={{ ...styles.title, color: theme.colors.redIinformatica }}
            >
              Pensum Ing. Informática
            </Text> */}
          </View>
          {/* <View
            style={{
              flex: 1,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../../../assets/LogoUMSS.png")}
            />
          </View> */}
          <Devs />
        </>
      )}
    </View>
  );
}
