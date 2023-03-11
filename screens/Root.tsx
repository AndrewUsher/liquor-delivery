import { StyleSheet } from 'react-native'
import { Icon } from '@ui-kitten/components'
import { AccountScreen } from './AccountScreen'
import { HomeScreen } from './HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useAuthState } from '../stores/auth'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnboardingScreen } from './LoggedOut/Onboarding'
import { StatusBar } from 'expo-status-bar'
import { LoginScreen } from './LoggedOut/Login'
import { LoggedOutStackParamsList } from '../types/navigator/LoggedOutNavigatior'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator<LoggedOutStackParamsList>()

export function Root() {
  const isLoggedIn = useAuthState((state) => state.isLoggedIn)

  return (
    <>
      <StatusBar style="inverted" />
      {isLoggedIn ? (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'red' }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Icon name="star" fill={color} style={styles.icon} />
              )
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <Icon
                  name={focused ? 'person' : 'person-outline'}
                  fill={color}
                  style={styles.icon}
                />
              )
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
          ></Stack.Screen>
          <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        </Stack.Navigator>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})
