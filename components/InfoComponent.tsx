import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import CustomIconButton from "./CustomIconButton";

const InfoComponent = ({
  infoMessage,
  setInfoMessage,
}: {
  infoMessage: string | undefined;
  setInfoMessage: (value: React.SetStateAction<string | undefined>) => void;
}) => {
  return (
    <>
      {infoMessage && (
        <View className="px-6">
          <View className="flex flex-row items-center justify-around mt-1 mb-3 bg-cyan-500/50 px-3 space-x-3 py-1 rounded-lg">
            <View className="flex-center gap-2 w-full">
              <Ionicons name="alert-circle-outline" size={20} color="yellow" />
              <Text className="text-secondary-200 font-pregular text-lg">
                {infoMessage}
              </Text>
            </View>
            <CustomIconButton
              handlePress={() => setInfoMessage("")}
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

export default InfoComponent;
