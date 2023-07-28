import { View } from "react-native";
import UserCard from "../../components/home/UserCard";
import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";
import RememberClasses from "../../components/settingsApp/RememberClasses";

export default function SettingsPage() {
  const { student } = useContext(StudentContext);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <UserCard name={student.name} />
      <View
        style={{
          flex: 1,
          padding: 10,
        }}
      >
        <RememberClasses />
      </View>
    </View>
  );
}
