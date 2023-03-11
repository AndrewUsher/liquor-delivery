import { create } from 'zustand'

interface AuthState {
  isLoggedIn: boolean
  setAuthState: (isLoggedIn: boolean) => void
}

export const useAuthState = create<AuthState>((set) => ({
  isLoggedIn: false,
  setAuthState: (isLoggedIn) => set({ isLoggedIn })
}))
