import { View, Text, FlatList, Alert } from "react-native";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import { Image } from "expo-image";
import { images } from "@/constants";
import { AppData } from "@/data";
import CustomButton from "@/components/CustomButton";
import { ActionDTO, RESULT } from "@/lib/api";
import { doActionPost } from "@/lib/actions/fetch/action";
import { useEffect, useState } from "react";
import ErrorComponent from "@/components/ErrorComponent";
import ActionService from "@/lib/actions/ActionService";
import InfoComponent from "@/components/InfoComponent";

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const handleAction = async ({ action }: ActionDTO) => {
    setIsSubmitting(true);
    setErrorMessage("");
    setInfoMessage("");
    try {
      const result = await doActionPost({ action });

      if (result.status === RESULT.error)
        return setErrorMessage("Something Failed");

      if (result.status === RESULT.message) {
        if (result.message === "success") {
          return setInfoMessage(result.message);
        }
        return setErrorMessage(result.message);
      }

      if (result.status === RESULT.data) {
        // Alert.alert(result.data);
      }
    } catch (error) {
      Alert.alert("Error", `Something went wrong: ${error.message}`);
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  }, []);

  return (
    <DefaultBackgroundWrapper isScroll={false} parentStyle="px-4">
      <View className="my-6 space-y-6">
        <View className="justify-between items-start flex-row mb-6">
          <View>
            <Text className="text-gray-100 text-sm font-psemibold">
              Welcome to
            </Text>
            <Text className="text-white text-2xl font-psemibold">
              {AppData.name}
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
      </View>

      <ErrorComponent
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />

      <InfoComponent
        infoMessage={infoMessage}
        setInfoMessage={setInfoMessage}
      />

      <View className="flex justify-between space-y-10">
        <CustomButton
          handlePress={() => handleAction({ action: 1 })}
          title="Command 1"
          containerStyle="h-20 my-3"
          isLoading={isSubmitting}
        />
        <CustomButton
          handlePress={() => handleAction({ action: 2 })}
          title="Command 2"
          containerStyle="h-20 my-3"
          isLoading={isSubmitting}
        />
        <CustomButton
          handlePress={() => handleAction({ action: 3 })}
          title="Command 3"
          containerStyle="h-20 my-3"
          isLoading={isSubmitting}
        />
        <CustomButton
          handlePress={() => handleAction({ action: 4 })}
          title="Command 4"
          containerStyle="h-20 my-3"
          isLoading={isSubmitting}
        />
        <CustomButton
          handlePress={() => handleAction({ action: 5 })}
          title="Command 5"
          containerStyle="h-20 my-3"
          isLoading={isSubmitting}
        />
        <CustomButton
          handlePress={() => handleAction({ action: 6 })}
          title="Command 6"
          containerStyle="h-20 my-3"
          isLoading={isSubmitting}
        />
        <CustomButton
          handlePress={() => handleAction({ action: 7 })}
          title="Command 7"
          containerStyle="h-20 my-3"
          isLoading={isSubmitting}
        />
      </View>
    </DefaultBackgroundWrapper>
  );
};

export default Home;
