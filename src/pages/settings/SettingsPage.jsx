import { View } from "react-native";
import UserCard from "../../components/home/UserCard";
import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";

export default function SettingsPage() {
  const { student } = useContext(StudentContext);
  return (
    <View>
      <UserCard name={student.name} />
    </View>
  );
}
