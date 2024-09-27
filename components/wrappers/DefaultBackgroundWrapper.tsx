import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DefaultBackgroundWrapper = ({ children, containerStyle, colors }) => {
  return (
    <SafeAreaView className={`bg-primary h-full ${containerStyle}`}>
      <LinearGradient
        colors={colors ? colors : ["#161622", "#161850"]}
        className="h-full w-full"
      >
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          {children}
        </ScrollView>
      </LinearGradient>
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
};

export default DefaultBackgroundWrapper;
