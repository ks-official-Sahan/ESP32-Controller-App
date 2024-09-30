import { View, Text, FlatList } from "react-native";
import React from "react";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import { Image } from "expo-image";
import { images } from "@/constants";
import SearchInput from "@/components/SearchInput";

const Home = () => {
  return (
    <DefaultBackgroundWrapper isScroll={false}>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        // keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <Text className="text-white">{item.id}</Text>}
        ListHeaderComponent={() => {
          return (
            <View className="my-6 px-4 space-y-6">
              <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className="text-gray-100 text-sm font-psemibold">
                    Welcome Back
                  </Text>
                  <Text className="text-white text-2xl font-psemibold">
                    Sahan
                  </Text>
                </View>
                <View>
                  <Image
                    transition={1000}
                    source={images.logoSmall}
                    contentFit="contain"
                    className="w-9 h-10"
                  />
                </View>
              </View>
              <SearchInput />
            </View>
          );
        }}
      />
    </DefaultBackgroundWrapper>
  );
};

export default Home;
