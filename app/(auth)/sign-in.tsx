import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import images from "@/constants/images";
import FormField from "@/components/FormField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router, Redirect } from "expo-router";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import { Image } from "expo-image";
import fetchInstance from "@/lib/fetch";
import { createUser, signIn } from "@/lib/appwrite";
import { signin } from "@/lib/actions/fetch/auth";
import { RESULT } from "@/lib/api";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      return Alert.alert("Warning 🔴", "Please fill in all fields ⚠️");
    }

    setIsSubmitting(true);

    try {
      const result = await signin(form);

      if (result.status === RESULT.data) {
        router.replace("/home");
      } else if (result.status === RESULT.message) {
        router.replace("/sign-up");
      }
    } catch (error) {
      Alert.alert("Error", `Something went wrong: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DefaultBackgroundWrapper>
      <View className="w-full min-h-[85vh] justify-center px-4 lg:px-6 py-2 my-6">
        <Image
          source={images.logo}
          contentFit={"contain"}
          transition={1000}
          className="w-[115px] h-[35px]"
        />
        <Text className="text-2xl text-white font-psemibold mt-10">
          Sign In
        </Text>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
        >
          <FormField
            title={"Email"}
            value={form.email}
            placeholder={"Enter your Email"}
            otherStyle="mt-7"
            handleTextChange={(e: any) => setForm({ ...form, email: e })}
            keyboardType="email-address"
          />
          <FormField
            title={"Password"}
            value={form.password}
            placeholder={"Enter your Password"}
            otherStyle="mt-7"
            handleTextChange={(p: any) => setForm({ ...form, password: p })}
          />
        </KeyboardAvoidingView>

        <CustomButton
          title={"Sign In"}
          handlePress={() => submit()}
          isLoading={isSubmitting}
          containerStyle="mt-8"
        />

        <View className="pt-5 justify-center text-center flex-row gap-2">
          <Text className="text-lg text-gray-100 font-pregular">
            Don't have an account?
          </Text>
          <Link
            href={"/sign-up"}
            className="text-lg text-secondary font-psemibold"
          >
            Sign Up
          </Link>
        </View>
      </View>
    </DefaultBackgroundWrapper>
  );
};

export default SignIn;
