import { View, Text, FlatList, Alert } from "react-native";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import { Image } from "expo-image";
import { images } from "@/constants";
import { AppData } from "@/data";
import CustomButton from "@/components/CustomButton";
import { ActionDTO, RESULT } from "@/lib/api";
import {
  doActionGet,
  doActionPost,
  getSensorData,
} from "@/lib/actions/fetch/action";
import { useEffect, useState } from "react";
import ErrorComponent from "@/components/ErrorComponent";
import ActionService from "@/lib/actions/ActionService";
import InfoComponent from "@/components/InfoComponent";
import CustomIconButton from "@/components/CustomIconButton";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const [temperature, setTemperature] = useState("0");
  const [humidity, setHumidity] = useState("0");

  const fetchSensorData = async () => {
    try {
      const result = await getSensorData();

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
        const data = JSON.parse(result.data);
        console.log(data.temperature);
        console.log(data.humidity);
        setTemperature(data.temperature);
        setHumidity(data.humidity);
      }
    } catch (error) {
      Alert.alert("Error", `Something went wrong: ${error.message}`);
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAction = async ({ action }: ActionDTO) => {
    setIsSubmitting(true);
    setErrorMessage("");
    setInfoMessage("");
    try {
      const result = await doActionGet({ action });

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
    fetchSensorData();
    setInterval(fetchSensorData, 5000);
  }, []);

  return (
    <DefaultBackgroundWrapper isScroll={false} parentStyle="px-4">
      <View className="my-6 space-y-6">
        <View className="justify-between items-start flex-row mb-6">
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

      <View className="flex-1 items-center space-y-10">
        <View className="w-[80%] justify-between items-center my-10">
          <View>
            <Text className="font-pbold text-2xl text-white">Temperature</Text>
            <Text className="font-semibold text-5xl text-white text-center mb-7 mt-2">
              {parseFloat(temperature).toFixed(2)}°C
            </Text>
          </View>
          <View>
            <Text className="font-pbold text-2xl text-white">Humidity</Text>
            <Text className="font-semibold text-5xl text-white text-center mb-7 mt-2">
              {parseFloat(humidity).toFixed(1)}%
            </Text>
          </View>
        </View>
        <CustomIconButton
          size={24}
          handlePress={fetchSensorData}
          icon={"refresh"}
          iconType="IonIcons"
          isLoading={isSubmitting}
          title="Refresh"
          containerStyle="bg-secondary-100/70 py-3 rounded-full h-[80px] w-[60%]"
        />
      </View>
    </DefaultBackgroundWrapper>
  );
};

export default Home;
