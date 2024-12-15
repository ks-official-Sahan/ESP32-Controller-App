import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { images } from "@/constants";
import CustomButton from "./CustomButton";

const EmptyState = ({ title, subtitle, buttonText, handlePress }) => {
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
        title={buttonText ?? "Try Again"}
        containerStyle="m-5 w-[60vw]"
        handlePress={handlePress}
      />
    </View>
  );
};

export default EmptyState;
