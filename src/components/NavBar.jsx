import { Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    maxHeight: 50,
    marginTop: Constants.statusBarHeight,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#24263e",
  },
  text: {
    fontSize: 16,
    color: "#999",
    marginRight: 10,
  },
  active: {
    color: "#fff",
  },
});

function BarTab({ to, children }) {
  const location = useLocation().pathname;
  const active =
    location === to || (to === "/pensum" && location.includes("/pensum"));
  const stylesLink = [styles.text, active && styles.active];
  return (
    <Link to={to} underlayColor="transparent">
      <Text style={stylesLink}>{children}</Text>
    </Link>
  );
}

export default function NavBar() {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <BarTab to="/">Home</BarTab>
      <BarTab to="/pensum">Pensum</BarTab>
      <BarTab to="/horario">Horario</BarTab>
    </ScrollView>
  );
}
