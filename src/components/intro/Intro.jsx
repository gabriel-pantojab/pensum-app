import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";
import { useEffect, useState } from "react";

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
    }, 700);
  }, []);
  return (
    <View style={styles.container}>
      {show && (
        <>
          <View>
            <Text style={{ ...styles.title, color: theme.colors.primary }}>
              Universidad Mayor de San Simón
            </Text>
            <Text
              style={{ ...styles.title, color: theme.colors.redIinformatica }}
            >
              Pensum Ing. Informática
            </Text>
          </View>
          <Devs />
        </>
      )}
    </View>
  );
}
