import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import CustomIconButton from "./CustomIconButton";

const ErrorComponent = ({
  errorMessage,
  setErrorMessage,
}: {
  errorMessage: string | undefined;
  setErrorMessage: (value: React.SetStateAction<string | undefined>) => void;
}) => {
  return (
    <>
      {errorMessage && (
        <View className="px-6">
          <View className="flex flex-row items-center justify-around mt-1 mb-3 bg-secondary-200/20 px-3 space-x-3 py-1 rounded-lg">
            <View className="flex-center gap-2 w-full">
              <Ionicons name="alert-circle-outline" size={20} color="red" />
              <Text className="text-red-600 font-pregular text-lg">
                {errorMessage}
              </Text>
            </View>
            <CustomIconButton
              handlePress={() => setErrorMessage("")}
              containerStyle="rounded-full border border-red-500 opacity-50 hover:opacity-100"
              icon={"close-outline"}
              size={20}
              iconType="ionicon"
            />
          </View>
        </View>
      )}
    </>
  );
};

export default ErrorComponent;
