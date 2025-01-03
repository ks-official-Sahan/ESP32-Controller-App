import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { images } from "@/constants";
import { AppData } from "@/data";

const ChatListHeader = () => {
  return (
    <View className="justify-between flex-row items-start space-y-4">
      <View>
        <Text className="text-base text-secondary-100 font-psemibold text-2xl">
          {AppData.name}
        </Text>
        <Text className="text-base text-gray-100 font-psemibold text-xl">
          Message
        </Text>
      </View>
      <View>
        <TouchableOpacity
          className="rounded-full border-2 border-secondary p-1 -mt-2"
          activeOpacity={0.7}
        >
          <Image
            source={images.logoSmall}
            contentFit="contain"
            transition={1000}
            className="w-8 h-8"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatListHeader;
