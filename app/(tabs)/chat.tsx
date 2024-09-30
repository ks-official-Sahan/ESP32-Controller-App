import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import { Image } from "expo-image";
import { images } from "@/constants";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatItem from "@/components/chat/ChatItem";

const Chat = () => {
  return (
    <DefaultBackgroundWrapper isScroll={false}>
      <View className="flex-1 h-full justify-between px-4 py-3">
        <ChatHeader />

        <ScrollView className="flex-1 space-y-4 py-4">
          <ChatItem />
        </ScrollView>
      </View>
    </DefaultBackgroundWrapper>
  );
};

export default Chat;
