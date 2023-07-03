import { StyleSheet } from "react-native";
import { View } from "react-native";
import UserCard from "./UserCard";
import Course from "./Course";
import CurrentSubjectsList from "./CurrentSubjectsList";

import { user, currentSubjectsList } from "../model/mockups";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 50,
  },
});
export default function Home() {
  return (
    <View style={styles.container}>
      <UserCard
        image={user.avatar}
        name={user.name}
        description={user.description}
      />
      <Course />
      <CurrentSubjectsList subjects={currentSubjectsList} />
    </View>
  );
}
