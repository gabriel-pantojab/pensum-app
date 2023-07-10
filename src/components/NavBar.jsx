import { Text, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link, useLocation } from "react-router-native";
import HomeIcon from "./icons/HomeIcon";
import BookIcon from "./icons/BookIcon";
import CoffeIcon from "./icons/CoffeIcon";
import CalendarIcon from "./icons/CalendarIcon";
import Calendar2Icon from "./icons/Calendar2";

const styles = StyleSheet.create({
  container: {
    maxHeight: 50,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#24263e",
  },
  text: {
    fontSize: 16,
    color: "#999",
    marginRight: 20,
  },
  active: {
    color: "#fff",
  },
});

function BarTab({ to, children, vertical }) {
  const location = useLocation().pathname;
  const active =
    location === to || (to === "/pensum" && location.includes("/pensum"));
  const stylesLink = [styles.text, active && styles.active];
  return (
    <Link to={to} underlayColor="transparent">
      {!vertical ? <Text style={stylesLink}>{children}</Text> : children}
    </Link>
  );
}

export default function NavBar({ vertical }) {
  const location = useLocation().pathname;
  const sty = [
    styles.container,
    vertical && {
      marginTop: Constants.statusBarHeight,
      flexDirection: "column",
      maxWidth: 50,
      maxHeight: Dimensions.get("window").width,
      padding: 0,
    },
  ];
  const styC = [
    {
      alignItems: "center",
    },
    vertical && {
      justifyContent: "space-evenly",
      flex: 1,
    },
  ];
  return (
    <ScrollView horizontal={!vertical} style={sty} contentContainerStyle={styC}>
      <BarTab to="/" vertical={vertical}>
        {vertical ? <HomeIcon color="#999" width={25} height={25} /> : "Home"}
      </BarTab>
      <BarTab to="/pensum" vertical={vertical}>
        {vertical ? (
          <BookIcon color={"#999"} width={25} height={25} />
        ) : (
          "Pensum"
        )}
      </BarTab>
      <BarTab to="/clases-hoy" vertical={vertical}>
        {vertical ? (
          <CalendarIcon color={"#999"} width={25} height={25} />
        ) : (
          "Clases Hoy"
        )}
      </BarTab>
      <BarTab to="/horario" vertical={vertical}>
        {vertical ? (
          <Calendar2Icon
            color={location === "/horario" ? "#fff" : "#999"}
            width={25}
            height={25}
          />
        ) : (
          "Horario"
        )}
      </BarTab>
      <BarTab to="/express" vertical={vertical}>
        {vertical ? (
          <CoffeIcon
            color={location === "/express" ? "#fff" : "#999"}
            width={25}
            height={25}
          />
        ) : (
          "Express"
        )}
      </BarTab>
    </ScrollView>
  );
}
