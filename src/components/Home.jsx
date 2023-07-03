import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import UserCard from "./UserCard";
import Course from "./Course";
import CurrentSubjectsList from "./CurrentSubjectsList";
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: 50,
  },
});
export default function Home() {
  return (
    <View style={styles.container}>
      <UserCard
        image={""}
        name={"Gabriel Pantoja"}
        description="Estudiante de Ing. Informática"
      />
      <Course />
      <CurrentSubjectsList />
    </View>
  );
}
