import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import icons from "@/constants/icons";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

interface SearchInputProps {
  value?: string;
  placeholder?: string;
  handleTextChange?: (...props: any) => void;
  otherStyle?: string;
}

const SearchInput = ({
  value,
  placeholder,
  handleTextChange,
  otherStyle,
  ...props
}: SearchInputProps | any) => {
  return (
    <View className="w-full h-14 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary px-3 flex-row items-center space-x-4">
      <TextInput
        className="text-base flex-1 px-2 h-full text-white font-pregular"
        placeholder={placeholder}
        placeholderTextColor={"#7b7b8b"}
        onChangeText={handleTextChange}
        value={value}
      />

      <TouchableOpacity className="">
        <Ionicons name="search" size={22} color={"white"} className="w-5 h-5" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
