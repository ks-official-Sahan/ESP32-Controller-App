import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-[20px] bg-primary">
        <Text className="text-gray-200 text-2xl font-psemibold">This screen doesn't exist.</Text>
        <Link href="/" className="mt-10 text-xl text-secondary font-psemibold">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
      <StatusBar style="light" backgroundColor="#161622" />
    </>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
