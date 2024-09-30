import { View, Text } from "react-native";
import React from "react";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

const ChatItem = () => {
  return (
    <View className="flex-1 h-[80px] items-center justify-start space-x-6 px-2 flex-row">
      <View className="border-4 p-2 border-green-500 rounded-full">
        <Ionicons name="person" size={42} color="white" />
      </View>

      <View className="flex-1 justify-center py-1">
        <Text className="text-base text-gray-100 font-psemibold text-xl" numberOfLines={1}>
          Sahan Sachintha
        </Text>
        <Text className="text-base text-gray-200 font-pregular text-md" numberOfLines={1}>
          Hello Shashi, how are you? I'm looking forward to meeting you.
        </Text>
        <View className="flex-1 text-end justify-end space-x-2 flex-row">
          <Text className="text-base text-gray-400 font-plight text-xs">
            {new Date().toLocaleString()}
          </Text>
          <FontAwesome6 name={"check"} color={"green"} size={15} />
        </View>
      </View>
    </View>
  );
};

export default ChatItem;
