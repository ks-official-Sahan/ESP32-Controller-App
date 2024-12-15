import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import * as ImagePicker from "expo-image-picker";
import { FlashList } from "@shopify/flash-list";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

const Create = () => {
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      // setImages([...images, result.assets[0].uri]);
      setImages([...images, result.assets[0]]);
      console.log(images);
    }
  };

  return (
    <DefaultBackgroundWrapper>
      <View className="max-h-[100vh]">
        <View className="px-7 py-3 justify-center">
          {/* Title */}
          <Text className="text-green-500 text-4xl font-psemibold">Create</Text>
          <Text className="text-white text-4xl font-psemibold">New Doc</Text>

          {/* Image Selector */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={pickImage}
            className="bg-[#1C1C1E] rounded-2xl border-2 border-dashed border-spacing-4 border-gray-800 w-full justify-center items-center h-[250px] mt-7"
          >
            <Text className="text-gray-300 text-xl font-psemibold">
              Select Photos
            </Text>
            <Text className="text-gray-400 text-md font-pregular">
              Select the images to document
            </Text>
          </TouchableOpacity>
        </View>

        {/* Selected Images */}
        <View className="px-7 py-3 justify-center">
          <Text className="text-gray-300 text-xl font-psemibold">Pages</Text>
        </View>
        <FlashList
          data={[...images]}
          renderItem={({ image }) => (
            <View className="flex-row justify-end w-[200px] h-[280px] bg-[#1C1C1E85] rounded-2xl p-2">
              <Pressable>
                <Ionicons name="close-circle" size={24} color="gray" />
              </Pressable>
              {image && (
                <Image
                  source={image}
                  contentFit="contain"
                  transition={1000}
                  className="w-full h-full"
                />
              )}
            </View>
          )}
          // data={[]}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          estimatedItemSize={100}
          ListEmptyComponent={() => (
            <View className="px-7 py-3 items-center justify-center w-[100vw]">
              <View className="space-y-1 w-full h-[280px] bg-[#1C1C1E85] rounded-xl p-2 items-center justify-center">
                <FontAwesome6 name="0" size={40} color="#4b5563" />
                <Text className="text-gray-500 text-lg font-plight text-center">
                  Images found
                </Text>
                <Text className="text-gray-600 text-md font-pregular text-center">
                  Start by selecting images
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </DefaultBackgroundWrapper>
  );
};

export default Create;
