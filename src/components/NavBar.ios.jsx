import { Text, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link, useLocation } from "react-router-native";
import HomeIcon from "./icons/HomeIcon";
import BookIcon from "./icons/BookIcon";
import CoffeIcon from "./icons/CoffeIcon";
import CalendarIcon from "./icons/CalendarIcon";
import Calendar2Icon from "./icons/Calendar2";
import { theme } from "../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: theme.colors.primary,
    paddingBottom: 30,
  },
  text: {
    fontSize: 18,
    color: "#999",
    marginRight: 20,
  },
  active: {
    color: theme.colors.white,
    borderBottomWidth: 1,
    borderColor: theme.colors.white,
  },
});

function BarTab({ to, children, vertical }) {
  const location = useLocation().pathname;
  const active =
    location === to || (to === "/main/pensum" && location.includes("/pensum"));
  const stylesLink = [styles.text, active && styles.active];
  return (
    <Link to={to} underlayColor="transparent">
      {!vertical ? <Text style={stylesLink}>{children}</Text> : children}
    </Link>
  );
}

export default function NavBar({ vertical }) {
  let marginTop = 0;
  const location = useLocation().pathname;
  const sty = [
    styles.container,
    vertical && {
      marginTop,
      flexDirection: "column",
      maxWidth: 50,
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
    <View>
      <ScrollView
        horizontal={!vertical}
        style={sty}
        contentContainerStyle={styC}
      >
        <BarTab to="/main" vertical={vertical}>
          {vertical ? (
            <HomeIcon
              color={location === "/main" ? theme.colors.white : "#999"}
              width={25}
              height={25}
            />
          ) : (
            "Home"
          )}
        </BarTab>
        <BarTab to="/main/pensum" vertical={vertical}>
          {vertical ? (
            <BookIcon
              color={
                location === "/main/pensum" || location.includes("/pensum")
                  ? theme.colors.white
                  : "#999"
              }
              width={25}
              height={25}
            />
          ) : (
            "Pensum"
          )}
        </BarTab>
        <BarTab to="/main/clases-hoy" vertical={vertical}>
          {vertical ? (
            <CalendarIcon
              color={
                location === "/main/clases-hoy" ? theme.colors.white : "#999"
              }
              width={25}
              height={25}
            />
          ) : (
            "Clases Hoy"
          )}
        </BarTab>
        <BarTab to="/main/horario" vertical={vertical}>
          {vertical ? (
            <Calendar2Icon
              color={location === "/main/horario" ? theme.colors.white : "#999"}
              width={25}
              height={25}
            />
          ) : (
            "Horario"
          )}
        </BarTab>
        <BarTab to="/main/express" vertical={vertical}>
          {vertical ? (
            <CoffeIcon
              color={location === "/main/express" ? theme.colors.white : "#999"}
              width={25}
              height={25}
            />
          ) : (
            "Express"
          )}
        </BarTab>
      </ScrollView>
    </View>
  );
}
