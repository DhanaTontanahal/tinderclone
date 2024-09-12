import { Text, View } from "react-native";
import MatchesScreen from "../components/MatchesScreen";
import HomeScreen from "../components/HomeScreen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <MatchesScreen /> */}
      <HomeScreen />
    </View>
  );
}
