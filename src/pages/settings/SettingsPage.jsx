import { View, StyleSheet } from "react-native";
import UserCard from "../../components/home/UserCard";
import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";
import RememberClasses from "../../components/settingsApp/RememberClasses";
import { theme } from "../../theme";
import TextStyle from "../../components/TextStyle";
import EditIcon from "../../components/icons/EditIcon";
import { Link } from "react-router-native";

export default function SettingsPage() {
  const { student } = useContext(StudentContext);
  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <View style={styles.accountHeader}>
          <TextStyle style={styles.title}>Cuenta</TextStyle>
          <Link to="/main/perfil" underlayColor={theme.colors.white}>
            <EditIcon width={20} height={20} color={theme.colors.primary} />
          </Link>
        </View>
        <UserCard name={student.name} />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <TextStyle style={styles.title}>Configuraciónes</TextStyle>
        <RememberClasses />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    gap: 10,
  },
  account: {
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 20,
    color: theme.colors.primary,
    margin: 10,
  },
  accountHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
});
