import { StyleSheet, Dimensions, Button, View, Pressable } from "react-native";
import Constants from "expo-constants";
import { Text } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { useContext, useEffect } from "react";
import { Link } from "react-router-native";
import TextStyle from "../TextStyle";
import { theme } from "../../theme";
import HomeIcon from "../icons/HomeIcon";
import BookIcon from "../icons/BookIcon";
import CalendarIcon from "../icons/CalendarIcon";
import Calendar2Icon from "../icons/Calendar2";
import CoffeIcon from "../icons/CoffeIcon";
import UserCard from "../home/UserCard";
import { StudentContext } from "../../context/studentContext";

export default function SideMenu({ show, close }) {
  const leftPosition = useSharedValue(-Dimensions.get("window").width);
  const { student } = useContext(StudentContext);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      left: withTiming(leftPosition.value, config),
    };
  });

  useEffect(() => {
    leftPosition.value = show ? 0 : -Dimensions.get("window").width;
  }, [show]);

  const styContainer = [styles.container, style];
  return (
    <Animated.View style={styContainer}>
      <Button title="Close" onPress={close} />
      <UserCard name={student.name} />
      <View style={styles.contentRoutes}>
        <Item to="/main" close={close}>
          <View style={styles.link}>
            <HomeIcon color={theme.colors.black} width={20} height={20} />
            <TextStyle>Home</TextStyle>
          </View>
        </Item>
        <Item to="/main/pensum" close={close}>
          <View style={styles.link}>
            <BookIcon color={theme.colors.black} width={20} height={20} />
            <TextStyle>Pensum</TextStyle>
          </View>
        </Item>
        <Item to="/main/clases-hoy" close={close}>
          <View style={styles.link}>
            <CalendarIcon color={theme.colors.black} width={20} height={20} />
            <TextStyle>Clases Hoy</TextStyle>
          </View>
        </Item>
        <Item to="/main/horario" close={close}>
          <View style={styles.link}>
            <Calendar2Icon color={theme.colors.black} width={20} height={20} />
            <TextStyle>Horario</TextStyle>
          </View>
        </Item>
        <Item to="/main/express" close={close}>
          <View style={styles.link}>
            <CoffeIcon color={theme.colors.black} width={20} height={20} />
            <TextStyle>Express</TextStyle>
          </View>
        </Item>
      </View>
    </Animated.View>
  );
}

function Item({ to, children, close }) {
  return (
    <Link to={to} underlayColor="#fff" onPress={close}>
      {children}
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    // paddingTop: Constants.statusBarHeight,
    width: "80%",
    backgroundColor: theme.colors.white,
    borderRightWidth: 3,
    borderColor: theme.colors.black,
    top: 0,
    left: -Dimensions.get("window").width,
    bottom: 0,
    zIndex: 999,
  },
  contentRoutes: {
    flex: 1,
    paddingLeft: 20,
    gap: 10,
  },
  link: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
});
