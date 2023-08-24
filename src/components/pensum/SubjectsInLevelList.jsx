import { View, StyleSheet, FlatList } from "react-native";
import { useParams } from "react-router-native";
import SubjectInLevel from "./SubjectInLevel";
import HeaderLevel from "./HeaderLevel";
import useLoading from "../../hooks/useLoading";
import useUpdateLevel from "../../hooks/useUpdateLevel";
import { theme } from "../../theme";
import NameCareer from "./NameCareer";

export default function SubjectsInLevelList() {
  const level = useParams().level;
  const { approved, inProgress, pending, subjects } = useUpdateLevel({
    levelName: level,
  });
  const { loading, finishedRender } = useLoading();

  return (
    <View style={styles.container} onLayout={finishedRender}>
      <View style={styles.content}>
        <NameCareer />
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
                id={item.sis}
                key={item.sis}
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
});
