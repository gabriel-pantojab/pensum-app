import { useContext } from "react";
import Level from "../../components/pensum/Level";
import useLoading from "../../hooks/useLoading";
import { FlatList, View, StyleSheet } from "react-native";
import TextStyle from "../../components/TextStyle";
import { theme } from "../../theme";
import { StudentContext } from "../../context/studentContext";

export default function PensumPage() {
  const { levels, course } = useContext(StudentContext);
  const { loading, finishedRender } = useLoading();

  const styCont = [styles.container];
  return (
    <View style={styCont} onLayout={finishedRender}>
      <View style={styles.content}>
        <TextStyle style={styles.title}>{course.name}</TextStyle>
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          data={levels}
          // initialNumToRender={1}
          ListFooterComponent={loading}
          renderItem={({ item, index }) => (
            <Level
              key={item.id}
              progress={item.progress}
              name={item.name}
              inProgress={item.inProgress}
              index={index}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
    gap: 20,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 20,
    color: theme.colors.primary,
  },
});
