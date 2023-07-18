import { View } from "react-native";
import { theme } from "../theme";
import Logo from "./Logo";

export default function Header() {
  const styHeader = [
    {
      backgroundColor: theme.colors.primary,
      padding: 3,
      flexDirection: "row",
    },
  ];
  return (
    <View style={styHeader}>
      <Logo
        widthBG={80}
        heightBG={51}
        widthBirrete={30}
        heightBirrete={30}
        topBirrete={17}
        leftBirrete={24}
      />
    </View>
  );
}
