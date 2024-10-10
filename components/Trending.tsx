import { View, Text } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";

const Trending = ({ posts }) => {
  return (
    <FlashList
      data={[...posts]}
      // keyExtractor={(item) => item.$id}
      renderItem={({ item }) => {
        return (
          <Text
            className="text-base text-white text-2xl font-psemibold mx-1"
            key={item.id}
          >
            {item.id}
          </Text>
        );
      }}
      ListEmptyComponent={() => <></>}
      horizontal
      estimatedItemSize={posts.length + 1}
    />
  );
};

export default Trending;
