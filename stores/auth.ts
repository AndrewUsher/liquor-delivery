import { MagicUserMetadata } from '@magic-sdk/react-native-expo'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AuthState {
  isLoggedIn: boolean
  setAuthState: (isLoggedIn: boolean) => void
  setUserInfo: (info: MagicUserMetadata | null) => void
  userInfo: MagicUserMetadata | null
}

export const useAuthState = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      setAuthState: (isLoggedIn) => set({ isLoggedIn }),
      setUserInfo: (userInfo) => set({ userInfo }),
      userInfo: null
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)
