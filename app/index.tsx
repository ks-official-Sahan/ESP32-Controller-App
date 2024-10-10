import { View, Text } from "react-native";
import { Redirect, router } from "expo-router";

import images from "../constants/images";
import CustomButton from "@/components/CustomButton";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import { Image } from "expo-image";
import { useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalProvider";

const Index = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  // if (!isLoading && !isLoggedIn) return <Redirect href="/home" />;

  return (
    <DefaultBackgroundWrapper>
      <View className="w-full min-h-[85vh] items-center justify-center px-4 lg:px-6 py-2">
        <Image
          source={images.logo}
          className="w-[150px] h-[84px]"
          contentFit="contain"
          transition={1000}
        />
        <Image
          source={images.cards}
          className="max-w-[350px] w-full h-[300px]"
          contentFit="contain"
          transition={1000}
        />

        <View className="relative mt-5">
          <Text className="text-3xl text-white font-bold text-center">
            Discover Endless Possibilities with{" "}
            <Text className="text-secondary-200">Aura</Text>
          </Text>
          <Image
            source={images.path}
            className="w-[136px] h-[15px] absolute -bottom-3 right-24"
            contentFit="contain"
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
    </DefaultBackgroundWrapper>
  );
};

export default Index;
