import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  Button,
  Divider,
  Icon,
  Layout,
  Text,
  useTheme
} from '@ui-kitten/components'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AccountSection } from '../components/Account/AccountSection'
import { commonStyles } from '../styles/common'
import { magicAuth } from '../lib/auth/magicAuth'
import { useAuthState } from '../stores/auth'

const accountOptionsList = [
  {
    onPress: () => {},
    text: 'Account Info'
  },
  {
    onPress: () => {},
    text: 'Addresses'
  },
  {
    onPress: () => {},
    text: 'Payment Info'
  },
  {
    onPress: () => {},
    text: 'Notifications'
  }
]
function AccountSettings() {
  const setAuthState = useAuthState((state) => state.setAuthState)
  const userInfo = useAuthState((state) => state.userInfo)

  return (
    <View>
      <View
        style={[commonStyles.horizontalPaddingContainer, styles.accountSummary]}
      >
        <Text category="h2">Hello, Andrew</Text>
        <Text category="s1">
          Email address: <Text category="label">{userInfo?.email}</Text>
        </Text>
      </View>
      <AccountSection
        sectionTitle="Account Info"
        optionsList={accountOptionsList}
      />

      <View
        style={[
          commonStyles.horizontalPaddingContainer,
          styles.buttonContainer
        ]}
      >
        <Button
          status="danger"
          onPress={async () => {
            await magicAuth.user.logout()
            setAuthState(false)
          }}
        >
          LOGOUT
        </Button>
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator()

export function AccountScreen() {
  return (
    <SafeAreaView collapsable={false} style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="Account Settings"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Account Settings"
          component={AccountSettings}
        ></Stack.Screen>
      </Stack.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  arrowIcon: {
    width: 16,
    height: 16
  },
  accountSummary: {
    paddingVertical: 24
  },
  buttonContainer: {
    marginTop: 32
  }
})
