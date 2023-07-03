import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import UserCard from "./UserCard";
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
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
    </View>
  );
}
