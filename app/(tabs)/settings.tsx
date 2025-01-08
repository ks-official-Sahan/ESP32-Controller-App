import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { removeData } from "@/lib/api";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { getCurrentUser } from "@/lib/actions/fetch/auth";
import { AppData } from "@/data";
// import ActionService from "@/lib/actions/ActionService";

export type METHODS = "HTTP" | "WebSocket";

const Settings = () => {
  // const [method, setMethod] = useState<METHODS>("HTTP");

  // const handleMethodChange = (value: METHODS) => {
  //   setMethod(value);
  //   ActionService.setMethod(value);
  // };

  const fetchUser = async () => {
    // const currentUser = await getCurrentUser();
    // if (!currentUser) return;
    // setUser(currentUser);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <DefaultBackgroundWrapper isScroll={false} parentStyle="px-4 py-5">
      <View className="flex-1 justify-between space-y-4 items-center mb-10">
        <Text className="text-secondary-200 text-3xl font-pextrabold text-center w-full">
          Settings
        </Text>
        <View className="rounded-full items-center justify-center border-4 p-4 border-green-500">
          <Ionicons name="person" size={180} color="white" />
        </View>
        <View className="space-y-4">
        </View>
        {/* <View className="space-y-0.5">
          <Text className="text-xl font-bold mb-4 text-white text-center">
            Select Communication Method:
          </Text>
          <Picker
            selectedValue={method}
            onValueChange={handleMethodChange}
            className="w-full h-14 rounded-lg"
            style={{ color: "white",  }}
          >
            <Picker.Item label="HTTP" value={"HTTP"} />
            <Picker.Item label="WebSocket" value="WebSocket" />
          </Picker>
        </View> */}
      </View>
      <CustomButton
        title="Exit"
        handlePress={async () => {
          await removeData();
          router.replace("/");
        }}
      />
    </DefaultBackgroundWrapper>
  );
};

export default Settings;
