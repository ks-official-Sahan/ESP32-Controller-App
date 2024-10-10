import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

// export type MessageStatus = "sending" | "sent" | "delivered" | "read";
// export enum MessageStatus {
//   sending = "sending",
//   sent = "sent",
//   delivered = "delivered",
//   read = "read",
// }

export enum MessageStatus {
  sending = 4,
  sent = 3,
  delivered = 2,
  read = 1,
}

export interface ChatListItemProps {
  user: string;
  message: string;
  time: string;
  isActive?: boolean;
  status?: MessageStatus;
  containerStyle?: string;
  keyId?: any;
  isFromUser?: boolean;
  isAvatar?: boolean;
  avatar?: string;
  avatarLetters?: string;
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
  keyId,
  isFromUser,
  isAvatar,
  avatar,
  avatarLetters,
  handleChat,
  handleAvatar,
}: ChatListItemProps) => {
  return (
    <View className={`py-1 ${containerStyle}`} key={keyId}>
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
          {isAvatar ? (
            // <Image source={avatar} contentFit="contain" transition={1000} className="w-8 h-8" />
            <Ionicons name="person-add" size={42} color="white" />
          ) : (
            // <Text className="font-psemibold text-current text-3xl text-secondary-200">{avatarLetters.toUpperCase()}</Text>
            <Ionicons name="person" size={42} color="white" />
          )}
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
            {isFromUser &&
              (status === MessageStatus.read ? (
                <FontAwesome6 name={"check-double"} color={"green"} size={15} />
              ) : status === MessageStatus.delivered ? (
                <FontAwesome6 name={"check-double"} color={"grey"} size={15} />
              ) : status === MessageStatus.sent ? (
                <FontAwesome6 name={"check"} color={"grey"} size={15} />
              ) : (
                <FontAwesome6 name={"clock"} color={"grey"} size={12} />
              ))}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatListItem;
