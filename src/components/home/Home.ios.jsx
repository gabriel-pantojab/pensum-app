import { Pressable, StyleSheet, View, Text } from "react-native";
import UserCard from "./UserCard";
import Course from "./Course";
import CurrentSubjectsList from "./CurrentSubjectsList";
import { useContext, useState } from "react";
import { StudentContext } from "../../context/studentContext";
import { ScrollView } from "react-native";
import { theme } from "../../theme";
import { logoutApp } from "../../storage/storage";
import LogoutIcon from "../icons/LogoutIcon";
import Loading from "../Loading";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
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

export default function Home() {
  const { student, currentSubjectsList, clearData } =
    useContext(StudentContext);
  const [saliendo, setSaliendo] = useState(false);
  const logout = async () => {
    setSaliendo(true);
    const uid = student.uid;
    await logoutApp({ uid });
    clearData();
    setSaliendo(false);
  };
  const styCont = [styles.container];
  return (
    <View style={styCont}>
      <View style={styles.logout}>
        {saliendo && <Loading large="small" />}
        <Pressable onPress={logout} style={styles.logoutTextContainer}>
          <Text style={styles.logoutText}>Log out</Text>
          <LogoutIcon width={15} height={15} color={theme.colors.primary} />
        </Pressable>
      </View>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          gap: 50,
        }}
      >
        <UserCard
          image={student.avatar}
          name={student.name}
          description={student.description}
        />
        <Course />
        <CurrentSubjectsList subjects={currentSubjectsList} />
      </ScrollView>
    </View>
  );
}
