import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  KeyboardTypeOptions,
} from "react-native";
import icons from "@/constants/icons";
import { Image } from "expo-image";
import { FontAwesome6 } from "@expo/vector-icons";

interface FormFieldProps {
  title?: string;
  value?: string;
  placeholder?: string;
  handleTextChange?: (...props: any) => void;
  otherStyle?: string;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  errorComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | React.ReactNode
    | any
    | null
    | undefined;
}

const FormField = ({
  title,
  value,
  placeholder,
  handleTextChange,
  otherStyle,
  error,
  errorComponent,
  keyboardType,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = title === "Password" || title === "Confirm Password";

  return (
    <View className={`space-y-2 py-1 ${otherStyle}`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        {/* Title */}
        <Text
          className={`text-base text-gray-100 font-pmedium ${
            error && "text-red-600"
          }`}
        >
          {title}
        </Text>

        {/* Input Field */}
        <View
          className={`w-full h-16 bg-black-100 ${
            error
              ? "border-[1.5px] border-red-600"
              : "border-2 border-black-200"
          } rounded-2xl focus:border-secondary px-5 flex-row items-center`}
        >
          <TextInput
            className="flex-1 text-white font-psemibold"
            placeholder={placeholder}
            placeholderTextColor={"#7b7b8b"}
            onChangeText={handleTextChange}
            value={value}
            secureTextEntry={isPasswordField && !showPassword}
            keyboardType={keyboardType}
            {...props}
          />

          {/* Password Toggle Button */}
          {isPasswordField && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={showPassword ? icons.eyeHide : icons.eye}
                contentFit="contain"
                transition={1000}
                className="w-6 h-6"
              />
            </TouchableOpacity>
          )}
        </View>

        {/* Error Message */}
        {error &&
          (errorComponent ? (
            typeof errorComponent === "function" ? (
              errorComponent()
            ) : (
              errorComponent
            )
          ) : (
            <View className="flex-row items-start space-x-3 px-1.5 mt-1">
              <FontAwesome6
                name="triangle-exclamation"
                size={18}
                color="white"
              />
              <Text className="text-red-600 font-pregular">{error}</Text>
            </View>
          ))}
      </KeyboardAvoidingView>
    </View>
  );
};

export default FormField;
