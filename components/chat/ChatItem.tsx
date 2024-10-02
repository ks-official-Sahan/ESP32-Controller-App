import { View, Text } from "react-native";
import React from "react";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

// export type MessageStatus = "sending" | "sent" | "delivered" | "read";
export enum MessageStatus {
  sending = "sending",
  sent = "sent",
  delivered = "delivered",
  read = "read",
};

export interface ChatItemProps {
  user: string;
  message: string;
  time: string;
  isActive?: boolean;
  status?: MessageStatus;
}

const ChatItem = ({ user, message, time, isActive, status }: ChatItemProps) => {
  return (
    <View className="flex-1 h-[80px] items-center justify-start space-x-6 px-2 flex-row">
      <View className={`border-4 p-2 ${isActive ? "border-green-500" : "border-white"} rounded-full`}>
        <Ionicons name="person" size={42} color="white" />
      </View>

      <View className="flex-1 justify-center py-1">
        <Text
          className="text-base text-gray-100 font-psemibold text-xl"
          numberOfLines={1}
        >
          {user}
        </Text>
        <Text
          className="text-base text-gray-200 font-pregular text-md"
          numberOfLines={1}
        >
          {message}
        </Text>
        <View className="flex-1 text-end justify-end space-x-2 flex-row">
          <Text className="text-base text-gray-400 font-plight text-xs">
            {time}
          </Text>
          {status === "read" ? (
            <FontAwesome6 name={"check-double"} color={"green"} size={15} />
          ) : status === "delivered" ? (
            <FontAwesome6 name={"check-double"} color={"white"} size={15} />
          ) : status === "sent" ? (
            <FontAwesome6 name={"check"} color={"white"} size={15} />
          ) : (
            <FontAwesome6 name={"clock"} color={"white"} size={15} />
          )}
        </View>
      </View>
    </View>
  );
};

export default ChatItem;
