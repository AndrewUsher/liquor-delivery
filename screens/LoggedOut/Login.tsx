import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input, Text } from '@ui-kitten/components'
import { Controller, useForm } from 'react-hook-form'
import { Keyboard, ScrollView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { magicAuth } from '../../lib/auth/magicAuth'
import { useAuthState } from '../../stores/auth'
import { commonStyles } from '../../styles/common'

type FormData = {
  email: string
}

export function LoginScreen() {
  const { control, handleSubmit } = useForm()
  const setAuthState = useAuthState((state) => state.setAuthState)

  const onSubmit = async (values) => {
    try {
      const r = await magicAuth.auth.loginWithEmailOTP({
        email: values.email
      })
      setAuthState(true)
      // TODO: Persist user ID to DB
    } catch (err) {
      console.log({ err })
    }
  }

  return (
    <SafeAreaView
      style={[commonStyles.horizontalPaddingContainer, { flex: 1 }]}
    >
      <ScrollView>
        <Text category="h4" style={{ paddingTop: 24, marginBottom: 16 }}>
          Enter your email address
        </Text>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              autoComplete="email"
              style={{ marginBottom: 16 }}
              placeholder="Email address"
              size="large"
            />
          )}
          name="email"
        />
        <Button onPress={handleSubmit(onSubmit)} size="large">
          Continue
        </Button>
      </ScrollView>
    </SafeAreaView>
  )
}
