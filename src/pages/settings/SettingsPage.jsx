import { View, StyleSheet } from "react-native";

import RememberClasses from "../../components/settingsApp/RememberClasses";
import { theme } from "../../theme";
import TextStyle from "../../components/TextStyle";
import Account from "../../components/settingsApp/Account";

export default function SettingsPage() {
  return (
    <View style={styles.container}>
      <Account />
      <View
        style={{
          flex: 1,
        }}
      >
        <TextStyle style={styles.title}>Configuraciónes</TextStyle>
        <RememberClasses />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    gap: 10,
  },
  title: {
    fontSize: 20,
    color: theme.colors.primary,
    margin: 10,
  },
});
