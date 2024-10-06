import { View, Text, Alert } from "react-native";
import React from "react";
import CustomIconButton from "../CustomIconButton";
import { router } from "expo-router";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const ChatHeader = ({ chat, isActive }) => {
  return (
    <View className="py-2 items-center border-b-2 border-gray-800 mb-3 flex-row justify-between">
      <View className="flex-row px-4 space-x-2 ">
        <CustomIconButton
          icon="arrow-left"
          containerStyle="px-1 py-1"
          handlePress={() => {
            router.back();
          }}
        />
        <TouchableHighlight
          className={`border-2 p-2 ${
            isActive ? "border-green-500" : "border-white"
          } rounded-full`}
          activeOpacity={0.4}
          onPress={() => {
            Alert.alert("Avatar", chat);
          }}
        >
          <Ionicons name="person" size={22} color="white" />
        </TouchableHighlight>

        <TouchableHighlight
          className="flex-1 w-full justify-center px-1"
          activeOpacity={0.4}
          onPress={() => {
            Alert.alert("User", chat);
          }}
        >
          <Text className="text-white text-xl font-psemibold">{chat}</Text>
        </TouchableHighlight>
      </View>

      <View className="flex-row px-4 space-x-2 ">
        <CustomIconButton
          containerStyle="rounded-full px-2 py-2"
          handlePress={() => {
            Alert.alert("Video Call", chat);
          }}
          icon={"video"}
        />
        <CustomIconButton
          containerStyle="rounded-full px-2 py-2"
          handlePress={() => {
            Alert.alert("Voice Call", chat);
          }}
          icon={"phone"}
        />
        <CustomIconButton
          containerStyle="rounded-full px-2 py-2"
          handlePress={() => {
            Alert.alert("More", chat);
          }}
          icon={"ellipsis-vertical"}
        />
      </View>
    </View>
  );
};

export default ChatHeader;
