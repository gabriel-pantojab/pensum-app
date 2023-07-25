import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";
import useLoading from "../../hooks/useLoading";
import { useDeviceOrientation } from "@react-native-community/hooks";
import Constants from "expo-constants";
import { FlatList, View, StyleSheet } from "react-native";
import TextStyle from "../../components/TextStyle";
import Level from "../../components/pensum/Level";
import { theme } from "../../theme";

export default function PensumPage() {
  const { levels, course } = useContext(StudentContext);
  const { loading, finishedRender } = useLoading();
  const orientation = useDeviceOrientation();

  const styCont = [
    styles.container,
    orientation === "landscape" && {
      marginTop: 0,
      paddingLeft: Constants.statusBarHeight,
    },
  ];
  return (
    <View style={styCont} onLayout={finishedRender}>
      <View style={styles.content}>
        <TextStyle style={styles.title}>{course.name}</TextStyle>
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          data={levels}
          initialNumToRender={1}
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
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
