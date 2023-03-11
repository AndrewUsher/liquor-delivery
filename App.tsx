import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as eva from '@eva-design/eva'
import * as SystemUI from 'expo-system-ui'
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
  Icon
} from '@ui-kitten/components'
import { Appearance, StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import { HomeScreen } from './screens/HomeScreen'
import { AccountScreen } from './screens/AccountScreen'
import { useEffect, useState } from 'react'
import { Root } from './screens/Root'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})
