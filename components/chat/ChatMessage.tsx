import { View, Text } from "react-native";
import { MessageStatus } from "./ChatListItem";
import { FontAwesome6 } from "@expo/vector-icons";

interface ChatMessageProps {
  message: string;
  time: string;
  isMe?: boolean;
  status?: MessageStatus;
}

const ChatMessage = ({
  message,
  time,
  isMe = false,
  status = MessageStatus.sending,
}: ChatMessageProps) => {
  // Determine if the message is long enough to warrant multi-line display
  const isLongMessage = message.length > 20;

  return (
    <View className="w-full px-3">
      <View className={`max-w-[80%] ${isMe ? "self-end" : "self-start"}`}>
        <View
          className={`my-1 px-3 py-2 rounded-xl ${
            isMe ? "bg-green-900" : "bg-gray-700"
          } ${isLongMessage ? "flex-col" : "flex-row"} items-end`}
        >
          {/* Message Content */}
          <Text className="text-white font-pregular">{message}</Text>

          {/* Timestamp and Status Icon */}
          <View
            className={`flex-row items-center space-x-1 ${
              isLongMessage ? "mt-1" : "ml-2"
            }`}
          >
            <Text className="text-xs text-gray-300">{time}</Text>
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
    </View>
  );
};

export default ChatMessage;
