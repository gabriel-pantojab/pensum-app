import { Pressable, Text, View, StyleSheet } from "react-native";
import LogoutIcon from "../icons/LogoutIcon";
import { theme } from "../../theme";
import useLogout from "../../hooks/useLogout";
import Loading from "../Loading";

export default function Logout() {
  const { logout, saliendo } = useLogout();
  return (
    <View style={styles.logout}>
      {saliendo && <Loading large="small" />}
      <Pressable onPress={logout} style={styles.logoutTextContainer}>
        <Text style={styles.logoutText}>Log out</Text>
        <LogoutIcon width={15} height={15} color={theme.colors.primary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  logout: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 5,
  },
  logoutText: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.holidayBudapest,
  },
  logoutTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
