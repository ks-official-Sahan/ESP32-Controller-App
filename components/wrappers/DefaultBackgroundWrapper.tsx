import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface WrapperProps {
  children: React.ReactNode;
  containerStyle?: string;
  colors?: string[];
  isScroll?: boolean;
}

const DefaultBackgroundWrapper = ({
  children,
  containerStyle,
  colors,
  isScroll = true,
}: WrapperProps) => {
  return (
    <SafeAreaView className={`h-full ${containerStyle}`}>
      <LinearGradient
        colors={colors ? colors : ["#161622", "#161850"]}
        className="h-full w-full"
      >
        {isScroll ? <ScrollView>{children}</ScrollView> : children}
      </LinearGradient>
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
};

export default DefaultBackgroundWrapper;
