import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import UserCard from "./UserCard";
import Course from "./Course";
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
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
    </View>
  );
}
