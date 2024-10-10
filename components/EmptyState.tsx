import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { images } from "@/constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-5">
      <Image
        source={images.empty}
        className="w-[270px] h-[220px]"
        contentFit="contain"
        transition={1000}
      />
      <Text className="text-white text-xl font-psemibold text-center mt-2">
        {title}
      </Text>
      <Text className="text-gray-100 text-sm font-psemibold">{subtitle}</Text>

      <CustomButton
        title="Create Video"
        containerStyle="my-5 w-full"
        handlePress={() => {
          router.push("/create");
        }}
      />
    </View>
  );
};

export default EmptyState;
