import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import UserCard from "./UserCard";
import Course from "./Course";
import CurrentSubjectsList from "./CurrentSubjectsList";
import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";
import Constants from "expo-constants";
import { ScrollView } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#fefefe",
    flex: 1,
  },
});

export default function Home() {
  const { student, currentSubjectsList } = useContext(StudentContext);
  const orientation = useDeviceOrientation();
  const styCont = [
    styles.container,
    orientation === "landscape" && {
      marginTop: 0,
    },
  ];
  return (
    <View style={styCont}>
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
