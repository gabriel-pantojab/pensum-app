import { View, FlatList, StyleSheet } from "react-native";
import TextStyle from "../../components/TextStyle";
import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";
import { theme } from "../../theme";
import LevelGP from "../../components/pensum/globalpensum/LevelGP";
import { Link } from "react-router-native";
import BackIcon from "../../components/icons/BackIcon";
import useLoading from "../../hooks/useLoading";

export default function GlobalPensumPage() {
  const { levels, course } = useContext(StudentContext);
  const { finishedRender, loading } = useLoading();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextStyle style={styles.title}>{course.name}</TextStyle>
        <Link underlayColor={"#ccc"} to="/main/pensum">
          <BackIcon />
        </Link>
      </View>
      <View style={styles.content} onLayout={finishedRender}>
        <FlatList
          initialNumToRender={1}
          data={levels}
          ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
          renderItem={({ item }) => {
            const name = item.name;
            const index = name.charCodeAt(0) - "A".charCodeAt(0);
            const subjects = levels[index].subjects;
            return <LevelGP name={item.name} subjects={subjects} />;
          }}
          keyExtractor={(item) => item.id}
          ListFooterComponent={loading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    color: theme.colors.primary,
  },
  content: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});
