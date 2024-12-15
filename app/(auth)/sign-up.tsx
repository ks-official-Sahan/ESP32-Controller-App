import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import images from "@/constants/images";
import { signup } from "@/lib/actions/fetch/auth";
import { RESULT } from "@/lib/api";
import { Image } from "expo-image";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    errors: {
      email: null,
      password: null,
      username: null,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    const errors = {
      email: form.email ? null : "Please fill in the Email",
      password: form.password ? null : "Please fill in the Password",
      username: form.username ? null : "Please fill in the Username",
    };
    if (errors.email || errors.password || errors.username) {
      setForm((prevForm) => ({
        ...prevForm,
        errors,
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await signup(form);

      if (result.status === RESULT.data) {
        router.replace("/home");
      } else if (result.status === RESULT.success) {
        router.replace("/sign-in");
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
            <View className="w-full min-h-[85vh] justify-center px-5 lg:px-6 py-2 my-6">
              <Image
                source={images.logo}
                contentFit="contain"
                transition={1000}
                className="w-[115px] h-[35px]"
              />
              <Text className="text-2xl text-white font-psemibold mt-10">
                SignUp
              </Text>

              <FormField
                title={"Username"}
                placeholder={"Your unique Username"}
                otherStyle="mt-4"
                value={form.username}
                handleTextChange={(u: any) =>
                  setForm({
                    ...form,
                    username: u,
                    errors: { ...form.errors, username: null },
                  })
                }
                error={form.errors.username}
              />
              <FormField
                title={"Email"}
                placeholder={"Enter your Email"}
                otherStyle="mt-4"
                value={form.email}
                handleTextChange={(e: any) =>
                  setForm({
                    ...form,
                    email: e,
                    errors: { ...form.errors, email: null },
                  })
                }
                keyboardType="email-address"
                error={form.errors.email}
              />
              <FormField
                title={"Password"}
                placeholder={"Enter your Password"}
                otherStyle="mt-4"
                value={form.password}
                handleTextChange={(p: any) =>
                  setForm({
                    ...form,
                    password: p,
                    errors: { ...form.errors, password: null },
                  })
                }
                error={form.errors.password}
              />

              <CustomButton
                title={"Sign Up"}
                handlePress={submit}
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
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </DefaultBackgroundWrapper>
  );
};

export default SignUp;
