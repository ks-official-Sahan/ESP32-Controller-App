import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import icons from "@/constants/icons";
import { Image } from "expo-image";

interface FormFieldProps {
  title?: string;
  value?: string;
  placeholder?: string;
  handleTextChange?: (...props: any) => void;
  otherStyle?: string;
}

const FormField = ({
  title,
  value,
  placeholder,
  handleTextChange,
  otherStyle,
  ...props
}: FormFieldProps | any) => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <View className={`space-y-2 py-1 ${otherStyle}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary px-5 flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold"
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleTextChange}
          value={value}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity
            className=""
            onPress={() => setshowPassword(!showPassword)}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              contentFit={"contain"}
              transition={1000}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
