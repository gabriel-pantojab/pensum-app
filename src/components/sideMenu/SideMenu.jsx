import { StyleSheet, Dimensions, View, Pressable } from "react-native";
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
import SettingsIcon from "../icons/SettingsIcon";

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
      <Pressable
        style={{
          flex: 1,
        }}
        onPress={close}
      >
        <View style={styles.content}>
          <UserCard name={student.name} colorInfo={theme.colors.white} />
          <View style={styles.contentRoutes}>
            <Item to="/main" close={close}>
              <View style={styles.link}>
                <HomeIcon color={theme.colors.white} width={20} height={20} />
                <TextStyle style={styles.textLink}>Home</TextStyle>
              </View>
            </Item>
            <Item to="/main/pensum" close={close}>
              <View style={styles.link}>
                <BookIcon color={theme.colors.white} width={20} height={20} />
                <TextStyle style={styles.textLink}>Pensum</TextStyle>
              </View>
            </Item>
            <Item to="/main/clases-hoy" close={close}>
              <View style={styles.link}>
                <CalendarIcon
                  color={theme.colors.white}
                  width={20}
                  height={20}
                />
                <TextStyle style={styles.textLink}>Clases Hoy</TextStyle>
              </View>
            </Item>
            <Item to="/main/horario" close={close}>
              <View style={styles.link}>
                <Calendar2Icon
                  color={theme.colors.white}
                  width={20}
                  height={20}
                />
                <TextStyle style={styles.textLink}>Horario</TextStyle>
              </View>
            </Item>
            <Item to="/main/express" close={close}>
              <View style={styles.link}>
                <CoffeIcon color={theme.colors.white} width={20} height={20} />
                <TextStyle style={styles.textLink}>Express</TextStyle>
              </View>
            </Item>
            <Item to="/main/ajustes" close={close}>
              <View style={styles.link}>
                <SettingsIcon
                  color={theme.colors.white}
                  width={20}
                  height={20}
                />
                <TextStyle style={styles.textLink}>Ajustes</TextStyle>
              </View>
            </Item>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}

function Item({ to, children, close }) {
  return (
    <Link to={to} underlayColor="rgba(0,0, 0, 0.5)" onPress={close}>
      {children}
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    top: 0,
    left: -Dimensions.get("window").width,
    bottom: 0,
    zIndex: 999,
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    zIndex: 1000,
    width: "80%",
    top: 0,
    bottom: 0,
    left: 0,
    paddingTop: 15,
  },

  contentRoutes: {
    gap: 10,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.white,
  },
  link: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
  textLink: {
    color: theme.colors.white,
  },
});
