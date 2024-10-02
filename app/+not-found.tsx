import CustomButton from "@/components/CustomButton";
import { Link, router, Stack, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-[20px] bg-primary">
        <Text className="text-gray-200 text-2xl font-psemibold">
          This screen doesn't exist.
        </Text>
        <View className="w-[70vw] flex-row items-center justify-evenly self-center mt-10 space-x-10"> 
          {/* <Link
            href="/"
            className="text-xl text-secondary font-psemibold"
          >
            <Text>Go to home screen!</Text>
          </Link> */}
          <CustomButton
            handlePress={() => router.replace("/")}
            containerStyle="px-5 bg-white"
            textStyle="text-xl font-psemibold"
            title={"Home"}
          />
          <CustomButton
            handlePress={() => router.back()}
            containerStyle="px-5"
            textStyle="text-xl text-white font-psemibold"
            title={"Go Back"}
          />
        </View>
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
