import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { Root } from './screens/Root'
import { magicAuth } from './lib/auth/magicAuth'

export default function App() {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <magicAuth.Relayer />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  )
}
