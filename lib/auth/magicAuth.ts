import { Magic } from '@magic-sdk/react-native-expo'
import Constants from 'expo-constants'

export const magicAuth = new Magic(Constants.expoConfig.extra.magicAuthApiKey)
