import { FontAwesome6 } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

interface CustomIconButtonProps {
  icon: string;
  size?: number;
  color?: string;
  title?: string;
  handlePress: () => void;
  containerStyle?: string;
  textStyle?: string;
  isLoading?: boolean;
}

const CustomIconButton = ({
  icon,
  size = 20,
  color = "white",
  title,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
}: CustomIconButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      className={`rounded-xl min-h-[${
        size + 2
      }px] justify-center items-center space-x-2 flex-row ${containerStyle} ${
        isLoading && "opacity-50"
      }`}
    >
      <FontAwesome6 name={icon} size={size} color={color} />
      {title && (
        <Text className={`text-lg text-primary font-psemibold ${textStyle}`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomIconButton;
