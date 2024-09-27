import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/images";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-4 lg:px-6 py-2 my-6">
          <Image source={images.logo} resizeMode={"contain"} className="w-[115px] h-[35px]"/>
          <Text className="text-2xl text-white font-psemibold mt-10">
            Sign In
          </Text>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
