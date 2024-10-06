import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface WrapperProps {
  children: React.ReactNode;
  containerStyle?: string;
  parentStyle?: string;
  colors?: string[];
  isScroll?: boolean;
}

const DefaultBackgroundWrapper = ({
  children,
  containerStyle,
  parentStyle,
  colors,
  isScroll = true,
}: WrapperProps) => {
  return (
    <SafeAreaView className={`h-full ${containerStyle}`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <LinearGradient
          colors={colors ? colors : ["#161622", "#161850"]}
          className={`flex-1`}
        >
          <View className={`flex-1 ${parentStyle}`}>
            {isScroll ? <ScrollView>{children}</ScrollView> : children}
          </View>
        </LinearGradient>
        <StatusBar style="light" backgroundColor="#161622" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default DefaultBackgroundWrapper;
