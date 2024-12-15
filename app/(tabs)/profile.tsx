import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { removeUser } from "@/lib/api";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { getCurrentUser } from "@/lib/actions/fetch/auth";

const Profile = () => {
  const [user, setUser] = useState({ username: "", email: "" });

  const fetchUser = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) return;
    setUser(currentUser);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <DefaultBackgroundWrapper isScroll={false} parentStyle="px-4 py-5">
      <View className="flex-1 justify-between space-y-4 items-center mb-10">
        <Text className="text-secondary-200 text-3xl font-pextrabold text-center w-full">
          Profile
        </Text>
        <View className="rounded-full items-center justify-center border-4 p-4 border-green-500">
          <Ionicons name="person" size={180} color="white" />
        </View>
        <View className="space-y-4">
          <Text className="text-xl font-psemibold text-secondary-200 text-center">
            {user.username}
          </Text>
          <Text className="text-xl font-psemibold text-secondary-200 text-center">
            {user.email}
          </Text>
        </View>
      </View>
      <CustomButton
        title="Logout"
        handlePress={async () => {
          await removeUser();
          router.replace("/");
        }}
      />
    </DefaultBackgroundWrapper>
  );
};

export default Profile;
