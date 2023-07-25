import { View, StyleSheet, FlatList } from "react-native";
import { Link, useParams } from "react-router-native";
import SubjectInLevel from "./SubjectInLevel";
import BackIcon from "../icons/BackIcon";
import TextStyle from "../TextStyle";
import HeaderLevel from "./HeaderLevel";
import useLoading from "../../hooks/useLoading";
import useUpdateLevel from "../../hooks/useUpdateLevel";
import { theme } from "../../theme";

export default function SubjectsInLevelList() {
  const level = useParams().level;
  const { approved, inProgress, pending, subjects } = useUpdateLevel({
    levelName: level,
  });
  const { loading, finishedRender } = useLoading();

  return (
    <View style={styles.container} onLayout={finishedRender}>
      <View style={styles.content}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextStyle style={styles.title}>
            Licenciatura en Ing. Informática
          </TextStyle>
          <Link
            underlayColor={"transparent"}
            style={{
              alignSelf: "flex-end",
            }}
            to="/main/pensum"
          >
            <BackIcon />
          </Link>
        </View>
        <HeaderLevel
          approved={approved}
          inProgress={inProgress}
          pending={pending}
          levelName={level}
        />
        <FlatList
          initialNumToRender={1}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          data={subjects}
          ListFooterComponent={loading}
          renderItem={({ item }) => {
            return (
              <SubjectInLevel
                name={item.name}
                state={item.state}
                level={level}
                id={item.id}
                key={item.id}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
    padding: 10,
    gap: 10,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 20,
    color: theme.colors.primary,
  },
  level: {
    fontSize: 18,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
