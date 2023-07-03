import { Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#24263e",
  },
  text: {
    color: "#999",
    marginRight: 10,
  },
  active: {
    color: "#fff",
  },
});

function BarTab({ to, children }) {
  const active = useLocation().pathname === to;
  const stylesLink = [styles.text, active && styles.active];
  return (
    <Link to={to} underlayColor="#f0f4f7">
      <Text style={stylesLink}>{children}</Text>
    </Link>
  );
}

export default function NavBar() {
  return (
    <ScrollView horizontal style={styles.container}>
      <BarTab to="/">Home</BarTab>
      <BarTab to="/pensum">Pensum</BarTab>
      <BarTab to="/horario">Horario</BarTab>
    </ScrollView>
  );
}
