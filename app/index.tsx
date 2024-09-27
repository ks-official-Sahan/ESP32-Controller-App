import { View, Text, ScrollView, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../constants/images";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[85vh] items-center justify-center px-4 lg:px-6 py-2">
          <Image
            source={images.logo}
            className="w-[150px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[350px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aura</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-3 right-24"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm text-gray-100 font-pregular mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aura
          </Text>
          <CustomButton
            title={"Continue with Email"}
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyle={"w-full mt-7"}
          />
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
};

export default Index;
