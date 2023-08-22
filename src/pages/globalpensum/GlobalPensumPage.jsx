import { View, FlatList, StyleSheet } from "react-native";
import TextStyle from "../../components/TextStyle";
import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";
import { theme } from "../../theme";
import LevelGP from "../../components/pensum/globalpensum/LevelGP";

export default function GlobalPensumPage() {
  const { levels, course } = useContext(StudentContext);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <TextStyle style={styles.title}>{course.name}</TextStyle>
        </View>
        <View style={styles.contentScroll}>
          <FlatList
            data={levels}
            ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
            renderItem={({ item }) => {
              const name = item.name;
              const index = name.charCodeAt(0) - "A".charCodeAt(0);
              const subjects = levels[index].subjects;
              return <LevelGP name={item.name} subjects={subjects} />;
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
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
  content: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: theme.colors.primary,
  },
  contentScroll: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});
