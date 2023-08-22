import { View, FlatList, StyleSheet, ScrollView } from "react-native";
import TextStyle from "../../components/TextStyle";
import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";
import { theme } from "../../theme";

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
              return (
                <View style={styles.level}>
                  <View style={styles.nameLevel}>
                    <TextStyle>{name}</TextStyle>
                  </View>
                  <View style={styles.subjects}>
                    {subjects.map((s) => {
                      const { backgroundColor, borderColor } =
                        theme.statesSubject[s.state];
                      return (
                        <View
                          key={s.id}
                          style={{
                            ...styles.subject,
                            backgroundColor,
                            borderColor,
                          }}
                        >
                          <TextStyle style={styles.nameSubject}>
                            {s.name}
                          </TextStyle>
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
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
  level: {
    width: "100%",
    minWidth: "100%",
    maxWidth: "100%",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#279EFF",
    borderRadius: 5,
    padding: 5,
    paddingLeft: 0,
  },
  subjects: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  contentScroll: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subject: {
    width: 100,
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    padding: 3,
  },
  nameLevel: {
    width: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 3,
  },
  nameSubject: {
    fontSize: 12,
    textAlign: "center",
  },
});
