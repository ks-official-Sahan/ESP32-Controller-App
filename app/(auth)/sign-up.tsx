import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import images from "@/constants/images";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [form, setForm] = useState({ email: "", password: "", username: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <DefaultBackgroundWrapper>
      <View className="w-full min-h-[85vh] justify-center px-4 lg:px-6 py-2 my-6">
        <Image
          source={images.logo}
          contentFit="contain"
          transition={1000}
          className="w-[115px] h-[35px]"
        />
        <Text className="text-2xl text-white font-psemibold mt-10">SignUp</Text>

        <FormField
          title={"Username"}
          placeholder={"Your unique Username"}
          otherStyle="mt-4"
          value={form.username}
          handleTextChange={(u: any) => setForm({ ...form, username: u })}
        />
        <FormField
          title={"Email"}
          placeholder={"Enter your Email"}
          otherStyle="mt-4"
          value={form.email}
          handleTextChange={(e: any) => setForm({ ...form, email: e })}
          keyboardType="email-address"
        />
        <FormField
          title={"Password"}
          placeholder={"Enter your Password"}
          otherStyle="mt-4"
          value={form.password}
          handleTextChange={(p: any) => setForm({ ...form, password: p })}
        />

        <CustomButton
          title={"Sign Up"}
          handlePress={() => {
            submit;
          }}
          isLoading={isSubmitting}
          containerStyle="mt-8"
        />

        <View className="pt-5 justify-center text-center flex-row gap-2">
          <Text className="text-lg text-gray-100 font-pregular">
            Already have an account?
          </Text>
          <Link
            href={"/sign-in"}
            className="text-lg text-secondary font-psemibold"
          >
            Sign In
          </Link>
        </View>
      </View>
    </DefaultBackgroundWrapper>
  );
};

export default SignUp;
