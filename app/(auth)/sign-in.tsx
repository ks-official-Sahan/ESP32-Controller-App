import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
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
  const [form, setForm] = useState({
    email: "",
    password: "",
    errors: {
      email: null,
      password: null,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    const errors = {
      email: form.email ? null : "Please fill in the Email",
      password: form.password ? null : "Please fill in the Password",
    };

    if (errors.email || errors.password) {
      // return Alert.alert("Warning 🔴", "Please fill in all fields ⚠️");
      setForm((prevForm) => ({
        ...prevForm,
        errors,
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await signin(form);

      if (result.status === RESULT.data) {
        router.replace("/home");
        // } else if (result.status === RESULT.message) {
        //   router.replace("/sign-up");
      } else if (result.status === RESULT.target) {
        setForm((prevForm) => ({
          ...prevForm,
          errors: {
            ...prevForm.errors,
            [result.target.toLowerCase()]: result.message,
          },
        }));
      }
    } catch (error) {
      Alert.alert("Error", `Something went wrong: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DefaultBackgroundWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
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

              <FormField
                title={"Email"}
                value={form.email}
                placeholder={"Enter your Email"}
                otherStyle="mt-7"
                handleTextChange={(e: any) => setForm({ ...form, email: e, errors: { ...form.errors, email: null } })}
                keyboardType="email-address"
                error={form.errors.email}
              />
              <FormField
                title={"Password"}
                value={form.password}
                placeholder={"Enter your Password"}
                otherStyle="mt-7"
                handleTextChange={(p: any) => setForm({ ...form, password: p, errors: { ...form.errors, password: null } })}
                error={form.errors.password}
              />

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
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </DefaultBackgroundWrapper>
  );
};

export default SignIn;
