import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import { Image } from "expo-image";
import { images } from "@/constants";
import SearchInput from "@/components/SearchInput";
import { getCurrentUser } from "@/lib/actions/fetch/auth";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";
import { router } from "expo-router";

const Home = () => {
  const [user, setUser] = useState({ username: "" });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = await getCurrentUser();
    // console.log(user);
    setUser(user);
  };

  return (
    <DefaultBackgroundWrapper isScroll={false} parentStyle="px-4">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <Text key={item.id} className="text-white">{item.id}</Text>}
        ListHeaderComponent={() => {
          return (
            <View className="my-6 space-y-6">
              <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className="text-gray-100 text-sm font-psemibold">
                    Welcome Back
                  </Text>
                  <Text className="text-white text-2xl font-psemibold">
                    {user.username}
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

              <SearchInput placeholder={"Search for a video topic"} />

              <View className="w-full flex-1 pt-5 pb-8">
                <Text className="text-gray-100 font-pregular mb-3 text-lg">
                  Latest Videos
                </Text>

                <Trending
                  posts={[{ id: "1" }, { id: "2" }, { id: "3" }] ?? []}
                />
              </View>
            </View>
          );
        }}
        ListEmptyComponent={() => (
          <EmptyState
            title={"No Videos Found"}
            subtitle={"Be the first one to upload a video!"}
            buttonText={"+ Create Video"}
            handlePress={() => {
              router.push("/create");
            }}
          />
        )}
      />
    </DefaultBackgroundWrapper>
  );
};

export default Home;
