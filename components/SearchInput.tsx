import { icons } from "@/constants";
import { Image } from "expo-image";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleTextChange,
  ...props
}) => {
  return (
    <View className="w-full h-16 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary px-5 flex-row items-center justify-center space-x-4">
      <TextInput
        className="flex-1 text-base font-pregular text-white"
        placeholder={placeholder}
        placeholderTextColor={"#7b7b8b"}
        onChangeText={handleTextChange}
        value={value}
        {...props}
      />

      <TouchableOpacity
        className=""
        //   onPress={() => setshowPassword(!showPassword)}
      >
        <Image
          source={icons.search}
          contentFit={"contain"}
          transition={1000}
          className="w-5 h-5"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
