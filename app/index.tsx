import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <>
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl font-bold">HELLO</Text>
        <Link href="/profile">Profile</Link>
      </View>
    </>
  );
};

export default index;
