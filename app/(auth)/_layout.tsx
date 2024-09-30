import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import ROUTES from '@/constants/routes'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name={ROUTES.SIGN_IN} options={{ title: "Sign In", headerShown: false }} />
        <Stack.Screen name={ROUTES.SIGN_UP} options={{ title: "Sign Up", headerShown: false }} />
      </Stack>
      <StatusBar style="light" backgroundColor="#161622" />
    </>
  )
}

export default AuthLayout