import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

// export type MessageStatus = "sending" | "sent" | "delivered" | "read";
export enum MessageStatus {
  sending = "sending",
  sent = "sent",
  delivered = "delivered",
  read = "read",
}

export interface ChatListItemProps {
  user: string;
  message: string;
  time: string;
  isActive?: boolean;
  status?: MessageStatus;
  containerStyle?: string;
  handleChat: () => void;
  handleAvatar: () => void;
}

const ChatListItem = ({
  user,
  message,
  time,
  isActive,
  status,
  containerStyle,
  handleChat,
  handleAvatar,
}: ChatListItemProps) => {
  return (
    <View className={`py-1 ${containerStyle}`}>
      <View
        className={`flex-1 h-[80px] items-center justify-start space-x-5 flex-row`}
      >
        <TouchableHighlight
          className={`border-4 p-2 ${
            isActive ? "border-green-500" : "border-white"
          } rounded-full`}
          activeOpacity={0.4}
          onPress={handleAvatar}
        >
          <Ionicons name="person" size={42} color="white" />
        </TouchableHighlight>

        <TouchableOpacity
          className="flex-1 justify-center py-2"
          activeOpacity={0.5}
          onPress={handleChat}
        >
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
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatListItem;
